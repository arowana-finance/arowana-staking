// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { OwnableUpgradeable } from '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';

/**
 * @title Single account access controller module
 * @notice Allows anyone to execute onlyOwner functions if owner == address(0)
 * @dev Inherits Initializable, ContextUpgradeable, and OwnableUpgradeable contracts
 */
abstract contract Ownable is OwnableUpgradeable {
    function _checkOwner() internal view virtual override {
        address _owner = owner();

        if (_owner != msg.sender && _owner != address(0)) {
            revert OwnableUnauthorizedAccount(msg.sender);
        }
    }
}
