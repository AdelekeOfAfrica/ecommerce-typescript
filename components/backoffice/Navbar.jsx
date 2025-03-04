import { AlignJustify, Sun, Bell, User, LayoutDashboard, LogOut, Settings2 } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-slate-800 text-slate-50
     h-20 px-8 py-8 fixed top-0 left-60 right-0 w-full z-50 pr-[20em]"> 

      {/* icons */}
      <button><AlignJustify size={24} /></button>

      {/* 3 icons */}
      <div className="flex space-x-3">
        <button><Sun size={24} strokeWidth={1.5} className="text-green-600" /></button>

        <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg dark:hover:bg-blue-700 dark:focus:ring-blue-800">
         <Bell className="text-green-600"/>
        <span className="sr-only">Notifications</span>
          <div className="absolute inline-flex items-center 
          justify-center w-6 h-6 text-xs font-bold
           text-white bg-red-500 
            rounded-full -top-0 end-6 dark:border-gray-900">20</div>
        </button>

     
        <button >
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Image width={200} height={200} className="w-8 h-8 rounded-full " src="/placeholder.png" alt="User Profile"/>
              </DropdownMenuTrigger>
              <DropdownMenuContent className=" py-2 px-4 pr-8">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <button className="flex items-center space-x-2">

                    <LayoutDashboard className="mr-2 h-4 w-4"/>
                    <span>Dashboard</span> 
                  </button>
                 
                </DropdownMenuItem>
                <DropdownMenuItem>
                   <button className="flex items-center space-x-2">
                      <LogOut className="mr-2 h-4 w-4"/>
                     <span>Edit Profile</span> 
                   </button>
                

                </DropdownMenuItem>
                <DropdownMenuItem>
                   <button className="flex items-center space-x-2">
                      <User className="mr-2 h-4 w-4"/>
                       <span>Logout </span> 
                   </button>
                
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
        </button>
          


      </div>

    </div>
  )
}