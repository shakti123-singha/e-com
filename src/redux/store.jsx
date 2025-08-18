import { configureStore } from "@reduxjs/toolkit";
import cartSlice from '../redux/cartSlice';
import productSlice from '../redux/productSlice';


const store =configureStore({
    reducer:{
        cart:cartSlice,
        product:productSlice
    }
})
export default store