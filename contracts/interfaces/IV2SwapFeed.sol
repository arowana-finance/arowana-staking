// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { IDataFeed } from './IDataFeed.sol';

interface IV2SwapFeed is IDataFeed {
    function swapFactory() external view returns (address);

    function wethUsdPair() external view returns (address);

    function WETH() external view returns (address);

    function USD() external view returns (address);

    function initializeSwapFeed(
        address _asset,
        address _feedImplementation,
        address _swapFactory,
        address _WETH,
        address _USD
    ) external;

    function V2Price() external view returns (uint256);

    function ethUsdPrice() external view returns (uint256);

    function getTokenUSD(address baseToken) external view returns (uint256);

    function getLPUSD(address _pair) external view returns (uint256);

    function getLPTVL(address _pair) external view returns (uint256);

    function getPairByToken(address baseToken) external view returns (address);
}
