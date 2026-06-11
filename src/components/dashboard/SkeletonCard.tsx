export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={`p-6 rounded-3xl bg-[#12121A] border border-white/5 relative overflow-hidden flex flex-col justify-between min-h-[240px] animate-pulse ${className}`}>
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-white/5 mb-6" />
        <div className="h-6 w-3/4 bg-white/5 rounded-md mb-3" />
        <div className="h-4 w-full bg-white/5 rounded-md mb-2" />
        <div className="h-4 w-5/6 bg-white/5 rounded-md mb-6" />
      </div>

      <div className="relative z-10 mt-auto">
        <div className="flex justify-between mb-2">
          <div className="h-3 w-16 bg-white/5 rounded-md" />
          <div className="h-3 w-8 bg-white/5 rounded-md" />
        </div>
        <div className="h-2 w-full bg-white/5 rounded-full" />
      </div>
    </div>
  );
}
