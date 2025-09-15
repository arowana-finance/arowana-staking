import { expect } from 'chai';
import hre from 'hardhat';
import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import {
    getClients,
    parseEther,
    timeTravel,
    signPermitERC2612,
    getTxByTimestamp,
    setTimeTravel,
} from './helpers.js';
import { encodeFunctionData } from 'viem';

const fixtureData = {
    mintAmt: 100000,
    transferAmt: 50000,
    rewardsPerSecAmt: 1,
    depositAmtByETH: 1,
    depositAmt: 100,
    withdrawAmt: 40,
};

describe('MasterChef (with RewardVault)', () => {
    async function fixture() {
        const { owner, alice, publicClient } = await getClients();
        const { mintAmt, transferAmt, rewardsPerSecAmt } = fixtureData;

        const rewardToken = await hre.viem.deployContract('ERC20Mock', ['Reward', 'RWD', 18, 0n]);

        const lpToken = await hre.viem.deployContract('ERC20Mock', ['LP', 'LP', 18, 0n]);
        const WETH = await hre.viem.deployContract('WETH');

        await lpToken.write.mint([alice.account.address, parseEther(String(mintAmt))]);

        // 보상 금고 배포 & 오너 초기화
        const vaultImpl = await hre.viem.deployContract('RewardVault');
        const vaultProxy = await hre.viem.deployContract('InitializableProxy');

        // initializeVault(owner) 호출 데이터를 ABI로 인코딩
        const initVaultData = encodeFunctionData({
            abi: vaultImpl.abi,
            functionName: 'initializeVault',
            args: [owner.account.address],
        });

        await vaultProxy.write.initializeProxy(
            ['RewardVault', owner.account.address, vaultImpl.address, initVaultData],
            { account: owner.account },
        );

        const vault = await hre.viem.getContractAt('RewardVault', vaultProxy.address);

        await rewardToken.write.mint([owner.account.address, parseEther(String(mintAmt))]);
        await rewardToken.write.transfer([vault.address, parseEther(String(transferAmt))]);

        const chefImpl = await hre.viem.deployContract('MasterChef');
        const chefProxy = await hre.viem.deployContract('InitializableProxy');
        const startTime = (await publicClient.getBlock()).timestamp - 60n;
        const endTime = (await publicClient.getBlock()).timestamp - 86400n;

        const initChefData = encodeFunctionData({
            abi: chefImpl.abi,
            functionName: 'initializeChef',
            args: [
                owner.account.address,
                WETH.address,
                rewardToken.address,
                vault.address,
                parseEther(String(rewardsPerSecAmt)),
                startTime,
                endTime,
                false,
            ],
        });

        await chefProxy.write.initializeProxy([
            'MasterChef',
            owner.account.address,
            chefImpl.address,
            initChefData,
        ]);

        const chef = await hre.viem.getContractAt('MasterChef', chefProxy.address);

        await vault.write.addSpender([chef.address]);

        await chef.write.add([lpToken.address, 1000, 0 as any, BigInt(2 ** 32), false]);
        const pid = await chef.read.poolId([lpToken.address]);

        return {
            publicClient,
            owner,
            alice,
            chef,
            rewardToken,
            lpToken,
            WETH,
            vault,
            pid,
            startTime,
            endTime,
        };
    }

    it('풀 추가/식별', async () => {
        const { chef, lpToken, pid } = await loadFixture(fixture);
        expect(await chef.read.poolLength()).to.equal(1);
        expect(await chef.read.poolId([lpToken.address])).to.equal(pid);
    });

    it('예치→시간경과→정산→인출 (보상은 Vault에서 지급)', async () => {
        const { alice, chef, rewardToken, lpToken, pid } = await loadFixture(fixture);

        const { depositAmt, withdrawAmt, rewardsPerSecAmt } = fixtureData;

        const aliceLpBalance = await lpToken.read.balanceOf([alice.account.address]);

        await lpToken.write.approve([chef.address, parseEther(String(depositAmt))], {
            account: alice.account,
        });

        await chef.write.deposit([pid, parseEther(String(depositAmt))], {
            account: alice.account,
        });

        await timeTravel(10);

        await chef.write.deposit([pid, 0], { account: alice.account });

        /// timeTravel, deposit 이후 1 timestamp 지났다는 가정 하에
        expect(await rewardToken.read.balanceOf([alice.account.address])).to.equal(
            parseEther(String(rewardsPerSecAmt * 11)),
        );

        await chef.write.withdraw([pid, parseEther(String(withdrawAmt))], {
            account: alice.account,
        });

        expect(await lpToken.read.balanceOf([alice.account.address])).to.equal(
            (aliceLpBalance as bigint) - parseEther(String(depositAmt)) + parseEther(String(withdrawAmt)),
        );
    });

    it('depositPermit: EIP-2612 서명으로 승인', async () => {
        const { owner, alice, chef, lpToken, pid } = await loadFixture(fixture);
        const { depositAmt } = fixtureData;

        const sig = await signPermitERC2612({
            token: lpToken,
            owner: alice,
            spender: chef.address,
            value: parseEther(String(depositAmt)),
            deadline: BigInt('0xffffffffffff'),
        });

        await chef.write.depositPermit([pid, parseEther(String(depositAmt)), BigInt('0xffffffffffff'), sig], {
            account: alice.account,
        });

        const u: any = await chef.read.userInfo([pid, alice.account.address]);
        expect(u[0]).to.equal(parseEther(String(depositAmt))); // amount 누적
    });

    it('WETH 풀 & ETH 송금 → 자동 예치(receive)', async () => {
        const { owner, alice, chef, WETH } = await loadFixture(fixture);
        const { depositAmtByETH } = fixtureData;

        await chef.write.add([WETH.address, 1000, 0 as any, BigInt(2 ** 32), false], {
            account: owner.account,
        });
        const pidWeth = await chef.read.poolId([WETH.address]);

        await alice.sendTransaction({
            to: chef.address,
            value: parseEther(String(depositAmtByETH)),
        });

        const u: any = await chef.read.userInfo([pidWeth, alice.account.address]);
        expect(u[0]).to.equal(parseEther(String(depositAmtByETH)));
    });

    it('setRewardsPerSec 변경이 다음 정산에 반영', async () => {
        const { owner, alice, chef, lpToken, rewardToken, pid } = await loadFixture(fixture);
        const { rewardsPerSecAmt, depositAmt } = fixtureData;

        await lpToken.write.approve([chef.address, parseEther(String(depositAmt))], {
            account: alice.account,
        });
        const txDeposit = await chef.write.deposit([pid, parseEther(String(depositAmt))], {
            account: alice.account,
        });
        const firstDepositTime = await getTxByTimestamp({ hash: txDeposit });

        await setTimeTravel(firstDepositTime + 10);
        const txClaim1 = await chef.write.deposit([pid, 0], {
            account: alice.account,
        });
        const firstClaimTime = await getTxByTimestamp({ hash: txClaim1 });
        const firstReward = await rewardToken.read.balanceOf([alice.account.address]);

        expect(firstReward).to.equal(
            parseEther(String((firstClaimTime - firstDepositTime) * rewardsPerSecAmt)),
        );

        // 2) rps = 2로 변경
        const updateRewardsPerSec = 2;
        await setTimeTravel(firstClaimTime);
        const txSet = await chef.write.setRewardsPerSec([parseEther(String(updateRewardsPerSec))], {
            account: owner.account,
        });
        const secondStartTime = await getTxByTimestamp({ hash: txSet });

        // 3) +5초 뒤 하베스트(t2)
        await setTimeTravel(secondStartTime + 5);
        const txClaim2 = await chef.write.deposit([pid, 0], {
            account: alice.account,
        });

        const secondClaimTime = await getTxByTimestamp({ hash: txClaim2 });
        const secondReward = await rewardToken.read.balanceOf([alice.account.address]);

        const expectedTotal =
            (firstClaimTime - firstDepositTime) * rewardsPerSecAmt +
            (secondClaimTime - firstClaimTime) * updateRewardsPerSec;

        expect(secondReward).to.equal(parseEther(String(expectedTotal)));
    });

    it('중복 풀 추가 시 Duplicated Pool 리버트', async () => {
        const { owner, chef, lpToken } = await loadFixture(fixture);
        await expect(
            chef.write.add([lpToken.address, 1, 0 as any, BigInt(2 ** 32), false], {
                account: owner.account,
            }),
        ).to.be.rejectedWith('Duplicated Pool');
    });

    it('잘못된 pid로 deposit/withdraw는 Invalid Pool', async () => {
        const { alice, chef } = await loadFixture(fixture);
        await expect(chef.write.deposit([9999 as any, 0n], { account: alice.account })).to.be.rejectedWith(
            'Invalid Pool',
        );
        await expect(chef.write.withdraw([9999 as any, 0n], { account: alice.account })).to.be.rejectedWith(
            'Invalid Pool',
        );
    });

    it('depositPermit: 잘못된 deadline으로 서명 불일치', async () => {
        const { alice, chef, lpToken, pid } = await loadFixture(fixture);

        const signature = await signPermitERC2612({
            token: lpToken,
            owner: alice,
            spender: chef.address,
            value: parseEther('50'),
            deadline: BigInt('0xffffffffffff'),
        });

        const deadline = 123;

        await expect(
            chef.write.depositPermit([pid, parseEther('50'), deadline, signature], {
                account: alice.account,
            }),
        ).to.be.rejectedWith(`custom error 'ERC2612ExpiredSignature(${deadline})`);
    });
});
