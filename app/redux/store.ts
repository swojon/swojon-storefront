"use client";

import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { createWrapper } from "next-redux-wrapper";
import { modalSlice } from "./modalSlice";
import { navSlice } from "./navSlice";
import { filterSlice } from "./filterSlice";
import { userProfileSlice } from "./userProfileSlice";
import { chatSlice } from "./chatSlice";
import { communitySlice } from "./communitySlice";
// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [chatSlice.name]: chatSlice.reducer,
  [modalSlice.name]: modalSlice.reducer,
  [navSlice.name]: navSlice.reducer,
  [filterSlice.name]: filterSlice.reducer,
  [userProfileSlice.name]: userProfileSlice.reducer,
  [communitySlice.name]: communitySlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

// export type AppStore = typeof store;
// export type AppState = ReturnType<AppStore["getState"]>;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// const makeConfiguredStore = () =>
//   configureStore({
//     reducer: rootReducer,
//     devTools: true,
//   });

// export const makeStore = () => {
//   const isServer = typeof window === "undefined";
//   if (isServer) {
//     return makeConfiguredStore();
//   } else {
//     // we need it only on client side
//     const persistConfig = {
//       key: "nextjs",
//       whitelist: ["auth"], // make sure it does not clash with server keys
//       storage,
//     };
//     const persistedReducer = persistReducer(persistConfig, rootReducer);
//     let store: any = configureStore({
//       reducer: persistedReducer,
//       devTools: process.env.NODE_ENV !== "production",
//     });
//     store.__persistor = persistStore(store); // Nasty hack
//     return store;
//   }
// };

// export type AppStore = ReturnType<typeof makeStore>;
// export type AppState = ReturnType<AppStore["getState"]>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   AppState,
//   unknown,
//   Action
// >;

// export const wrapper = createWrapper<AppStore>(makeStore);
