// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { IERC20Exp } from './IERC20.sol';
import { ILockable } from './ILockable.sol';

/**
 * @notice Interface of the Transfer-lockable standard of ERC20 token
 */
interface IERC20Lockable is IERC20Exp, ILockable {
    /**
     * @notice Lock EOA's account for a specific period by EIP-712 signature
     * @param owner Address to change the locked state
     * @param lockBy Permitted locker address ( contract that requires locked state )
     * @param lockUntil Timestamp to lock the account for a specific period
     * @param deadline Deadline until a signed signature is considered valid
     * @param signature Signed serialized EIP-712 signature
     * @param lockParams optional params to have when calling lock function - like token balance, etc
     * @dev Similar to the permit function
     */
    function lockPermit(
        address owner,
        address lockBy,
        uint48 lockUntil,
        uint48 deadline,
        bytes memory signature,
        bytes memory lockParams
    ) external;

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
