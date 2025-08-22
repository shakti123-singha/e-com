// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    // ✅ Add item to cart
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.products.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.products.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.image,
        });
      }

      state.totalQuantity++;
      state.totalPrice += newItem.price;
    },

    // ✅ Increase quantity
    increaseQuantity(state, action) {
      const item = state.products.find((i) => i.id === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice += item.price;
        state.totalQuantity++;
        state.totalPrice += item.price;
      }
    },

    // ✅ Decrease quantity
    decreaseQuantity(state, action) {
      const item = state.products.find((i) => i.id === action.payload);

      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
          item.totalPrice -= item.price;
          state.totalQuantity--;
          state.totalPrice -= item.price;
        } else {
          // agar quantity 1 thi aur minus dabaya → remove kar do
          state.totalQuantity -= 1;
          state.totalPrice -= item.price;
          state.products = state.products.filter((i) => i.id !== action.payload);
        }
      }
    },

    // ✅ Remove product from cart
    removeFromCart(state, action) {
      const id = action.payload;
      const item = state.products.find((i) => i.id === id);
      if (item) {
        state.totalQuantity -= item.quantity;a
        state.totalPrice -= item.totalPrice;
        state.products = state.products.filter((i) => i.id !== id);
      }
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
