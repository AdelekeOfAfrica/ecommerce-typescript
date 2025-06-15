import React from 'react'
import CartProduct from "@/components/frontend/CartProduct"
export default function CartItems({cartItems}) {
  return (
    <div>
          <div className="col-span-8 sm:col-span-full">
          <h2 className="py-2 text-slate-400 mb-6 text-2xl">Your Cart</h2>

          <div className="flex items-center justify-between border-b border-slate-400 pb-3 font-semibold text-sm">
            <h2 className="uppercase">Product</h2>
            <h2 className="uppercase">Quantity</h2>
            <h2 className="uppercase">Price</h2>
          </div>
          <div className=""> 
            {cartItems.length>0 ?cartItems.map((item,i)=>{
                return <CartProduct cartItem={item} key={i}/>
            }):(
              <p>No items</p>
            )}
          </div>
        
          <div className="flex mt-8 py-4 gap-2">
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
    </div>
  )
}
