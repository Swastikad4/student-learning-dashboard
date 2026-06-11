import { createSupabaseClient } from "@/lib/supabase/server";
import { Course } from "@/lib/types";
import { CourseCard } from "@/components/dashboard/CourseCard";
import { BentoGrid } from "@/components/dashboard/BentoGrid";

export const revalidate = 3600;

async function getCourses(): Promise<Course[]> {
  const supabase = createSupabaseClient();
  
  if (!supabase) {
    return [
      { id: '1', title: 'React Fundamentals', progress: 78, icon_name: 'atom', created_at: '' },
      { id: '2', title: 'TypeScript Mastery', progress: 45, icon_name: 'file-code-2', created_at: '' },
      { id: '3', title: 'System Design', progress: 92, icon_name: 'network', created_at: '' },
      { id: '4', title: 'Data Structures', progress: 60, icon_name: 'binary', created_at: '' },
      { id: '5', title: 'Cloud Architecture', progress: 30, icon_name: 'cloud', created_at: '' },
      { id: '6', title: 'Advanced CSS', progress: 15, icon_name: 'paintbrush', created_at: '' },
    ];
  }

  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error("Error fetching courses:", error);
    return [];
  }

  return data as Course[];
}

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <div className="p-4 md:p-8 w-full max-w-7xl mx-auto pt-8 md:pt-8 h-full flex flex-col">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">My Courses</h1>
        <p className="text-zinc-400">Continue where you left off or explore new topics.</p>
      </div>
      
      <BentoGrid>
        {courses.map((course, index) => (
          <CourseCard key={course.id} course={course} index={index} />
        ))}
      </BentoGrid>
    </div>
  );
}
