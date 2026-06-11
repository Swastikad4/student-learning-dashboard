"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ProgressBarProps {
  progress: number; // 0 to 100
}

export function ProgressBar({ progress }: ProgressBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="w-full" ref={ref}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Progress</span>
        <span className="text-xs font-bold text-white">{progress}%</span>
      </div>
      
      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]"
          initial={{ width: "0%" }}
          animate={isInView ? { width: `${progress}%` } : { width: "0%" }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  );
}
