// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { IERC20, SafeERC20 } from '@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol';
import { EnumerableSet } from '@openzeppelin/contracts/utils/structs/EnumerableSet.sol';
import { Ownable } from '../libraries/Ownable.sol';

/**
 * @title RewardVault that distributes token rewards to necessary contracts
 * @notice This contract custodies tokens that should be distributed as a user reward
 */
contract RewardVault is Ownable {
    using EnumerableSet for EnumerableSet.AddressSet;
    using SafeERC20 for IERC20;

    event AddSpender(address newSpender);
    event RemoveSpender(address oldSpender);
    event Rewarded(address indexed token, address indexed spender, address indexed to, uint256 value);
    event Withdrawn(address indexed token, address indexed spender, address indexed to, uint256 value);

    /// @dev Reward Spenders to distribute user rewards
    EnumerableSet.AddressSet private _spenders;

    modifier onlySpenders() {
        require(_spenders.contains(_msgSender()), 'NOT_SPENDER');
        _;
    }

    function initializeVault(address _initOwner) public virtual initializer {
        if (_initOwner == address(0)) {
            _initOwner = _msgSender();
        }
        __Ownable_init(_initOwner);
        _spenders.add(_initOwner);
        emit AddSpender(_initOwner);
    }

    function withdraw(IERC20 token, address to, uint256 value) public virtual onlyOwner {
        token.safeTransfer(to, value);

        emit Withdrawn(address(token), msg.sender, to, value);
    }

    function sendTo(IERC20 token, address to, uint256 value) public virtual {
        require(_spenders.contains(msg.sender), 'INVALID_SPENDER');

        token.safeTransfer(to, value);

        emit Rewarded(address(token), msg.sender, to, value);
    }

    function spenders() external view returns (address[] memory) {
        return _spenders.values();
    }

    function addSpender(address _spender) external onlyOwner {
        require(!_spenders.contains(_spender), 'DUPLICATE_SPENDER');

        _spenders.add(_spender);

        emit AddSpender(_spender);
    }

    function removeSpender(address _spender) external onlyOwner {
        require(_spenders.contains(_spender), 'INVALID_SPENDER');

        _spenders.remove(_spender);

        emit RemoveSpender(_spender);
    }
}
