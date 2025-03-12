import React from 'react'
import Sidebar from '@/components/backoffice/Sidebar.jsx'
import Navbar from '@/components/backoffice/navbar.jsx'
export default function Layout({children}) {
  return (
    <div className='flex'>
      {/*side bar*/}
        <Sidebar />

        <div className="w-full lg:ml-60 ml-0 flex-grow min-h-screen">
          {/*header*/}
          <Navbar/>
          <main className="p-8 bg-slate-100 dark:bg-slate-900 text-slate-50 mt-16">
            {children}
          </main>
          {/*main*/}
        </div>

       {/*main body*/}
      
    </div>
  )
}
