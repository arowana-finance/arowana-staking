// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { Clones } from '@openzeppelin/contracts/proxy/Clones.sol';
import { IERC4626Pool } from '../interfaces/IERC4626Pool.sol';
import { MasterChef } from './MasterChef.sol';

/**
 * @title MasterPool
 * @author Arowana Finance
 * @dev MasterChef that mints / burns corresponding LP tokens per deposit
 */
contract MasterPool is MasterChef {
    event SetPoolToken(uint16 indexed pid, address poolToken);
    event SetHalvingRate(uint16 halvingRate);
    event SetHalvingInterval(uint64 halvingInterval);

    address public poolTokenImplementation;

    mapping(uint16 => IERC4626Pool) public poolTokens;

    mapping(address => uint16) public poolIdByTokens;

    /// @dev Decreasing n% for each halving interval
    uint16 public halvingRate;

    uint64 public halvingInterval;

    modifier onlyPoolTokens() {
        require(hasPoolToken(msg.sender), 'NOT_POOL');
        _;
    }

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
    ) public virtual {
        setHalvingRate(_halvingRate);
        setHalvingInterval(_halvingInterval);

        initializeChef(
            _owner,
            _WETH,
            _rewardToken,
            _rewardVault,
            _rewardsPerSec,
            _startTime,
            _endTime,
            addPool
        );

        poolTokenImplementation = _poolTokenImplementation;
    }

    function hasPoolToken(address _poolToken) public view returns (bool) {
        return poolIdByTokens[_poolToken] != 0 || address(poolTokens[0]) == _poolToken;
    }

    function getPoolRewardsByTime(
        uint16 _pid,
        uint64 _fromTime,
        uint64 _toTime
    ) public view virtual override returns (uint256) {
        if (_fromTime >= _toTime || totalAllocPoint == 0) {
            return 0;
        }

        PoolInfo storage pool = poolInfo[_pid];
        (uint64 start, uint64 end) = (pool.startTime, pool.endTime);

        // Find range overlap
        uint64 from = _fromTime > start ? _fromTime : start;
        uint64 to = _toTime < end ? _toTime : end;

        if (from >= to) return 0;

        if (halvingInterval == 0) {
            return ((to - from) * rewardsPerSec * pool.allocPoint) / totalAllocPoint;
        }

        uint256 totalReward = 0;
        uint256 rewards = rewardsPerSec;
        uint64 localFrom = from;

        // Calculate how many completed halvings at the 'from' timestamp
        uint64 halvingNumber = (from - start) / halvingInterval;

        // The maximum number of halvings allowed (up to when rewards reaches zero)
        // If you want rewardsPerSec to eventually drop to zero, you can set a cap.
        while (localFrom < to && rewards != 0) {
            // Next halving point
            uint64 nextHalvingTime = start + (halvingNumber + 1) * halvingInterval;
            uint64 periodEnd = to < nextHalvingTime ? to : nextHalvingTime;

            totalReward += (periodEnd - localFrom) * rewards;

            // Prepare for next period
            localFrom = periodEnd;
            rewards = (rewards * halvingRate) / 100;
            halvingNumber++;
        }

        return (totalReward * pool.allocPoint) / totalAllocPoint;
    }

    function add(
        address _lpToken,
        uint32 _allocPoint,
        uint64 _startTime,
        uint64 _endTime,
        bool _withUpdate
    ) public virtual override onlyOwner returns (uint16 _pid) {
        _pid = super.add(_lpToken, _allocPoint, _startTime, _endTime, _withUpdate);

        address _poolToken = Clones.cloneDeterministic(
            poolTokenImplementation,
            keccak256(abi.encodePacked(_lpToken))
        );

        IERC4626Pool poolToken = IERC4626Pool(_poolToken);

        poolToken.initializeToken(address(this), _pid, _lpToken, address(rewardToken));

        poolTokens[_pid] = poolToken;
        poolIdByTokens[_poolToken] = _pid;

        emit SetPoolToken(_pid, _poolToken);
    }

    function _handleDeposit(
        uint16 _pid,
        address _user,
        uint256 _amount
    ) internal virtual override returns (uint256) {
        uint256 amount = super._handleDeposit(_pid, _user, _amount);

        poolTokens[_pid].masterMint(_user, amount);

        return amount;
    }

    function _handleWithdraw(
        uint16 _pid,
        address _user,
        uint256 _amount
    ) internal virtual override returns (uint256) {
        uint256 amount = super._handleWithdraw(_pid, _user, _amount);

        poolTokens[_pid].masterBurn(_user, amount);

        return amount;
    }

    function poolDeposit(address _user, uint256 _amount) external virtual onlyPoolTokens {
        uint16 _pid = poolIdByTokens[msg.sender];
        _handleRewards(_pid, _user);
        if (_amount != 0) {
            _handleDeposit(_pid, _user, _amount);
        }
    }

    function poolWithdraw(address _user, uint256 _amount) external virtual onlyPoolTokens {
        uint16 _pid = poolIdByTokens[msg.sender];
        _handleRewards(_pid, _user);
        if (_amount != 0) {
            _handleWithdraw(_pid, _user, _amount);
        }
    }

    function _handleRewardsNative(uint16 _pid, address _user) internal virtual {
        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][_user];
        updatePool(_pid);
        if (user.amount != 0) {
            uint256 pending = ((user.amount * pool.accRewardsPerShare) / 1e12) - user.rewardDebt;
            if (pending != 0) {
                user.amount += pending;
                poolTokens[_pid].masterMint(_user, pending);
                emit Deposit(_user, _pid, pending);
            }
        }
        _handleDebt(_pid, _user);
    }

    function poolMint(address from) external virtual onlyPoolTokens {
        uint16 _pid = poolIdByTokens[msg.sender];

        if (address(poolInfo[_pid].lpToken) != address(rewardToken)) {
            _handleRewards(_pid, from);
        } else {
            _handleRewardsNative(_pid, from);
        }
    }

    function poolTransfer(address _from, address _to, uint256 value) external virtual onlyPoolTokens {
        uint16 _pid = poolIdByTokens[msg.sender];

        UserInfo storage from = userInfo[_pid][_from];
        UserInfo storage to = userInfo[_pid][_to];

        if (_from != address(0) && from.amount >= value) {
            from.amount -= value;
            _handleDebt(_pid, _from);
            emit Withdraw(_from, _pid, value);
        }
        if (_to != address(0)) {
            to.amount += value;
            _handleDebt(_pid, _to);
            emit Deposit(_to, _pid, value);
        }
    }

    function setHalvingRate(uint16 _halvingRate) public onlyOwner {
        halvingRate = _halvingRate;
        emit SetHalvingRate(_halvingRate);
    }

    function setHalvingInterval(uint64 _halvingInterval) public onlyOwner {
        halvingInterval = _halvingInterval;
        emit SetHalvingInterval(_halvingInterval);
    }
}
