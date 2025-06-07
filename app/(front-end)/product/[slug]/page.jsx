import React from 'react'
import Footer from '@/components/frontend/Footer';
import BreadCrumps from '@/components/frontend/BreadCrumps';

export default function ProductDetailPage({params:{slug}}) {

  return (
    <div className="min-h-screen">
      <BreadCrumps/>
      welcome to the detail page
      <p>{slug}</p>
       <div className="py-8">
        <Footer/>    {/* flip error from this component*/}
        </div>
    </div>
  )
}
