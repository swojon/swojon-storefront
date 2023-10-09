import { createSlice } from "@reduxjs/toolkit";

export interface NavState {
  open: boolean;
}

export const initialState: NavState = {
  open: false,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setNavOpen(state) {
      state.open = true;
    },
    setNavClose(state) {
      state.open = false;
    },
  },
});

export const { setNavOpen, setNavClose } = navSlice.actions;
