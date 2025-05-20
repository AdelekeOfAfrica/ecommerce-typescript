import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {getData} from '@/lib/getData';
export default  async function SidebarCategories() {
      const categories = await getData('categories');

  return (
    <div className="hidden sm:block sm:col-span-3 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 text-slate-800 overflow-hidden">

    <h2 className="bg-slate-100 py-3 px-6 font-semibold border-gray-300 border-b dark:bg-slate-700 text-slate-800 dark:text-slate-100 dark:border-gray-600">
      Shop by Category ({categories.length})
    </h2>
    <div className="py-3 px-6 h-[300px] overflow-y-auto flex flex-col gap-2">
      {categories.map((category, i) => (
    category.imageUrl && category.title && (
    <Link
      key={i}
      href="#"
      className="flex items-center gap-3 hover:bg-slate-50 transition-all duration-300 dark:text-slate-300 dark:hover:bg-slate-600 rounded-md"
    >
      <Image
        src={category.imageUrl}
        width={56}
        height={56}
        className="rounded-full object-cover border border-lime-300"
        alt={category.title}
      />
      <span>{category.title}</span>
    </Link>
  )
      ))}
    </div>
  </div>
  )
}
