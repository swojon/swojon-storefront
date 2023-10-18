"use client";
import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import ChatUserProfile from "./ChatUserProfile";
import "./Chat.css";

const ChatArea = () => {
  const [sideProfile, setSideProfile] = useState(false);
  return (
    <div className="w-full flex h-full">
      <div
        className={`w-full  h-full lg:block ${
          sideProfile ? "hidden " : "block"
        }`}
      >
        <ChatMessage
          sideProfile={sideProfile}
          setSideProfile={setSideProfile}
        />
      </div>

      <div
        className={`xl:w-[35%] lg:w-[40%] w-full  h-full  transition-opacity ease-in-out delay-150 ${
          sideProfile ? "opacity-100" : "opacity-0 hidden pointer-events-none"
        }`}
      >
        <ChatUserProfile
          sideProfile={sideProfile}
          setSideProfile={setSideProfile}
        />
      </div>
    </div>
  );
};

export default ChatArea;
