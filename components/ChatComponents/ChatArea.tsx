"use client";
import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import ChatUserProfile from "./ChatUserProfile";
import "./Chat.css";
import ChatLists from "./ChatLists";

const ChatArea = () => {
  return (
    <div className="w-full flex h-full border rounded-md">
      <div
        className={`xl:w-[25%] lg:w-[25%] w-full    h-full `}
      >
        <ChatLists  />
      </div>
  
    </div>
  );
};

export default ChatArea;
