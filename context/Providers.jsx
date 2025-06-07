"use client"

import {ThemeProvider} from "next-themes";
import {Toaster} from "react-hot-toast";
import React from 'react'
import {Providers} from 'react-redux';
import {store} from '@/redux/store' 

export default function Providers({children}) {
  return (
   
   <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
       <Toaster position="top-center" reverseOrder={false}/>
    
      <Providers store={store}>
          {children}
      </Providers>
    </ThemeProvider>
  
  )
}
