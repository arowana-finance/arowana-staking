// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { IERC165 } from '@openzeppelin/contracts/utils/introspection/IERC165.sol';
import { IERC20Exp } from './IERC20.sol';

/**
 * @notice Interface of the Transfer-lockable standard of ERC20 token
 */
interface IERC20Lockable is IERC20Exp, IERC165 {
    /**
     * @notice Emitted when a new account is locked til a certain timestamp
     * @param owner Locked address
     * @param lockUntil Locked timestamp
     */
    event Lock(address indexed owner, uint256 lockUntil);

    /**
     * @notice Emitted when a new account is locked by another contract til a certain timestamp
     * @param owner Locked address
     * @param lockBy Locking address
     * @param lockUntil Locked timestamp
     */
    event LockedBy(address indexed owner, address indexed lockBy, uint256 lockUntil);

    /**
     * @notice Returns the locked timestamp of the account
     * @dev account (address) => timestamp (uint256)
     */
    function lockedUntil(address account) external view returns (uint256 timestamp);

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

    /**
     * @notice Returns true if the owner's balance is currently in a locked state
     * @param owner Address to query for locked state
     * @return locked True if locked
     */
    function isLocked(address owner) external view returns (bool);

    /**
     * @notice Returns true if the owner's balance is locked until a specific timestamp
     * @param owner Address to query for locked state
     * @param until Timestamp to query for locked state
     * @return locked True if locked
     */
    function isLockedUntil(address owner, uint256 until) external view returns (bool);

    /**
     * @notice Lock the caller's account for a specific period
     * @param until Timestamp to lock account for a specific period
     * @dev Similar to transfer function
     */
    function lock(uint256 until) external;

    /**
     * @notice Lock EOA's account for a specific period by EIP-712 signature
     * @param owner Address to change the locked state
     * @param lockBy Permitted locker address ( contract that requires locked state )
     * @param lockUntil Timestamp to lock the account for a specific period
     * @param deadline Deadline until a signed signature is considered valid
     * @param signature Signed serialized EIP-712 signature
     * @dev Similar to the permit function
     */
    function lockPermit(
        address owner,
        address lockBy,
        uint256 lockUntil,
        uint256 deadline,
        bytes memory signature
    ) external;
}
