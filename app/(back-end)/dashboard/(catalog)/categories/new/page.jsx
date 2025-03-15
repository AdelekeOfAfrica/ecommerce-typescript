import { X } from 'lucide-react'
import React from 'react'

export default function NewCategory() {
  return (
    <div className="flex items-center justify-between py-6 px-12
     bg-white-50  text-slate-800  dark:text-slate-50 dark:bg-slate-700 rounded-lg
     shadow">

     <h2 className="text-xl font-semibold">New Category</h2>
      <button className=""><X/></button>
    </div>
  )
}
