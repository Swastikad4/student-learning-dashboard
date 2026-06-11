import { SkeletonCard } from "@/components/dashboard/SkeletonCard";
import { BentoGrid } from "@/components/dashboard/BentoGrid";

export default function Loading() {
  return (
    <div className="p-4 md:p-8 w-full max-w-7xl mx-auto pt-8 md:pt-8 h-full flex flex-col">
      <div className="mb-8 animate-pulse">
        <div className="h-10 w-64 bg-white/5 rounded-xl mb-3"></div>
        <div className="h-5 w-96 bg-white/5 rounded-lg"></div>
      </div>
      
      <BentoGrid>
        <div className="lg:col-span-8 p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between min-h-[240px] bg-[var(--color-card)] border border-white/5 animate-pulse">
           <div className="w-32 h-6 bg-white/5 rounded-md mb-4" />
           <div className="w-64 h-12 bg-white/5 rounded-md mb-2" />
           <div className="w-48 h-8 bg-white/5 rounded-md mt-auto" />
        </div>
        
        {Array.from({ length: 4 }).map((_, i) => (
          <SkeletonCard key={i} className="lg:col-span-4" />
        ))}
      </BentoGrid>
    </div>
  );
}
