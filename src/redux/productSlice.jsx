import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  product: [], // <- the array lives here
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.product = action.payload; // ✅ directly set the property, not the whole state
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
