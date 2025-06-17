"use client"

import {ThemeProvider} from "next-themes";
import {Toaster} from "react-hot-toast";
import React from 'react';
import {Provider} from "react-redux";
import {store} from "@/redux/store";
import {SessionProvider} from"next-auth/react"

export default function Providers({children}) {
  return (
   
   <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
       <Toaster position="top-center" reverseOrder={false}/>
        <SessionProvider>
            <Provider store={store}>
               {children}
          </Provider>
        </SessionProvider>
       
   
    </ThemeProvider>
  
  )
}
