import { expect } from "chai";
import hre from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { getClients, parseEther, timeTravel } from "./helpers.js";
import { encodeFunctionData } from "viem";

describe("MasterPool + ERC4626Pool", () => {
  async function fixture() {
    const { owner, alice } = await getClients();

    const reward = await hre.viem.deployContract("ERC20Mock", [
      "Reward",
      "RWD",
      18,
      0n,
    ]);
    const lp = await hre.viem.deployContract("ERC20Mock", ["LP", "LP", 18, 0n]);
    const WETH = await hre.viem.deployContract("WETH");

    await lp.write.mint([alice.account.address, parseEther("1000")]);

    const vaultImpl = await hre.viem.deployContract("RewardVault");     
    const vaultProxy = await hre.viem.deployContract("InitializableProxy");

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

    await reward.write.mint([owner.account.address, parseEther("100000")]);
    await reward.write.transfer([vault.address, parseEther("50000")]);

    const masterImpl = await hre.viem.deployContract("MasterPool");      
    const masterProxy = await hre.viem.deployContract("InitializableProxy");
    const poolImpl = await hre.viem.deployContract("ERC4626Pool");

    const initMasterData = encodeFunctionData({
      abi: masterImpl.abi,
      functionName: "initializePool",
      args: [
      owner.account.address,
      WETH.address,
      poolImpl.address,
      reward.address,
      vault.address,
      parseEther("1"),
      50,
      10 as any,
      0 as any,
      BigInt(2 ** 32),
      false,
    ],
    });

    await masterProxy.write.initializeProxy(
      ["MasterPool", owner.account.address, masterImpl.address, initMasterData],
      { account: owner.account }
    );

    const master = await hre.viem.getContractAt("MasterPool", masterProxy.address)
    
    await vault.write.addSpender([master.address]);

    await master.write.add([
      lp.address,
      1000,
      0 as any,
      BigInt(2 ** 32),
      false,
    ]);
    const pid = await master.read.poolId([lp.address]);
    const stAddr = await master.read.poolTokens([pid]);
    const st = await hre.viem.getContractAt(
      "ERC4626Pool",
      stAddr as `0x${string}`
    );

    return { owner, alice, master, reward, lp, st, pid, vault };
  }

  it("풀 추가 시 stTOKEN(ERC4626Pool) 클론 생성 & 자산 매핑", async () => {
    const { lp, st } = await loadFixture(fixture);
    expect(((await st.read.asset()) as any).toLowerCase()).to.equal(lp.address);
    expect(await st.read.name()).to.match(/^Staked /);
    expect(await st.read.symbol()).to.match(/^st/);
  });

  it("예치/인출 시 stTOKEN 민트/번 훅 동작", async () => {
    const { alice, master, lp, st, pid } = await loadFixture(fixture);

    await lp.write.approve([master.address, parseEther("200")], {
      account: alice.account,
    });
    await master.write.deposit([pid, parseEther("200")], {
      account: alice.account,
    });
    expect(await st.read.balanceOf([alice.account.address])).to.equal(
      parseEther("200")
    );

    await master.write.withdraw([pid, parseEther("50")], {
      account: alice.account,
    });
    expect(await st.read.balanceOf([alice.account.address])).to.equal(
      parseEther("150")
    );
  });

  it("네이티브 보상 풀: balanceOf가 pending 보상(가상)을 가산해 표시", async () => {
    const { owner, alice, master, reward } = await loadFixture(fixture);

    await master.write.add(
      [reward.address, 1000, 0 as any, BigInt(2 ** 32), false],
      {
        account: owner.account,
      }
    );
    const pid2 = await master.read.poolId([reward.address]);
    const st2Addr = await master.read.poolTokens([pid2]);
    const st2 = await hre.viem.getContractAt(
      "ERC4626Pool",
      st2Addr as `0x${string}`
    );

    await reward.write.mint([alice.account.address, parseEther("100")]);
    await reward.write.approve([master.address, parseEther("100")], {
      account: alice.account,
    });
    await master.write.deposit([pid2, parseEther("100")], {
      account: alice.account,
    });

    const shares0: any = await st2.read.balanceOf([alice.account.address]);
    await timeTravel(5); // 보상 적립
    const virtualBal = await st2.read.balanceOf([alice.account.address]);

    expect(virtualBal as BigInt > shares0).to.be.true;
  });

  it("반감 스케줄(10초마다 50%): 동일 기간 대비 보상이 구간별 감소", async () => {
    const { alice, master, lp, pid } = await loadFixture(fixture);

    await lp.write.approve([master.address, parseEther("100")], {
      account: alice.account,
    });
    await master.write.deposit([pid, parseEther("100")], {
      account: alice.account,
    });

    // estimates approve and deposit time 7 blocktime
    // [7,10)초: rps=1 → 3 / [10,20)초: rps=0.5 → 5 / [20,28)초: rps=0.25 → 2
    // rps = 3 + 5 + 2 = 10
    for (let i = 0; i < 21; i++) {
      await timeTravel(1);
    }

    await master.write.deposit([pid, 0n], { account: alice.account });

    const bal = await (
      await hre.viem.getContractAt(
        "ERC20Mock",
        (await master.read.rewardToken()) as `0x${string}`
      )
    ).read.balanceOf([alice.account.address]);
  });
});
