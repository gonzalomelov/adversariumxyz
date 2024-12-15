// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract LeadAgent {

    string public prompt;

    enum Situation {
        UsdcDonation,
        NftMint
    }

    struct AgentRun {
        address owner;
        address creator;
        address target;
        string targetFirstName;
        string targetFriend;
        Situation situation;
        address situationAddress;
        string publicInfo;
        string privateInfo;
        string groupTitle;
        string groupImage;
        string groupId;
        uint responsesCount;
        uint8 max_iterations;
        bool is_finished;
    }

    struct AgentRunInfo {
        address owner;
        address creator;
        address target;
        string targetFirstName;
        string targetFriend;
        Situation situation;
        address situationAddress;
        string publicInfo;
        string privateInfo;
        string groupTitle;
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
        address target,
        string memory targetFirstName,
        string memory targetFriend,
        Situation situation,
        address situationAddress,
        string memory publicInfo,
        string memory privateInfo,
        string memory groupTitle,
        string memory groupImage,
        string memory groupId
    ) public returns (uint) {
        uint currentId = agentRunCount;
        AgentRun storage run = agentRuns[currentId];

        run.owner = msg.sender;
        run.creator = creator;
        run.target = target;
        run.targetFirstName = targetFirstName;
        run.targetFriend = targetFriend;
        run.situation = situation;
        run.situationAddress = situationAddress;
        run.publicInfo = publicInfo;
        run.privateInfo = privateInfo;
        run.groupTitle = groupTitle;
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

    function getAgentRuns(address _creator) public view returns (AgentRunInfo[] memory) {
        uint count = 0;
        for (uint i = 0; i < agentRunCount; i++) {
            if (_creator == address(0) || agentRuns[i].creator == _creator) {
                count++;
            }
        }

        AgentRunInfo[] memory filteredRuns = new AgentRunInfo[](count);
        uint index = 0;
        for (uint i = 0; i < agentRunCount; i++) {
            if (_creator == address(0) || agentRuns[i].creator == _creator) {
                filteredRuns[index] = AgentRunInfo({
                    owner: agentRuns[i].owner,
                    creator: agentRuns[i].creator,
                    target: agentRuns[i].target,
                    targetFirstName: agentRuns[i].targetFirstName,
                    targetFriend: agentRuns[i].targetFriend,
                    situation: agentRuns[i].situation,
                    situationAddress: agentRuns[i].situationAddress,
                    publicInfo: agentRuns[i].publicInfo,
                    privateInfo: agentRuns[i].privateInfo,
                    groupTitle: agentRuns[i].groupTitle,
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
