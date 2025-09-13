// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { IERC165 } from '@openzeppelin/contracts/utils/introspection/IERC165.sol';

/**
 * @notice Interface of the Account Lockable standard
 */
interface ILockable is IERC165 {
    /**
     * @notice Emitted when a new account is locked til a certain timestamp
     * @param owner Locked address
     * @param lockUntil Locked timestamp
     */
    event Lock(address indexed owner, uint48 lockUntil);

    /**
     * @notice Emitted when a new account is locked by another contract til a certain timestamp
     * @param owner Locked address
     * @param lockBy Locking address
     * @param lockUntil Locked timestamp
     */
    event LockedBy(address indexed owner, address indexed lockBy, uint48 lockUntil);

    /**
     * @dev Permit deadline has expired.
     */
    error LockedExpiredSignature(uint48 deadline);

    /**
     * @dev Mismatched signature.
     */
    error LockedInvalidSigner(address signer, address owner);

    /**
     * @notice Error when user tries to transfer in a locked state
     * @param owner Locked address
     */
    error AccountLocked(address owner);

    /**
     * @notice Returns the locked timestamp of the account
     * @param owner Address to query for locked state
     */
    function lockedUntil(address owner) external view returns (uint48 timestamp);

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
    function isLockedUntil(address owner, uint48 until) external view returns (bool);

    /**
     * @notice Lock the caller's account for a specific period
     * @param until Timestamp to lock account for a specific period
     * @dev Similar to transfer function
     */
    function lock(uint48 until) external;

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
        uint48 lockUntil,
        uint48 deadline,
        bytes memory signature
    ) external;
}
