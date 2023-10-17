"use client";
import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import ChatUserProfile from "./ChatUserProfile";
import "./Chat.css";

const ChatArea = () => {
  const [sideProfile, setSideProfile] = useState(true);
  return (
    <div className="w-full flex h-full">
      <div className="w-full h-full ">
        <ChatMessage
          sideProfile={sideProfile}
          setSideProfile={setSideProfile}
        />
      </div>

      <div
        className={`xl:w-[35%] lg:w-[40%] h-full hidden transition ease-in-out delay-150 ${
          sideProfile ? "lg:block" : "lg:hidden"
        }`}
      >
        <ChatUserProfile />
      </div>
    </div>
  );
};

export default ChatArea;
