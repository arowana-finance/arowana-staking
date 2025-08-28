// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { Clones } from '@openzeppelin/contracts/proxy/Clones.sol';
import { Ownable } from '../libraries/Ownable.sol';
import { IV2SwapFeed } from '../interfaces/IV2SwapFeed.sol';

contract V2SwapFeedFactory is Ownable {
    // denomination address also used for chainlink's price feed registry in production
    address private constant denomination = address(840);

    event FeedProposed(
        address indexed asset,
        address indexed denomination,
        address indexed proposedAggregator,
        address currentAggregator,
        address sender
    );
    event FeedConfirmed(
        address indexed asset,
        address indexed denomination,
        address indexed latestAggregator,
        address previousAggregator,
        uint16 nextPhaseId,
        address sender
    );

    event SetFeedImplementation(address feedImplementation);
    event SetSwapFactory(address factory);
    event SetWETH(address weth);
    event SetUSD(address usd);

    /// @dev Feeds are immutable so we just consider phaseId as immutable here
    uint16 public phaseId;

    /// @dev asset => feed
    mapping(address => IV2SwapFeed) public feeds;

    address public feedImplementation;
    address public swapFactory;
    address public WETH;
    address public USD;

    function initializeFactory(
        address _initOwner,
        address _feedImplementation,
        address _swapFactory,
        address _WETH,
        address _USD
    ) public virtual initializer {
        setFeedImplementation(_feedImplementation);
        setSwapFactory(_swapFactory);
        setWETH(_WETH);
        setUSD(_USD);

        __Ownable_init(_initOwner);
    }

    function latestAnswer(address _asset) public view returns (int256) {
        IV2SwapFeed feed = feeds[_asset];

        return address(feed) != address(0) ? feed.latestAnswer() : int256(0);
    }

    function createFeed(address _asset) public onlyOwner {
        IV2SwapFeed prevFeed = feeds[_asset];

        IV2SwapFeed newFeed = IV2SwapFeed(
            Clones.cloneDeterministic(
                feedImplementation,
                keccak256(abi.encodePacked(_asset, feedImplementation, swapFactory, WETH, USD))
            )
        );

        newFeed.initializeSwapFeed(_asset, feedImplementation, swapFactory, WETH, USD);

        feeds[_asset] = newFeed;

        emit FeedProposed(_asset, denomination, address(newFeed), address(prevFeed), msg.sender);
        emit FeedConfirmed(_asset, denomination, address(newFeed), address(prevFeed), phaseId, msg.sender);
    }

    function setFeedImplementation(address _feedImplementation) public onlyOwner {
        feedImplementation = _feedImplementation;
        emit SetFeedImplementation(_feedImplementation);
    }

    function setSwapFactory(address _swapFactory) public onlyOwner {
        swapFactory = _swapFactory;
        emit SetSwapFactory(_swapFactory);
    }

    function setWETH(address _WETH) public onlyOwner {
        WETH = _WETH;
        emit SetWETH(_WETH);
    }

    function setUSD(address _USD) public onlyOwner {
        USD = _USD;
        emit SetUSD(_USD);
    }
}
