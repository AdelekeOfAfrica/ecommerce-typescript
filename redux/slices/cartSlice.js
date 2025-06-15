import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

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
        state.push({ id, title, productPrice, qty: 1, imageUrl });
      }
    },

    removeFromCart: (state, action) => {
      const idToRemove = action.payload;
      return state.filter((item) => item.id !== idToRemove);
    },

    incrementQty: (state, action) => {
      const id = action.payload;
      const item = state.find((item) => item.id === id);
      if (item) {
        item.qty += 1;
      }
    },

    decrementQty: (state, action) => {
      const id = action.payload;
      const item = state.find((item) => item.id === id);
      if (item && item.qty > 1) {
        item.qty -= 1;
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
