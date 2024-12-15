"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import type { NextPage } from "next";

const DynamicChallenge = dynamic(() => import("../components/Challenge"), { ssr: false });

const Home: NextPage = () => {
  return (
    <div className="flex items-center flex-col flex-grow pt-16 bg-black text-white overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      {/* Logo Section */}
      <div className="flex items-center gap-3 mb-12 z-10">
        <div className="w-12 h-12 bg-purple-500 rounded-full"></div>
        {/* <span className="text-2xl">adversarium.xyz</span> */}
      </div>

      {/* Main Content */}
      <div className="max-w-4xl w-full px-6 z-10">
        {/* Hero Text */}
        <div className="text-center mb-20">
          <h1 className="text-8xl font-black mb-6 tracking-tighter leading-none">
            <span className="block transform -rotate-3 text-purple-500">CHALLENGE</span>
            <span className="block transform rotate-3 text-pink-500">THE MACHINES</span>
          </h1>
          <p className="text-gray-400 font-mono text-2xl">AI-driven adversarial puzzles on the blockchain.</p>

          {/* Challenge Component */}
          <div className="mt-12">
            <Suspense fallback={<div>Loading...</div>}>
              <DynamicChallenge />
            </Suspense>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-8 mb-16">
          <Link
            href="/games/create"
            className="text-xl font-bold px-12 py-6 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transform transition-all hover:scale-105 hover:shadow-lg"
          >
            Create Game
          </Link>
          <Link
            href="/games"
            className="text-xl font-bold px-12 py-6 bg-pink-500 hover:bg-pink-600 text-white rounded-xl transform transition-all hover:scale-105 hover:shadow-lg"
          >
            Play Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
