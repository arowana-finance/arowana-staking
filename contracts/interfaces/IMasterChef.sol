// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IMasterChef {
    struct UserInfo {
        uint256 amount;
        uint256 rewardDebt;
    }

    struct PoolInfo {
        address lpToken;
        uint256 allocPoint;
        uint256 startBlock;
        uint256 endBlock;
        uint256 lastRewardBlock;
        uint256 accRewardPerShare;
    }

    function WETH() external view returns (address);

    function rewardToken() external view returns (address);
    function rewardPerBlock() external view returns (uint256);
    function rewardVault() external view returns (address);

    function poolId(address pool) external view returns (uint256 pid);
    function poolInfo(uint256 pid) external view returns (PoolInfo memory);
    function userInfo(uint256 pid, address user) external view returns (UserInfo memory);
    function totalAllocPoint() external view returns (uint256);

    function initialize(
        address _owner,
        address _WETH,
        address _rewardToken,
        uint256 _rewardPerBlock,
        address _rewardVault,
        uint256 _startBlock,
        uint256 _endBlock,
        bool addPool
    ) external;

    function poolLength() external view returns (uint256);
    function hasPool(address _lpToken) external view returns (bool);

    function add(
        address _lpToken,
        uint256 _allocPoint,
        uint256 _startBlock,
        uint256 _endBlock,
        bool _withUpdate
    ) external returns (uint256 _pid);

    function set(
        uint256 _pid,
        uint256 _allocPoint,
        uint256 _startBlock,
        uint256 _endBlock,
        bool _withUpdate
    ) external;

    function getMultiplier(
        uint256 _pid,
        uint256 _fromBlock,
        uint256 _toBlock
    ) external view returns (uint256);
    function getBlockRewardPerShare(uint256 _pid) external view returns (uint256 rewardPerShare);
    function pendingRewards(uint256 _pid, address _user) external view returns (uint256 pendingReward);

    function massUpdatePools() external;
    function updatePool(uint256 _pid) external;

    function deposit(uint256 _pid, uint256 _amount) external payable;
    function withdraw(uint256 _pid, uint256 _amount) external;
    function updateRewardPerBlock(uint256 newBlockReward) external;
}
