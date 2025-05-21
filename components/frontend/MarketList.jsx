import React from 'react';
import MarketCarousel from '@/components/frontend/MarketCarousel';
import { getData } from '@/lib/getData';

export default async function MarketList() {
  const markets = await getData('markets') // route to the markets 
  return (
    <div className="py-16 text-white">
      <div className="bg-slate-50 dark:bg-lime-900 rounded-lg p-4">
      <h2 className="py-2 text-center text-2xl text-black dark:text-white-800 mb-4">SHOP BY MARKET</h2>
      {/* Market Slider */}
      <MarketCarousel markets={markets}/>
      </div>
    </div>
  )
}
