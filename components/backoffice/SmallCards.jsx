import React from 'react'
import SmallCard from './SmallCard'
import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from 'lucide-react'

export default function SmallCards() {
    const OrderrStatus=[
        {

            title:"Total Orders",
            number:"100",
            iconBg:"bg-green-600",
            icon:ShoppingCart


        },
        {

            title:"Order's Pending",
            number:200,
            iconBg:"bg-blue-600",
            icon:Loader2


        },
        {

            title:"Order's Processing",
            number:300000,
            iconBg:"bg-orange-600",
            icon:RefreshCcw


        },
     
        {

            title:"Order's Delivered",
            number:500000,
            iconBg:"bg-purple-600",
            icon:CheckCheck


        }
    ]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
        
        {/* cards */}
       {
        OrderrStatus.map((data,i)=>{
            return(
                <SmallCard data={data}/>
            )
        })
       }
      
    </div>
  )
}
