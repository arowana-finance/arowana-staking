// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { SafeERC20 } from '@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol';
import { Initializable } from '@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol';
import { OwnableUpgradeable } from '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import { ReentrancyGuardUpgradeable } from '@openzeppelin/contracts-upgradeable/utils/ReentrancyGuardUpgradeable.sol';
import { IWETH } from '../interfaces/IWETH.sol';
import { IERC20, IERC20Mintable } from '../interfaces/IERC20.sol';
import { IRewardVault } from '../interfaces/IRewardVault.sol';

/**
 * @title MasterChef
 * @author Arowana Finance, PancakeSwap and SushiSwap
 * @dev MasterChef Staking Pool with function modularization and flexible rewards per block
 *
 * 1. Safe to use behind proxy implementation
 * 2. emergencyWithdraw function is excluded as it expects to work behind proxy (and since it is insecure)
 * 3. Contract Functionality should match with PancakeSwap's MasterChef excluding SyrupPool related functions
 * https://github.com/pancakeswap/pancake-smart-contracts/blob/master/projects/farms-pools/contracts/MasterChef.sol#L34
 */
contract MasterChef is Initializable, OwnableUpgradeable, ReentrancyGuardUpgradeable {
    using SafeERC20 for IERC20;

    event InitializedChef(address WETH, address rewardToken, address rewardVault);

    event Deposit(address indexed user, uint256 indexed pid, uint256 amount);
    event Withdraw(address indexed user, uint256 indexed pid, uint256 amount);

    event SetReward(uint256 newReward);
    event SetPool(
        uint256 indexed pid,
        address indexed lpToken,
        uint256 newAllocPoint,
        uint256 startBlock,
        uint256 endBlock
    );

    /// @dev Info of each user.
    struct UserInfo {
        uint256 amount; // How many LP tokens the user has provided.
        uint256 rewardDebt; // Reward debt. See explanation below.
        //
        // We do some fancy math here. Basically, any point in time, the amount of rewards
        // entitled to a user but is pending to be distributed is:
        //
        //   pending reward = (user.amount * pool.accRewardPerShare) - user.rewardDebt
        //
        // Whenever a user deposits or withdraws LP tokens to a pool. Here's what happens:
        //   1. The pool's `accRewardPerShare` (and `lastRewardBlock`) gets updated.
        //   2. User receives the pending reward sent to his/her address.
        //   3. User's `amount` gets updated.
        //   4. User's `rewardDebt` gets updated.
    }

    /// @dev Info of each pool.
    struct PoolInfo {
        IERC20 lpToken; // Address of LP token contract.
        uint256 allocPoint; // How many allocation points assigned to this pool. rewards to distribute per block.
        uint256 startBlock; // Block to start reward calculation of the pool.
        uint256 endBlock; // Block to end reward calculation of the pool.
        uint256 lastRewardBlock; // Last block number that rewards distribution occurs.
        uint256 accRewardPerShare; // Accumulated rewards per share, times 1e12. See below.
    }

    IWETH public WETH;

    /// @dev Reward Token
    IERC20Mintable public rewardToken;
    /// @dev Reward per block
    uint256 public rewardPerBlock;
    /// @dev Reward vault
    IRewardVault public rewardVault;

    /// @dev pool id
    mapping(address => uint256) public poolId;
    /// @dev Info of each pool
    PoolInfo[] public poolInfo;
    /// @dev Info of each user that stakes LP tokens.
    mapping(uint256 => mapping(address => UserInfo)) public userInfo;
    /// @dev Total allocation points. Must be the sum of all allocation points in all pools.
    uint256 public totalAllocPoint;

    /// @dev Receive ETH from WETH for withdrawal
    receive() external payable {
        if (msg.sender == address(WETH)) {
            return;
        }
        if (hasPool(address(WETH))) {
            deposit(poolId[address(WETH)], msg.value);
        }
    }

    function initialize(
        address _owner,
        address _WETH,
        address _rewardToken,
        uint256 _rewardPerBlock,
        address _rewardVault,
        uint256 _startBlock,
        uint256 _endBlock,
        bool addPool
    ) public virtual initializer {
        _initialize(
            _owner,
            _WETH,
            _rewardToken,
            _rewardPerBlock,
            _rewardVault,
            _startBlock,
            _endBlock,
            addPool
        );
    }

    function _initialize(
        address _owner,
        address _WETH,
        address _rewardToken,
        uint256 _rewardPerBlock,
        address _rewardVault,
        uint256 _startBlock,
        uint256 _endBlock,
        bool addPool
    ) internal {
        __Ownable_init(_owner);
        __ReentrancyGuard_init();

        WETH = IWETH(_WETH);
        rewardToken = IERC20Mintable(_rewardToken);
        rewardPerBlock = _rewardPerBlock;
        rewardVault = IRewardVault(_rewardVault);

        emit SetReward(_rewardPerBlock);
        emit InitializedChef(_WETH, _rewardToken, _rewardVault);

        // Add reference pool (should be disabled for production)
        if (addPool) {
            uint256 pool0Alloc = 1000;
            totalAllocPoint = pool0Alloc;
            poolId[_rewardToken] = poolInfo.length;
            poolInfo.push(
                PoolInfo({
                    lpToken: IERC20(_rewardToken),
                    allocPoint: pool0Alloc,
                    startBlock: _startBlock,
                    endBlock: _endBlock,
                    lastRewardBlock: 0,
                    accRewardPerShare: 0
                })
            );

            emit SetPool(0, _rewardToken, pool0Alloc, _startBlock, _endBlock);
        }
    }

    function poolLength() public view returns (uint256) {
        return poolInfo.length;
    }

    function hasPool(address _lpToken) public view returns (bool) {
        return poolId[_lpToken] != 0 || (poolInfo.length == 1 && address(poolInfo[0].lpToken) == _lpToken);
    }

    /// @dev Add a new LP to the pool. Can only be called by the owner
    function add(
        address _lpToken,
        uint256 _allocPoint,
        uint256 _startBlock,
        uint256 _endBlock,
        bool _withUpdate
    ) public virtual onlyOwner returns (uint256 _pid) {
        require(!hasPool(_lpToken), 'Duplicated Pool');
        if (_withUpdate) {
            massUpdatePools();
        }

        _pid = poolInfo.length;

        totalAllocPoint += _allocPoint;

        poolId[_lpToken] = _pid;

        poolInfo.push(
            PoolInfo({
                lpToken: IERC20(_lpToken),
                allocPoint: _allocPoint,
                startBlock: _startBlock,
                endBlock: _endBlock,
                lastRewardBlock: 0,
                accRewardPerShare: 0
            })
        );

        emit SetPool(_pid, _lpToken, _allocPoint, _startBlock, _endBlock);
    }

    /// @dev Update the given pool. Can only be called by the owner.
    function set(
        uint256 _pid,
        uint256 _allocPoint,
        uint256 _startBlock,
        uint256 _endBlock,
        bool _withUpdate
    ) public virtual onlyOwner {
        require(_pid < poolInfo.length, 'Invalid Pool');
        if (_withUpdate) {
            massUpdatePools();
        }
        totalAllocPoint = totalAllocPoint - poolInfo[_pid].allocPoint + _allocPoint;
        poolInfo[_pid].allocPoint = _allocPoint;
        poolInfo[_pid].startBlock = _startBlock;
        poolInfo[_pid].endBlock = _endBlock;

        emit SetPool(_pid, address(poolInfo[_pid].lpToken), _allocPoint, _startBlock, _endBlock);
    }

    /// @dev Return reward multiplier over the given _fromBlock to _toBlock block.
    function getMultiplier(
        uint256 _pid,
        uint256 _fromBlock,
        uint256 _toBlock
    ) public view virtual returns (uint256) {
        PoolInfo memory pool = poolInfo[_pid];
        if (rewardPerBlock == 0 || pool.allocPoint == 0 || totalAllocPoint == 0) {
            return 0;
        } else if (_fromBlock >= _toBlock) {
            return 0;
        } else if (_toBlock <= pool.startBlock) {
            return 0;
        } else if (_fromBlock <= pool.startBlock && _toBlock <= pool.endBlock) {
            return _toBlock - pool.startBlock;
        } else if (_fromBlock <= pool.startBlock && _toBlock > pool.endBlock) {
            return pool.endBlock - pool.startBlock;
        } else if (_fromBlock > pool.startBlock && _toBlock <= pool.endBlock) {
            return _toBlock - _fromBlock;
        } else if (_fromBlock <= pool.endBlock && _toBlock > pool.endBlock) {
            return pool.endBlock - _fromBlock;
        } else {
            return 0;
        }
    }

    function getBlockRewardPerShare(uint256 _pid) public view virtual returns (uint256) {
        PoolInfo memory pool = poolInfo[_pid];
        uint256 accRewardPerShare = pool.accRewardPerShare;
        uint256 lpSupply = pool.lpToken.balanceOf(address(this));
        uint256 multiplier = getMultiplier(_pid, pool.lastRewardBlock, block.number);
        if (lpSupply != 0 && multiplier != 0) {
            uint256 rewards = (multiplier * rewardPerBlock * pool.allocPoint) / totalAllocPoint;
            accRewardPerShare += (rewards * 1e12) / lpSupply;
        }
        return accRewardPerShare;
    }

    /// @dev View function to see pending rewards on frontend.
    function pendingRewards(uint256 _pid, address _user) public view virtual returns (uint256) {
        UserInfo storage user = userInfo[_pid][_user];
        return ((user.amount * getBlockRewardPerShare(_pid)) / 1e12) - user.rewardDebt;
    }

    /// @dev Update reward variables for all pools. Be careful of gas spending!
    function massUpdatePools() public {
        uint256 length = poolInfo.length;
        for (uint256 pid = 0; pid < length; ++pid) {
            updatePool(pid);
        }
    }

    /// @dev Update reward variables of the given pool to be up-to-date.
    function updatePool(uint256 _pid) public virtual {
        PoolInfo storage pool = poolInfo[_pid];
        pool.accRewardPerShare = getBlockRewardPerShare(_pid);
        pool.lastRewardBlock = block.number;
    }

    function _handleReward(uint256 _pid, address _user) internal virtual {
        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][_user];
        updatePool(_pid);
        if (user.amount != 0) {
            uint256 pending = ((user.amount * pool.accRewardPerShare) / 1e12) - user.rewardDebt;
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

    function _handleDebt(uint256 _pid, address _user) internal virtual {
        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][_user];
        user.rewardDebt = (user.amount * pool.accRewardPerShare) / 1e12;
    }

    function _handleDeposit(uint256 _pid, address _user, uint256 _amount) internal virtual returns (uint256) {
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

    function _handleWithdraw(
        uint256 _pid,
        address _user,
        uint256 _amount
    ) internal virtual returns (uint256) {
        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][_user];

        user.amount -= _amount;
        pool.lpToken.safeTransfer(_user, _amount);

        _handleDebt(_pid, _user);

        emit Withdraw(_user, _pid, _amount);

        return _amount;
    }

    function deposit(uint256 _pid, uint256 _amount) public payable virtual nonReentrant {
        require(_pid < poolInfo.length, 'Invalid Pool');
        _handleReward(_pid, msg.sender);
        if (_amount != 0) {
            _handleDeposit(_pid, msg.sender, _amount);
        }
    }

    function withdraw(uint256 _pid, uint256 _amount) public virtual nonReentrant {
        require(_pid < poolInfo.length, 'Invalid Pool');
        _handleReward(_pid, msg.sender);
        if (_amount != 0) {
            _handleWithdraw(_pid, msg.sender, _amount);
        }
    }

    function updateRewardPerBlock(uint256 newBlockReward) external onlyOwner {
        rewardPerBlock = newBlockReward;
        emit SetReward(newBlockReward);
    }
}
