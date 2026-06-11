"use client";

import { motion } from "framer-motion";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";

const data = [
  { name: "Mar 10", current: 800, previous: 400 },
  { name: "Mar 15", current: 1200, previous: 700 },
  { name: "Mar 20", current: 700, previous: 300 },
  { name: "Mar 25", current: 900, previous: 500 },
  { name: "Apr 1", current: 2000, previous: 1000 },
  { name: "Apr 5", current: 2700, previous: 1100 },
  { name: "Apr 8", current: 1800, previous: 900 },
  { name: "Apr 12", current: 900, previous: 700 },
];

export function EnrollmentChart() {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate="show"
      className="p-8 rounded-3xl bg-[var(--color-card)] border border-white/5 relative overflow-hidden col-span-1 md:col-span-12"
    >
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-xl font-bold text-white mb-1">Student Enrollment Trend</h2>
          <p className="text-sm text-zinc-400">Daily active learners in the last 30 days</p>
        </div>
        <div className="flex gap-4 text-sm font-medium">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-zinc-300">Current period</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-800" />
            <span className="text-zinc-400">Previous period</span>
          </div>
        </div>
      </div>

      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorPrevious" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#064E3B" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#064E3B" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#71717A', fontSize: 12 }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#71717A', fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#13141A', 
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                color: '#fff'
              }}
              itemStyle={{ color: '#fff' }}
            />
            <Area 
              type="monotone" 
              dataKey="previous" 
              stroke="#064E3B" 
              fillOpacity={1} 
              fill="url(#colorPrevious)" 
            />
            <Area 
              type="monotone" 
              dataKey="current" 
              stroke="#10B981" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorCurrent)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
