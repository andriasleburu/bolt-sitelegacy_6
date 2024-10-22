"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LayoutDashboard, BarChart2, FileText, FolderKanban, Calendar, Users, Layers } from 'lucide-react';

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/' },
  { name: 'Analytics', icon: BarChart2, href: '/analytics' },
  { name: 'Reports', icon: FileText, href: '/reports' },
  { name: 'Projects', icon: FolderKanban, href: '/projects' },
  { name: 'Events', icon: Calendar, href: '/events' },
  { name: 'Members', icon: Users, href: '/members' },
  { name: 'Spaces', icon: Layers, href: '/spaces' },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-64 bg-card text-card-foreground">
      <div className="flex items-center justify-center h-16 border-b">
        <span className="text-2xl font-semibold">Sitelegacy</span>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="p-4 space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className={cn(
                "flex items-center p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors",
                pathname === item.href ? "bg-accent text-accent-foreground" : ""
              )}>
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;