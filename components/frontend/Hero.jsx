import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
  const categories=[
    { id: "1", name: "Category 1" },
    { id: "2", name: "Category 2" },
    { id: "3", name: "Category 3" },
    { id: "4", name: "Category 4" },
    { id: "5", name: "Category 5" },
    { id: "6", name: "Category 6" }
  ];
  return (
    <div className="flex gap-8">
      <div className="w-1/3  bg-white border border-gray-300 rounded-lg  dark:bg-gray-800 dark:border-gray-700 text-slate-800 overflow-hidden">
      {/* category section  */}
     <h2 className="bg-slate-100 py-3 px-6 font-semibold border-gray-300 border-b dark:bg-slate-700 text-slate-800 dark:text-slate-100 dark:border-gray-600">
      Shop by Category 
     </h2>
     <div className="py-3 px-6 h-[300px] overflow-y-auto flex flex-col gap-2">
       {
        categories.map((category,i)=>{
          return(
            <Link key={i} href="#" className="flex items-center gap-3 hover:bg-slate-50 duration-300 transition-all dark:text-slate-300 dark:hover:bg-slate-600 rounded-md">
            <Image src="/logo.png" width={556} height={556} className="w-14 h-14 rounded-full object-cover border border-lime-300"   alt="categoryImage"/>
            <span>{category.name}</span>
            
            </Link>
          );
        })
       }

     </div>
      </div>
      <div className="w-2/3 bg-blue-600 rounded-md">
      {/* banner section */}
      navaber
      </div> 
    </div>
  )
}
