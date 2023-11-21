import { createSlice } from "@reduxjs/toolkit";

export interface CommunityState {
  open: boolean;
}

export const initialState: CommunityState = {
  open: false,
};

export const communitySlice = createSlice({
  name: "community",
  initialState,
  reducers: {
    setCommunityOpen(state) {
      state.open = true;
    },
    setCommunityClose(state) {
      state.open = false;
    },
  },
});

export const { setCommunityOpen, setCommunityClose } = communitySlice.actions;
