// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { IMasterChef } from './IMasterChef.sol';

interface IMasterPool is IMasterChef {
    function poolTokenImplementation() external view returns (address);
    function poolTokens(uint16 pid) external view returns (address token);
    function poolIdByTokens(address token) external view returns (uint16 pid);

    function halvingRate() external view returns (uint16);
    function halvingInterval() external view returns (uint64);

    function initializePool(
        address _owner,
        address _WETH,
        address _poolTokenImplementation,
        address _rewardToken,
        address _rewardVault,
        uint256 _rewardsPerSec,
        uint16 _halvingRate,
        uint64 _halvingInterval,
        uint64 _startTime,
        uint64 _endTime,
        bool addPool
    ) external;

    function hasPoolToken(address _poolToken) external view returns (bool);

    function poolDeposit(address _user, uint256 _amount) external;
    function poolWithdraw(address _user, uint256 _amount) external;
    function poolMint(address _from) external;
    function poolTransfer(address _from, address _to, uint256 value) external;

    function setHalvingRate(uint16 _halvingRate) external;
    function setHalvingInterval(uint64 _halvingInterval) external;
}
