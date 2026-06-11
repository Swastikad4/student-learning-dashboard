import { LayoutDashboard, BookOpen, BarChart3, Calendar, Settings } from 'lucide-react';

export const navigationItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/' },
  { id: 'courses', label: 'Courses', icon: BookOpen, href: '/courses' },
  { id: 'analytics', label: 'Analytics', icon: BarChart3, href: '/analytics' },
  { id: 'calendar', label: 'Calendar', icon: Calendar, href: '/calendar' },
  { id: 'settings', label: 'Settings', icon: Settings, href: '/settings' },
];
