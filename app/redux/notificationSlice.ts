import { createSlice } from "@reduxjs/toolkit";

export interface NotificationOpenState {
  open: boolean;
}

export const initialState: NotificationOpenState = {
  open: false,
};

export const notificationSlice = createSlice({
  name: "notificationDrawer",
  initialState,
  reducers: {
    setNotificationDrawerOpen(state) {
      state.open = true;
    },
    setNotificationDrawerClose(state) {
      state.open = false;
    },
  },
});

export const { setNotificationDrawerOpen, setNotificationDrawerClose } =
  notificationSlice.actions;
