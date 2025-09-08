// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {
    ERC20PermitUpgradeable,
    ECDSA
} from '@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20PermitUpgradeable.sol';
import { ERC165 } from '@openzeppelin/contracts/utils/introspection/ERC165.sol';
import { IERC20Lockable } from '../interfaces/IERC20Lockable.sol';

/**
 * @notice ERC20 with self-custodial transfer locking capabilities
 * @dev Allows locking transfers until a certain time for various use cases
 * ( on-chain votes, staking, blacklisting - only if it has a certain function implemented )
 */
abstract contract ERC20Lockable is ERC20PermitUpgradeable, ERC165 {
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
     * @notice Typehash for signing EIP-712 message to lock account
     * @dev keccak256('Lock(address owner,address lockBy,uint256 lockUntil,uint256 nonce,uint256 deadline)');
     */
    bytes32 public constant LOCK_TYPEHASH =
        0x3ddd25133c30c8d0cef0c7849c82f5844f0de365b4805b36bc2caa8159dfcbbd;

    /**
     * @notice Returns the locked timestamp of the account
     * @dev account (address) => timestamp (uint256)
     */
    mapping(address => uint256) public lockedUntil;

    /**
     * @notice Error when user tries to transfer in a locked state
     * @param owner Locked address
     */
    error ERC20Locked(address owner);

    /**
     * @dev Overriding _update function to check if from address is in locked state
     */
    function _update(address from, address to, uint256 value) internal virtual override {
        if (from != address(0) && isLocked(from)) {
            revert ERC20Locked(from);
        }
        super._update(from, to, value);
    }

    /**
     * @notice Returns the balance of currently locked tokens that belongs to the owner
     * @param owner Owner of the locked tokens
     * @return lockedBalance locked balance in wei (0 if either balance is zero or unlocked)
     */
    function lockedBalance(address owner) public view virtual returns (uint256) {
        return isLocked(owner) ? balanceOf(owner) : 0;
    }

    /**
     * @notice Returns the balance of locked tokens for a specific period
     * @param owner Owner of the locked tokens
     * @param until Timestamp for locked period
     * @return lockedBalance locked balance in wei (0 if either balance is zero or unlocked)
     */
    function lockedBalanceUntil(address owner, uint256 until) public view virtual returns (uint256) {
        return isLockedUntil(owner, until) ? balanceOf(owner) : 0;
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
        return lockedUntil[owner] >= until;
    }

    /**
     * @notice Internal function to lock transfers for an account
     * @param owner Address to change the locked state
     * @param until Timestamp to lock account for a specific period
     * @dev ( Can only mutate locked state for future dates to prevent lock being unlocked earlier )
     * ( To lock indefinitely, use type(uint256).max for until from parent contracts (to blacklist address, etc) )
     */
    function _lock(address owner, uint256 until) internal virtual {
        if (lockedUntil[owner] < until) {
            lockedUntil[owner] = until;
            emit Lock(owner, until);
        }
    }

    /**
     * @notice Can unlock accounts immediately
     * @param owner Address to change the locked state
     */
    function _unlock(address owner) internal virtual {
        lockedUntil[owner] = 0;
        emit Lock(owner, 0);
    }

    /**
     * @notice Lock the caller's account for a specific period
     * @param until Timestamp to lock account for a specific period
     * @dev Similar to transfer function
     */
    function lock(uint256 until) external virtual {
        _lock(msg.sender, until);
    }

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
    ) public virtual {
        if (block.timestamp > deadline) {
            revert ERC2612ExpiredSignature(deadline);
        }

        address signer = ECDSA.recover(
            _hashTypedDataV4(
                keccak256(abi.encode(LOCK_TYPEHASH, owner, lockBy, lockUntil, _useNonce(owner), deadline))
            ),
            signature
        );

        if (signer != owner) {
            revert ERC2612InvalidSigner(signer, owner);
        }

        _lock(owner, lockUntil);

        emit LockedBy(owner, lockBy, lockUntil);
    }

    /**
     * @notice Boolean to check if the contract is compatible with the ERC20Lockable standard
     * @param interfaceId InterfaceId of ERC20Lockable
     * @return support True if it is the ERC20Lockable interface id
     */
    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {
        return interfaceId == type(IERC20Lockable).interfaceId || super.supportsInterface(interfaceId);
    }
}
