"use client"

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import { BaggageClaim } from 'lucide-react';
import Product from "@/components/frontend/Product"

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

      <Product product={product} key={i}/>

    );
  })
}

 

 
</Carousel>
      
    </div>
  )
}

