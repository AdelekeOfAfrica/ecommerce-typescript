"use client"

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"

export default function MarketCarousel() {
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
  <Link key={i} href="/" className="rounded-lg">
  <Image src ="/logo.png" width={755} height={755} alt="marketImage" className=""/>
  <h2 className="bg-slate-600 text-slate-300">Vegetables</h2>
</Link>
 );
  })
}
 
</Carousel>
      
    </div>
  )
}
