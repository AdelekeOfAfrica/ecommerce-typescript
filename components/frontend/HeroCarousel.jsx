'use client';

import React from 'react';
import {Carousel} from 'nuka-carousel';
import Image from 'next/image';

const images = [
  '/banner1.jpg',
  '/banner2.gif',
  '/banner3.jpg',
];

export default function HeroCarousel() {

   
  return (
    <div  className="w-full max-w-screen-xl mx-auto">
      <Carousel
        autoplay
        wrapAround
        pauseOnHover
        speed={500}
        renderCenterLeftControls={null}
        renderCenterRightControls={null}
        defaultControlsConfig={{
          pagingDotsStyle: {
            fill: 'white',
          },
        }}
      >
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-[400px] flex-shrink-0">
            <Image
              src={src}
              alt={`Banner ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
