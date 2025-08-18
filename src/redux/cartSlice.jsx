import { createSlice } from '@reduxjs/toolkit'

const initialState={
    product: [],
}



const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    setProducts(state, action) {
      state.product=action.payload
    },
   
  },
})

export const { setProducts } = cartSlice.actions
export default cartSlice.reducer


