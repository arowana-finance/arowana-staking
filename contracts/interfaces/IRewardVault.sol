// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IRewardVault {
    function sendTo(address token, address to, uint256 value) external;
}
