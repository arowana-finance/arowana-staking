// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { IERC20Exp } from './IERC20.sol';
import { IERC4626 } from './IERC4626.sol';

interface IERC4626Pool is IERC20Exp, IERC4626 {
    function initializeToken(address _masterPool, uint16 _pid, address _asset, address _rewardToken) external;

    function masterMint(address to, uint256 value) external;
    function masterBurn(address from, uint256 value) external;
}
