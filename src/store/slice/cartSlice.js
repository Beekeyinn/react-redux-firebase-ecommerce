import { createSlice } from "@reduxjs/toolkit";
import { addToCart, removeFromCart, replaceData } from "../reducer";
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemList: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart,
    removeFromCart,

    replaceData,
  },
});

export const cartActions = cartSlice.actions;
