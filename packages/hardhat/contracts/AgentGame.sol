// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract AgentGame {

    string public prompt;
    IERC20 public agentToken;

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
        uint256 prizePool;
        uint256 interactionFee;
    }

    mapping(uint => AgentRun) public agentRuns;
    uint public agentRunCount;

    event AgentRunCreated(address indexed owner, uint indexed runId, uint256 interactionFee);
    event PrizePoolIncreased(uint indexed runId, address indexed contributor, uint256 amount);

    address private owner;

    constructor(
        string memory systemPrompt,
        address _agentToken
    ) {
        owner = msg.sender;
        prompt = systemPrompt;
        agentToken = IERC20(_agentToken);
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
        string memory groupId,
        uint256 interactionFee
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
        run.prizePool = 0;
        run.interactionFee = interactionFee;

        agentRunCount = agentRunCount + 1;
        
        emit AgentRunCreated(run.owner, currentId, interactionFee);

        return currentId;
    }

    function contributeToPool(uint runId) public returns (bool) {
        require(!agentRuns[runId].is_finished, "Run is finished");
        uint256 fee = agentRuns[runId].interactionFee;
        
        require(
            agentToken.transferFrom(msg.sender, address(this), fee),
            "Fee transfer failed"
        );

        agentRuns[runId].prizePool += fee;
        agentRuns[runId].responsesCount++;

        emit PrizePoolIncreased(runId, msg.sender, fee);

        return true;
    }

    function isRunFinished(uint runId) public view returns (bool) {
        return agentRuns[runId].is_finished;
    }

    function distributePrize(uint runId, address winner) public {
        require(msg.sender == owner, "Only owner can distribute prize");
        // require(!agentRuns[runId].is_finished, "Run already finished");
        
        AgentRun storage run = agentRuns[runId];
        uint256 prize = run.prizePool;
        run.prizePool = 0;
        run.is_finished = true;
        
        require(
            agentToken.transfer(winner, prize),
            "Prize distribution failed"
        );
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
                    is_finished: agentRuns[i].is_finished,
                    prizePool: agentRuns[i].prizePool,
                    interactionFee: agentRuns[i].interactionFee
                });
                index++;
            }
        }

        return filteredRuns;
    }
}
