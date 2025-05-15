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
export default function NavBar() {
  return (
    <div className="bg-white dark:bg-slate-800">
      <div className="flex items-center justify-between py-3 max-w-7xl mx-auto px-8 gap-8">
        <Link href="/">
          <Image
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="ecommerce" width={24} height={24}
          />
        </Link>

        <div className="flex-grow">
          <SearchForm />
        </div>

        <div className="flex gap-4">
            <Link href="/login" className="flex items-center space-x-1 text-green-500 dark:text-slate-100">
                <User/>
                <span>Login</span>
            </Link>

            <Link href="/help" className="flex items-center space-x-1 text-green-500 dark:text-slate-100">
                <HelpCircle/>
                <span>Help</span>
            </Link>

             <Link  href="/cart"type="button"  className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg">
                <ShoppingCart className="text-lime-700 dark:text-lime-500"/>
                <span className="sr-only">Cart</span>

                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold
                text-white bg-red-500 rounded-full -top-0
                 end-6 dark:border-gray-900">
                  20
                </div>
            </Link>
            <ThemeSwitcher/>
        </div>
      </div>
      
    </div>
  );
}
