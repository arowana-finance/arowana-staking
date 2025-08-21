export interface BaseToken {
    pid?: number;
    address?: string;

    name?: string;
    symbol?: string;
    decimals?: number;
    totalSupply?: number;

    oracle?: string;
    lpTokens?: string[];
    mockUsdPrice?: number;

    allocPoint?: number;
    // case when adding pool
    rewardFromTimestamp?: number;
    rewardToTimestamp?: number;

    // deployer specific
    deposit?: number;
    withdraw?: number;
}

export interface BaseConfig {
    chainId?: number;

    initRewardsPerSec?: number;
    rewardFromTimestamp?: number;
    rewardToTimestamp?: number;

    halvingRate?: number;
    halvingInterval?: number;

    masterChef?: string;

    rewardVault?: string;
    rewardToken?: BaseToken;

    WETH?: BaseToken;

    pools?: BaseToken[];
}
