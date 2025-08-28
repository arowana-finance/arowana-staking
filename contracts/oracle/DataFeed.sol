// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { WithSettler } from '../libraries/WithSettler.sol';

/**
 * @title Chainlink / AAVE Compatible Oracle Feed ( for token prices & reserves )
 * @author Arowana Finance
 */
contract DataFeed is WithSettler {
    /**
     * @notice Emitted for updated asset settings for DataFeed contract
     * @param asset New asset for DataFeed contract
     */
    event NewAsset(address indexed asset);
    /**
     * @notice Emitted for updated oracle description for DataFeed contract
     * @param description New description for DataFeed contract
     */
    event NewDescription(string description);
    /**
     * @notice Signaling new round for Chainlink oracles
     * @param roundId test
     * @param startedBy test
     * @param startedAt test
     */
    event NewRound(uint256 indexed roundId, address indexed startedBy, uint256 startedAt);
    /**
     * @notice Signaling new round for Chainlink oracles
     * @param current test
     * @param roundId test
     * @param updatedAt test
     */
    event AnswerUpdated(int256 indexed current, uint256 indexed roundId, uint256 updatedAt);

    /**
     * @notice Represents the number of decimals the oracle answers represent
     */
    uint8 public constant decimals = 8;

    /**
     * @notice Represents the token address that the oracle answers represent
     */
    address public asset;

    /**
     * @notice Returns the description of the aggregator the proxy points to.
     */
    string public description;

    /**
     * @notice The version number representing the type of aggregator the proxy points to.
     */
    uint256 public version = 6;

    /**
     * @notice Initial timestamp for DataFeed contract (likely the first timestamp available for oracle answers)
     */
    uint256 public deploymentTimestamp;

    /**
     * @notice Reads the current answer from aggregator delegated to.
     */
    int256 public latestAnswer;

    /**
     * @notice Get the latest completed round timestamp where the answer was updated.
     */
    uint256 public latestTimestamp;

    /**
     * @notice Get the latest completed round where the answer was updated
     */
    uint256 public latestRound;

    /**
     * @notice Get past rounds answers
     * @dev _roundId the answer number to retrieve the answer for
     * returns answer for the given round
     */
    mapping(uint256 => int256) public getAnswer;

    /**
     * @notice Get block timestamp when an answer was last updated
     * @dev _roundId the answer number to retrieve the updated timestamp for
     * returns timestamp for the given round
     */
    mapping(uint256 => uint256) public getTimestamp;

    /**
     * @notice Get answer by the following timestamp
     * @dev _timestamp The timestamp for recorded round to query answer for
     * returns answer for the given round
     */
    mapping(uint256 => int256) public getTimestampAnswer;

    /**
     * @notice Initialize feed contract
     * @param _initOwner Initial owner of the contract
     * @param _asset Token that feed represents (optional)
     * @param _description String description of the oracle contract
     * @param _initAnswer Initial answer for the oracle
     */
    function initializeFeed(
        address _initOwner,
        address _asset,
        string memory _description,
        int256 _initAnswer
    ) public virtual {
        deploymentTimestamp = block.timestamp;
        version = 6;
        setAsset(_asset);
        setDescription(_description);

        if (_initAnswer != int256(0)) {
            _updateAnswer(_initAnswer, 0, block.timestamp);
        }

        initializeSettler(_initOwner);
    }

    /**
     * @notice Update token that oracle represents
     * @param _asset Token that feed represents
     */
    function setAsset(address _asset) public onlyOwner {
        asset = _asset;
        emit NewAsset(_asset);
    }

    /**
     * @notice Update oracle description
     * @param _description String description of the oracle contract
     */
    function setDescription(string memory _description) public onlyOwner {
        description = _description;
        emit NewDescription(_description);
    }

    /**
     * @notice Update oracle version (optional)
     * @param _version New oracle version
     */
    function setVersion(uint256 _version) public onlyOwner {
        version = _version;
    }

    /**
     * @notice Update oracle answer by settlers
     * @param newAnswer New answer to update oracle
     */
    function updateAnswer(int256 newAnswer) public onlySettlers {
        uint256 newRound = (latestRound != 0 || latestAnswer != 0) ? latestRound + 1 : 0;
        _updateAnswer(newAnswer, newRound, block.timestamp);
    }

    /**
     * @notice Internal function to update oracle
     * @param newAnswer New answer to update oracle
     * @param newRound New oracle round to declare
     * @param newTimestamp New timestamp to set oracle round / answer timestamp
     */
    function _updateAnswer(int256 newAnswer, uint256 newRound, uint256 newTimestamp) internal virtual {
        // Only update new answers
        if (latestTimestamp >= newTimestamp) {
            return;
        }

        latestAnswer = newAnswer;
        latestTimestamp = newTimestamp;
        latestRound = newRound;

        bool hasRound = getTimestamp[newRound] != 0;

        getAnswer[newRound] = newAnswer;
        getTimestamp[newRound] = newTimestamp;
        getTimestampAnswer[newTimestamp] = newAnswer;

        if (!hasRound) {
            emit NewRound(newRound, msg.sender, newTimestamp);
        }

        emit AnswerUpdated(newAnswer, newRound, newTimestamp);
    }

    /**
     * @notice Get oracle round data (oracle answers, timestamps)
     * @dev Recommend function by chainlink
     * @param _roundId Oracle round id
     */
    function getRoundData(
        uint80 _roundId
    )
        public
        view
        returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)
    {
        roundId = _roundId;
        answer = getAnswer[uint256(_roundId)];
        startedAt = _roundId > uint80(0) ? getTimestamp[uint256(_roundId) - 1] : deploymentTimestamp;
        updatedAt = getTimestamp[uint256(_roundId)];
        // This data is not relevant so we just return same as requested _roundId like other feeds
        answeredInRound = _roundId;
    }

    /**
     * @notice Get latest oracle round data (oracle answers, timestamps)
     * @dev Recommend function by chainlink
     */
    function latestRoundData() public view returns (uint80, int256, uint256, uint256, uint80) {
        return getRoundData(uint80(latestRound));
    }
}
