import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], // ✅ always start with an empty array
  cart: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export const { setProducts, addToCart } = productSlice.actions;
export default productSlice.reducer;
