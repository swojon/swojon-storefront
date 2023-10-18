import ChatArea from "@/components/ChatComponents/ChatArea";
import ChatLists from "@/components/ChatComponents/ChatLists";
import ChatMessage from "@/components/ChatComponents/ChatMessage";
import React from "react";
import "@/components/ChatComponents/Chat.css";
import ResUserProfile from "@/components/ChatComponents/ResUserProfile";

const Chats = () => {
  return (
    <section>
      {/* <ResUserProfile /> */}
      <div className="px-6 pt-6 sticky w-full h-[87vh] border rounded-md">
        <ChatArea />
      </div>
    </section>
  );
};

export default Chats;
