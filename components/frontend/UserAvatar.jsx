"use client"
import { AlignJustify, Sun, Bell, User, LayoutDashboard, LogOut, X } from 'lucide-react';
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
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

export default function UserAvatar({user}) {
  const router = useRouter();
  
  async function handleLogout(){
    await signOut()
    router.push("/");
  }
  return (
    <div>
      
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
                         <button onClick={handleLogout} className="flex items-center space-x-2">
                            <User className="mr-2 h-4 w-4"/>
                             <span>Logout </span> 
                         </button>
                      
                      </DropdownMenuItem>
                    </DropdownMenuContent>
        </DropdownMenu>
    </div>
  )
}
