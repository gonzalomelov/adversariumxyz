"use client";

import Image from "next/image";
import { Game } from "~~/types";

export const GameItem = ({ game }: { game: Game }) => {
  const chatUrl = process.env.NEXT_PUBLIC_CHAT_URL || "https://chat.adversarium.xyz";

  return (
    <tr>
      <td>{game.id}</td>
      <td>
        <Image src={game.groupImage} alt="Group" width={24} height={24} className="inline-block rounded-full" />
      </td>
      <td>{game.name}</td>
      <td>{game.prompt.length > 60 ? `${game.prompt.slice(0, 60)}...` : game.prompt}</td>
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
