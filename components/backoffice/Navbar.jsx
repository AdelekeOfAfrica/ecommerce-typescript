import {AlignJustify,Sun, Bell, User} from 'lucide-react';
import React from 'react';


export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-slate-800 text-slate-50">

      {/* icons */}
      <button><AlignJustify/></button>
      {/* 3 icons */}

      <div className="flex space-x-3">
         <button><Sun/></button>
         <button><Bell/></button>
         <button><User/></button>
      </div>
      
    </div>
  )
}
