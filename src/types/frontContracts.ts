import { FrontToken, FrontConfig } from './front.js';

export interface ContractToken extends Omit<FrontToken, 'address' | 'oracle'> {
    address?: string;
    token: any;
    oracle: any;
}

export interface ContractConfig extends Omit<FrontConfig, 'masterChef' | 'rewardToken' | 'WETH' | 'pools'> {
    masterChef: any | any;

    rewardToken: ContractToken & { pid?: number };

    WETH: ContractToken & { pid?: number };

    pools: ContractToken[];
}
