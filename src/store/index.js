import { configureStore } from "@reduxjs/toolkit";
import { authSlice, cartSlice, uiSlice } from "./slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
