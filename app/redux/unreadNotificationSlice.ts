'use client';

import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface UnreadNotificationState {
  unreadCount?: number;
}

// Initial state
const initialState: UnreadNotificationState = {
    unreadCount: 0
};

// Actual Slice
export const unreadNotificationSlice = createSlice({
  name: "unReadNotification",
  initialState,
  reducers: {
    // Action to set the authentication status
    addUnreadNotification(state, action) {
      // state.authState = action.payload;
      state.unreadCount = state.unreadCount?? 0 + 1
    }    
  }
  
});

export const { addUnreadNotification } = unreadNotificationSlice.actions;

// export const selectAuthState = (state: AppState) => state.auth.authState;

export default unreadNotificationSlice.reducer;