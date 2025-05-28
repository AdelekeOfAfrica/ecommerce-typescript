import Image from 'next/image'
import React from 'react'


export default function ImageColumn({row,imageTitle}) {
    const imageUrl = row.getValue(`${imageTitle}`)
         return <div className="shrink-0">
             <Image src={imageUrl} width={500} height={500} className="w-10 h-10 rounded-full object-cover" alt="category image"/>
 
         </div>
}
