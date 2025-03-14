import React from 'react'
import Link from 'next/link'
import Heading from '@/components/backoffice/Heading.jsx' 
import { Plus } from 'lucide-react'
export default function PageHeader({heading,linkTitle,href}) {
  return (
    <div>
      
      <div className="flex justify-between ">
        <Heading title={heading}/>
        <Link className="
        text-white bg-green-600 hover:bg-green-600/90 focus:ring-4
        focus:outline-none focus:ring-green-600/50 font-medium rounded-lg
         px-5 py-3 space-x-3 text-center inline-flex items-center text-base
         dark:focus:ring-green-600/55 me-2" href={href}>
        <Plus/>
        <span>{linkTitle}</span>
        </Link>
        
      </div>


    </div>
  )
}
