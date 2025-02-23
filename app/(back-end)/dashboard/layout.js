import React from 'react'

export default function Layout({children}) {
  return (
    <div className='flex'>
      {/*side bar*/}
        <div className="">

          sidebar
        </div>

        <div>
          {/*header*/}

          <h2>Navbar</h2>
          <main>
            {children}
          </main>
          {/*main*/}
        </div>

       {/*main body*/}
      
    </div>
  )
}
