"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const gridSize = 5;
const cellSize = 50;

export default function Challenge() {
  const [grid, setGrid] = useState(Array(gridSize * gridSize).fill(false));
  const [playerScore, setPlayerScore] = useState(0);
  const [aiScore, setAiScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newGrid = [...grid];
      const randomIndex = Math.floor(Math.random() * grid.length);
      newGrid[randomIndex] = true;
      setGrid(newGrid);
      setAiScore(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [grid]);

  const handleCellClick = (index: number) => {
    if (grid[index]) {
      const newGrid = [...grid];
      newGrid[index] = false;
      setGrid(newGrid);
      setPlayerScore(prev => prev + 1);
    }
  };

  return (
    <div className="mb-8">
      <div className="grid grid-cols-5 gap-1 mb-4">
        {grid.map((active, index) => (
          <motion.div
            key={index}
            className={`w-${cellSize} h-${cellSize} rounded-md cursor-pointer ${
              active ? "bg-pink-500" : "bg-gray-800"
            }`}
            onClick={() => handleCellClick(index)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
      <div className="text-center font-mono">
        <p>
          Player: {playerScore} | AI: {aiScore}
        </p>
        <p className="text-sm text-gray-400 mt-2">Click the pink squares to challenge the AI!</p>
      </div>
    </div>
  );
}
