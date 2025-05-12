import React from 'react'
import NavBar from '../../components/frontend/NavBar'

export default function layout({children}) {
  return (
    <div>
        <NavBar/>
      {children}
    </div>
  )
}
