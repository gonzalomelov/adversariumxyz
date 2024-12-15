"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GameTable } from "./_components/GameTable";
import { useAccount } from "wagmi";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import { Game } from "~~/types";

interface AgentRun {
  owner: string;
  creator: string;
  name: string;
  prompt: string;
  groupImage: string;
  groupId: string;
  responsesCount: bigint;
  max_iterations: number;
  is_finished: boolean;
  prizePool: bigint;
}

const GameListPage = () => {
  const [games, setGames] = useState<Game[]>([]);
  const { address } = useAccount();

  const { data: agentRuns } = useScaffoldReadContract({
    contractName: "AgentGame",
    functionName: "getAgentRuns",
    args: ["0x0000000000000000000000000000000000000000"],
  });

  useEffect(() => {
    const fetchGames = async () => {
      if (!address || !agentRuns) return;

      const gamesData: Game[] = await Promise.all(
        agentRuns.map(async (run: AgentRun, index: number) => {
          return {
            id: index,
            owner: run.owner,
            responsesCount: run.responsesCount,
            max_iterations: run.max_iterations,
            is_finished: run.is_finished,
            name: run.name,
            prompt: run.prompt,
            groupImage: run.groupImage,
            isCompleted: run.is_finished,
            groupId: run.groupId,
            prizePool: run.prizePool,
          };
        }),
      );

      setGames(gamesData);
    };

    fetchGames();
  }, [address, agentRuns]);

  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-3xl font-bold mb-4">My Games</h1> */}
      <Link href="/games/create" className="btn btn-primary mb-4">
        Create
      </Link>
      <GameTable games={games} />
    </div>
  );
};

export default GameListPage;
