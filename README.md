🔍 DroitDash - Student Learning Dashboard
Next.js React TypeScript Tailwind CSS Supabase Framer Motion

📌 Project Overview
DroitDash is a production-ready, high-fidelity Student Learning Dashboard built with Next.js (App Router), TypeScript, Tailwind CSS, Supabase, and Framer Motion. 

The dashboard provides a premium "crypto/SaaS" dark mode experience, enabling students to track their enrolled courses, analyze learning trends via dynamic charts, manage their upcoming schedules, and configure their profile settings.

This project demonstrates real-world frontend and full-stack development concepts including:

- Modern React architecture with Next.js App Router
- Server Components (RSC) vs Client Components optimization
- Complex state and layout animations using Framer Motion
- Database integration and server-side data fetching with Supabase
- Custom data visualization using Recharts
- Responsive Bento Grid UI design
- Deep theming and custom CSS property management

🎯 Objectives
- Build a visually stunning, premium dark-mode dashboard with a SaaS aesthetic.
- Implement highly animated, buttery-smooth interactions using Framer Motion.
- Fetch and display dynamic course data directly from a Supabase PostgreSQL database.
- Provide interactive analytics with overlapping area charts.
- Implement clean, modular, and reusable React components.
- Practice industry-standard frontend workflows and file structuring.

✅ Assignment Requirements Covered

Frontend Requirements
- React component architecture using Next.js App Router
- Strict type-checking with TypeScript
- Responsive styling using Tailwind CSS v4
- Server-side data fetching directly from Supabase
- Complex layout animations and transitions
- Interactive routing and active state management

UI/UX Design Requirements
- Premium dark mode color palette (Emerald/Teal crypto vibe)
- Collapsible sidebar navigation with animated active indicators
- Bento grid layout for dashboard tiles
- Custom data visualizations replacing default chart styles
- Consistent typography and spacing (Inter font)
- Mobile-responsive bottom navigation bar

Additional Improvements Implemented
- Dynamic Lucide React icon rendering based on database strings
- Smooth page transitions and hover micro-interactions
- Mock calendar feed and profile configuration forms
- Global CSS variable architecture for rapid theming

✨ Key Features

📚 Course Tracking
- Dynamic course fetching from Supabase using Server Components
- Beautifully animated course cards with distinct color variants
- Progress bars indicating completion status
- Dynamic Lucide icon resolution

📊 Interactive Analytics
- Custom overlapping area chart using Recharts
- Displays 30-day student enrollment trends
- Custom SVG gradients matching the emerald theme
- Seamless tooltip integration

📅 Schedule Management
- Upcoming schedule feed categorizing Webinars, Deadlines, and Meetings
- Color-coded event tags
- Interactive mini-calendar layout with current day highlighting

⚙️ Profile Configuration
- Multi-section settings layout (Profile, Notifications, Security)
- Form inputs for user details and bio
- Themed UI elements matching the overarching application design

🌍 Real-World Impact
Educational platforms and e-learning SaaS products require engaging, high-retention user interfaces. This dashboard provides a template for:

- EdTech startups building student portals
- Corporate training platforms tracking employee progress
- Bootcamps and online courses needing a premium learning environment
- Developers looking to understand Next.js App Router and Framer Motion integration

🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 15 | React framework (App Router) |
| TypeScript | Static typing for robust code |
| Tailwind CSS | Utility-first styling and theming |
| Supabase | PostgreSQL database and backend |
| Framer Motion | Spring-physics based animations |
| Recharts | Data visualization library |
| Lucide React | Clean, consistent SVG icons |

🧱 System Architecture

```text
Client (Browser)
          │
          ▼
   Next.js App Router
          │
          ├── Server Components (Default)
          │     ├── Fetch data from Supabase
          │     └── Render initial HTML / Layouts
          │
          └── Client Components ("use client")
                ├── Framer Motion Animations
                ├── Recharts Renderings
                └── Interactive UI (Sidebar toggles)
```

🔄 Component Rendering Flow
1. User navigates to a route (e.g., `/courses`)
2. Next.js Server Component `CoursesPage` executes
3. Server queries Supabase PostgreSQL directly
4. Server generates HTML with populated data
5. Client receives HTML and hydrates interactive components (Framer Motion, Sidebar)

📂 Project Structure
```text
Student Learning Dashboard/
│
├── src/
│   ├── app/                    # Next.js App Router pages and layouts
│   │   ├── globals.css         # Tailwind and custom theme variables
│   │   ├── layout.tsx          # Root layout and font configuration
│   │   ├── page.tsx            # Main dashboard overview
│   │   └── courses, analytics, calendar, settings...
│   │
│   ├── components/             # Reusable UI components
│   │   ├── dashboard/          # Bento grid, Hero, Course Cards
│   │   ├── sidebar/            # Desktop and Mobile navigation
│   │   └── analytics/          # Recharts components
│   │
│   └── lib/                    # Utilities and types
│       ├── supabase/           # Supabase client initialization
│       └── types.ts            # TypeScript interfaces
│
├── supabase/                   # Database schema and seed data
├── .env.local.example          # Environment variables template
├── package.json                # Project dependencies
└── README.md                   # You are here
```

⚙️ Prerequisites
- Node.js v18 or later
- npm (included with Node.js)
- A Supabase account and project

🚀 Available Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install all dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |

🏁 Getting Started

1️⃣ Clone Repository
```bash
git clone https://github.com/your-username/student-learning-dashboard.git
cd student-learning-dashboard
```

2️⃣ Install Dependencies
```bash
npm install
```

3️⃣ Set Up Environment Variables
Copy the example file and fill in your Supabase credentials:
```bash
cp .env.local.example .env.local
```

4️⃣ Set Up Supabase Database
Run the `supabase/schema.sql` and `supabase/seed.sql` files in your Supabase project's SQL Editor to create the `courses` table and populate it with sample data.

5️⃣ Start the Server
```bash
npm run dev
```
Open `http://localhost:3000` to view the dashboard.

🗄️ Database Schema
Database: Supabase (PostgreSQL)
Table: `courses`

| Field | Type | Description |
|-------|------|-------------|
| id | UUID (PK) | Unique record identifier |
| title | TEXT | Course title |
| progress | INTEGER | Course completion percentage (0-100) |
| icon_name | TEXT | Lucide React icon string reference |
| created_at | TIMESTAMPTZ | Record creation timestamp |

⚡ Challenges Faced & Solutions

| Challenge | Solution |
|-----------|----------|
| Framer Motion Layout Animations | Centralized navigation state and utilized `layoutId` within persistent layouts to prevent abrupt unmounting. |
| Customizing Recharts | Bypassed standard CSS to inject custom SVG `<defs>` with `<linearGradient>` directly into the component tree. |
| Global Theming Transitions | Migrated from hardcoded utilities to CSS variables (`var(--color-card)`) allowing instant, global color pivots. |
| Lucide Icon Dynamic Rendering | Implemented a `useMemo` hook to safely resolve and render icons based on database string values. |

💡 Learning Outcomes
This project helped in understanding:
- Advanced Next.js App Router concepts (RSC vs Client Components)
- Fluid UI animations and spring physics with Framer Motion
- Integrating Supabase natively within Server Components
- Overriding complex charting libraries (Recharts) for custom themes
- Bento Grid layout design patterns

🌟 Project Highlights
✅ Premium dark-mode SaaS UI design
✅ Fully responsive layout (Desktop Sidebar + Mobile Bottom Nav)
✅ Framer Motion layout animations
✅ Real-time data fetching with Supabase
✅ Custom SVG overlapping area charts
✅ Modular and strict-typed React architecture

👨💻 Developed By
**Swastika Dey**
*B.Tech Computer Science Engineering Student*
Passionate about Full Stack Development, UI/UX Design, and Building Real-World Applications
