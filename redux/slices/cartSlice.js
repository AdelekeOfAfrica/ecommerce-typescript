import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

let initialState = [];

if (typeof window !== "undefined") {
  try {
    const storedCart = localStorage.getItem("cart");
    initialState = storedCart ? JSON.parse(storedCart) : [];
    if (!Array.isArray(initialState)) initialState = [];
  } catch (error) {
    console.error("Failed to parse cart:", error);
    initialState = [];
  }
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
       addToCart: (state, action) => {
      const { id, title, productPrice, imageUrl } = action.payload;
      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
        existingItem.qty += 1; // fix: use += instead of =+
      } else {
        const newItem = {id, title, productPrice, qty:1, imageUrl};

        state.push(newItem);
        if(typeof window !== "undefined"){
           localStorage.setItem("cart",JSON.stringify([...state]));
        }

      }
    },

    removeFromCart: (state, action) => {
      const idToRemove = action.payload;
      const newState= state.filter((item) => item.id !== idToRemove);
        if(typeof window !== "undefined"){
         localStorage.setItem("cart",JSON.stringify(idToRemove));}
         toast.success("product deleted succesfully")
         return newState;
    },

    incrementQty: (state, action) => {
      const id = action.payload;
      const item = state.find((item) => item.id === id);
      if (item) {
        item.qty += 1;
          if(typeof window !== "undefined"){
      localStorage.setItem("cart",JSON.stringify([...state]));}
      }
    },

    decrementQty: (state, action) => {
      const id = action.payload;
      const item = state.find((item) => item.id === id);
      if (item && item.qty > 1) {
        item.qty -= 1;
          if(typeof window !== "undefined"){
          localStorage.setItem("cart",JSON.stringify([...state]));}
      } else if (item && item.qty === 1) {
        // If you want to remove item from cart when qty is 0
        return state.filter((item) => item.id !== id);
       
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQty,
  decrementQty,
} = cartSlice.actions;


export default cartSlice.reducer;
