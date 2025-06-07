import { configureStore } from "@reduxjs/toolkit";
import {cartSlice} from "@/redux/slices/cartSlice";
//creating a new store
export const store = configureStore({
    reducer:{
        //slices will be here 
        cart:cartSlice,
    }
})