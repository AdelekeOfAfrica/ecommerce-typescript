import React from 'react'
import MarketCarousel from '@/components/frontend/MarketCarousel'

export default function MarketList() {
  return (
    <div className="py-16 text-white">
      <h2>Market List</h2>
      {/* Market Slider */}
      <MarketCarousel/>
    </div>
  )
}
