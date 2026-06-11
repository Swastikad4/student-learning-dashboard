import { SkeletonCard } from "@/components/dashboard/SkeletonCard";

export default function Loading() {
  return (
    <div className="p-4 md:p-8 w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        {/* Hero skeleton */}
        <div className="lg:col-span-8 p-8 rounded-3xl bg-[#12121A] border border-white/5 h-[240px] animate-pulse">
          <div className="h-4 w-32 bg-white/5 rounded-md mb-8" />
          <div className="h-12 w-3/4 bg-white/5 rounded-md mb-4" />
          <div className="h-4 w-1/2 bg-white/5 rounded-md mb-8" />
          <div className="h-10 w-40 bg-white/5 rounded-full" />
        </div>

        {/* 4 Course skeletons */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="lg:col-span-4">
            <SkeletonCard />
          </div>
        ))}
      </div>
    </div>
  );
}
