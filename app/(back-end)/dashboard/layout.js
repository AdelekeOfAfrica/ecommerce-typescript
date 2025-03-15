"use client"

import React, { useState } from 'react'
import Sidebar from '@/components/backoffice/Sidebar.jsx'
import Navbar from '@/components/backoffice/navbar.jsx'

export default function Layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false); // initializing the showing and disappearing of the sidebar

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      {/* Main content area */}
      <div className={`${showSidebar ? "lg:ml-60" : "ml-0"} flex-grow min-h-screen transition-all duration-300`}>
        {/* Navbar */}
        <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

        {/* Main content */}
        <main className="p-8 bg-slate-100 dark:bg-slate-900 text-slate-50 mt-0">
          {children}
        </main>
      </div>
    </div>
  );
}
