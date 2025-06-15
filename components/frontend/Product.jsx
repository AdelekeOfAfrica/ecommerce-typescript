"use client"

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { BaggageClaim } from 'lucide-react';
import { addToCart } from '@/redux/slices/cartSlice';
import toast from 'react-hot-toast';
export default function Product({product}) {
   
   const dispatch= useDispatch()
    function handleAddToCart(){
      //dispatch the reducer
      dispatch(addToCart(product))
      toast.success("Item Added Successfully");

    }
  return (
    <div>
         <div   className="rounded-lg mr-3  bg-white overflow-hidden border shadow dark:bg-slate-900">
          <Link href={`/product/${product.slug}`}>
          <Image src ={product.imageUrl} width={755} height={755} alt="marketImage" className="w-full h-48 object-cover"/>
          
          </Link>

          <Link href="#">
           <h2 className="text-center text-2xl text-slate-800 dark:text-white my-2 font-semibold">{product.title}</h2>
          </Link>

          <div className="px-4">
            <div className="flex items-center justify-between gap-2 pb-3 dark:text-slate-200 text-slate-800">
           N {product.productPrice}
            <button onClick={()=>handleAddToCart()} className="flex items-center space-x-2  bg-green-600 px-4 py-2 rounded-md text-white">
              <BaggageClaim/>
              <span>Add </span>
            </button>
          </div>
          </div>

         
        </div>
    </div>
  )
}
