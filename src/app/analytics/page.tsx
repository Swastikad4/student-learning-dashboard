import { EnrollmentChart } from "@/components/analytics/EnrollmentChart";

export default function AnalyticsPage() {
  return (
    <div className="p-4 md:p-8 w-full max-w-7xl mx-auto pt-8 md:pt-8 h-full flex flex-col">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Course Analytics</h1>
        <p className="text-zinc-400">Spring Semester 2025 • 14 active courses</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        <EnrollmentChart />
      </div>
    </div>
  );
}
