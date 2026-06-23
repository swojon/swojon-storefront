import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
  open: boolean;
}

export const initialState: CartState = {
  open: false,
};

export const cartDrawerSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartDrawerOpen(state) {
      state.open = true;
    },
    setCartDrawerClose(state) {
      state.open = false;
    },
  },
});

export const { setCartDrawerOpen, setCartDrawerClose } =
  cartDrawerSlice.actions;
