import { createSlice } from "@reduxjs/toolkit";

export interface FilterState {
  open: boolean;
}

export const initialState: FilterState = {
  open: false,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterOpen(state) {
      state.open = true;
    },
    setFilterClose(state) {
      state.open = false;
    },
  },
});

export const { setFilterOpen, setFilterClose } = filterSlice.actions;
