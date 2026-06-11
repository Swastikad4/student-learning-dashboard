import { SkeletonCard } from "@/components/dashboard/SkeletonCard";
import { BentoGrid } from "@/components/dashboard/BentoGrid";

export default function Loading() {
  return (
    <div className="p-4 md:p-8 w-full max-w-7xl mx-auto pt-8 md:pt-8 h-full flex flex-col">
      <div className="mb-8 animate-pulse">
        <div className="h-10 w-48 bg-white/5 rounded-xl mb-3"></div>
        <div className="h-5 w-80 bg-white/5 rounded-lg"></div>
      </div>
      
      <BentoGrid>
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonCard key={i} className="lg:col-span-4" />
        ))}
      </BentoGrid>
    </div>
  );
}
