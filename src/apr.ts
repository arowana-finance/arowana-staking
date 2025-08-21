export const SECOND_PER_YEAR = 31_622_400;

/**
 * Get farm APR value in %
 * @param rewardsPerSec rewards given per second for pool in decimals ( not 1 wei )
 * @param rewardTokenUSD USD value per 1 TOKEN ( not 1 wei )
 * @param stakingTokenUSD USD value per 1 Staking TOKEN ( not 1 wei )
 * @param totalStakedBalance TOKEN balance staked on pool
 */
export function getFarmApr(
    rewardsPerSec: number,
    rewardTokenUSD: number,
    stakingTokenUSD: number,
    totalStakedBalance: number,
) {
    const yearlyRewards = SECOND_PER_YEAR * rewardsPerSec;
    const rewardsApr = (yearlyRewards * rewardTokenUSD * 100) / (stakingTokenUSD * totalStakedBalance);
    return rewardsApr;
}
