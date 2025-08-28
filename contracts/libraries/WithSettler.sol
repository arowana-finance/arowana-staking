// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { EnumerableSet } from '@openzeppelin/contracts/utils/structs/EnumerableSet.sol';
import { Ownable } from './Ownable.sol';

/**
 * @title Multiple account access controller with single role module
 * @notice One owner, multiple settlers (backend EOAs, contracts, etc)
 * @dev The owner could add or remove settlers
 */
contract WithSettler is Ownable {
    using EnumerableSet for EnumerableSet.AddressSet;

    /**
     * @notice Emits when the settler role is granted to the account
     * @param newSettler Account to grant role to
     */
    event AddSettler(address newSettler);
    /**
     * @notice Emits when the settler role is revoked to the account
     * @param oldSettler Account to revoke role from
     */
    event RemoveSettler(address oldSettler);

    /**
     * @notice Backend Settlers to settle order with specific condition
     */
    EnumerableSet.AddressSet internal _settlers;

    /**
     * @dev Modifier that checks that an account has the settler role or allows anyone if there are no settlers
     */
    modifier onlySettlers() {
        require(_settlers.contains(msg.sender) || _settlers.length() == 0, 'NOT_SETTLER');
        _;
    }

    /**
     * @notice Initialize Settler & Ownable contract
     * @param _initOwner New owner & settler to grant permission
     */
    function initializeSettler(address _initOwner) public virtual initializer {
        if (_initOwner == address(0)) {
            _initOwner = msg.sender;
        }
        __Ownable_init(_initOwner);
        _settlers.add(_initOwner);
        emit AddSettler(_initOwner);
    }

    /**
     * @notice View function to list all granted settlers
     * @return settlers Array of settler addresses
     */
    function settlers() public view returns (address[] memory) {
        return _settlers.values();
    }

    /**
     * @notice Grant Settler role to the account
     * @dev Can be only called by an owner
     */
    function addSettler(address _settler) public onlyOwner {
        require(!_settlers.contains(_settler), 'DUPLICATE_SETTLER');
        _settlers.add(_settler);
        emit AddSettler(_settler);
    }

    /**
     * @notice Revoke Settler role from the account
     * @dev Can be only called by an owner
     */
    function removeSettler(address _settler) public onlyOwner {
        require(_settlers.contains(_settler), 'INVALID_SETTLER');
        _settlers.remove(_settler);
        emit RemoveSettler(_settler);
    }
}
