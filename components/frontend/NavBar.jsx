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
} from '@/components/ui/dropdown-menu'
export default function NavBar() {
  return (
    <div className="bg-gray-50 dark:bg-slate-800">
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
            <button className="flex items-center space-x-1 text-green-500">
                <User/>
                <span>Login</span>
            </button>

            <button className="flex items-center space-x-1 text-green-500">
                <HelpCircle/>
                <span>Help</span>
            </button>
        </div>
      </div>
    </div>
  );
}
