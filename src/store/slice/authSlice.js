import { createSlice } from "@reduxjs/toolkit";
import { login, logout } from "../reducer";
export const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    login,
    logout,
  },
});

export const authActions = authSlice.actions;
