"use client"
import React from 'react';
import Link from "next/link"
import CategoryCarousel from "@/components/frontend/CategoryCarousel"

export default function CategoryList({ category }) {
  if (!category || !category.products || category.products.length === 0) {
    return null; // 👈 do not render anything
  }

  return (
    <div className="bg-white border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-700 text-slate-800 overflow-hidden">
      <div className="bg-slate-100 dark:bg-gray-800 py-3 px-6 font-semibold border-b border-gray-300 dark:border-gray-600 text-slate-800 dark:text-slate-100 flex justify-between items-center">
        <h2>{category.title}</h2>
        <Link
          className="bg-green-900 hover:bg-green-800 duration-300 transition-all text-slate-50 rounded-md px-4 py-2"
          href="#"
        >
          SEE ALL
        </Link>
      </div>

      <div className="bg-white dark:bg-slate-700 p-4">
        <CategoryCarousel products={category.products} />
      </div>
    </div>
  );
}

