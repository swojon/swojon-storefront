'use client';

import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface AuthState {
  isAuthenticated: boolean;
  token?: string;
  user?: null | {
    id?: number,
    email?: string,
    username?: string,
    roles?: string[],
  }
}

// Initial state
const initialState: AuthState = {
  isAuthenticated: false,
  token: "",
  user: null
};

// Actual Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to set the authentication status
    setAuthState(state, action) {
      // state.authState = action.payload;
      console.log("got action", action)
      state.isAuthenticated = !!action.payload
      state.token = action.payload?.token ?? null;
      state.user = action.payload?.user ?? null

    },
    setUserLogout(state, action){
      state.isAuthenticated = false
      state.token = ""
      state.user = null
    }    
  }
  
});

export const { setAuthState, setUserLogout } = authSlice.actions;

// export const selectAuthState = (state: AppState) => state.auth.authState;

export default authSlice.reducer;