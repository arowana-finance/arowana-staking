// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { SafeERC20 } from '@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol';
import { ReentrancyGuardUpgradeable } from '@openzeppelin/contracts-upgradeable/utils/ReentrancyGuardUpgradeable.sol';
import { Ownable } from '../libraries/Ownable.sol';
import { SigLib } from '../libraries/SigLib.sol';
import { IWETH } from '../interfaces/IWETH.sol';
import { IERC20, IERC20Mintable } from '../interfaces/IERC20.sol';
import { IRewardVault } from '../interfaces/IRewardVault.sol';

/**
 * @title MasterChef
 * @author Arowana Finance, PancakeSwap and SushiSwap
 * @notice MasterChef Staking Pool with function modularization and flexible rewards per second
 *
 * @dev 1. Safe to use behind proxy implementation
 * 2. emergencyWithdraw function is excluded as it expects to work behind proxy (and since it is insecure)
 * 3. Contract Functionality should match with PancakeSwap's MasterChef excluding SyrupPool related functions
 * https://github.com/pancakeswap/pancake-smart-contracts/blob/master/projects/farms-pools/contracts/MasterChef.sol#L34
 */
contract MasterChef is Ownable, ReentrancyGuardUpgradeable {
    using SafeERC20 for IERC20;

    event InitializedChef(address WETH, address rewardToken, address rewardVault);

    event Deposit(address indexed user, uint16 indexed pid, uint256 amount);
    event Withdraw(address indexed user, uint16 indexed pid, uint256 amount);

    event SetRewards(uint256 rewardsPerSec);
    event SetPool(
        uint16 indexed pid,
        address indexed lpToken,
        uint32 newAllocPoint,
        uint64 startTime,
        uint64 endTime
    );

    /// @dev Info of each user.
    struct UserInfo {
        uint256 amount; // How many LP tokens the user has provided.
        uint256 rewardDebt; // Reward debt. See explanation below.
        //
        // We do some fancy math here. Basically, any point in time, the amount of rewards
        // entitled to a user but is pending to be distributed is:
        //
        //   pending reward = (user.amount * pool.accRewardsPerShare) - user.rewardDebt
        //
        // Whenever a user deposits or withdraws LP tokens to a pool. Here's what happens:
        //   1. The pool's `accRewardsPerShare` (and `lastRewardTime`) gets updated.
        //   2. User receives the pending reward sent to his/her address.
        //   3. User's `amount` gets updated.
        //   4. User's `rewardDebt` gets updated.
    }

    /// @dev Info of each pool.
    struct PoolInfo {
        IERC20 lpToken; // Address of LP token contract.
        uint32 allocPoint; // How many allocation points assigned to this pool. rewards to distribute per second.
        uint64 startTime; // Timestamp to start reward calculation of the pool.
        uint64 endTime; // Timestamp to end reward calculation of the pool.
        uint64 lastRewardTime; // Last timestamp that rewards distribution occurs.
        uint256 accRewardsPerShare; // Accumulated rewards per share, times 1e12. See below.
    }

    IWETH public WETH;

    /// @dev Reward Token
    IERC20Mintable public rewardToken;
    /// @dev Reward vault
    IRewardVault public rewardVault;
    /// @dev Reward per second
    uint256 public rewardsPerSec;

    /// @dev pool id
    mapping(address => uint16) public poolId;
    /// @dev Info of each pool
    PoolInfo[] public poolInfo;
    /// @dev Info of each user that stakes LP tokens.
    mapping(uint16 => mapping(address => UserInfo)) public userInfo;
    /// @dev Total allocation points. Must be the sum of all allocation points in all pools.
    uint32 public totalAllocPoint;

    /**
     * @notice Disabling initializer for implementation contract
     * @dev Initializer would only work on proxy contract
     * @custom:oz-upgrades-unsafe-allow constructor
     */
    constructor() {
        _disableInitializers();
    }

    /// @dev Receive ETH from WETH for withdrawal
    receive() external payable {
        if (msg.sender == address(WETH)) {
            return;
        }
        if (hasPool(address(WETH))) {
            deposit(poolId[address(WETH)], msg.value);
        }
    }

    function initializeChef(
        address _owner,
        address _WETH,
        address _rewardToken,
        address _rewardVault,
        uint256 _rewardsPerSec,
        uint64 _startTime,
        uint64 _endTime,
        bool addPool
    ) public virtual initializer {
        __ReentrancyGuard_init();

        WETH = IWETH(_WETH);
        rewardToken = IERC20Mintable(_rewardToken);
        rewardVault = IRewardVault(_rewardVault);

        setRewardsPerSec(_rewardsPerSec);

        // Add reference pool (should be disabled for production)
        if (addPool) {
            add(_rewardToken, 1000, _startTime, _endTime, false);
        }

        __Ownable_init(_owner);

        emit InitializedChef(_WETH, _rewardToken, _rewardVault);
    }

    function poolLength() public view returns (uint16) {
        return uint16(poolInfo.length);
    }

    function hasPool(address _lpToken) public view returns (bool) {
        return poolId[_lpToken] != 0 || (poolInfo.length == 1 && address(poolInfo[0].lpToken) == _lpToken);
    }

    /// @dev Add a new LP to the pool. Can only be called by the owner
    function add(
        address _lpToken,
        uint32 _allocPoint,
        uint64 _startTime,
        uint64 _endTime,
        bool _withUpdate
    ) public virtual onlyOwner returns (uint16 _pid) {
        require(!hasPool(_lpToken), 'Duplicated Pool');
        if (_withUpdate) {
            massUpdatePools();
        }

        _pid = uint16(poolInfo.length);

        totalAllocPoint += _allocPoint;

        poolId[_lpToken] = _pid;

        poolInfo.push(
            PoolInfo({
                lpToken: IERC20(_lpToken),
                allocPoint: _allocPoint,
                startTime: _startTime,
                endTime: _endTime,
                lastRewardTime: 0,
                accRewardsPerShare: 0
            })
        );

        emit SetPool(_pid, _lpToken, _allocPoint, _startTime, _endTime);
    }

    /// @dev Update the given pool. Can only be called by the owner.
    function set(
        uint16 _pid,
        uint32 _allocPoint,
        uint64 _startTime,
        uint64 _endTime,
        bool _withUpdate
    ) public virtual onlyOwner {
        require(_pid < poolInfo.length, 'Invalid Pool');
        if (_withUpdate) {
            massUpdatePools();
        }
        totalAllocPoint = totalAllocPoint - poolInfo[_pid].allocPoint + _allocPoint;
        poolInfo[_pid].allocPoint = _allocPoint;
        poolInfo[_pid].startTime = _startTime;
        poolInfo[_pid].endTime = _endTime;

        emit SetPool(_pid, address(poolInfo[_pid].lpToken), _allocPoint, _startTime, _endTime);
    }

    /// @dev Return reward multiplier over the given _fromTime to _toTime timestamp.
    function getMultiplier(
        uint16 _pid,
        uint64 _fromTime,
        uint64 _toTime
    ) public view virtual returns (uint64) {
        if (_fromTime >= _toTime) {
            return 0;
        }

        PoolInfo storage pool = poolInfo[_pid];
        (uint64 start, uint64 end) = (pool.startTime, pool.endTime);

        // Find range overlap
        uint64 from = _fromTime > start ? _fromTime : start;
        uint64 to = _toTime < end ? _toTime : end;

        if (from >= to) return 0;
        return to - from;
    }

    function getPoolRewardsByTime(
        uint16 _pid,
        uint64 _fromTime,
        uint64 _toTime
    ) public view virtual returns (uint256) {
        if (totalAllocPoint == 0) {
            return 0;
        }

        PoolInfo storage pool = poolInfo[_pid];
        return (getMultiplier(_pid, _fromTime, _toTime) * rewardsPerSec * pool.allocPoint) / totalAllocPoint;
    }

    function getPoolRewardsPerSec(uint16 _pid) public view virtual returns (uint256) {
        return getPoolRewardsByTime(_pid, uint64(block.timestamp - 1), uint64(block.timestamp));
    }

    function getRewardsPerShare(uint16 _pid) public view virtual returns (uint256) {
        PoolInfo memory pool = poolInfo[_pid];
        uint256 accRewardsPerShare = pool.accRewardsPerShare;
        uint256 lpSupply = pool.lpToken.balanceOf(address(this));
        if (lpSupply != 0) {
            uint256 poolRewards = getPoolRewardsByTime(_pid, pool.lastRewardTime, uint64(block.timestamp));
            accRewardsPerShare += (poolRewards * 1e12) / lpSupply;
        }
        return accRewardsPerShare;
    }

    /// @dev View function to see pending rewards on frontend.
    function pendingRewards(uint16 _pid, address _user) public view virtual returns (uint256) {
        UserInfo storage user = userInfo[_pid][_user];
        return ((user.amount * getRewardsPerShare(_pid)) / 1e12) - user.rewardDebt;
    }

    /// @dev Update reward variables for all pools. Be careful of gas spending!
    function massUpdatePools() public {
        uint256 length = poolInfo.length;
        for (uint16 pid = 0; pid < length; ++pid) {
            updatePool(pid);
        }
    }

    /// @dev Update reward variables of the given pool to be up-to-date.
    function updatePool(uint16 _pid) public virtual {
        PoolInfo storage pool = poolInfo[_pid];
        pool.accRewardsPerShare = getRewardsPerShare(_pid);
        pool.lastRewardTime = uint64(block.timestamp);
    }

    function _handleRewards(uint16 _pid, address _user) internal virtual {
        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][_user];
        updatePool(_pid);
        if (user.amount != 0) {
            uint256 pending = ((user.amount * pool.accRewardsPerShare) / 1e12) - user.rewardDebt;
            if (pending != 0) {
                if (address(rewardVault) == address(0)) {
                    rewardToken.mint(_user, pending);
                } else {
                    rewardVault.sendTo(address(rewardToken), _user, pending);
                }
            }
        }
        _handleDebt(_pid, _user);
    }

    function _handleDebt(uint16 _pid, address _user) internal virtual {
        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][_user];
        user.rewardDebt = (user.amount * pool.accRewardsPerShare) / 1e12;
    }

    function _handleDeposit(uint16 _pid, address _user, uint256 _amount) internal virtual returns (uint256) {
        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][_user];

        if (address(pool.lpToken) == address(WETH) && msg.value == _amount) {
            WETH.deposit{ value: _amount }();
        } else {
            // Correctly reflect deposit amount from transfer-on-fee tokens
            uint256 balance = pool.lpToken.balanceOf(address(this));
            pool.lpToken.safeTransferFrom(_user, address(this), _amount);
            _amount = pool.lpToken.balanceOf(address(this)) - balance;
        }

        user.amount += _amount;

        _handleDebt(_pid, _user);

        emit Deposit(_user, _pid, _amount);

        return _amount;
    }

    function _handleWithdraw(uint16 _pid, address _user, uint256 _amount) internal virtual returns (uint256) {
        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][_user];

        user.amount -= _amount;
        pool.lpToken.safeTransfer(_user, _amount);

        _handleDebt(_pid, _user);

        emit Withdraw(_user, _pid, _amount);

        return _amount;
    }

    function deposit(uint16 _pid, uint256 _amount) public payable virtual nonReentrant {
        require(_pid < poolInfo.length, 'Invalid Pool');
        _handleRewards(_pid, msg.sender);
        if (_amount != 0) {
            _handleDeposit(_pid, msg.sender, _amount);
        }
    }

    function depositPermit(
        uint16 _pid,
        uint256 _amount,
        uint64 _deadline,
        bytes memory _signature
    ) public virtual {
        (uint8 v, bytes32 r, bytes32 s) = SigLib.toVRS(_signature);

        IERC20Mintable(address(poolInfo[_pid].lpToken)).permit(
            msg.sender,
            address(this),
            _amount,
            uint256(_deadline),
            v,
            r,
            s
        );

        deposit(_pid, _amount);
    }

    function withdraw(uint16 _pid, uint256 _amount) public virtual nonReentrant {
        require(_pid < poolInfo.length, 'Invalid Pool');
        _handleRewards(_pid, msg.sender);
        if (_amount != 0) {
            _handleWithdraw(_pid, msg.sender, _amount);
        }
    }

    function setRewardsPerSec(uint256 _rewardsPerSec) public onlyOwner {
        rewardsPerSec = _rewardsPerSec;
        emit SetRewards(_rewardsPerSec);
    }
}
