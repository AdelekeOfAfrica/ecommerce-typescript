import React from 'react'
import Footer from '@/components/frontend/Footer';
import BreadCrumps from '@/components/frontend/BreadCrumps';
import Image from 'next/image';
import {Share2, Tag} from 'lucide-react'
import { getData } from '@/lib/getData';
export default async function  ProductDetailPage({params:{slug}}) {
const productDetail = await getData(`/products/${slug}`);
  return (
    <div className="min-h-screen">
      <BreadCrumps/>
      <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3">
            <Image src={productDetail.imageUrl} alt="" width={231} height={231} className="w-full"/>
          </div>

        <div className="col-span-6">
          <div className="flex items-center justify-between">
             <h2 className="text-xl lg:text-3xl font-semibold">{productDetail.title}</h2>
    
             <button>
                <Share2/>
             </button>
          </div>
            <div className=" border-b border-gray-500">
              <p className="py-2  ">{productDetail.Description}</p> 
                <div className="flex items-center gap-8 mb-4"> 
                   <p>SKU:{productDetail.sku}</p>
                   <p className="bg-green-200 text-slate-900 py-1.5 px-4 rounded-full"><b>Stock:</b>{productDetail.productStock}</p>
                </div>
            </div>
            <div className="flex items-center gap-4 pt-4 justify-between">
             <div className="flex items-center gap-4">
               <h4 className="text-2xl">{productDetail.salePrice}</h4>
              <del className="text-slate-500 text-sm">{productDetail.productPrice}</del>
             
             </div>
              <p className="flex items-center  ">
                <Tag className="w-4 h-4 text-slate-400 me-2"/>
                <span>Save 50 percent now </span>
              </p>
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
