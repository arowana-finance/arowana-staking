import { expect } from "chai";
import hre from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { parseUnits, getClients, timeTravel } from "./helpers.js";


describe("DataFeed", () => {
  const PRICE0 = parseUnits("3362.61", 8);
  const PRICE1 = parseUnits("3500", 8);

  async function fixture() {
    const { owner, alice } = await getClients();

    const feed = await hre.viem.deployContract("DataFeed");

    const asset = owner.account.address as `0x${string}`;
    await feed.write.initializeFeed(
      [owner.account.address, asset, "AGT / USD", PRICE0],
      { account: owner.account }
    );

    return { owner, alice, feed, asset };
  }

  it("초기화 값(소수/버전/자산/설명/최초가) 확인", async () => {
    const { feed, asset } = await loadFixture(fixture);
    expect(await feed.read.decimals()).to.equal(8);
    expect(await feed.read.version()).to.equal(6n);
    expect((await feed.read.asset() as string).toLowerCase()).to.equal(asset);
    expect(await feed.read.description()).to.equal("AGT / USD");

    const latest: any = await feed.read.latestRoundData();
    expect(latest[1]).to.equal(PRICE0);
  });

  it("메타데이터 변경은 onlyOwner", async () => {
    const { owner, feed, alice } = await loadFixture(fixture);
    const asset2 = alice.account.address as `0x${string}`;

    await feed.write.setAsset([asset2], { account: owner.account });
    await feed.write.setDescription(["NEW / USD"], { account: owner.account });
    await feed.write.setVersion([7n], { account: owner.account });

    expect((await feed.read.asset() as string).toLowerCase()).to.equal(asset2);
    expect(await feed.read.description()).to.equal("NEW / USD");
    expect(await feed.read.version()).to.equal(7n);
  });

  it("정산자(onlySettlers)만 updateAnswer 가능 & 라운드 이력/최신 반영", async () => {
    const { owner, feed } = await loadFixture(fixture);

    await timeTravel(3);

    await feed.write.updateAnswer([PRICE1], { account: owner.account });

    const r0: any = await feed.read.getRoundData([0n]);
    const r1: any = await feed.read.getRoundData([1n]);

    expect(r0[1]).to.equal(PRICE0);
    expect(r1[1]).to.equal(PRICE1);
    expect(r1[3] > r0[3]).to.be.true; // updatedAt 증가

    const latest: any = await feed.read.latestRoundData();
    expect(latest[0]).to.equal(1n);
    expect(latest[1]).to.equal(PRICE1);
  });

});
