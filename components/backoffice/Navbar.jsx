import { AlignJustify, Sun, Bell, User } from 'lucide-react';
import React from 'react';

export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-slate-800 text-slate-50
     h-16 px-8 py-4 fixed top-0 left-60 right-0"> 

      {/* icons */}
      <button><AlignJustify size={24} /></button>

      {/* 3 icons */}
      <div className="flex space-x-3">
        <button><Sun size={24} strokeWidth={1.5} /></button>
        <button><Bell size={24} strokeWidth={1.5} /></button>
        <button><User size={24} strokeWidth={1.5} /></button>
      </div>

    </div>
  )
}
