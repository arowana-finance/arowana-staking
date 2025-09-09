import { expect } from "chai";
import hre from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import {
  getClients,
  parseEther,
  timeTravel,
  signPermitERC2612,
} from "./helpers.js";
import { encodeFunctionData } from "viem";

describe("MasterChef (with RewardVault)", () => {
  async function fixture() {
    const { owner, alice } = await getClients();

    const rewardToken = await hre.viem.deployContract("ERC20Mock", [
      "Reward",
      "RWD",
      18,
      0n,
    ]);

    const lpToken = await hre.viem.deployContract("ERC20Mock", [
      "LP",
      "LP",
      18,
      0n,
    ]);
    const WETH = await hre.viem.deployContract("WETH");

    await lpToken.write.mint([alice.account.address, parseEther("1000")]);

    // 보상 금고 배포 & 오너 초기화
    const vaultImpl = await hre.viem.deployContract("RewardVault");      
    const vaultProxy = await hre.viem.deployContract("InitializableProxy");

    // initializeVault(owner) 호출 데이터를 ABI로 인코딩
    const initVaultData = encodeFunctionData({
      abi: vaultImpl.abi,
      functionName: "initializeVault",
      args: [owner.account.address],
    });

    await vaultProxy.write.initializeProxy(
      ["RewardVault", owner.account.address, vaultImpl.address, initVaultData],
      { account: owner.account }
    );

    const vault = await hre.viem.getContractAt("RewardVault", vaultProxy.address);

    await rewardToken.write.mint([owner.account.address, parseEther("100000")]);
    await rewardToken.write.transfer([vault.address, parseEther("50000")]);

    const chefImpl = await hre.viem.deployContract("MasterChef");
    const chefProxy = await hre.viem.deployContract("InitializableProxy");
    const publicClient = await hre.viem.getPublicClient();
    const startTime = (await publicClient.getBlock()).timestamp - 60n;
    const endTime = (await publicClient.getBlock()).timestamp - 86400n;

    const initChefData = encodeFunctionData({
      abi: chefImpl.abi,
      functionName: "initializeChef",
      args: [
      owner.account.address,
      WETH.address,
      rewardToken.address,
      vault.address,
      parseEther("1"),
      startTime,
      endTime,
      false,
    ],
    })

    await chefProxy.write.initializeProxy([
      "MasterChef",
      owner.account.address,
      chefImpl.address,
      initChefData
    ]);

    const chef = await hre.viem.getContractAt("MasterChef", chefProxy.address);

    await vault.write.addSpender([chef.address]);

    await chef.write.add([
      lpToken.address,
      1000,
      0 as any,
      BigInt(2 ** 32),
      false,
    ]);
    const pid = await chef.read.poolId([lpToken.address]);

    return { owner, alice, chef, rewardToken, lpToken, WETH, vault, pid };
  }

  it("풀 추가/식별", async () => {
    const { chef, lpToken, pid } = await loadFixture(fixture);
    expect(await chef.read.poolLength()).to.equal(1);
    expect(await chef.read.poolId([lpToken.address])).to.equal(pid);
  });

  it("예치→시간경과→정산→인출 (보상은 Vault에서 지급)", async () => {
    const { alice, chef, rewardToken, lpToken, pid } = await loadFixture(
      fixture
    );

    await lpToken.write.approve([chef.address, parseEther("100")], {
      account: alice.account,
    });

    await chef.write.deposit([pid, parseEther("100")], {
      account: alice.account,
    });


    await timeTravel(10);
    
    await chef.write.deposit([pid, 0], { account: alice.account });

    expect(await rewardToken.read.balanceOf([alice.account.address])).to.equal(
      parseEther("11")
    );

    await chef.write.withdraw([pid, parseEther("40")], {
      account: alice.account,
    });
    expect(await lpToken.read.balanceOf([alice.account.address])).to.equal(
      parseEther("940")
    );
  });

  it("depositPermit: EIP-2612 서명으로 승인", async () => {
    const { owner, alice, chef, lpToken, pid } = await loadFixture(fixture);

    const sig = await signPermitERC2612({
      token: lpToken,
      owner: alice,
      spender: chef.address,
      value: parseEther("50"),
      deadline: BigInt("0xffffffffffff"),
    });

    await chef.write.depositPermit(
      [pid, parseEther("50"), BigInt("0xffffffffffff"), sig],
      { account: alice.account }
    );

    const u: any = await chef.read.userInfo([pid, alice.account.address]);
    expect(u[0]).to.equal(parseEther("50")); // amount 누적
  });

  it("WETH 풀 & ETH 송금 → 자동 예치(receive)", async () => {
    const { owner, alice, chef, WETH } = await loadFixture(fixture);

    await chef.write.add(
      [WETH.address, 1000, 0 as any, BigInt(2 ** 32), false],
      {
        account: owner.account,
      }
    );
    const pidWeth = await chef.read.poolId([WETH.address]);

    await alice.sendTransaction({ to: chef.address, value: parseEther("1") });

    const u: any = await chef.read.userInfo([pidWeth, alice.account.address]);
    expect(u[0]).to.equal(parseEther("1"));
  });
});
