// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @notice Interface of InitializableProxy based on ERC-1967 and OpenZeppelin's Proxy contract
 * @dev Provides view-only functions that give the current implementation and proxyAdmin for better transparency
 */
interface IInitializableProxy {
    /**
     * @notice Emitted when the proxy description has changed
     * @param description New proxy description in string
     */
    event DescriptionChanged(string description);

    /**
     * @dev Allows native ETH deposits and would be handled by implementation contract
     */
    receive() external payable;

    /**
     * @dev Fallback function that delegates calls to the address returned by `_implementation()`. Will run if no other
     * function in the contract matches the call data.
     */
    fallback() external payable;

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
    ) external payable;

    /**
     * @notice Get current proxy admin
     * @return proxyAdmin Proxy admin address
     */
    function proxyAdmin() external view returns (address);

    /**
     * @notice Get current proxy description
     * @return proxyDescription Proxy description string
     */
    function proxyDescription() external view returns (bytes memory);

    /**
     * @notice Get current proxy implementation
     * @return proxyImplementation Proxy implementation contract
     */
    function implementation() external view returns (address);

    /**
     * @notice Change proxy admin
     * @param newAdmin New proxy admin address
     */
    function changeProxyAdmin(address newAdmin) external;

    /**
     * @notice Change proxy description
     * @param _description New proxy description string
     */
    function changeProxyDescription(string memory _description) external;

    /**
     * @notice Upgrade Proxy implementation with optional upgrader function calls
     * @dev Performs implementation upgrade with additional setup call if data is nonempty.
     * This function is payable only if the setup call is performed, otherwise `msg.value` is rejected
     * to avoid stuck value in the contract.
     *
     * Emits an {IERC1967-Upgraded} event.
     */
    function upgradeToAndCall(address newImplementation, bytes memory data) external payable;
}
