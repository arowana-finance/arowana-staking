// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { IMasterChef } from './IMasterChef.sol';

interface IMasterPool is IMasterChef {
    function poolTokenImplementation() external view returns (address);
    function poolTokens(uint256 pid) external view returns (address token);
    function poolIdByTokens(address token) external view returns (uint256 pid);

    function initializePool(
        address _owner,
        address _WETH,
        address _poolTokenImplementation,
        address _rewardToken,
        uint256 _rewardPerBlock,
        address _rewardVault,
        uint256 _startBlock,
        uint256 _endBlock,
        bool addPool
    ) external;

    function hasPoolToken(address _poolToken) external view returns (bool);

    function depositPermit(
        uint256 _pid,
        uint256 _amount,
        uint256 _deadline,
        bytes memory _signature
    ) external;

    function poolDeposit(address _user, uint256 _amount) external;
    function poolWithdraw(address _user, uint256 _amount) external;
    function poolMint(address _from) external;
    function poolTransfer(address _from, address _to, uint256 value) external;
}
