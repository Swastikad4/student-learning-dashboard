"use client";

import { navigationItems } from "@/data/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export function MobileNav() {
  const pathname = usePathname();

  const getIsActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-20 bg-[var(--color-card)] border-t border-white/5 z-50 pb-safe">
      <div className="flex items-center justify-around h-full px-2">
        {navigationItems.map((item) => {
          const isActive = getIsActive(item.href);
          const Icon = item.icon;
          
          return (
            <Link 
              key={item.id} 
              href={item.href}
              className="relative flex flex-col items-center justify-center w-16 h-14"
            >
              {isActive && (
                <motion.div
                  layoutId="mobileActiveNavIndicator"
                  className="absolute inset-0 bg-emerald-500/10 rounded-xl"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <div className="relative z-10 flex flex-col items-center gap-1">
                <Icon 
                  size={20} 
                  className={`transition-colors duration-200 ${isActive ? 'text-emerald-400' : 'text-zinc-500'}`} 
                />
                <span className={`text-[10px] font-medium transition-colors duration-200 ${isActive ? 'text-emerald-400' : 'text-zinc-500'}`}>
                  {item.label}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
