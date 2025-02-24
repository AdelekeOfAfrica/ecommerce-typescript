import React from 'react'
import LargeCard from './LargeCard'

export default function LargeCards() {
    const orderStats =[
        {

            period:"Today's Order",
            sales:100000,
            color:"bg-green-600"


        },
        {

            period:"Yesterday Order",
            sales:200000,
            color:"bg-blue-600"


        },
        {

            period:"This Month Order",
            sales:300000,
            color:"bg-orange-600"


        },
     
        {

            period:"All Times Sales",
            sales:500000,
            color:"bg-purple-600"


        }
    ]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">

        {/* cards */}
       {
        orderStats.map((items,i)=>{
            return(
                <LargeCard  data={items} key={i}/>
            )
        })
       }
      
    </div>
  )
}
