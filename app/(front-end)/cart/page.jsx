import BreadCrumps from '@/components/frontend/BreadCrumps'
import Footer from '@/components/frontend/Footer'
import { Minus, Plus, Trash } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Cart() {
  return (
    <div>
      <BreadCrumps />
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8">
          <h2 className="py-2 text-slate-400 mb-6 text-2xl">Your Cart</h2>

          <div className="flex items-center justify-between border-b border-slate-400 pb-3 font-semibold text-sm">
            <h2 className="uppercase">Product</h2>
            <h2 className="uppercase">Quantity</h2>
            <h2 className="uppercase">Price</h2>
          </div>

          <div>
            <div className="flex items-center justify-between border-b border-slate-400 pb-3 font-semibold text-sm">
              <div className="flex items-center gap-3 mt-3">
                <Image
                  src="/logo.png"
                  width={225}
                  height={225}
                  alt="product image"
                  className="rounded-xl w-10 h-10"
                />
                <div className="flex flex-col">
                  <h2>Apple Watch Series 7mm</h2>
                  <small>Golden</small>
                </div>
              </div>

              <div className="flex mt-3 rounded-xl border border-gray-400 gap-3 items-center">
                <button className="border-r border-gray-500 py-2 px-4">
                  <Plus />
                </button>
                <p className="flex-grow py-2 px-4">1</p>
                <button className="border-l border-gray-500 py-2 px-4">
                  <Minus />
                </button>
              </div>

              <div className="flex items-center gap-2 mt-3">
                <h4>$2559</h4>
                <button>
                  <Trash className="text-red-600 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex mt-8 gap-2">
  <input
    type="email"
    id="email"
    aria-describedby="helper-text-explanation"
    className="flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5
               dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="Kindly enter available coupon code"
  />
  <button className="bg-green-500 text-white text-sm rounded-lg px-4 py-2.5 hover:bg-green-600">
    Apply Coupon
  </button>
</div>
        </div>

    

        <div className="col-span-4 p-5 hidden sm:block bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 text-slate-800 overflow-hidden dark:text-slate-100 pb-6">
          <h2 className="text-2xl py-3">Cart Total</h2>

          <div className="flex items-center justify-between border-b pb-6 border-slate-500">
            <span>SubTotal</span>
            <span>$89</span>
          </div>

          <div className="flex items-center justify-between border-b pb-4 border-slate-500">
            <span>Shipping</span>
            <span>$0</span>
          </div>

          <p className="text-sm text-slate-600 my-2">
            We only charge for shipping if your load weighs more than 2kg.
          </p>

          <div className="flex items-center justify-between border-b pb-4 border-slate-500 mt-4">
            <span>Total</span>
            <span>$89</span>
          </div>

          <Link href="/payment" >
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
