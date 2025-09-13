// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {
    ERC20PermitUpgradeable,
    NoncesUpgradeable
} from '@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20PermitUpgradeable.sol';
import { ECDSA } from '@openzeppelin/contracts/utils/cryptography/ECDSA.sol';
import { Lockable } from '../libraries/Lockable.sol';

/**
 * @notice ERC20 with self-custodial transfer locking capabilities
 * @dev Allows locking transfers until a certain time for various use cases
 * ( on-chain votes, staking, blacklisting - only if it has a certain function implemented )
 */
abstract contract ERC20Lockable is ERC20PermitUpgradeable, Lockable {
    /**
     * @notice Lock EOA's account for a specific period by EIP-712 signature
     * @param owner Address to change the locked state
     * @param lockBy Permitted locker address ( contract that requires locked state )
     * @param lockUntil Timestamp to lock the account for a specific period
     * @param deadline Deadline until a signed signature is considered valid
     * @param signature Signed serialized EIP-712 signature
     * @dev Similar to the permit function
     * (lockParams: optional params to have when calling lock function - like token balance, etc)
     */
    function lockPermit(
        address owner,
        address lockBy,
        uint48 lockUntil,
        uint48 deadline,
        bytes memory signature,
        bytes memory /*lockParams*/
    ) public virtual {
        if (block.timestamp > deadline) {
            revert LockedExpiredSignature(deadline);
        }

        address signer = ECDSA.recover(
            _hashTypedDataV4(
                keccak256(abi.encode(LOCK_TYPEHASH, owner, lockBy, lockUntil, _useNonce(owner), deadline))
            ),
            signature
        );

        if (signer != owner) {
            revert LockedInvalidSigner(signer, owner);
        }

        emit LockedBy(owner, lockBy, lockUntil);

        _lock(owner, lockUntil);
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
     * @dev Overriding _update function to check if from address is in locked state
     */
    function _update(address from, address to, uint256 value) internal virtual override {
        if (from != address(0) && isLocked(from)) {
            revert AccountLocked(from);
        }
        super._update(from, to, value);
    }
}
