// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title ECDSA signature library to parse signatures on-chain
 */
library SigLib {
    /// @notice Thrown when the passed in signature is not a valid length
    /// @dev ERC-2098 support removed with the same reason OZ removed support
    error InvalidSignatureLength();

    /**
     * @notice Parse v, r, s value from serialized ECDSA signature bytes
     * @dev https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.4.0/contracts/utils/cryptography/ECDSA.sol#L56
     * @param signature The serialized representation of a signed ECDSA signature (Not EIP-2098!)
     */
    function toVRS(bytes memory signature) internal pure returns (uint8 v, bytes32 r, bytes32 s) {
        if (signature.length == 65) {
            // ecrecover takes the signature parameters, and the only way to get them
            // currently is to use assembly.
            assembly ('memory-safe') {
                r := mload(add(signature, 0x20))
                s := mload(add(signature, 0x40))
                v := byte(0, mload(add(signature, 0x60)))
            }
        } else {
            revert InvalidSignatureLength();
        }
    }
}
