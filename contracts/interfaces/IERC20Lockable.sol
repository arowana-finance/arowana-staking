// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { IERC20Exp } from './IERC20.sol';
import { ILockable } from './ILockable.sol';

/**
 * @notice Interface of the Transfer-lockable standard of ERC20 token
 */
interface IERC20Lockable is IERC20Exp, ILockable {
    /**
     * @notice Returns the balance of currently locked tokens that belongs to the owner
     * @param owner Owner of the locked tokens
     * @return lockedBalance locked balance in wei (0 if either balance is zero or unlocked)
     */
    function lockedBalance(address owner) external view returns (uint256);

    /**
     * @notice Returns the balance of locked tokens for a specific period
     * @param owner Owner of the locked tokens
     * @param until Timestamp for locked period
     * @return lockedBalance locked balance in wei (0 if either balance is zero or unlocked)
     */
    function lockedBalanceUntil(address owner, uint256 until) external view returns (uint256);
}
