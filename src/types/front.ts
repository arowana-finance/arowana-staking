import { BaseToken, BaseConfig } from './base.js';

export interface FrontToken extends Omit<BaseToken, 'pid' | 'address'> {
    pid: number;
    address: string;
    oracle: string;
}

export interface FrontConfig extends Omit<BaseConfig, 'masterChef' | 'rewardToken' | 'WETH' | 'pools'> {
    masterChef: string;

    rewardToken: FrontToken & { pid?: number };

    WETH: FrontToken & { pid?: number };

    pools: FrontToken[];
}
