// import { Chat } from "@/gql/graphql";

import { useListChatsQuery } from "@/apollograph/generated";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface ChatRoom{
    id: number;
    chatName: string;
    // lastMessage: Chat;

}

export interface Chat {
    id: number;
    content: string;
    dateSent: Date;
    sender: {
        id: string;
        email: string;
    }
  }
  
export interface ChatRoomWithMessage {
    id: number;
    chatName: string;
    messages: Chat[];
}
   

export interface ChatMessageList{
    items: Chat[];
    count: number;
}
  

export interface ChatState{
    activeChatRoom: number|null;
    chatRooms: ChatRoom[];
    chatRoomsWithMessage: ChatRoomWithMessage[];
    loading: boolean;
    error: string|null;
    messages: Chat[]
}

export const getChatRoomWithMessageAsync = createAsyncThunk(
    "chat/getChatRoomWithMessage",
    async (thunkAPI) => {
        console.log("getChatRoomWithMessageAsync called")
        const {data, loading, error} = useListChatsQuery();

        return {data, loading, error};
    })

export const initialState: ChatState = {
    activeChatRoom: null,
    chatRooms: [],
    chatRoomsWithMessage: [],
    messages:[],
    loading: true,
    error: null,
}

export const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setActiveChatRoom(state, action){ //lets say payload will be an id
            // console.log(action.payload
                state.activeChatRoom = action.payload;
                // state.messages = [];
            
        },
        setChatStates(state, action){
            //this time action will be the grpahql response, listChatRoom
            console.log(action.payload)
            state.chatRooms = action.payload.items.map((chatRoom:any) => {
                return {
                    id: chatRoom.id,
                    chatName: chatRoom.chatName,
                    lastMessage: chatRoom.messages[0],
                }});

            state.chatRoomsWithMessage = action.payload.items;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getChatRoomWithMessageAsync.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getChatRoomWithMessageAsync.fulfilled, (state, action) => {
            console.log("finished")
            console.log(action.payload.data.listChats.items, "finished")
            state.loading = false;
            state.chatRooms = action.payload.data.listChats.items.map((chatRoom:any) => {
                return {
                    id: chatRoom.id,
                    chatName: chatRoom.chatName,
                    lastMessage: chatRoom.messages.items[0],
                }});
            state.chatRoomsWithMessage = action.payload.data.listChats.items;
        });
        builder.addCase(getChatRoomWithMessageAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message? action.error.message : null;
        });

    }
})


export const { setActiveChatRoom, setChatStates } = chatSlice.actions;