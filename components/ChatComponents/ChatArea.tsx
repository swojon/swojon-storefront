"use client";
import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import ChatUserProfile from "./ChatUserProfile";
import "./Chat.css";
import ChatLists from "./ChatLists";

const ChatArea = () => {
  const [sideProfile, setSideProfile] = useState("chatlist");
  return (
    <div className="w-full flex h-full border rounded-md">
      <div
        className={`xl:w-[25%] lg:w-[25%] w-full    h-full   ${
          sideProfile === "chatlist"
            ? "opacity-100"
            : " opacity-0 hidden pointer-events-none"
        }`}
      >
        <ChatLists setSideProfile={setSideProfile} />
      </div>
      <div
        className={`w-full  h-full lg:block ${
          sideProfile === "" ? "block" : " hidden"
        }`}
      >
        <ChatMessage
          sideProfile={sideProfile}
          setSideProfile={setSideProfile}
        />
      </div>

      <div
        className={`xl:w-[35%] lg:w-[40%] w-full  h-full  transition-opacity ease-in-out delay-150 ${
          sideProfile === "profile"
            ? "opacity-100"
            : "opacity-0 hidden pointer-events-none"
        }`}
      >
        <ChatUserProfile setSideProfile={setSideProfile} />
      </div>
    </div>
  );
};

export default ChatArea;
