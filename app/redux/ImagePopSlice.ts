import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ImagePopUpState {
  open: boolean;
  currentImageUrl: string | null;
}

export const initialState: ImagePopUpState = {
  open: false,
  currentImageUrl: null,
};

export const ImagePopUpSlice = createSlice({
  name: "imagePopUp",
  initialState,
  reducers: {
    setImagePopUpOpen(state, action: PayloadAction<string>) {
      state.open = true;
      state.currentImageUrl = action.payload;
    },
    setImagePopUpClose(state) {
      state.open = false;
      state.currentImageUrl = null;
    },
  },
});

export const { setImagePopUpOpen, setImagePopUpClose } =
  ImagePopUpSlice.actions;
