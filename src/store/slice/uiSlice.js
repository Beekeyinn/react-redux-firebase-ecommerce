import { createSlice } from "@reduxjs/toolkit";
import { cartChanged, showCart, showNotification } from "../reducer";
export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    notification: null,
    showCart: false,
    cartChanged: false,
  },
  reducers: {
    showNotification,
    showCart,
    cartChanged,
  },
});

export const uiActions = uiSlice.actions;
