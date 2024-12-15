import { NextResponse } from "next/server";
import AgentGameABI from "../utils/AgentGameABI";
import { ethers } from "ethers";

function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Contract configuration
const AGENT_CONTRACT_ADDRESS = process.env.AGENT_CONTRACT_ADDRESS;
const RPC_URL = process.env.RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

if (!AGENT_CONTRACT_ADDRESS) throw new Error("Missing AGENT_CONTRACT_ADDRESS");
if (!RPC_URL) throw new Error("Missing RPC_URL");
if (!PRIVATE_KEY) throw new Error("Missing PRIVATE_KEY");

export async function POST(request: Request) {
  const { name, prompt, groupImage, creator } = await request.json();

  try {
    // Initialize provider and signer
    const provider = new ethers.JsonRpcProvider(RPC_URL);
    const wallet = new ethers.Wallet(PRIVATE_KEY!, provider);

    // Initialize contract
    const contract = new ethers.Contract(AGENT_CONTRACT_ADDRESS!, AgentGameABI, wallet);

    const groupId = generateUUID();

    // Call runAgent function
    const tx = await contract.runAgent(
      20, // max_iterations
      creator,
      name,
      prompt,
      groupImage,
      groupId,
      ethers.parseUnits("1.0", 18),
    );

    // Wait for transaction confirmation
    const receipt = await tx.wait();

    // Get the agent run ID from the event
    let agentRunId;
    for (const log of receipt.logs) {
      try {
        const parsedLog = contract.interface.parseLog(log);
        if (parsedLog?.name === "AgentRunCreated") {
          agentRunId = parsedLog.args[1].toString();
        }
      } catch (error) {
        console.log("Could not parse log:", log);
      }
    }

    if (!agentRunId) throw new Error("Failed to get agent run ID");

    // Get the agent run details
    const agentRun = await contract.agentRuns(agentRunId);

    return NextResponse.json(
      {
        id: agentRunId,
        name,
        prompt,
        groupImage,
        isCompleted: agentRun.is_finished,
        groupId,
      },
      { status: 201 },
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Error creating agent run:", errorMessage);
    return NextResponse.json(
      {
        error: "Failed to create agent run",
        details: errorMessage,
      },
      { status: 500 },
    );
  }
}
