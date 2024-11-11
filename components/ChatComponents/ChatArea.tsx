"use client";
import React from "react";
import "./Chat.css";
import ChatLists from "./ChatLists";
import { useSession } from "next-auth/react";

const ChatArea = () => {
  const {data:session, status} = useSession();
  
  return (
    <div className="w-full flex h-full border rounded-md">
      <div
        className={`xl:w-[25%] lg:w-[25%] w-full    h-full `}
      >
        {status === "authenticated" && 
            <ChatLists  />
        }
      </div>
  
    </div>
  );
};

export default ChatArea;
