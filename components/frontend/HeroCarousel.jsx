'use client';
import React from 'react';
import { Carousel } from 'nuka-carousel';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroCarousel({ banners }) {
  // Filter banners with both imageUrl and title
  const validBanners = banners.filter(
    (banner) => banner?.imageUrl?.trim() && banner?.title?.trim()
  );

  if (validBanners.length === 0) return null; // Don't render if none are valid

  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <Carousel
        autoplay
        wrapAround
        pauseOnHover
        speed={500}
        defaultControlsConfig={{
          pagingDotsStyle: {
            fill: 'white',
          },
        }}
        renderCenterLeftControls={({ previousSlide }) => (
          <button
            onClick={previousSlide}
            className="bg-black bg-opacity-50 text-white px-3 py-1 rounded-md ml-2 hover:bg-opacity-75"
          >
            ‹
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button
            onClick={nextSlide}
            className="bg-black bg-opacity-50 text-white px-3 py-1 rounded-md mr-2 hover:bg-opacity-75"
          >
            ›
          </button>
        )}
      >
        {validBanners.map((banner, index) => (
          <Link
            href={banner.link || '#'}
            key={index}
            className="relative w-full h-[400px] flex-shrink-0"
          >
            <Image
              src={banner.imageUrl}
              alt={banner.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </Link>
        ))}
      </Carousel>
    </div>
  );
}
