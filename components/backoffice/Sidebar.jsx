"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.png';
import { LayoutDashboard,User,ChevronsRight, ExternalLink, LayoutGrid, LogOut, Slack, Tractor, Truck, Users2, UserSquare2, Warehouse, Boxes, LayoutList, SendToBack, ScanSearch, MonitorPlay, ChevronDown } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { usePathname } from 'next/navigation';


export default function Sidebar({showSidebar,setShowSidebar}) {
  const pathName=usePathname()
  const sidebarLinks =[

    
    {
      title:"Customers",
      icon:Users2,
       href:"/dashboard/customers"
    },
    {
      title:"Orders",
      icon:Truck,
       href:"/dashboard/orders"
    },
    {
      title:"Markets",
      icon:Warehouse,
    
       href:"/dashboard/markets"
    },
    {
      title:"Farmers",
      icon:Tractor
      ,
       href:"/dashboard/farmers"
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

  const catalogueLinks =[

    
    {
      title:"Products",
      icon:Boxes,
       href:"/dashboard/products"
    },
    {
      title:"Categories",
      icon:LayoutList,
       href:"/dashboard/categories"
    },
    {
      title:"Banners",
      icon:SendToBack,
    
       href:"/dashboard/banners"
    },
    {
      title:"Coupons",
      icon:ScanSearch
      ,
       href:"/dashboard/coupons"
    },


    {
      title:"Store Sliders",
      icon:MonitorPlay
      ,
       href:"/dashboard/sliders"
    }
  ];
  console.log("Sidebar state:", showSidebar);
  const[openMenu,setOpenMenu]=useState(false);
  return (
 

  <div style={{ display: showSidebar ? "block" : "none" }} className={showSidebar ? "sm:block mt-20 sm:mt-0 dark:bg-slate-800 bg-white space-y-6 w-64 h-screen text-slate-800 dark:text-slate-200 fixed left-0 top-0 shadow-md overflow-y-scroll":"sm:block mt-20 hidden sm:mt-0 dark:bg-slate-800 bg-white space-y-6 w-64 h-screen text-slate-800 dark:text-slate-200 fixed left-0 top-0 shadow-md overflow-y-scroll"}>

    
    
    
      <Link className="" href="#" >
        {/*<Image src={logo} alt="company logo " className="w-36" height={190} />*/}
      </Link>

      <div className="space-y-4 flex flex-col mt-14">
      <Link href="/dashboard" className={pathName =="/dashboard" ?`flex items-center space-x-3 
                px-6 py-2 border-l-4 border-green-600 text-green-600`:'flex items-center space-x-3  px-6 py-2'}> 
          <LayoutGrid/>
       <span>Dashboard </span>
       </Link>

       <Collapsible>
            <CollapsibleTrigger asChild className='mb-3' onClick={()=>setOpenMenu(!openMenu)}>
             <button  className="flex items-center space-x-6 
                px-6 py-2  "> 
                <div className="flex  items-center space-x-3 
                  ">
                <Slack/>
                <span>Catalogue </span>
                {openMenu ?<ChevronDown />:<ChevronsRight/>}
                </div>
              </button>
              </CollapsibleTrigger  >
              <CollapsibleContent className=" rounded-lg py-2 px-4 pr-8 dark:bg-slate-800 dark:bg-slate-300">
                
              {
                catalogueLinks.map((item,i)=>{
                  const Icon= item.icon
                  return(
                    <Link key={i} href={item.href}  className={item.href ==pathName ?`flex items-center space-x-3 
                      px-6 py-1  text-sm border-l-4 border-green-600`:'flex items-center space-x-3  px-6 py-1'}>  
                    <Icon className="w-4 h-4"/>
                    <span>{item.title} </span>
                    </Link>
                  );
                })
              }
                 
              
               
              </CollapsibleContent>
            </Collapsible>
     

       {
        sidebarLinks.map((item,i)=>{
          const Icon= item.icon

            return (
              <Link 
              onClick={()=>setShowSidebar(false)}
              key={i} href={item.href} className={item.href ==pathName ?`flex items-center space-x-3 
                px-6 py-2 border-l-4 border-green-600`:'flex items-center space-x-3  px-6 py-2'}> 
                <Icon/>
                 <span>{item.title} </span>
                 </Link>
            );
        })
       }

    <div className="px-6 py-2 ">
       <button className="flex items-center space-x-3 
                 bg-green-600 rounded-md px-6 py-3">
        <LogOut/>
          <span >Logout</span>
       </button>
    </div>

      </div>
    </div>
  )
}
