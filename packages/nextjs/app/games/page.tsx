"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GameTable } from "./_components/GameTable";
import { useAccount } from "wagmi";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import { Game } from "~~/types";

interface AgentRunInfo {
  owner: string;
  creator: string;
  target: string;
  targetFirstName: string;
  targetFriend: string;
  situation: number;
  situationAddress: string;
  publicInfo: string;
  privateInfo: string;
  groupTitle: string;
  groupImage: string;
  groupId: string;
  responsesCount: bigint;
  max_iterations: number;
  is_finished: boolean;
}

const GameListPage = () => {
  const [games, setGames] = useState<Game[]>([]);
  const { address } = useAccount();

  const { data: agentRuns } = useScaffoldReadContract({
    contractName: "LeadAgent",
    functionName: "getAgentRuns",
    args: [address],
  });

  useEffect(() => {
    const fetchGames = async () => {
      if (!address || !agentRuns) return;

      const gamesData: Game[] = await Promise.all(
        agentRuns.map(async (run: AgentRunInfo, index: number) => {
          return {
            id: index,
            owner: run.owner,
            responsesCount: run.responsesCount,
            max_iterations: run.max_iterations,
            is_finished: run.is_finished,
            target: run.target,
            situation: run.situation === 0 ? "UsdcDonation" : "NftMint",
            situationAddress: run.situationAddress,
            privateInfo: run.privateInfo,
            groupTitle: run.groupTitle,
            groupImage: run.groupImage,
            isCompleted: run.is_finished,
            groupId: run.groupId,
          };
        }),
      );

      setGames(gamesData);
    };

    fetchGames();
  }, [address, agentRuns]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Games</h1>
      <Link href="/games/create" className="btn btn-primary mb-4">
        Create
      </Link>
      <GameTable games={games} />
    </div>
  );
};

export default GameListPage;
