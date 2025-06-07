//create a slice
//create reducers
//export the reducer and reducers

import { createSlice } from "@reduxjs/toolkit";


const initialState =[];
const cartSlice =createSlice({

    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{

        },
        remmoveFromCart:(state,action)=>{
            
        },
        incrementQty:(state,action)=>{
            
        },
        decrementQty:(state,action)=>{
            
        }
    }

});

export const{
    addToCart,removeFromCart,incrementQty,decrementQty
}=cartSlice.actions;
export default cartSlice.reducer;