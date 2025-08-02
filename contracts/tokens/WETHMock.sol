// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import { WETH } from './WETH.sol';

contract WETHMock is WETH {
    constructor(uint256 supply_) {
        _mint(msg.sender, supply_);
    }
}
