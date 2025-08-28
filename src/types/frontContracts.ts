import { ERC20Mock, IDataFeed, MasterChef, MasterPool } from '../../typechain-types/index.js';
import { FrontToken, FrontConfig } from './front.js';

export interface ContractToken extends Omit<FrontToken, 'address' | 'oracle'> {
    address?: string;
    token: ERC20Mock;
    oracle: IDataFeed;
}

export interface ContractConfig extends Omit<FrontConfig, 'masterChef' | 'rewardToken' | 'WETH' | 'pools'> {
    masterChef: MasterChef | MasterPool;

    rewardToken: ContractToken & { pid?: number };

    WETH: ContractToken & { pid?: number };

    pools: ContractToken[];
}
