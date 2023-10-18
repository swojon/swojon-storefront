'use client';

import { Provider, useDispatch } from "react-redux";
import {store} from "./store";
import { setAuthState } from "./authSlice";


export const ReduxProviders = ({ children, session }: { children: React.ReactNode, session: any }) => {
    
    store.dispatch(setAuthState(session))
    
    return  (<Provider store={store}>
        {children}
    </Provider>)
}