// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import { Proxy } from '@openzeppelin/contracts/proxy/Proxy.sol';
import { ERC1967Utils, IERC1967, StorageSlot } from '@openzeppelin/contracts/proxy/ERC1967/ERC1967Utils.sol';

/**
 * @title InitializableProxy
 * @notice ERC1967 Proxy contract with transparent view functions to lookup current proxy admin and proxy implementation
 * @dev Inspired by AAVE's InitializableImmutableAdminUpgradeabilityProxy,
 * https://github.com/aave-dao/aave-v3-origin/blob/v3.3.0/src/contracts/dependencies/openzeppelin/upgradeability/InitializableAdminUpgradeabilityProxy.sol
 * this proxy exports necessary functions to show current admin and implementation for maximal transparency
 */
contract InitializableProxy is Proxy {
    /**
     * @dev keccak256(abi.encodePacked('eip1967.proxy.description')) - 1n
     */
    bytes32 internal constant DESCRIPTION_SLOT =
        0xfcba12fcf625f4823c7c0c86b97ab29721afc9e784836bc00bf04553a0c8dff4;

    /**
     * @notice Emitted when the proxy description has changed
     * @param description New proxy description in string
     */
    event DescriptionChanged(string description);

    /**
     * @dev Modifier that checks that an account either has a proxy admin role or allows anyone if no proxy admin exists
     */
    modifier ifAdmin() {
        require(msg.sender == proxyAdmin() || address(0) == proxyAdmin(), 'NOT_ADMIN');
        _;
    }

    /**
     * @dev Allows native ETH deposits and would be handled by implementation contract
     */
    receive() external payable {
        _fallback();
    }

    /**
     * @notice Initialize proxy contract
     * @param _description Proxy Description in string
     * @param newAdmin Proxy Admin address
     * @param newImplementation Proxy Implementation contract
     * @param data Proxy initialization data to delegate call implementation contract (optional)
     */
    function initializeProxy(
        string memory _description,
        address newAdmin,
        address newImplementation,
        bytes memory data
    ) public payable virtual {
        require(_implementation() == address(0) && proxyAdmin() == address(0), 'ALREADY_INITIALIZED');
        upgradeToAndCall(newImplementation, data);
        changeProxyDescription(_description);
        changeProxyAdmin(newAdmin);
    }

    /**
     * @notice Get current proxy admin
     * @return proxyAdmin Proxy admin address
     */
    function proxyAdmin() public view virtual returns (address) {
        return ERC1967Utils.getAdmin();
    }

    /**
     * @notice Get current proxy description
     * @return proxyDescription Proxy description string
     */
    function proxyDescription() public view virtual returns (string memory) {
        return StorageSlot.getStringSlot(DESCRIPTION_SLOT).value;
    }

    /**
     * @notice Get current proxy implementation
     * @return proxyImplementation Proxy implementation contract
     */
    function implementation() public view returns (address) {
        return _implementation();
    }

    /**
     * @dev Overrides _implementation function of inherited Proxy contract
     */
    function _implementation() internal view virtual override returns (address) {
        return ERC1967Utils.getImplementation();
    }

    /**
     * @notice Change proxy admin
     * @param newAdmin New proxy admin address
     */
    function changeProxyAdmin(address newAdmin) public virtual ifAdmin {
        ERC1967Utils.changeAdmin(newAdmin);
    }

    /**
     * @notice Change proxy description
     * @param _description New proxy description string
     */
    function changeProxyDescription(string memory _description) public virtual ifAdmin {
        if (bytes(_description).length != 0) {
            StorageSlot.getStringSlot(DESCRIPTION_SLOT).value = _description;
            emit DescriptionChanged(_description);
        }
    }

    /**
     * @notice Upgrade Proxy implementation with optional upgrader function calls
     * @dev Performs implementation upgrade with additional setup call if data is nonempty.
     * This function is payable only if the setup call is performed, otherwise `msg.value` is rejected
     * to avoid stuck value in the contract.
     *
     * Emits an {IERC1967-Upgraded} event.
     */
    function upgradeToAndCall(address newImplementation, bytes memory data) public payable virtual ifAdmin {
        // Stores a new address in the ERC-1967 implementation slot.
        if (newImplementation.code.length == 0) {
            revert ERC1967Utils.ERC1967InvalidImplementation(newImplementation);
        }
        StorageSlot.getAddressSlot(ERC1967Utils.IMPLEMENTATION_SLOT).value = newImplementation;

        emit IERC1967.Upgraded(newImplementation);

        // Execute delegation call required for proxy upgrades / initialization (to fill up storage value, etc)
        if (data.length != 0) {
            (bool success, bytes memory returnData) = newImplementation.delegatecall(data);

            if (!success) {
                assembly {
                    revert(add(32, returnData), mload(returnData))
                }
            }
        } else {
            // Reverts if `msg.value` is not zero. It can be used to avoid `msg.value` stuck in the contract
            // if an upgrade doesn't perform an initialization call.
            if (msg.value > 0) {
                revert ERC1967Utils.ERC1967NonPayable();
            }
        }
    }
}
