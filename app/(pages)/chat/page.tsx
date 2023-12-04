import ChatArea from "@/components/ChatComponents/ChatArea";
import ChatLists from "@/components/ChatComponents/ChatLists";
import React from "react";
import "@/components/ChatComponents/Chat.css";
import ResUserProfile from "@/components/ChatComponents/ResUserProfile";
import { BsThreeDots } from "react-icons/bs";
import { HiUsers } from "react-icons/hi2";
import Image from "next/image";

const Chats = () => {
  return (
   <section className="h-full w-full relative border-l">
        <div className="sticky top-0 left-0 h-14 px-3  w-full flex justify-between items-center border-b">
          <div className="flex items-center gap-2">
            <button
              className="p-1.5 border border-activeColor me-1 rounded-md block "
              // onClick={() => setSideProfile("chatlist")}
            >
              <HiUsers className="text-primaryColor" />
            </button>
          </div>

          <button
            className="text-lg text-primaryColor cursor-pointer block "
            // onClick={() => setSideProfile("profile")}
          >
            <BsThreeDots />
          </button>
        </div>
        <div className=" chatDefault flex flex-col justify-center items-center">
          <div className="w-[75%] h-[60%] flex  justify-center items-center">
            <Image
              src="/assets/textDefault.svg"
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
      </section>
  );
};

export default Chats;
