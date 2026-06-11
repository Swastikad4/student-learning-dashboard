"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ActivityTile() {
  // Initialize with an empty grid (all 0s) for SSR to match the client's first render exactly
  const [gridData, setGridData] = useState<number[][]>(() => {
    const data = [];
    for (let r = 0; r < 7; r++) {
      data.push(new Array(24).fill(0));
    }
    return data;
  });

  // Generate random mock contribution data after hydration
  useEffect(() => {
    const data = [];
    for (let r = 0; r < 7; r++) {
      const row = [];
      for (let c = 0; c < 24; c++) {
        // Random intensity 0-4
        // Heavily weight 0 to make it look realistic
        const rand = Math.random();
        let intensity = 0;
        if (rand > 0.6) intensity = 1;
        if (rand > 0.8) intensity = 2;
        if (rand > 0.9) intensity = 3;
        if (rand > 0.95) intensity = 4;
        row.push(intensity);
      }
      data.push(row);
    }
    setGridData(data);
  }, []);

  const getIntensityColor = (level: number) => {
    switch (level) {
      case 0: return "bg-white/5"; // Empty
      case 1: return "bg-emerald-500/30";
      case 2: return "bg-emerald-500/60";
      case 3: return "bg-emerald-400";
      case 4: return "bg-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.6)]"; // Max intensity glow
      default: return "bg-white/5";
    }
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      className="lg:col-span-12 p-8 rounded-3xl bg-[var(--color-card)] border border-white/5 relative overflow-hidden"
    >
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h2 className="text-xl font-bold text-white mb-1">Learning Activity</h2>
          <p className="text-sm text-zinc-400">Your engagement over the last 6 months</p>
        </div>
        <div className="text-sm font-medium text-white/50 hidden sm:block">
          <span className="text-cyan-400 font-bold">142</span> Total Hours
        </div>
      </div>

      <div className="w-full overflow-x-auto pb-2 scrollbar-hide">
        <div className="min-w-[700px]">
          <div className="flex gap-1.5 flex-col">
            {gridData.map((row, rIdx) => (
              <div key={rIdx} className="flex gap-1.5">
                {row.map((intensity, cIdx) => (
                  <motion.div
                    key={`${rIdx}-${cIdx}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: (cIdx * 0.02) + (rIdx * 0.01), // Wave effect
                    }}
                    className={`w-[22px] h-[22px] rounded-[4px] ${getIntensityColor(intensity)} transition-colors duration-300 hover:border hover:border-white/50 cursor-pointer`}
                    title={`Activity level: ${intensity}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
