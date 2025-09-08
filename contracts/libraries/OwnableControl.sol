// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { AccessControlEnumerableUpgradeable } from '@openzeppelin/contracts-upgradeable/access/extensions/AccessControlEnumerableUpgradeable.sol';

/**
 * @notice AccessControl with Ownable interface
 * @dev Have two roles by default, Owner and Subowner.
 * Owner uses the DEFAULT_ADMIN_ROLE key, and Subowner permission is granted for Subowners and the owner.
 * Owner can be only one, while there could be many Subowners, like any other roles.
 */
abstract contract OwnableControl is AccessControlEnumerableUpgradeable {
    /**
     * @notice Role ID for Subowner
     * @dev keccak256(abi.encode(uint256(keccak256("openzeppelin.storage.AccessControl.DEFAULT_SUBOWNER_ROLE")) - 1)) & ~bytes32(uint256(0xff))
     */
    bytes32 public constant DEFAULT_SUBOWNER_ROLE =
        0xc15dd078e4e39310dfccaa3c336166b52c3edd34b05da2d3601e09db0f714000;

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
     * @notice Initializes the contract, setting the address provided by the deployer as the initial owner.
     * @param initialOwner New Owner address
     */
    function __Ownable_init(address initialOwner) internal onlyInitializing {
        if (initialOwner == address(0)) {
            revert OwnableInvalidOwner(address(0));
        }
        _grantRole(DEFAULT_ADMIN_ROLE, initialOwner);
    }

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        _checkOwner();
        _;
    }

    /**
     * @dev Throws if called by any account other than the subowner or owner.
     */
    modifier onlySubowner() {
        _checkSubowner();
        _;
    }

    /**
     * @notice Throws if the sender is not the owner.
     */
    function _checkOwner() internal view virtual {
        address _owner = owner();

        if (_owner != msg.sender && _owner != address(0)) {
            revert OwnableUnauthorizedAccount(msg.sender);
        }
    }

    /**
     * @notice Throws if the sender is not the subowner or owner.
     */
    function _checkSubowner() internal view virtual {
        address _owner = owner();

        if (!isSubowner(msg.sender) && _owner != msg.sender && _owner != address(0)) {
            revert OwnableUnauthorizedAccount(msg.sender);
        }
    }

    /**
     * @notice Returns the address of the current owner.
     * @return owner Current owner address
     */
    function owner() public view virtual returns (address) {
        address[] memory owners = getRoleMembers(DEFAULT_ADMIN_ROLE);

        return owners.length != 0 ? owners[0] : address(0);
    }

    /**
     * @notice Renounce ownership and allow ownership functions to be called by anyone
     * @dev Leaves the contract without owner. It will not be possible to call
     * `onlyOwner` functions. Can only be called by the current owner.
     *
     * NOTE: Renouncing ownership will leave the contract without an owner,
     * thereby enabling any functionality to anyone that is only available to the owner.
     */
    function renounceOwnership() public virtual onlyOwner {
        if (!_grantRole(DEFAULT_ADMIN_ROLE, address(0))) {
            revert OwnableInvalidOp();
        }
    }

    /**
     * @notice Transfers ownership of the contract to a new account (`newOwner`).
     * @param newOwner New owner to transfer ownership
     * @dev Can only be called by the current owner.
     */
    function transferOwnership(address newOwner) public virtual onlyOwner {
        if (newOwner == address(0)) {
            revert OwnableInvalidOwner(address(0));
        }

        if (!_grantRole(DEFAULT_ADMIN_ROLE, newOwner)) {
            revert OwnableInvalidOp();
        }
    }

    /**
     * @notice Grant a specific role to the account
     * @param role Bytes32 encoded role id
     * @param account Account to grant role
     * @return granted True if role is added to account (false if an account already has a specific role)
     * @dev Overridden to control owner role, returns true if the role was newly granted
     */
    function _grantRole(bytes32 role, address account) internal virtual override returns (bool granted) {
        address prevOwner;

        // Revoke past owner as it should be only one
        if (role == DEFAULT_ADMIN_ROLE) {
            prevOwner = owner();

            if (prevOwner != address(0) && !_revokeRole(DEFAULT_ADMIN_ROLE, prevOwner)) {
                revert OwnableInvalidOp();
            }
        }

        granted = super._grantRole(role, account);

        if (role == DEFAULT_ADMIN_ROLE && granted) {
            emit OwnershipTransferred(prevOwner, account);
        }

        if (role == DEFAULT_SUBOWNER_ROLE && granted) {
            emit SubownerAdded(account);
        }
    }

    /**
     * @notice Revoke a specific role from the account
     * @param role Bytes32 encoded role id
     * @param account Account to revoke role
     * @return revoked True if role is removed from the account
     * @dev Overriden to emit additional events
     */
    function _revokeRole(bytes32 role, address account) internal virtual override returns (bool revoked) {
        revoked = super._revokeRole(role, account);

        if (role == DEFAULT_SUBOWNER_ROLE && revoked) {
            emit SubownerRemoved(account);
        }
    }

    /**
     * @notice Returns an array of Subowners
     * @return subowners List of subowners
     */
    function subowners() public view virtual returns (address[] memory) {
        return getRoleMembers(DEFAULT_SUBOWNER_ROLE);
    }

    /**
     * @notice Returns true if the account is granted as a subowner
     * @param account Account to query for
     * @return isSubowner True if the account is subowner
     */
    function isSubowner(address account) public view virtual returns (bool) {
        return hasRole(DEFAULT_SUBOWNER_ROLE, account);
    }

    /**
     * @notice Grant new address as Subowner role
     * @param newSubowner New address to grant Subowner role
     */
    function addSubowner(address newSubowner) public virtual onlyOwner {
        if (newSubowner == address(0)) {
            revert OwnableInvalidOwner(address(0));
        }

        if (!_grantRole(DEFAULT_SUBOWNER_ROLE, newSubowner)) {
            revert OwnableInvalidOp();
        }
    }

    /**
     * @notice Revoke Subowner role for address
     * @param oldSubowner Address to revoke Subowner role
     */
    function removeSubowner(address oldSubowner) public virtual onlyOwner {
        if (oldSubowner == address(0)) {
            revert OwnableInvalidOwner(address(0));
        }

        if (!_revokeRole(DEFAULT_SUBOWNER_ROLE, oldSubowner)) {
            revert OwnableInvalidOp();
        }
    }
}
