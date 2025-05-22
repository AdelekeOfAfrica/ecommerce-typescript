"use client"

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import { BaggageClaim } from 'lucide-react';

export default function CatgoryCarousel({products}) {
  const responsive = {
    superLargeDesktop: {
 
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const slides=[
    {},{},{},{},{},{}
  ];
  return (
    <div>

<Carousel  responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        arrows={false}>

{
  products.map((product,i)=>{
    return(

        <div  key={i}  className="rounded-lg mr-3  bg-white overflow-hidden border shadow dark:bg-slate-900">
          <Link href="/">
          <Image src ="/logo.png" width={755} height={755} alt="marketImage" className="w-full h-48 object-cover"/>
          
          </Link>

          <Link href="#">
           <h2 className="text-center text-2xl text-slate-800 dark:text-white my-2 font-semibold">{product.title}</h2>
          </Link>

          <div className="px-4">
            <div className="flex items-center justify-between gap-2 pb-3 dark:text-slate-200 text-slate-800">
           N {product.productPrice}
            <button className="flex items-center space-x-2  bg-green-600 px-4 py-2 rounded-md text-white">
              <BaggageClaim/>
              <span>Add </span>
            </button>
          </div>
          </div>

         
        </div>

    );
  })
}

 

 
</Carousel>
      
    </div>
  )
}

