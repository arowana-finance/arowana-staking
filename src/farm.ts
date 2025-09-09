import { formatUnits, WalletClient } from "viem";
import { getFarmApr } from "./apr.js";
import { ContractConfig } from "./types/index.js";

export async function getFarmStats(config: ContractConfig) {
  const {
    rewardToken: { token: rewardToken, oracle: rewardTokenOracle },
  } = config;
  const [rewardTokenDecimals, rewardOracleDecimals, rewardTokenUsdRaw] =
    await Promise.all([
      rewardToken.read.decimals().then((d: bigint | number) => Number(d)),
      rewardTokenOracle.read.decimals().then((d: bigint | number) => Number(d)),
      rewardTokenOracle.read.latestAnswer(), // bigint
    ]);

  return {
    rewardTokenDecimals,
    rewardTokenUsd: Number(
      formatUnits(rewardTokenUsdRaw as bigint, rewardOracleDecimals)
    ),
  };
}

/**
 * 전체 팜 목록과 사용자 지갑 기준 상태를 viem 호출로 수집
 * @param config  컨트랙트 구성
 * @param user    사용자: (1) viem walletClient (user.account.address) 또는 (2) 문자열 주소
 */
export async function getFarms(
  config: ContractConfig,
  user?: WalletClient | string
) {
  const { masterChef } = config;

  const userAddress: `0x${string}` | undefined =
    typeof user === "string" ? (user as `0x${string}`) : user?.account?.address;

  // 1) 보상 토큰 관련 공통 스탯(소수점/가격) + 2) 각 풀 데이터 병렬 수집
  const [{ rewardTokenUsd, rewardTokenDecimals }, ...poolData] =
    await Promise.all([
      getFarmStats(config),
      ...config.pools.map(async (pool: any) => {
        const [
          poolInfo,
          rewardsPerSecBN,
          oracleDecimals,
          oracleUsd,
          tokenDecimals,
          poolBalance,
          userBalance,
          stakedBalance,
          pendingRewardsBN,
        ] = await Promise.all([
          masterChef.read.poolInfo([pool.pid]),
          masterChef.read.getPoolRewardsPerSec([pool.pid]),
          pool.oracle.read.decimals().then((d: bigint | number) => Number(d)),
          pool.oracle.read.latestAnswer(),
          pool.token.read.decimals().then((d: bigint | number) => Number(d)),
          pool.token.read.balanceOf([masterChef.address]),
          userAddress
            ? pool.token.read.balanceOf([userAddress])
            : Promise.resolve(0n),
          userAddress
            ? masterChef.read.userInfo([pool.pid, userAddress])
            : Promise.resolve([0n, 0n]),
          userAddress ? masterChef.read.pendingRewards([pool.pid, userAddress]) : 0n,
        ]);

        const allocPoint = Number(poolInfo.allocPoint);
        const stakingTokenUsd = Number(formatUnits(oracleUsd, oracleDecimals));

        const totalStakedBalance = Number(formatUnits(poolBalance, tokenDecimals));
        const totalStakedUSD = totalStakedBalance * stakingTokenUsd;
        const userTokenBalance = Number(formatUnits(userBalance, tokenDecimals));
        const userTokenUSD = userTokenBalance * stakingTokenUsd;
        const userStakedBalance = Number(formatUnits(stakedBalance, tokenDecimals));
        const userStakedUSD = userStakedBalance * stakingTokenUsd;

        const apr = 0;

        return {
          ...pool,
          allocPoint,
          stakingTokenUsd,
          totalStakedBalance,
          totalStakedUSD,
          userTokenBalance,
          userTokenUSD,
          userStakedBalance,
          userStakedUSD,
          apr,
          rewardsPerSecBN: rewardsPerSecBN as bigint | undefined,
          pendingRewardsBN: pendingRewardsBN as bigint | undefined
        };
      }),
    ]);

  return poolData.map((p) => {
      const userPendingRewards = Number(formatUnits(p.pendingRewardsBN as bigint, rewardTokenDecimals));
      const userPendingRewardsUSD = userPendingRewards * rewardTokenUsd;

      const rewardsPerSec = Number(formatUnits(p.rewardsPerSecBN as bigint, rewardTokenDecimals));

      delete p.rewardsPerSecBN;

      return {
          ...p,
          userPendingRewards,
          userPendingRewardsUSD,
          rewardsPerSec,
          apr: getFarmApr(rewardsPerSec, rewardTokenUsd, p.stakingTokenUsd, p.totalStakedBalance),
      };
  });
}
