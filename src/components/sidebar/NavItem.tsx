"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface NavItemProps {
  id: string;
  label: string;
  icon: LucideIcon;
  href: string;
  isActive: boolean;
  isCollapsed?: boolean;
}

export function NavItem({ id, label, icon: Icon, href, isActive, isCollapsed }: NavItemProps) {
  return (
    <Link href={href} className="relative flex items-center group w-full py-3 px-4 outline-none">
      {isActive && (
        <motion.div
          layoutId="activeNavIndicator"
          className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-emerald-500 rounded-r-full"
          initial={false}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
      
      {/* Background highlight on hover/active */}
      {isActive && (
         <div className="absolute inset-0 bg-emerald-500/5 rounded-xl" />
      )}
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
      
      <div className={`relative flex items-center z-10 w-full ${isCollapsed ? 'justify-center ml-0' : 'gap-4 ml-2'}`}>
        <Icon 
          size={20} 
          className={`transition-colors duration-200 ${isActive ? 'text-emerald-400' : 'text-zinc-500 group-hover:text-zinc-300'}`} 
        />
        
        {!isCollapsed && (
          <span className={`font-medium text-sm transition-colors duration-200 ${isActive ? 'text-emerald-400' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
            {label}
          </span>
        )}
      </div>
    </Link>
  );
}
