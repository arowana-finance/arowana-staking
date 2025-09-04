// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {
    IERC20,
    IERC20Metadata,
    ERC20Upgradeable,
    ERC4626Upgradeable,
    Math,
    SafeERC20
} from '@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC4626Upgradeable.sol';
import { ERC20Lockable } from './ERC20Lockable.sol';
import { IMasterPool } from '../interfaces/IMasterPool.sol';

/**
 * @dev ERC4626Pool is a Vault for MasterChef Pools
 *
 * Note: Assets (deposit amount) and Shares (deposit amount + reward amount) should be 1:1
 *
 * Changes from ERC4626:
 *
 * 1. Shares == Assets (Any shares <-> asset conversion of OZ ERC4626 func is overrided to be 1:1)
 * 2. Balance would grow with accumulated rewards but not actually reflected
 */
contract ERC4626Pool is ERC4626Upgradeable, ERC20Lockable {
    using SafeERC20 for IERC20;

    event InitializedPool(address masterPool, uint16 pid, address asset, address rewardToken);

    IMasterPool public masterPool;

    uint16 public pid;

    IERC20 public rewardToken;

    modifier onlyMasterPool() {
        require(msg.sender == address(masterPool), 'ONLY_MASTER_POOL');
        _;
    }

    /**
     * @notice Disabling initializer for implementation contract
     * @dev Initializer would only work on proxy contract
     * @custom:oz-upgrades-unsafe-allow constructor
     */
    constructor() {
        _disableInitializers();
    }

    function initializeToken(
        address _masterPool,
        uint16 _pid,
        address _asset,
        address _rewardToken
    ) public initializer {
        masterPool = IMasterPool(_masterPool);
        pid = _pid;
        rewardToken = IERC20(_rewardToken);

        string memory symbol = IERC20Metadata(_asset).symbol();
        string memory _name = concat('Staked ', symbol);
        string memory _symbol = concat('st', symbol);

        __ERC20_init(_name, _symbol);
        __ERC20Permit_init(_name);
        __ERC4626_init(IERC20(_asset));

        emit InitializedPool(_masterPool, _pid, _asset, _rewardToken);
    }

    function isRewardNative() public view returns (bool) {
        return asset() == address(rewardToken);
    }

    function sharesOf(address owner) public view returns (uint256) {
        return super.balanceOf(owner);
    }

    function balanceOf(
        address owner
    ) public view virtual override(IERC20, ERC20Upgradeable) returns (uint256) {
        uint256 balance = super.balanceOf(owner);
        if (isRewardNative()) {
            balance += masterPool.pendingRewards(pid, owner);
        }
        return balance;
    }

    function _deposit(
        address caller,
        address receiver,
        uint256 assets,
        uint256 shares
    ) internal virtual override {
        masterPool.poolDeposit(receiver, assets);

        emit Deposit(caller, receiver, assets, shares);
    }

    function _withdraw(
        address caller,
        address receiver,
        address owner,
        uint256 assets,
        uint256 shares
    ) internal virtual override {
        uint256 _sharesOf = sharesOf(owner);
        uint256 _shares = (isRewardNative() && shares > _sharesOf) ? _sharesOf : shares;

        masterPool.poolWithdraw(owner, _shares);

        emit Withdraw(caller, receiver, owner, assets, shares);
    }

    function masterMint(address _user, uint256 _amount) external onlyMasterPool {
        _mint(_user, _amount);
    }

    function masterBurn(address _user, uint256 _amount) external onlyMasterPool {
        _burn(_user, _amount);
    }

    /**
     * Simple override functions
     */
    function totalAssets() public view virtual override returns (uint256) {
        return totalSupply();
    }

    function _convertToShares(
        uint256 assets,
        Math.Rounding
    ) internal pure virtual override returns (uint256) {
        return assets;
    }

    function _convertToAssets(
        uint256 shares,
        Math.Rounding
    ) internal pure virtual override returns (uint256) {
        return shares;
    }

    function decimals() public view virtual override(ERC20Upgradeable, ERC4626Upgradeable) returns (uint8) {
        return ERC4626Upgradeable.decimals();
    }

    function _update(
        address from,
        address to,
        uint256 value
    ) internal virtual override(ERC20Upgradeable, ERC20Lockable) {
        // we credit pending rewards for from
        if (isRewardNative() && from != address(0)) {
            masterPool.poolMint(from);
        }

        ERC20Lockable._update(from, to, value);

        if (from != address(0) && to != address(0) && value != 0) {
            masterPool.poolTransfer(from, to, value);
        }
    }

    function concat(string memory a, string memory b) internal pure returns (string memory) {
        return string(abi.encodePacked(a, b));
    }
}
