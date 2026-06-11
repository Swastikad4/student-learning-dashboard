import { Calendar as CalendarIcon, Clock, Video } from "lucide-react";

export default function CalendarPage() {
  const upcomingEvents = [
    { id: 1, title: "System Design Live Q&A", date: "Tomorrow, 2:00 PM", type: "Webinar", style: "bg-emerald-500/20 text-emerald-400" },
    { id: 2, title: "React Assessment Due", date: "Friday, 11:59 PM", type: "Deadline", style: "bg-pink-500/20 text-pink-400" },
    { id: 3, title: "Peer Programming Session", date: "Saturday, 10:00 AM", type: "Meeting", style: "bg-teal-500/20 text-teal-400" },
  ];

  return (
    <div className="p-4 md:p-8 w-full max-w-7xl mx-auto pt-8 md:pt-8 h-full flex flex-col">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Calendar</h1>
        <p className="text-zinc-400">Manage your schedule and upcoming deadlines.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-8 rounded-3xl bg-[var(--color-card)] border border-white/5">
           <h2 className="text-xl font-bold text-white mb-6">Upcoming Schedule</h2>
           <div className="flex flex-col gap-4">
             {upcomingEvents.map(event => (
               <div key={event.id} className="p-4 rounded-2xl bg-[#13141A] border border-white/5 flex items-center gap-4 hover:border-emerald-500/50 transition-colors cursor-pointer">
                 <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-emerald-400">
                   {event.type === 'Webinar' ? <Video size={20} /> : event.type === 'Deadline' ? <Clock size={20} /> : <CalendarIcon size={20} />}
                 </div>
                 <div className="flex-1">
                   <h3 className="font-bold text-white">{event.title}</h3>
                   <p className="text-sm text-zinc-400">{event.date}</p>
                 </div>
                 <div className={`px-3 py-1 rounded-full text-xs font-medium ${event.style}`}>
                   {event.type}
                 </div>
               </div>
             ))}
           </div>
        </div>
        
        <div className="p-8 rounded-3xl bg-[var(--color-card)] border border-white/5 flex flex-col">
           <h2 className="text-xl font-bold text-white mb-6">Mini Calendar</h2>
           <div className="grid grid-cols-7 gap-2 text-center text-sm mb-4 text-zinc-500 font-medium">
             <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
           </div>
           <div className="grid grid-cols-7 gap-y-4 gap-x-2 text-center text-sm">
             {Array.from({length: 31}).map((_, i) => (
               <div key={i} className={`w-8 h-8 flex items-center justify-center rounded-full mx-auto ${i === 14 ? 'bg-emerald-500 text-black font-bold shadow-[0_0_10px_rgba(16,185,129,0.5)]' : i === 15 || i === 18 ? 'border border-emerald-500/50 text-emerald-400' : 'text-zinc-300 hover:bg-white/10 cursor-pointer'}`}>
                 {i + 1}
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
}
