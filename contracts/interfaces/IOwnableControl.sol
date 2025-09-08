// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @notice Interface for OwnableControl / Ownable contract
 */
interface IOwnableControl {
    /**
     * @notice Role ID for Subowner
     * @dev keccak256(abi.encode(uint256(keccak256("openzeppelin.storage.AccessControl.DEFAULT_SUBOWNER_ROLE")) - 1)) & ~bytes32(uint256(0xff))
     */
    function DEFAULT_SUBOWNER_ROLE() external view returns (bytes32);

    /**
     * @notice The caller account is not authorized to perform an operation.
     * @param account Rejected account
     */
    error OwnableUnauthorizedAccount(address account);

    /**
     * @notice The owner is not a valid owner account. (eg. `address(0)`)
     * @param account Rejected owner
     */
    error OwnableInvalidOwner(address account);

    /**
     * @notice Reverts when function overrides are not working well
     */
    error OwnableInvalidOp();

    /**
     * @notice Ownership transfer event compatible with Ownable
     * @param previousOwner Prev owner address
     * @param newOwner New owner address
     */
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    /**
     * @notice Emitted when the Subowner role is granted to a new account
     * @param newSubowner New Subowner account
     */
    event SubownerAdded(address indexed newSubowner);

    /**
     * @notice Emitted when the Subowner role is revoked for the account
     * @param oldSubowner Revoked Subowner account
     */
    event SubownerRemoved(address indexed oldSubowner);

    /**
     * @notice Returns the address of the current owner.
     * @return owner Current owner address
     */
    function owner() external view returns (address);

    /**
     * @notice Renounce ownership and allow ownership functions to be called by anyone
     * @dev Leaves the contract without owner. It will not be possible to call
     * `onlyOwner` functions. Can only be called by the current owner.
     *
     * NOTE: Renouncing ownership will leave the contract without an owner,
     * thereby enabling any functionality to anyone that is only available to the owner.
     */
    function renounceOwnership() external;

    /**
     * @notice Transfers ownership of the contract to a new account (`newOwner`).
     * @param newOwner New owner to transfer ownership
     * @dev Can only be called by the current owner.
     */
    function transferOwnership(address newOwner) external;

    /**
     * @notice Returns an array of Subowners
     * @return subowners List of subowners
     */
    function subowners() external view returns (address[] memory);

    /**
     * @notice Returns true if the account is granted as a subowner
     * @param account Account to query for
     * @return isSubowner True if the account is subowner
     */
    function isSubowner(address account) external view returns (bool);

    /**
     * @notice Grant new address as Subowner role
     * @param newSubowner New address to grant Subowner role
     */
    function addSubowner(address newSubowner) external;

    /**
     * @notice Revoke Subowner role for address
     * @param oldSubowner Address to revoke Subowner role
     */
    function removeSubowner(address oldSubowner) external;
}
