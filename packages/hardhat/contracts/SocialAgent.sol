// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./BaseAgent.sol";

contract SocialAgent is BaseAgent {
    constructor(address initialOracleAddress) BaseAgent(initialOracleAddress) {}
}