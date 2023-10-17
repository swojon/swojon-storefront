import ChatArea from "@/components/ChatComponents/ChatArea";
import ChatLists from "@/components/ChatComponents/ChatLists";
import ChatMessage from "@/components/ChatComponents/ChatMessage";
import React from "react";
import "@/components/ChatComponents/Chat.css";
import ResUserProfile from "@/components/ChatComponents/ResUserProfile";

const Chats = () => {
  return (
    <section className="">
      <ResUserProfile />
      <div className="px-6 pt-6">
        <div className="flex w-full h-[87vh] border rounded-md">
          <div className="w-[22%]  h-full sticky hidden lg:block">
            <ChatLists />
          </div>
          <div className="lg:w-[78%] w-full h-full sticky">
            <ChatArea />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chats;
