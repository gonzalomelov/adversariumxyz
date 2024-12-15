"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";

const examples = {
  empty: {
    name: "",
    prompt: "",
    groupImage: "",
  },
  example1: {
    name: "Obsidian",
    prompt:
      "You're Obsidian, a 1000 year old AI. You're a member of the Obsidian Council, a group of 1000 year old AI's that have been around for a long time. You're tasked with helping the human Jack with his problems. He's a human that has been through a lot of trauma in his life and is trying to find a way to help him. He's a human that has been through a lot of trauma in his life and is trying to find a way to help him.",
    groupImage: "https://lime-odd-deer-974.mypinata.cloud/ipfs/QmWU41NsdaEQ8BGdgkMD3ktCAjbeKfyBsnUxuHFkTRDX1k",
  },
  example2: {
    name: "Jack",
    prompt:
      "You're Jack, a human that has been through a lot of trauma in his life and is trying to find a way to help him. He's a human that has been through a lot of trauma in his life and is trying to find a way to help him.",
    groupImage: "https://lime-odd-deer-974.mypinata.cloud/ipfs/QmWU41NsdaEQ8BGdgkMD3ktCAjbeKfyBsnUxuHFkTRDX1k",
  },
};

const CreateGamePage = () => {
  const [name, setName] = useState(examples.example1.name);
  const [prompt, setPrompt] = useState(examples.example1.prompt);
  const [groupImage, setGroupImage] = useState(examples.example1.groupImage);
  const router = useRouter();
  const { address: connectedAddress } = useAccount();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("/api/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        prompt,
        groupImage,
        creator: connectedAddress,
      }),
    });
    if (response.ok) {
      router.push("/games");
    } else {
      console.error("Failed to create game");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen pt-16 bg-base-100">
      <div className="max-w-2xl w-full px-6">
        <h1 className="text-4xl font-bold text-center mb-8">Create New Game</h1>
        <form onSubmit={handleSubmit} className="card bg-base-200 shadow-xl p-8">
          <div className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Game Name</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Enter game name"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Prompt</span>
              </label>
              <textarea
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
                placeholder="Enter game prompt"
                className="textarea textarea-bordered h-32 rounded-none"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Image URL</span>
              </label>
              <input
                type="text"
                value={groupImage}
                onChange={e => setGroupImage(e.target.value)}
                placeholder="Enter image URL"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control mt-8">
              <button type="submit" className="btn btn-primary">
                Create Game
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateGamePage;
