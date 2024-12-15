"use client";

import Image from "next/image";
import { Address } from "~~/components/scaffold-eth";
import { Game } from "~~/types";

const gameTypeMap = {
  UsdcDonation: "Donate USDC",
  NftMint: "Mint Charity NFT",
};

export const GameItem = ({ game }: { game: Game }) => {
  const chatUrl = process.env.NEXT_PUBLIC_CHAT_URL || "https://chat.adversarium.xyz";

  return (
    <tr>
      <td>{game.id}</td>
      <td>
        <Image src={game.groupImage} alt="Group" width={24} height={24} className="inline-block rounded-full" />
      </td>
      <td className={`text-base ${game.isCompleted ? "line-through text-gray-500" : "text-gray-900"}`}>
        <div className="whitespace-normal">
          {gameTypeMap[game.situation]} to <Address address={game.situationAddress} />
        </div>
      </td>
      <td>
        <Address address={game.target} />
      </td>
      <td>{game.groupTitle}</td>
      <td>
        <a
          href={`${chatUrl}/?conversationId=${game.groupId}`}
          target="_blank"
          className="btn btn-primary btn-sm normal-case"
          rel="noopener noreferrer"
        >
          Play Game
        </a>
      </td>
      <td>{game.is_finished ? "Completed" : "In Progress"}</td>
      <td>
        {game.responsesCount} / {game.max_iterations}
      </td>
    </tr>
  );
};
