"use client";
import React, { useEffect } from "react";
import UserList from "./UserList";
import MessageArea from "./MessageArea";
import './Chat.scss';
import { useDispatch } from "react-redux";
import { getChatRoomWithMessageAsync, setChatStates } from "@/app/redux/chatSlice";
import { useListChatsQuery } from "@/apollograph/generated";

const ChatBox = () => {
  const dispatch = useDispatch()

  // useEffect(() => {
    // dispatch(getChatRoomWithMessageAsync())
    
  // }, [])
  const {data, error, loading} = useListChatsQuery()
  if (error) {
    return <div>error...</div>
  }
  if (loading) {
    return <div>loading...</div>
    
  if (data){
    dispatch(setChatStates(data?.listChats))
  }

  return (
    <div className="flex chat-container antialiased text-gray-800">
<div className="flex flex-row h-full w-full overflow-x-hidden">
  <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
  
    <div className="flex flex-col mt-8">
    
      <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
        <UserList/>
      </div>
    </div>
  </div>
  <div className="flex flex-col flex-auto h-full p-6">
    <MessageArea/>
  </div>
</div>
</div>
    
  );
};

export default ChatBox;





