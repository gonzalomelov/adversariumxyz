// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract AgentGame {

    string public prompt;

    struct AgentRun {
        address owner;
        address creator;
        string name;
        string prompt;
        string groupImage;
        string groupId;
        uint responsesCount;
        uint8 max_iterations;
        bool is_finished;
    }

    mapping(uint => AgentRun) public agentRuns;
    uint public agentRunCount;

    event AgentRunCreated(address indexed owner, uint indexed runId);

    address private owner;

    constructor(
        string memory systemPrompt
    ) {
        owner = msg.sender;
        prompt = systemPrompt;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Caller is not owner");
        _;
    }

    function runAgent(
        uint8 max_iterations,
        address creator,
        string memory name,
        string memory prompt,
        string memory groupImage,
        string memory groupId
    ) public returns (uint) {
        uint currentId = agentRunCount;
        AgentRun storage run = agentRuns[currentId];

        run.owner = msg.sender;
        run.creator = creator;
        run.name = name;
        run.prompt = prompt;
        run.groupImage = groupImage;
        run.groupId = groupId;
        run.is_finished = false;
        run.responsesCount = 0;
        run.max_iterations = max_iterations;

        agentRunCount = agentRunCount + 1;
        
        emit AgentRunCreated(run.owner, currentId);

        return currentId;
    }

    function isRunFinished(uint runId) public view returns (bool) {
        return agentRuns[runId].is_finished;
    }

    function getAgentRuns(address _creator) public view returns (AgentRun[] memory) {
        uint count = 0;
        for (uint i = 0; i < agentRunCount; i++) {
            if (_creator == address(0) || agentRuns[i].creator == _creator) {
                count++;
            }
        }

        AgentRun[] memory filteredRuns = new AgentRun[](count);
        uint index = 0;
        for (uint i = 0; i < agentRunCount; i++) {
            if (_creator == address(0) || agentRuns[i].creator == _creator) {
                filteredRuns[index] = AgentRun({
                    owner: agentRuns[i].owner,
                    creator: agentRuns[i].creator,
                    name: agentRuns[i].name,
                    prompt: agentRuns[i].prompt,
                    groupImage: agentRuns[i].groupImage,
                    groupId: agentRuns[i].groupId,
                    responsesCount: agentRuns[i].responsesCount,
                    max_iterations: agentRuns[i].max_iterations,
                    is_finished: agentRuns[i].is_finished
                });
                index++;
            }
        }

        return filteredRuns;
    }
}
