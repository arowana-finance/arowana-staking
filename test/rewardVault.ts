import { expect } from "chai";
import hre from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { getClients, parseEther } from "./helpers.js";
import { encodeFunctionData } from "viem";

describe("RewardVault", () => {
  async function fixture() {
    const { owner, alice, bob } = await getClients();

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

    const reward = await hre.viem.deployContract("ERC20Mock", [
      "Reward",
      "RWD",
      18,
      parseEther("100000"),
    ]);

    return { owner, alice, bob, vault, reward };
  }

  it("초기화 시 오너가 기본 spender 등록", async () => {
    const { owner, vault } = await loadFixture(fixture);
    const list: any = await vault.read.spenders();
    expect(list.map((x: any) => x.toLowerCase())).to.contain(
      owner.account.address.toLowerCase()
    );
  });

  it("spender 추가 → 보상 지급(sendTo) → spender 제거 → 오너 인출", async () => {
    const { owner, alice, bob, vault, reward } = await loadFixture(fixture);

    await reward.write.transfer([vault.address, parseEther("1000")], {
      account: owner.account,
    });

    await vault.write.addSpender([alice.account.address], {
      account: owner.account,
    });

    await vault.write.sendTo(
      [reward.address, bob.account.address, parseEther("123")],
      { account: alice.account }
    );

    expect(await reward.read.balanceOf([bob.account.address])).to.equal(
      parseEther("123")
    );

    await vault.write.removeSpender([alice.account.address], {
      account: owner.account,
    });

    const beforeVaultBalance  = await reward.read.balanceOf([vault.address]);

    await vault.write.withdraw(
      [reward.address, owner.account.address, parseEther("10")],
      { account: owner.account }
    );

    const afterVaultBalance = await reward.read.balanceOf([vault.address]);

    const bal = await reward.read.balanceOf([owner.account.address]);

    expect((beforeVaultBalance as bigint) - (afterVaultBalance as bigint)).to.equal(parseEther("10"));

    expect(bal as bigint > 0).to.be.true;
  });

});
