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
            <th>Situation</th>
            <th>Target</th>
            <th>Group Title</th>
            <th>Group ID</th>
            <th>Status</th>
            <th>Progress</th>
            <th>Actions</th>
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
