// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { Initializable } from '@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol';
import { IERC20Exp, IUniswapV2Pair } from '../interfaces/IUniswapV2Pair.sol';
import { IUniswapV2Factory } from '../interfaces/IUniswapV2Factory.sol';

/// @title Chainlink Compatible Price Feed retrieved from Uniswap V2 LP
contract V2SwapFeed is Initializable {
    event NewAsset(address indexed asset);
    event NewDescription(string description);
    event NewRound(uint256 indexed roundId, address indexed startedBy, uint256 startedAt);
    event AnswerUpdated(int256 indexed current, uint256 indexed roundId, uint256 updatedAt);

    uint8 public immutable decimals = 8;

    address public asset;

    string public description;

    uint256 public version = 6;

    uint256 public deploymentTimestamp;

    /**
    int256 public latestAnswer;

    uint256 public latestTimestamp;

    uint256 public latestRound;

    /// @dev roundId => answer
    mapping(uint256 => int256) public getAnswer;

    /// @dev roundId => timestamp
    mapping(uint256 => uint256) public getTimestamp;

    /// @dev timestamp => answer
    mapping(uint256 => int256) public getTimestampAnswer;
    **/

    address public feedImplementation;

    IUniswapV2Factory public swapFactory;
    IUniswapV2Pair public wethUsdPair;
    IERC20Exp public WETH;
    IERC20Exp public USD;

    /**
     * @notice Disabling initializer for implementation contract
     * @dev Initializer would only work on proxy contract
     * @custom:oz-upgrades-unsafe-allow constructor
     */
    constructor() {
        _disableInitializers();
    }

    /**
     * Oracle functions
     */
    function initializeSwapFeed(
        address _asset,
        address _feedImplementation,
        address _swapFactory,
        address _WETH,
        address _USD
    ) public initializer {
        asset = _asset;
        description = concat(IERC20Exp(_asset).symbol(), concat(' / ', IERC20Exp(USD).symbol()));
        version = 6;
        deploymentTimestamp = block.timestamp;

        feedImplementation = _feedImplementation;
        swapFactory = IUniswapV2Factory(_swapFactory);
        wethUsdPair = IUniswapV2Pair(swapFactory.getPair(_WETH, _USD));
        WETH = IERC20Exp(_WETH);
        USD = IERC20Exp(_USD);

        emit NewAsset(_asset);
        emit NewDescription(description);
    }

    function latestAnswer() public view returns (uint256) {
        return V2Price();
    }

    function latestTimestamp() public view returns (uint256) {
        return block.timestamp;
    }

    function latestRound() public view returns (uint256) {
        return block.number;
    }

    /**
     * V2 functions
     */
    function V2Price() public view returns (uint256) {
        return isPair(asset) ? getLPUSD(IUniswapV2Pair(asset)) : getTokenUSD(asset);
    }

    function ethUsdPrice() public view returns (uint256) {
        return getPairTokenPrice(wethUsdPair, address(WETH)) / 10 ** (18 - decimals);
    }

    function getTokenUSD(address baseToken) public view returns (uint256) {
        return getPairTokenUSD(getPairByToken(baseToken), baseToken);
    }

    function getLPUSD(IUniswapV2Pair _pair) public view returns (uint256) {
        return (getLPTVL(_pair) * 10 ** _pair.decimals()) / _pair.totalSupply();
    }

    function getLPTVL(IUniswapV2Pair _pair) public view returns (uint256) {
        address baseToken = getPairBaseToken(_pair);
        (, uint256 reserveA, ) = getPairReserves(_pair, baseToken);

        return (getPairTokenUSD(_pair, baseToken) * reserveA * 2) / 10 ** (IERC20Exp(baseToken).decimals());
    }

    // prettier-ignore
    function getPairTokenUSD(IUniswapV2Pair _pair, address baseToken) internal view returns (uint256) {
        (IERC20Exp token0, IERC20Exp token1) = getPairTokens(_pair);

        bool isToken0 = baseToken == address(token0);

        // Should be token0 or token1
        require(isToken0 || baseToken == address(token1), 'INVALID_PAIR_TOKEN');

        address quoteToken = getPairQuoteToken(baseToken, address(token0), address(token1));

        bool hasUsd = quoteToken == address(USD);
        bool hasEth = quoteToken == address(WETH);

        if (hasUsd) {
            return getPairTokenPrice(_pair, baseToken) / 10 ** (18 - decimals);
        }

        if (hasEth) {
            return getPairTokenPrice(_pair, baseToken) * getPairTokenPrice(wethUsdPair, address(WETH)) / 10 ** (36 - decimals);
        }

        revert('INVALID_PAIR');
    }

    // prettier-ignore
    function getPairTokenPrice(IUniswapV2Pair _pair, address baseToken) internal view returns (uint256) {
        (IERC20Exp token0, IERC20Exp token1) = getPairTokens(_pair);

        (bool isToken0, uint256 reserveA, uint256 reserveB) = getPairReserves(_pair, baseToken);

        // Should be token0 or token1
        require(isToken0 || baseToken == address(token1), 'INVALID_PAIR_TOKEN');
        require(reserveA != 0 && reserveB != 0, 'NO_LIQUIDITY');

        // Encode with 1e18
        uint256 decimalDiff = isToken0
            ? token0.decimals() + 18 - token1.decimals()
            : token1.decimals() + 18 - token0.decimals();

        return reserveB * 10 ** decimalDiff / reserveA;
    }

    function getPairByToken(address baseToken) public view returns (IUniswapV2Pair) {
        address usdPair = swapFactory.getPair(baseToken, address(USD));
        address ethPair = swapFactory.getPair(baseToken, address(WETH));

        uint256 usdPairBal = usdPair != address(0) ? IERC20Exp(baseToken).balanceOf(usdPair) : 0;
        uint256 ethPairBal = ethPair != address(0) ? IERC20Exp(baseToken).balanceOf(ethPair) : 0;

        if (usdPairBal == 0 && ethPairBal == 0) {
            revert('NO_PAIR');
        }

        return usdPairBal >= ethPairBal ? IUniswapV2Pair(usdPair) : IUniswapV2Pair(ethPair);
    }

    function getPairBaseToken(IUniswapV2Pair _pair) internal view returns (address baseToken) {
        (IERC20Exp token0, IERC20Exp token1) = getPairTokens(_pair);

        baseToken = getPairQuoteToken(address(USD), address(token0), address(token1));

        if (baseToken == address(0)) {
            baseToken = getPairQuoteToken(address(WETH), address(token0), address(token1));
        }

        require(baseToken != address(0), 'INVALID_PAIR_BASE');
    }

    function getPairQuoteToken(
        address baseToken,
        address _token0,
        address _token1
    ) internal pure returns (address quoteToken) {
        quoteToken = baseToken == address(_token0)
            ? _token1
            : baseToken == address(_token1)
                ? _token0
                : address(0);
    }

    function getPairTokens(IUniswapV2Pair _pair) internal view returns (IERC20Exp, IERC20Exp) {
        return (IERC20Exp(_pair.token0()), IERC20Exp(_pair.token1()));
    }

    function getPairReserves(
        IUniswapV2Pair _pair,
        address baseToken
    ) internal view returns (bool, uint256, uint256) {
        (IERC20Exp token0, ) = getPairTokens(_pair);
        (uint112 reserve0, uint112 reserve1, ) = _pair.getReserves();

        bool isToken0 = baseToken == address(token0);

        return isToken0 ? (isToken0, reserve0, reserve1) : (isToken0, reserve1, reserve0);
    }

    function isPair(address pairAddress) internal view returns (bool) {
        (bool success, bytes memory returnData) = pairAddress.staticcall{ gas: 50000 }(
            abi.encodeWithSelector(IUniswapV2Pair.factory.selector)
        );

        if (!success || returnData.length == 0) {
            return false;
        }

        return address(swapFactory) == abi.decode(returnData, (address));
    }

    function concat(string memory a, string memory b) internal pure returns (string memory) {
        return string(abi.encodePacked(a, b));
    }
}
