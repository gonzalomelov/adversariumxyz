"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { Leaderboard } from "~~/components/Leaderboard";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-5">
        <Leaderboard />

        <div className="flex-grow bg-base-300 w-full mt-8 px-8 py-8">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <SparklesIcon className="h-8 w-8 fill-secondary" />
              <Link href="/simulations/create" passHref className="link">
                <h2 className="mt-2 text-2xl font-bold">Create Game</h2>
              </Link>
              <p>Design your own AI game with our no-code wizard</p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <Link href="/simulations" passHref className="link">
                <h2 className="mt-2 text-2xl font-bold">My Games</h2>
              </Link>
              <p>Track your created and played games</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
