import { createSlice } from "@reduxjs/toolkit";
import { ReactNode } from "react";

export interface Modal{
    body:ReactNode|null,
    title:string|null,
    props: any
}

export interface ModalState {
    open: boolean,
    stack: Modal[]
}

// export interface ModalStack {
//     ModalState
// }

export const initialState: ModalState = {
    open : false,
    stack: []
}

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setModalOpen(state, action){ 
                state.open = true;
                state.stack.push({
                    body : action.payload.body,
                    title : action.payload.title,
                    props: action.payload.props
                })
        },
        setModalClose(state, action){
            
            if (state.stack.length === 1) {
                state.open = false
            }
            state.stack.pop()
        }  
    },
})


export const { setModalOpen, setModalClose } = modalSlice.actions;