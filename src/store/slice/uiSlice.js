import { createSlice } from "@reduxjs/toolkit";
import { cartChanged, showCart, showNotification } from "../reducer";
export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    notification: null,
    showCart: false,
    cartChanged: {
      change: false,
      message: "updated",
    },
  },
  reducers: {
    showNotification,
    showCart,
    cartChanged,
  },
});

export const uiActions = uiSlice.actions;
