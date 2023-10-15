import React from "react";
import ChatMessage from "./ChatMessage";
import ChatUserProfile from "./ChatUserProfile";
import "./Chat.css";

const ChatArea = () => {
  return (
    <div className="w-full flex h-full">
      <div className="w-full h-full ">
        <ChatMessage />
      </div>

      <div className="w-[35%] h-full">
        <ChatUserProfile />
      </div>
    </div>
  );
};

export default ChatArea;
