import { GameItem } from "./GameItem";
import { Game } from "~~/types";

export const GameTable = ({ games }: { games: Game[] }) => {
  return (
    <div className="overflow-x-auto bg-base-100">
      <table className="table w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Prompt</th>
            <th>Link</th>
            <th>Status</th>
            <th>Prize Pool</th>
          </tr>
        </thead>
        <tbody>
          {games.map(game => (
            <GameItem key={game.id} game={game} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
