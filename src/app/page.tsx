import { createSupabaseClient } from "@/lib/supabase/server";
import { Course } from "@/lib/types";
import { BentoGrid } from "@/components/dashboard/BentoGrid";
import { HeroTile } from "@/components/dashboard/HeroTile";
import { CourseCard } from "@/components/dashboard/CourseCard";
import { ActivityTile } from "@/components/dashboard/ActivityTile";

// Use Next.js caching behavior, but revalidate every hour or keep it dynamic
export const revalidate = 3600;

async function getCourses(): Promise<Course[]> {
  const supabase = createSupabaseClient();
  
  if (!supabase) {
    console.warn("Supabase credentials missing. Returning mock data.");
    return [
      { id: '1', title: 'React Fundamentals', progress: 78, icon_name: 'atom', created_at: '' },
      { id: '2', title: 'TypeScript Mastery', progress: 45, icon_name: 'file-code-2', created_at: '' },
      { id: '3', title: 'System Design', progress: 92, icon_name: 'network', created_at: '' },
      { id: '4', title: 'Data Structures', progress: 60, icon_name: 'binary', created_at: '' },
    ];
  }

  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(4);

  if (error) {
    console.error("Error fetching courses:", error);
    return [];
  }

  return data as Course[];
}

export default async function DashboardPage() {
  const courses = await getCourses();

  return (
    <div className="p-4 md:p-8 w-full max-w-7xl mx-auto pt-8 md:pt-8">
      <BentoGrid>
        <HeroTile />
        
        {courses.length > 0 ? (
          courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))
        ) : (
          <div className="lg:col-span-4 p-8 rounded-3xl bg-[#12121A] border border-white/5 flex flex-col items-center justify-center text-center">
            <p className="text-zinc-500 mb-2">No courses found</p>
            <p className="text-sm text-zinc-600">Add data to Supabase to see them here.</p>
          </div>
        )}

        <ActivityTile />
      </BentoGrid>
    </div>
  );
}
