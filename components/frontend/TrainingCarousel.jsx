"use client"

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"

export default function TrainingCarousel() {
  const responsive = {
    superLargeDesktop: {
 
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
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
  slides.map((slide,i)=>{
 return(
  <div key={i} className="rounded-lg overflow-hidden mr-3 bg-slate-100  dark:bg-slate-900">
    <Link href="#">
    <Image src ="/logo.png" width={755} height={755} alt="marketImage" className="w-full"/>
    </Link>
  
  <h2 className="text-center text-xl text-slate-800 dark:text-white my-2">Vegetables</h2>
    <p className="px-4 line-clamp-3 text-slate-800 dark:text-slate-300 mb-2">Lorem ispum </p>
    <div className="flex justify-between items-center py-2 px-4"> 
    <Link className="bg-green-900 hover:bg-green-800 duration-300 transition-all text-slate-50  rounded-md px-4 py-2" href="#">
        Read More
    </Link>

    <Link href="#" className="text-slate-800 dark:text-slate-100">Talk to the consultant</Link>

    </div>
</div>
 );
  })
}
 
</Carousel>
      
    </div>
  )
}
