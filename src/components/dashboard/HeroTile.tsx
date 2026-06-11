"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroTile() {
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    setDate(new Date().toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric' 
    }));
  }, []);

  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      className="lg:col-span-8 p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between min-h-[240px] bg-[var(--color-card)] border border-white/5"
    >
      {/* Background glow effect */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-600/10 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-pink-600/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10">
        <p className="text-zinc-400 font-medium tracking-wide text-sm mb-2 uppercase">{date}</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Maya</span>
        </h1>
        <p className="text-zinc-400 max-w-md">
          You've completed 4 hours of learning this week. Keep up the great momentum!
        </p>
      </div>

      <div className="relative z-10 mt-8 self-start">
        <div className="glass px-4 py-2 rounded-full flex items-center gap-2 border-orange-500/30 bg-orange-500/10">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Flame className="text-orange-500" fill="currentColor" size={20} />
          </motion.div>
          <span className="text-orange-50 font-bold tracking-wide">12 Day Streak</span>
        </div>
      </div>
    </motion.div>
  );
}
