"use client";

import { Provider, useDispatch } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// import { PersistGate } from "redux-persist/es/integration/react";
import { store, persistor } from "./store";

export const ReduxProviders = ({ children }: { children: React.ReactNode }) => {
  // store.dispatch(setAuthState( session))

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
