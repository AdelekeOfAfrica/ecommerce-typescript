import React from 'react'
import { Minus, Plus, Trash } from 'lucide-react'
import Image from 'next/image'
import { useDispatch } from "react-redux"
import { incrementQty, decrementQty, removeFromCart } from "@/redux/slices/cartSlice"

export default function CartProduct({ cartItem }) {
  const dispatch = useDispatch();

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-3">
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between border-b border-slate-300 pb-4">
        
        {/* Left: Product Image + Title */}
         <div className="flex items-center gap-3 mt-3">
                <Image
                  src={cartItem.imageUrl}
                  width={225}
                  height={225}
                  alt={cartItem.title}
                  className="rounded-xl w-10 h-10"
                />
                <div className="flex flex-col">
            <h2 className="text-sm font-medium">{cartItem.title}</h2>
          </div>
        </div>

        {/* Center: Quantity controls */}
        <div className="flex items-center border border-gray-400 rounded-lg mt-3 md:mt-0">
          <button
            onClick={() => dispatch(incrementQty(cartItem.id))}
            className="border-r border-gray-400 py-2 px-3"
          >
            <Plus size={16} />
          </button>
          <p className="px-4">{cartItem.qty}</p>
          <button
            onClick={() => dispatch(decrementQty(cartItem.id))}
            className="border-l border-gray-400 py-2 px-3"
          >
            <Minus size={16} />
          </button>
        </div>

        {/* Right: Price + Remove */}
        <div className="flex items-center gap-3 mt-3 md:mt-0 min-w-[100px] justify-end">
          <h4 className="font-semibold text-sm">${(cartItem.productPrice * cartItem.qty).toFixed(2)}</h4>
          <button onClick={() => dispatch(removeFromCart(cartItem.id))}>
            <Trash className="text-red-600 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
