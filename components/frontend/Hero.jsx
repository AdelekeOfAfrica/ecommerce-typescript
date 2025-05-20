"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import HeroCarousel from '@/components/frontend/HeroCarousel';
import { DollarSign, HelpCircle, RefreshCw } from 'lucide-react';
import SidebarCategories from '@/components/frontend/SidebarCategories'
export default function Hero() {


  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6 px-8 lg:px-0">
      
      {/* Left Column: Category Section (col-span-3) */}
        <SidebarCategories/>

      {/* Center Column: Hero Carousel (col-span-7) */}
      <div className="col-span-full md:col-span-7 bg-blue-600 rounded-md">
        <HeroCarousel />
      </div>

      {/* Right Column: Help Center (col-span-2) */}
      <div className="md:col-span-2 hidden sm:block bg-white p-3 dark:bg-slate-800 rounded-lg">
        <Link href="/help" className="flex items-center space-x-1 mb-3">
          <HelpCircle className="shrink-0 w-5 h-5 dark:text-green-500 text-slate-500" />
          <div className="flex flex-col">
            <h2 className="uppercase text-sm">Help Center</h2>
            <p className="text-[0.6rem]">Guide to Customer Care</p>
          </div>
        </Link>

        <Link href="/help" className="flex items-center space-x-1 mb-3">
          <RefreshCw className="shrink-0 w-5 h-5 dark:text-green-500 text-slate-500" />
          <div className="flex flex-col">
            <h2 className="uppercase text-sm">Easy Return</h2>
            <p className="text-[0.6rem]">Quick Return</p>
          </div>
        </Link>

        <Link href="/register-farmer" className="flex items-center space-x-1 mb-6">
          <DollarSign className="shrink-0 w-5 h-5 dark:text-green-500 text-slate-500" />
          <div className="flex flex-col">
            <h2 className="uppercase text-sm">Sell on Ecom</h2>
            <p className="text-[0.6rem]">We have millions of visitors</p>
          </div>
        </Link>

        <Image src="/advert.gif" width={300} height={300} alt="advert image" className="w-full rounded-lg"/>
      </div>

    </div>
  );
}
