import { createSlice } from "@reduxjs/toolkit";

export interface UserProfileState {
  open: boolean;
}

export const initialState: UserProfileState = {
  open: false,
};

export const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    setUserProfileOpen(state) {
      state.open = true;
    },
    setUserClose(state) {
      state.open = false;
    },
  },
});

export const { setUserProfileOpen, setUserClose } = userProfileSlice.actions;
