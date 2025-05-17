import React from 'react'
import NavBar from '../../components/frontend/NavBar'

export default function layout({children}) {
  return (
    <div>
        <NavBar/>
        <div className="max-w-7xl mx-auto py-6">
           {children}
        </div>
      
    </div>
  )
}
