"use client"

import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;