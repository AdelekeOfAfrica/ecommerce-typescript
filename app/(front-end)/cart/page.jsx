"use client"

import BreadCrumps from '@/components/frontend/BreadCrumps'
import Footer from '@/components/frontend/Footer'
import { store } from '@/redux/store'
import { Minus, Plus, Trash } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import CartItems from "@/components/frontend/CartItems"


export default function Cart() {
  const cartItems = useSelector((store) =>store.cart);
   // Calculate subtotal
  const subtotal = cartItems.reduce((acc, item) => {
    return acc + item.productPrice * item.qty;
  }, 0);

  // Assume shipping = 0 for now (or add logic)
  const shipping = 0;

  const total = subtotal + shipping;
  console.log(cartItems)
  return (
    <div>
      <BreadCrumps />
      <div className="grid grid-cols-12 gap-14">
    
      <div className="col-span-8">
      <CartItems cartItems={cartItems}/>
      </div>
        
    

        <div className="col-span-4 sm:col-span-full p-5 hidden sm:block bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 text-slate-800 overflow-hidden dark:text-slate-100 pb-6">
      <h2 className="text-2xl py-3">Cart Total</h2>

      <div className="flex items-center justify-between border-b pb-6 border-slate-500">
        <span>SubTotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <div className="flex items-center justify-between border-b pb-4 border-slate-500">
        <span>Shipping</span>
        <span>${shipping.toFixed(2)}</span>
      </div>

      <p className="text-sm text-slate-600 my-2">
        We only charge for shipping if your load weighs more than 2kg.
      </p>

      <div className="flex items-center justify-between border-b pb-4 border-slate-500 mt-4">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <Link href="/payment">
        <div className="mt-6 bg-green-500 text-slate-100 rounded-lg py-2 px-4 text-center cursor-pointer">
          Continue to Payment
        </div>
      </Link>
    </div>
      </div>

      <div className="py-8">
        <Footer />
      </div>
    </div>
  )
}
