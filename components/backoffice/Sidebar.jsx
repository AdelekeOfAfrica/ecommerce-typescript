"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.png';
import { ExternalLink, LayoutGrid, Slack, Tractor, Truck, Users2, UserSquare2, Warehouse } from 'lucide-react';
import { usePathname } from 'next/navigation';


export default function Sidebar() {
  const pathName=usePathname()
  const sidebarLinks =[
    {
      title:"Dashboard",
      icon:LayoutGrid,
      href:"/dashboard"
    },
    
    {
      title:"Catalogue",
      icon:Slack,
       href:"/dashboard/Catalogue"
    },
    
    {
      title:"Customers",
      icon:Users2,
       href:"/dashboard/Customers"
    },
    {
      title:"Orders",
      icon:Truck,
       href:"/dashboard/Orders"
    },
    {
      title:"Markets",
      icon:Warehouse,
    
       href:"/dashboard/Markets"
    },
    {
      title:"Farmers",
      icon:Tractor
      ,
       href:"/dashboard/Farmers"
    },


    {
      title:"Staffs",
      icon:UserSquare2
      ,
       href:"/dashboard/Staffs"
    },


    {
      title:"Settings",
      icon:LayoutGrid,
      href:"/dashboard/settings"
    },

    {
      title:"Online Store",
      icon:ExternalLink,
      href:"/dashboard/onlineStore"
    },
  ];
  return (
    <div className="dark:bg-slate-700 bg-slate-50 space-y-6 w-60 h-screen text-slate-800 dark:text-slate-50 fixed left-0 top-0 shadow-md">
    
      <Link className="" href="#" >
        {/*<Image src={logo} alt="company logo " className="w-36" height={190} />*/}
      </Link>

      <div className="space-y-4 flex flex-col mt-14">
      <Link href="#" className="flex items-center space-x-3 
      px-6 py-2 border-l-4 border-green-600 "> 
      <LayoutGrid/>
       <span>Dashboard </span>
       </Link>
       <Link href="#" className="flex items-center space-x-3 
      px-6 py-2 border-l-4 border-green-600 "> 
      <Slack/>
       <span>Catalogue </span>
       </Link>

       {
        sidebarLinks.map((item,i)=>{
          const Icon= item.icon

            return (
              <Link key={i} href={item.href} className={`flex items-center space-x-3 
                px-6 py-2 border-l-4 border-green-600`}> 
                <Icon/>
                 <span>{item.title} </span>
                 </Link>
            );
        })
       }

      </div>
    </div>
  )
}
