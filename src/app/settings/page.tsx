export default function SettingsPage() {
  return (
    <div className="p-4 md:p-8 w-full max-w-7xl mx-auto pt-8 md:pt-8 h-full flex flex-col">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
        <p className="text-zinc-400">Manage your account preferences and configurations.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        <div className="md:col-span-3 flex flex-col gap-2">
          <div className="px-4 py-3 rounded-xl bg-emerald-500/10 text-emerald-400 font-medium cursor-pointer">Profile</div>
          <div className="px-4 py-3 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 cursor-pointer transition-colors">Notifications</div>
          <div className="px-4 py-3 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 cursor-pointer transition-colors">Security</div>
          <div className="px-4 py-3 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 cursor-pointer transition-colors">Billing</div>
        </div>
        
        <div className="md:col-span-9 p-8 rounded-3xl bg-[var(--color-card)] border border-white/5">
          <h2 className="text-xl font-bold text-white mb-8">Profile Settings</h2>
          
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-[#13141A] flex items-center justify-center shrink-0 border-2 border-emerald-500/30">
                <span className="text-2xl font-medium text-white">MA</span>
              </div>
              <div>
                <button className="px-4 py-2 rounded-xl bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition-colors mb-2">
                  Change Avatar
                </button>
                <p className="text-xs text-zinc-500">JPG, GIF or PNG. Max size of 800K</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-zinc-400">First Name</label>
                <input type="text" defaultValue="Maya" className="px-4 py-3 rounded-xl bg-[#13141A] border border-white/10 text-white focus:outline-none focus:border-emerald-500 transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-zinc-400">Last Name</label>
                <input type="text" defaultValue="Student" className="px-4 py-3 rounded-xl bg-[#13141A] border border-white/10 text-white focus:outline-none focus:border-emerald-500 transition-colors" />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-medium text-zinc-400">Email Address</label>
                <input type="email" defaultValue="maya@example.com" className="px-4 py-3 rounded-xl bg-[#13141A] border border-white/10 text-white focus:outline-none focus:border-emerald-500 transition-colors" />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-medium text-zinc-400">Bio</label>
                <textarea rows={4} defaultValue="Frontend engineering student passionate about UI/UX design and scalable web applications." className="px-4 py-3 rounded-xl bg-[#13141A] border border-white/10 text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none" />
              </div>
            </div>
            
            <div className="mt-4 pt-6 border-t border-white/5 flex justify-end">
              <button className="px-6 py-3 rounded-xl bg-white text-black font-bold hover:bg-zinc-200 transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
