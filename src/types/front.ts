import { BaseToken, BaseConfig } from './base.js';

export interface FrontToken extends Omit<BaseToken, 'pid' | 'address'> {
    pid: number;
    address: string;
    oracle: string;
}

export interface FrontConfig extends Omit<BaseConfig, 'masterChef' | 'rewardToken' | 'WETH' | 'pools'> {
    masterChef: string;

    rewardToken: Omit<FrontToken, 'pid'> & { pid?: number };

    WETH: Omit<FrontToken, 'pid'> & { pid?: number };

    pools: FrontToken[];
}
