// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { ERC165 } from '@openzeppelin/contracts/utils/introspection/ERC165.sol';
import { ILockable } from '../interfaces/ILockable.sol';

abstract contract Lockable is ERC165 {
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

    /// @custom:storage-location LockableStorage
    struct LockableStorage {
        /// @dev Returns the locked timestamp of the account
        mapping(address account => uint48 timestamp) _lockedUntil;
    }

    /**
     * @notice Typehash for signing EIP-712 message to lock account
     * @dev keccak256('Lock(address owner,address lockBy,uint48 lockUntil,uint256 nonce,uint48 deadline)');
     */
    bytes32 public constant LOCK_TYPEHASH =
        0x017c8ff5fcb79b926e5568e4aaadf8e98192f7a5f63a4c18e3e6686c1212b6da;

    // keccak256(abi.encode(uint256(keccak256("Lockable")) - 1)) & ~bytes32(uint256(0xff))
    bytes32 private constant LockableStorageLocation =
        0x0f0dff1d6914bba9be37c82e8318527ba5ab0fb58046a830c549113041588900;

    function _getLockableStorage() internal pure returns (LockableStorage storage $) {
        assembly {
            $.slot := LockableStorageLocation
        }
    }

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
    function lockedUntil(address owner) public view virtual returns (uint48) {
        LockableStorage storage $ = _getLockableStorage();

        return $._lockedUntil[owner];
    }

    /**
     * @notice Returns true if the owner's balance is currently in a locked state
     * @param owner Address to query for locked state
     * @return locked True if locked
     */
    function isLocked(address owner) public view virtual returns (bool) {
        return isLockedUntil(owner, block.timestamp);
    }

    /**
     * @notice Returns true if the owner's balance is locked until a specific timestamp
     * @param owner Address to query for locked state
     * @param until Timestamp to query for locked state
     * @return locked True if locked
     */
    function isLockedUntil(address owner, uint256 until) public view virtual returns (bool) {
        return lockedUntil(owner) >= until;
    }

    /**
     * @notice Internal function to lock transfers for an account
     * @param owner Address to change the locked state
     * @param until Timestamp to lock account for a specific period
     * @dev ( Can only mutate locked state for future dates to prevent lock being unlocked earlier )
     * ( To lock indefinitely, use type(uint48).max for until from parent contracts (to blacklist address, etc) )
     */
    function _lock(address owner, uint48 until) internal virtual {
        LockableStorage storage $ = _getLockableStorage();

        if ($._lockedUntil[owner] < until) {
            $._lockedUntil[owner] = until;
            emit Lock(owner, until);
        }
    }

    /**
     * @notice Can unlock accounts immediately
     * @param owner Address to change the locked state
     */
    function _unlock(address owner) internal virtual {
        LockableStorage storage $ = _getLockableStorage();
        $._lockedUntil[owner] = 0;
        emit Lock(owner, 0);
    }

    /**
     * @notice Lock the caller's account for a specific period
     * @param until Timestamp to lock account for a specific period
     * @dev Similar to transfer function
     * (lockParams: optional params to have when calling lock function - like token balance, etc)
     */
    function lock(uint48 until, bytes memory /*lockParams*/) public virtual {
        _lock(msg.sender, until);
    }

    /**
     * @notice Boolean to check if the contract is compatible with the ERC20Lockable standard
     * @param interfaceId InterfaceId of ERC20Lockable
     * @return support True if it is the ERC20Lockable interface id
     */
    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {
        return interfaceId == type(ILockable).interfaceId || super.supportsInterface(interfaceId);
    }
}
