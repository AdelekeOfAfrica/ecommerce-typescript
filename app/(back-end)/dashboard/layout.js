import React from 'react'
import Sidebar from '@/components/backoffice/Sidebar.jsx'
import Navbar from '@/components/backoffice/Navbar.jsx'
export default function Layout({children}) {
  return (
    <div className='flex '>
      {/*side bar*/}
        <Sidebar />

        <div className="w-full">
          {/*header*/}
          <Navbar/>
          <main className="ml-60 p-8 bg-slate-900 text-slate-50 min-h-screen mt-16">
            {children}
          </main>
          {/*main*/}
        </div>

       {/*main body*/}
      
    </div>
  )
}
