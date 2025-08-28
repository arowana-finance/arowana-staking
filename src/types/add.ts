import { BaseToken, BaseConfig } from './base.js';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface AddToken extends BaseToken {}

export interface AddConfig
    extends Omit<BaseConfig, 'initRewardsPerSec' | 'rewardFromTimestamp' | 'rewardToTimestamp'> {
    initRewardsPerSec: number;
    rewardFromTimestamp: number;
    rewardToTimestamp: number;
}
