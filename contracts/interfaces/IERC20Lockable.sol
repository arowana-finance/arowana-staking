// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { IERC165 } from '@openzeppelin/contracts/utils/introspection/IERC165.sol';
import { IERC20Exp } from './IERC20.sol';

interface IERC20Lockable is IERC20Exp, IERC165 {
    event Lock(address indexed owner, uint256 until);
    event LockedBy(address indexed owner, address indexed spender, uint256 until);

    function lockedUntil(address account) external view returns (uint256 timestamp);

    function isLocked(address owner) external view returns (bool);

    function isLockedUntil(address owner, uint256 until) external view returns (bool);

    function lock(uint256 until) external;

    function lockPermit(
        address owner,
        address spender,
        uint256 until,
        uint256 deadline,
        bytes memory signature
    ) external;
}
