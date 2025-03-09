
"use client"

import {React, useState, useEffect} from 'react';

import {useTheme} from "next-themes";
import { Moon, Sun } from 'lucide-react';
 

export default function ThemeSwitcher() {

    const [mounted, setMounted] =useState(false);
    const {theme, setTheme} = useTheme();

    useEffect(()=>{
        setMounted(true);
    },[]);

    if(!mounted) {
        return null;
    }


  return (
    <button className={`w-fit p-2 rounded-md hover:scale-110 active:scale-100 duration-200  dark:bg-[#212933]`
        
    } onClick={()=> setTheme(theme =="dark" ? "light" :"dark")}>
        {theme === "light" ?<Moon ize={24} strokeWidth={1.5} className="text-green-600" />:<Sun ize={24} strokeWidth={1.5} className="text-green-600"  />}
      
    </button>
  )
}
