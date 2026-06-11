"use client";

import { motion } from "framer-motion";
import { Course } from "@/lib/types";
import { ProgressBar } from "@/components/ui/ProgressBar";
import * as LucideIcons from "lucide-react";
import { useMemo } from "react";

interface CourseCardProps {
  course: Course;
  index: number;
}

const colorVariants = [
  { bg: 'bg-teal-500/20', text: 'text-teal-400', progress: 'from-teal-500 to-teal-400' },
  { bg: 'bg-emerald-500/20', text: 'text-emerald-400', progress: 'from-emerald-500 to-emerald-400' },
  { bg: 'bg-pink-500/20', text: 'text-pink-400', progress: 'from-pink-500 to-pink-400' },
  { bg: 'bg-amber-500/20', text: 'text-amber-400', progress: 'from-amber-500 to-amber-400' },
  { bg: 'bg-purple-500/20', text: 'text-purple-400', progress: 'from-purple-500 to-purple-400' },
];

export function CourseCard({ course, index }: CourseCardProps) {
  // Dynamically resolve the Lucide icon component
  const Icon = useMemo(() => {
    // Format "file-code-2" to "FileCode2" to match Lucide exports
    const iconName = course.icon_name
      .split('-')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');
      
    // Type assertion because we're dynamically accessing exports
    const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.BookOpen;
    return IconComponent;
  }, [course.icon_name]);

  const color = colorVariants[index % colorVariants.length];

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="lg:col-span-4 p-6 rounded-3xl bg-[var(--color-card)] border border-white/5 relative overflow-hidden group cursor-pointer flex flex-col justify-between min-h-[240px]"
    >
      
      <div className="relative z-10">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${color.bg} ${color.text} transition-transform group-hover:scale-110 duration-300`}>
          <Icon size={24} />
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2 leading-tight">
          {course.title}
        </h3>
        <p className="text-sm text-zinc-500 mb-6 line-clamp-2">
          Continue your learning journey to master these skills.
        </p>
      </div>

      <div className="relative z-10 mt-auto w-full">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Progress</span>
          <span className={`text-xs font-bold ${color.text}`}>{course.progress}%</span>
        </div>
        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${color.progress} rounded-full`}
            initial={{ width: "0%" }}
            animate={{ width: `${course.progress}%` }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          />
        </div>
      </div>
    </motion.div>
  );
}
