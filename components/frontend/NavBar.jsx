"use client"
import React from 'react';
import SearchForm from '../backoffice/SearchForm';
import Link from 'next/link';
import Image from 'next/image'
import { HelpCircle,ShoppingCart,User,X } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeperator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import ThemeSwitcher from '@/components/ThemeSwitcher'
import HelpModal from './HelpModal';
import CartCount from './CartCount';
import {useSession} from "next-auth/react";
import Loading from "@/app/loading"
import UserAvatar from "@/components/frontend/UserAvatar"
export default function NavBar() {
  const {data:session,status}= useSession();
  if(status === "loading"){
   return <p>loading ...</p>
  }

  const user = {}
  return (
    <div className="bg-white dark:bg-slate-800">
      <div className="flex items-center justify-between py-3 max-w-7xl mx-auto px-8 gap-8">
        <Link href="/">
          <Image
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="ecommerce" width={24} height={24} className="mt-3"
          />
        </Link>

        <div className="flex-grow">
          <SearchForm />
        </div>

        <div className="flex gap-4">
            {
              status ==="unauthenticated"?(
                <Link href="/login" className="flex items-center space-x-1 text-green-500 dark:text-slate-100">
                <User/>
                <span>Login</span>
            </Link>
              ):(
                 <div className="flex items-center">
                  <UserAvatar user={session?.user} />
                </div>
              )
            }

            <HelpModal/>
             <CartCount/>
            <ThemeSwitcher/>
        </div>
      </div>
      
    </div>
  );
}
