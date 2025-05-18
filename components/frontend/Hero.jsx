"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import HeroCarousel from '@/components/frontend/HeroCarousel';
import { DollarSign, HelpCircle, RefreshCw } from 'lucide-react';

export default function Hero() {
  const categories = [
    { id: "1", name: "Category 1" },
    { id: "2", name: "Category 2" },
    { id: "3", name: "Category 3" },
    { id: "4", name: "Category 4" },
    { id: "5", name: "Category 5" },
    { id: "6", name: "Category 6" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
      
      {/* Left Column: Category Section (col-span-3) */}
      <div className="md:col-span-3 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 text-slate-800 overflow-hidden ">
        <h2 className="bg-slate-100 py-3 px-6 font-semibold border-gray-300 border-b dark:bg-slate-700 text-slate-800 dark:text-slate-100 dark:border-gray-600">
          Shop by Category
        </h2>
        <div className="py-3 px-6 h-[300px] overflow-y-auto flex flex-col gap-2">
          {categories.map((category, i) => (
            <Link
              key={i}
              href="#"
              className="flex items-center gap-3 hover:bg-slate-50 transition-all duration-300 dark:text-slate-300 dark:hover:bg-slate-600 rounded-md"
            >
              <Image
                src="/logo.png"
                width={556}
                height={556}
                className="w-14 h-14 rounded-full object-cover border border-lime-300"
                alt="categoryImage"
              />
              <span>{category.name}</span>
            </Link>
          ))}
        </div>
      </div>

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
