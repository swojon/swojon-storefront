'use client';

import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface AuthState {
  isAuthenticated: boolean;
  token?: string;
}

// Initial state
const initialState: AuthState = {
  isAuthenticated: false,
  token: ""
};

// Actual Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to set the authentication status
    setAuthState(state, action) {
      // state.authState = action.payload;
      state.isAuthenticated = action.payload.isAuthenticated;
      state.token = action.payload.token;
    },
  }
  
});

export const { setAuthState } = authSlice.actions;

// export const selectAuthState = (state: AppState) => state.auth.authState;

export default authSlice.reducer;