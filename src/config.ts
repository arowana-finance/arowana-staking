import { type SignerWithAddress } from 'ethers-opt';
import { type Provider } from 'ethers';
import { ERC20Mock__factory, IDataFeed__factory, MasterChef__factory } from '../typechain-types/index.js';
import type { FrontConfig, FrontToken } from './types/front.js';
import type { ContractConfig } from './types/frontContracts.js';
import { SECOND_PER_YEAR } from './apr.js';
import { BaseConfig } from './types/base.js';

export enum Networks {
    MAINNET = 1,
    ARBITRUM_SEPOLIA = 421614,
}

export type Runner = SignerWithAddress | Provider;

export function findFarmByToken(config: FrontConfig, tokenAddress: string): FrontToken | undefined {
    return config.pools.find((f) => f.address === tokenAddress);
}

export function getContractConfig(config: FrontConfig, runner?: Runner): ContractConfig {
    return {
        ...config,

        masterChef: MasterChef__factory.connect(config.masterChef, runner),

        rewardToken: {
            ...config.rewardToken,
            token: ERC20Mock__factory.connect(config.rewardToken.address, runner),
            oracle: IDataFeed__factory.connect(config.rewardToken.oracle, runner),
        },

        WETH: {
            ...config.WETH,
            token: ERC20Mock__factory.connect(config.WETH.address, runner),
            oracle: IDataFeed__factory.connect(config.WETH.oracle, runner),
        },

        pools: config.pools.map((pool) => {
            return {
                ...pool,
                token: ERC20Mock__factory.connect(pool.address, runner),
                oracle: IDataFeed__factory.connect(pool.oracle, runner),
            };
        }),
    };
}

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
        while (localFrom < rewardToTimestamp && halvingNumber < 100) {
            // Next halving point
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
