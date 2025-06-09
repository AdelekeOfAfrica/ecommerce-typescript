import React from 'react'
import Footer from '@/components/frontend/Footer';
import BreadCrumps from '@/components/frontend/BreadCrumps';
import Image from 'next/image';
import {BaggageClaim, MinusIcon, Plus, Send, Share2, Tag} from 'lucide-react'
import { getData } from '@/lib/getData';
import CategoryCarousel from "@/components/frontend/CategoryCarousel"
import Link from 'next/link';
export default async function  ProductDetailPage({params:{slug}}) {
const productDetail = await getData(`/products/${slug}`);
const productCategory = productDetail.categoryId;
const relatedProduct = await getData(`/productCategories/${productCategory}`);
console.log(relatedProduct);

  return (
    <div className="min-h-screen">
      <BreadCrumps/>
      <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3">
            <Image src={productDetail.imageUrl} alt="" width={231} height={231} className="w-full"/>
          </div>

        <div className="col-span-6">
          <div className="flex items-center justify-between mb-6">
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
            <div className="flex items-center gap-4 pt-4 justify-between border-b  border-gray-500 pb-4">
             <div className="flex items-center gap-4">
               <h4 className="text-2xl">{productDetail.salePrice}</h4>
              <del className="text-slate-500 text-sm">{productDetail.productPrice}</del>
             
             </div>
              <p className="flex items-center  ">
                <Tag className="w-4 h-4 text-slate-400 me-2"/>
                <span>Save 50 percent now </span>
              </p>
            </div>

            <div className="flex justify-between items-center py-6 ">
              <div className="flex  rounded-xl border border-gray-400 gap-3 items-center  ">
                <button className="border-r border-gray-500 py-2 px-4"><Plus/></button>
                  <p className="flex-grow py-2 px-4">1</p>
                <button className="border-l border-gray-500 py-2 px-4"><MinusIcon/></button>
              </div>
              <button className="flex items-center space-x-2  bg-green-600 px-4 py-2 rounded-md text-white">
              <BaggageClaim/>
              <span>Add to cart </span>
            </button>
            </div>
        </div>

         <div className="col-span-3 hidden sm:block  bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 text-slate-800 overflow-hidden ">
            <h2 className="bg-slate-100 py-3 px-6 font-semibold border-gray-300 border-b dark:bg-slate-700 text-slate-800 dark:text-slate-100 dark:border-gray-600">
             Delivery and Returns
            </h2>
             <div className="p-4 ">
                <div className="flex rounded-lg py-2 px-4 bg-green-400 text-slate-50 items-center gap-3 ">
                  <span>Ecomm Express</span>
                  <Send/>
                </div>
                <div className="py-3 text-slate-100 border-b border-slate-500 ">Eligible for free delivery <Link href="#">View Details</Link>  </div>
                
              </div>
              <h2 className="text-slate-200 py-2">Choose your location</h2>
              <div className="border-b border-gray-500 pb-3">
                  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>

                <div className="border-b border-gray-500 pb-3">
                  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>

                <div className="pb-3">
                  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              
             

             </div>
            
      </div>
 
       <div className="bg-white dark:bg-slate-700 p-4 my-8 rounded-xl ">
          <h2 className="mb-4 text-2xl font-semibold text-slate-400 ml-3">Other Related Products</h2>
          <CategoryCarousel products={relatedProduct.products} />
        </div>
       
       <div className="py-8">
        <Footer/>    {/* flip error from this component*/}
        </div>
    </div>
  )
}
