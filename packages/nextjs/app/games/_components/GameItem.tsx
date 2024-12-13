import { useState } from "react";
import Image from "next/image";
import { Address } from "~~/components/scaffold-eth";
import { Game } from "~~/types";

const gameTypeMap = {
  UsdcDonation: "Donate USDC",
  NftMint: "Mint Charity NFT",
};

export const GameItem = ({ game }: { game: Game }) => {
  const [isVerifying, setIsVerifying] = useState(false);

  const verifyAction = async () => {
    setIsVerifying(true);
    try {
      const response = await fetch(`/api/games/${game.id}/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ targetAddress: game.target }),
      });

      if (response.ok) {
        // Handle successful verification
        console.log("Action verified successfully");
      } else {
        // Handle verification failure
        console.error("Verification failed");
      }
    } catch (error) {
      console.error("Error during verification:", error);
    } finally {
      setIsVerifying(false);
    }
  };

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
      <td>{game.groupId}</td>
      <td>{game.is_finished ? "Completed" : "In Progress"}</td>
      <td>
        {game.responsesCount} / {game.max_iterations}
      </td>
      <td>
        <button
          onClick={verifyAction}
          disabled={isVerifying}
          className={`btn btn-sm ${isVerifying ? "btn-disabled" : "btn-primary"}`}
        >
          {isVerifying ? "Verifying..." : "Verify Action"}
        </button>
      </td>
    </tr>
  );
};
