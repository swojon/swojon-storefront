"use client";
import React, { useState } from "react";
import ChatBoxFooter from "./ChatboxFooter";
import DetailsMessage from "./DetailsMessage";
import ChatInputSend from "./ChatInputSend";
import { useSelector } from "react-redux";
import NoActiveChat from "./NoActiveChat";

let nextId = 1;

const MessageArea = () => {
  // const [disMsg, setDisMsg] = useState([
  //   { id: 1, msg: "hello, how are you?" },
  //   { id: 2, msg: "hey?" },
  //   { id: 3, msg: "are you there?" },
  // ]);
  const activeChat = useSelector((state) => state.chat.activeChatRoom);
  // const activeChatWithMessages = useSelector((state) => state.chat.chatRoomsWithMessage)
  const messages = useSelector((state)=> state.chat.messages)
  

  if (!activeChat) {
    return (<NoActiveChat />)
  }

  // const chatMessages = activeChatWithMessages.find((chat) => chat.id === activeChat.id)
  // const messages = chatMessages?.messages;

  return (   
<div
  className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4"
>
  <div className="flex flex-col h-full overflow-x-auto mb-4">
    <div className="flex flex-col h-full">
     
      <div className="grid grid-cols-12 gap-y-2">
      {messages.map(msg => (
        <DetailsMessage msg={msg} key={msg.id} />
      ))}
       
      </div>
    </div>
  </div>
  <div
    className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
  >
    <ChatInputSend />
  </div>
</div>

      

  );
};

export default MessageArea;

