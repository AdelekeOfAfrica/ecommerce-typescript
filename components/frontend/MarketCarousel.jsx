"use client";

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function MarketCarousel({ markets }) {
  // If markets is undefined or not an array, show fallback
  if (!markets || !Array.isArray(markets) || markets.length === 0) {
    return <div>No markets available</div>;
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
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

  return (
    <div className="py-4">
      <Carousel
        responsive={responsive}
        autoPlay
        autoPlaySpeed={3000}
        infinite
        arrows={false}
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {
          markets.map((market, i) => {
            // Skip if market or required fields are missing
            if (!market || !market.imageUrl || !market.title) return null;

            return (
              <Link key={i} href="/" className="rounded-lg mr-3 bg-red-400 block">
                <div className="relative w-full h-60">
                  <Image
                    src={market.imageUrl}
                    alt={`Image of ${market.title}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h2 className="text-center text-2xl text-slate-800 dark:text-white mt-2">
                  {market.title}
                </h2>
              </Link>
            );
          })
        }
      </Carousel>
    </div>
  );
}
