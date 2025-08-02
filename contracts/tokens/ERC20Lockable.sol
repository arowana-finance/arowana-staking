// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {
    ERC20PermitUpgradeable,
    ECDSA
} from '@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20PermitUpgradeable.sol';

/**
 * @dev Can lock transfers of specific address, either by user permission or ownership
 *
 * (Useful for stablecoins / governance)
 */
abstract contract ERC20Lockable is ERC20PermitUpgradeable {
    event Lock(address indexed owner, uint256 until);
    event LockedBy(address indexed owner, address indexed spender, uint256 until);

    bytes32 private constant LOCK_TYPEHASH =
        keccak256('Lock(address owner,address spender,uint256 until,uint256 nonce,uint256 deadline)');

    mapping(address => uint256) public lockedUntil;

    error ERC20Locked(address owner);

    /**
     * Override transfer to check if from is in locked state
     */
    function _update(address from, address to, uint256 value) internal virtual override {
        if (isLocked(from)) {
            revert ERC20Locked(from);
        }
        super._update(from, to, value);
    }

    /**
     * Checker function to check if account is locked
     */
    function isLocked(address owner) public view virtual returns (bool) {
        return isLockedUntil(owner, block.timestamp);
    }

    function isLockedUntil(address owner, uint256 until) public view virtual returns (bool) {
        return lockedUntil[owner] >= until;
    }

    /**
     * @dev Internal function to lock transfers for an account
     * ( Can only mutate locked state for future dates to prevent lock being unlocked earlier )
     * ( To lock indefinitely use type(uint256).max for until from parent contracts (to blacklist address, etc) )
     */
    function _lock(address owner, uint256 until) internal virtual {
        if (lockedUntil[owner] < until) {
            lockedUntil[owner] = until;
            emit Lock(owner, until);
        }
    }

    /**
     * @dev Can unlock accounts immediately
     */
    function _unlock(address owner) internal virtual {
        lockedUntil[owner] = 0;
        emit Lock(owner, 0);
    }

    function lock(uint256 until) external virtual {
        _lock(msg.sender, until);
    }

    function lockPermit(
        address owner,
        address spender,
        uint256 until,
        uint256 deadline,
        bytes memory signature
    ) public virtual {
        if (block.timestamp > deadline) {
            revert ERC2612ExpiredSignature(deadline);
        }

        bytes32 structHash = keccak256(
            abi.encode(LOCK_TYPEHASH, owner, spender, until, _useNonce(owner), deadline)
        );

        bytes32 hash = _hashTypedDataV4(structHash);

        address signer = ECDSA.recover(hash, signature);
        if (signer != owner) {
            revert ERC2612InvalidSigner(signer, owner);
        }

        _lock(owner, until);

        emit LockedBy(owner, spender, until);
    }
}
