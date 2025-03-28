import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterImagesState {
  filteredImages: string[];
}

const initialState: FilterImagesState = {
  filteredImages: [],
};

export const filterImagesSlice = createSlice({
  name: "filterImages",
  initialState,
  reducers: {
    setFilteredImages: (state, action: PayloadAction<string[]>) => {
      state.filteredImages = action.payload; // Store only the image URLs
    },
  },
});

export const { setFilteredImages } = filterImagesSlice.actions;
