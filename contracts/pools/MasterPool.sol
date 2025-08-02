// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { IERC20Permit } from '@openzeppelin/contracts/token/ERC20/extensions/IERC20Permit.sol';
import { Clones } from '@openzeppelin/contracts/proxy/Clones.sol';
import { IERC4626Pool } from '../interfaces/IERC4626Pool.sol';
import { SigLib } from '../libraries/SigLib.sol';
import { MasterChef } from './MasterChef.sol';

/**
 * @title MasterPool
 * @author Arowana Finance
 * @dev MasterChef that mints / burns corresponding LP tokens per deposit
 */
contract MasterPool is MasterChef {
    event SetPoolToken(uint256 indexed pid, address poolToken);

    address public poolTokenImplementation;

    mapping(uint256 => IERC4626Pool) public poolTokens;

    mapping(address => uint256) public poolIdByTokens;

    modifier onlyPoolTokens() {
        require(hasPoolToken(msg.sender), 'NOT_POOL');
        _;
    }

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
    ) external virtual initializer {
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

        poolTokenImplementation = _poolTokenImplementation;
    }

    function hasPoolToken(address _poolToken) public view returns (bool) {
        return poolIdByTokens[_poolToken] != 0 || address(poolTokens[0]) == _poolToken;
    }

    function add(
        address _lpToken,
        uint256 _allocPoint,
        uint256 _startBlock,
        uint256 _endBlock,
        bool _withUpdate
    ) public virtual override onlyOwner returns (uint256 _pid) {
        _pid = super.add(_lpToken, _allocPoint, _startBlock, _endBlock, _withUpdate);

        address _poolToken = Clones.cloneDeterministic(
            poolTokenImplementation,
            keccak256(abi.encodePacked(_lpToken))
        );

        IERC4626Pool poolToken = IERC4626Pool(_poolToken);

        poolToken.initialize(address(this), _pid, _lpToken, address(rewardToken));

        poolTokens[_pid] = poolToken;
        poolIdByTokens[_poolToken] = _pid;

        emit SetPoolToken(_pid, _poolToken);
    }

    function _handleDeposit(
        uint256 _pid,
        address _user,
        uint256 _amount
    ) internal virtual override returns (uint256) {
        uint256 amount = super._handleDeposit(_pid, _user, _amount);

        poolTokens[_pid].masterMint(_user, amount);

        return amount;
    }

    function _handleWithdraw(
        uint256 _pid,
        address _user,
        uint256 _amount
    ) internal virtual override returns (uint256) {
        uint256 amount = super._handleWithdraw(_pid, _user, _amount);

        poolTokens[_pid].masterBurn(_user, amount);

        return amount;
    }

    function depositPermit(
        uint256 _pid,
        uint256 _amount,
        uint256 _deadline,
        bytes memory _signature
    ) public virtual {
        (uint8 v, bytes32 r, bytes32 s) = SigLib.toVRS(_signature);

        IERC20Permit(address(poolInfo[_pid].lpToken)).permit(
            msg.sender,
            address(this),
            _amount,
            _deadline,
            v,
            r,
            s
        );

        deposit(_pid, _amount);
    }

    function poolDeposit(address _user, uint256 _amount) external virtual onlyPoolTokens {
        uint256 _pid = poolIdByTokens[msg.sender];
        _handleReward(_pid, _user);
        if (_amount != 0) {
            _handleDeposit(_pid, _user, _amount);
        }
    }

    function poolWithdraw(address _user, uint256 _amount) external virtual onlyPoolTokens {
        uint256 _pid = poolIdByTokens[msg.sender];
        _handleReward(_pid, _user);
        if (_amount != 0) {
            _handleWithdraw(_pid, _user, _amount);
        }
    }

    function _handleRewardNative(uint256 _pid, address _user) internal virtual {
        PoolInfo storage pool = poolInfo[_pid];
        UserInfo storage user = userInfo[_pid][_user];
        updatePool(_pid);
        if (user.amount != 0) {
            uint256 pending = ((user.amount * pool.accRewardPerShare) / 1e12) - user.rewardDebt;
            if (pending != 0) {
                user.amount += pending;
                poolTokens[_pid].masterMint(_user, pending);
                emit Deposit(_user, _pid, pending);
            }
        }
        _handleDebt(_pid, _user);
    }

    function poolMint(address from) external virtual onlyPoolTokens {
        uint256 _pid = poolIdByTokens[msg.sender];

        if (address(poolInfo[_pid].lpToken) != address(rewardToken)) {
            _handleReward(_pid, from);
        } else {
            _handleRewardNative(_pid, from);
        }
    }

    function poolTransfer(address _from, address _to, uint256 value) external virtual onlyPoolTokens {
        uint256 _pid = poolIdByTokens[msg.sender];

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
}
