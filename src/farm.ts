import { formatUnits } from 'ethers';
import { type SignerWithAddress } from 'ethers-opt';
import { type ContractConfig } from './types/frontContracts.js';
import { getFarmApr } from './apr.js';

export async function getFarmStats(config: ContractConfig) {
    const {
        rewardToken: { token: rewardToken, oracle: rewardTokenOracle },
    } = config;

    const [rewardTokenDecimals, rewardOracleDecimals, rewardTokenUsd] = await Promise.all([
        rewardToken.decimals().then((d) => Number(d)),
        rewardTokenOracle.decimals().then((d) => Number(d)),
        rewardTokenOracle.latestAnswer(),
    ]);

    return {
        rewardTokenDecimals,
        rewardTokenUsd: Number(formatUnits(rewardTokenUsd, rewardOracleDecimals)),
    };
}

export async function getFarms(config: ContractConfig, user?: SignerWithAddress | string) {
    const { masterChef } = config;

    const userAddress = (user as SignerWithAddress)?.address || (user as string | undefined);

    const [{ rewardTokenUsd, rewardTokenDecimals }, ...poolData] = await Promise.all([
        getFarmStats(config),
        ...config.pools.map(async (pool) => {
            const [
                poolInfo,
                rewardsPerSecBN,
                oracleDecimals,
                oracleUsd,
                tokenDecimals,
                poolBalance,
                userBalance,
                stakedBalance,
            ] = await Promise.all([
                masterChef.poolInfo(pool.pid),
                masterChef.getPoolRewardsPerSec(pool.pid),
                pool.oracle.decimals().then((d) => Number(d)),
                pool.oracle.latestAnswer(),
                pool.token.decimals().then((d) => Number(d)),
                pool.token.balanceOf(masterChef.target),
                userAddress ? await pool.token.balanceOf(userAddress) : 0n,
                userAddress ? (await masterChef.userInfo(pool.pid, userAddress)).amount : 0n,
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
            };
        }),
    ]);

    return poolData.map((p) => {
        const rewardsPerSec = Number(formatUnits(p.rewardsPerSecBN as bigint, rewardTokenDecimals));

        delete p.rewardsPerSecBN;

        return {
            ...p,
            rewardsPerSec,
            apr: getFarmApr(rewardsPerSec, rewardTokenUsd, p.stakingTokenUsd, p.totalStakedBalance),
        };
    });
}
