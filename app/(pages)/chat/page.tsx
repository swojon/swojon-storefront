import ChatArea from "@/components/ChatComponents/ChatArea";
import ChatLists from "@/components/ChatComponents/ChatLists";
import ChatMessage from "@/components/ChatComponents/ChatMessage";
import React from "react";
import "@/components/ChatComponents/Chat.css";

const Chats = () => {
  return (
    <section className="px-6 pt-6">
      {/* <div className="w-full min-h-screen fixed left-0 top-0 bg-red-500 z-[100]"></div> */}
      <div className="flex w-full h-[87vh] border rounded-md">
        <div className="w-[22%]  h-full sticky hidden lg:block">
          <ChatLists />
        </div>
        <div className="lg:w-[78%] w-full h-full sticky">
          <ChatArea />
        </div>
      </div>
    </section>
  );
};

export default Chats;
