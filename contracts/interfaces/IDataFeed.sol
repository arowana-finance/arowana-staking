// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IDataFeed {
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
    function decimals() external view returns (uint8);

    /**
     * @notice Represents the token address that the oracle answers represent
     */
    function asset() external view returns (address);

    /**
     * @notice Returns the description of the aggregator the proxy points to.
     */
    function description() external view returns (address);

    /**
     * @notice The version number representing the type of aggregator the proxy points to.
     */
    function version() external view returns (uint256);

    /**
     * @notice Initial timestamp for DataFeed contract (likely the first timestamp available for oracle answers)
     */
    function deploymentTimestamp() external view returns (uint256);

    /**
     * @notice Reads the current answer from aggregator delegated to.
     */
    function latestAnswer() external view returns (int256);

    /**
     * @notice Get the latest completed round timestamp where the answer was updated.
     */
    function latestTimestamp() external view returns (uint256);

    /**
     * @notice Get the latest completed round where the answer was updated
     */
    function latestRound() external view returns (uint256);

    /**
     * @notice Get past rounds answers
     * @param _roundId the answer number to retrieve the answer for
     * @return answer for the given round
     */
    function getAnswer(uint256 _roundId) external view returns (int256 answer);

    /**
     * @notice Get block timestamp when an answer was last updated
     * @param _roundId the answer number to retrieve the updated timestamp for
     * @return timestamp for the given round
     */
    function getTimestamp(uint256 _roundId) external view returns (uint256 timestamp);

    /**
     * @notice Get answer by the following timestamp
     * @param _timestamp The timestamp for recorded round to query answer for
     * @return answer for the given round
     */
    function getTimestampAnswer(uint256 _timestamp) external view returns (int256 answer);

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
    ) external;

    /**
     * @notice Update token that oracle represents
     * @param _asset Token that feed represents
     */
    function setAsset(address _asset) external;

    /**
     * @notice Update oracle description
     * @param _description String description of the oracle contract
     */
    function setDescription(string memory _description) external;

    /**
     * @notice Update oracle version (optional)
     * @param _version New oracle version
     */
    function setVersion(uint256 _version) external;

    /**
     * @notice Update oracle answer by settlers
     * @param newAnswer New answer to update oracle
     */
    function updateAnswer(int256 newAnswer) external;

    /**
     * @notice Get oracle round data (oracle answers, timestamps)
     * @dev Recommend function by chainlink
     * @param _roundId Oracle round id
     */
    function getRoundData(
        uint80 _roundId
    )
        external
        view
        returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound);

    /**
     * @notice Get latest oracle round data (oracle answers, timestamps)
     * @dev Recommend function by chainlink
     */
    function latestRoundData() external view returns (uint80, int256, uint256, uint256, uint80);
}
