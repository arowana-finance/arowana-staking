// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IMasterChef {
    struct UserInfo {
        uint256 amount;
        uint256 rewardDebt;
    }

    struct PoolInfo {
        address lpToken;
        uint32 allocPoint;
        uint64 startTime;
        uint64 endTime;
        uint64 lastRewardTime;
        uint256 accRewardsPerShare;
    }

    function WETH() external view returns (address);

    function rewardToken() external view returns (address);
    function rewardVault() external view returns (address);
    function rewardsPerSec() external view returns (uint256);

    function poolId(address pool) external view returns (uint16 pid);
    function poolInfo(uint16 pid) external view returns (PoolInfo memory);
    function userInfo(uint16 pid, address user) external view returns (UserInfo memory);
    function totalAllocPoint() external view returns (uint32);

    function initializeChef(
        address _owner,
        address _WETH,
        address _rewardToken,
        address _rewardVault,
        uint256 _rewardsPerSec,
        uint64 _startTime,
        uint64 _endTime,
        bool addPool
    ) external;

    function poolLength() external view returns (uint16);
    function hasPool(address _lpToken) external view returns (bool);

    function add(
        address _lpToken,
        uint32 _allocPoint,
        uint64 _startTime,
        uint64 _endTime,
        bool _withUpdate
    ) external returns (uint16 _pid);

    function set(
        uint16 _pid,
        uint32 _allocPoint,
        uint64 _startTime,
        uint64 _endTime,
        bool _withUpdate
    ) external;

    function getMultiplier(uint16 _pid, uint64 _fromTime, uint64 _toTime) external view returns (uint256);
    function getPoolRewardsByTime(
        uint16 _pid,
        uint64 _fromTime,
        uint64 _toTime
    ) external view returns (uint256);
    function getPoolRewardsPerSec(uint16 _pid) external view returns (uint256);
    function getRewardsPerShare(uint16 _pid) external view returns (uint256 rewardPerShare);
    function pendingRewards(uint16 _pid, address _user) external view returns (uint256 pendingReward);

    function massUpdatePools() external;
    function updatePool(uint16 _pid) external;

    function deposit(uint16 _pid, uint256 _amount) external payable;
    function depositPermit(uint16 _pid, uint256 _amount, uint64 _deadline, bytes memory _signature) external;
    function withdraw(uint16 _pid, uint256 _amount) external;
    function setRewardsPerSec(uint256 _rewardPerSec) external;
}
