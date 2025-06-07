import React from 'react'
import Footer from '@/components/frontend/Footer';
import BreadCrumps from '@/components/frontend/BreadCrumps';
import Image from 'next/image';
import {Share2} from 'lucide-react'
export default function ProductDetailPage({params:{slug}}) {

  return (
    <div className="min-h-screen">
      <BreadCrumps/>
      <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3">
            <Image src="/logo.png" alt="" width={231} height={231} className="w-full"/>
          </div>

        <div className="col-span-6">
          <div className="flex items-center justify-between">
             <h2 className="text-xl lg:text-3xl font-semibold">Dummmy Product</h2>
    
             <button>
                <Share2/>
             </button>
          </div>
            <p className="py-2 ">To keep basil fresh trim the stems and place them in a glass or jar of water</p> 
            <p>SKU:3245643</p>
            <div className="flex items-center gap-4 pt-4">
              <h4 className="text-2xl">N50</h4>
              <del className-="text-slate-500 text-sm">N100</del>
            </div>
        </div>

         <div className="col-span-3 hidden sm:block  bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 text-slate-800 overflow-hidden">
            <h2 className="bg-slate-100 py-3 px-6 font-semibold border-gray-300 border-b dark:bg-slate-700 text-slate-800 dark:text-slate-100 dark:border-gray-600">
             Delivery and Returns
            </h2>
          </div>
      </div>
       <div className="py-8">
        <Footer/>    {/* flip error from this component*/}
        </div>
    </div>
  )
}
