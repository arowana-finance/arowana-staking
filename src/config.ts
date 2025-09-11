import hre from 'hardhat';
import { type WalletClient, type Address, getContract } from 'viem';
import type { FrontConfig, FrontToken } from './types/front.js';
import type { ContractConfig } from './types/frontContracts.js';
import { SECOND_PER_YEAR } from './apr.js';
import { BaseConfig } from './types/base.js';

const ERC20 = await hre.artifacts.readArtifact('ERC20Mock');
const MasterChef = await hre.artifacts.readArtifact('MasterChef');
const DataFeed = await hre.artifacts.readArtifact('DataFeed');

export enum Networks {
    MAINNET = 1,
    ARBITRUM_SEPOLIA = 421614,
}

export function findFarmByToken(config: FrontConfig, tokenAddress: string): FrontToken | undefined {
    return config.pools.find((f) => f.address === tokenAddress);
}

export function getContractConfig(config: FrontConfig, runner: WalletClient): ContractConfig {
    // MasterChef
    const masterChef = getContract({
        address: config.masterChef as Address,
        abi: MasterChef.abi,
        client: runner,
    });

    // Reward Token + Oracle
    const rewardToken = getContract({
        address: config.rewardToken.address as Address,
        abi: ERC20.abi,
        client: runner,
    });
    const rewardOracle = getContract({
        address: config.rewardToken.oracle as Address,
        abi: DataFeed.abi,
        client: runner,
    });

    // WETH + Oracle
    const WETH = getContract({
        address: config.WETH.address as Address,
        abi: ERC20.abi,
        client: runner,
    });
    const WETHOracle = getContract({
        address: config.WETH.oracle as Address,
        abi: DataFeed.abi,
        client: runner,
    });

    // 각 풀 토큰/오라클 컨트랙트 바인딩
    const pools = config.pools.map((pool) => {
        const token = getContract({
            address: pool.address as Address,
            abi: ERC20.abi,
            client: runner,
        });
        const oracle = getContract({
            address: pool.oracle as Address,
            abi: DataFeed.abi,
            client: runner,
        });
        return { ...pool, token, oracle };
    });

    return {
        ...config,
        masterChef,
        rewardToken: {
            ...config.rewardToken,
            token: rewardToken,
            oracle: rewardOracle,
        },
        WETH: {
            ...config.WETH,
            token: WETH,
            oracle: WETHOracle,
        },
        pools,
    };
}

/**
 * 총 보상량(1년치 추정) 계산 유틸
 * - initRewardsPerSec / halvingInterval / halvingRate 를 기반으로,
 *   from~to 구간을 1년으로 확장해 누적 보상을 적분합니다.
 * - 체인 호출이 없는 순수 함수이므로 기존 로직을 유지
 */
export function getTotalRewards(config: BaseConfig, timestamp?: number) {
    const rewardFromTimestamp = config.rewardFromTimestamp || timestamp || 0;
    const rewardToTimestamp = (config.rewardToTimestamp || timestamp || 0) + SECOND_PER_YEAR;

    const rewardSeconds = rewardToTimestamp - rewardFromTimestamp || SECOND_PER_YEAR;
    const initRewardsPerSec = config.initRewardsPerSec || 1;

    const halvingInterval = config.halvingInterval || 0;
    const halvingRate = config.halvingRate || (halvingInterval ? 50 : 0);

    let totalRewards = 0;
    let rewards = Number(initRewardsPerSec);
    let localFrom = Number(rewardFromTimestamp);
    let halvingNumber = 0;

    if (halvingInterval) {
        // 반감 스케줄: interval마다 보상률을 halvingRate%로 갱신
        while (localFrom < rewardToTimestamp && halvingNumber < 100) {
            const nextHalvingTime = rewardFromTimestamp + (halvingNumber + 1) * halvingInterval;
            const periodEnd = rewardToTimestamp < nextHalvingTime ? rewardToTimestamp : nextHalvingTime;

            totalRewards += (periodEnd - localFrom) * rewards;

            localFrom = periodEnd;
            rewards = (rewards * (halvingRate || 50)) / 100;
            halvingNumber++;
        }
    } else {
        totalRewards = rewardSeconds * initRewardsPerSec;
    }

    return {
        initRewardsPerSec,
        rewardFromTimestamp,
        rewardToTimestamp,
        halvingRate,
        halvingInterval,
        totalRewards,
    };
}
