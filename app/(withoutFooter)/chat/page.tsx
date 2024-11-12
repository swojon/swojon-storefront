"use client";
import React from "react";
import "@/components/ChatComponents/Chat.css";
import Image from "next/image";
import useIsMobile from "@/lib/hooks/useIsMobile";

const Chats = () => {
  const isMobile = useIsMobile();
  if (!isMobile)
    return (
    <>
    {!isMobile &&  
    <div className="h-full w-full relative border-l">
      <div className="sticky top-0 left-0 h-14 px-3  w-full flex justify-between items-center border-b">
      </div>
      <div className=" chatDefault flex flex-col justify-center items-center">
        <div className="w-[75%] h-[60%] flex  justify-center items-center">
          <Image
            src="/assets/conversation.svg"
            alt="message"
            width={500}
            height={500}
            className="w-full h-full "
          />
        </div>
        <p className="text-base text-secondColor font-lexed font-medium pt-4">
          Select chat to start a conversation
        </p>
      </div>
    </div>}
  </>)

};

export default Chats;
