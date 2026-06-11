"use client";

import { useState } from "react";
import { navigationItems } from "@/data/navigation";
import { NavItem } from "./NavItem";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  // For this demo, we'll consider '/' as active.
  const getIsActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className={`hidden md:flex flex-col h-screen sticky top-0 border-r border-white/5 bg-[var(--color-card)] transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      <div className={`flex items-center h-20 px-6 ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
        {!isCollapsed && (
          <div className="font-bold text-lg tracking-tight flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <span className="text-white text-sm font-black">D</span>
            </div>
            <span>DroitDash</span>
          </div>
        )}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-zinc-500 hover:text-white transition-colors"
        >
          <Menu size={20} />
        </button>
      </div>

      <div className="flex-1 px-3 py-6 flex flex-col gap-2">
        {navigationItems.map((item) => (
          <NavItem 
            key={item.id}
            {...item}
            isActive={getIsActive(item.href)}
            isCollapsed={isCollapsed}
          />
        ))}
      </div>
      
      <div className="p-4 border-t border-white/5">
        <div className={`flex items-center gap-3 p-3 rounded-xl glass ${isCollapsed ? 'justify-center' : ''}`}>
          <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
            <span className="text-sm font-medium">MA</span>
          </div>
          {!isCollapsed && (
            <div className="flex flex-col">
              <span className="text-sm font-medium">Maya Student</span>
              <span className="text-xs text-zinc-500">Pro Plan</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
