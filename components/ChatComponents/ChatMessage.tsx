import Image from "next/image";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FiPaperclip } from "react-icons/fi";

const ChatMessage = () => {
  return (
    <section className="h-full w-full relative border-l">
      <div className="sticky top-0 left-0 h-14 px-3 border-b w-full flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full ">
            <Image
              src="/user1.jpg"
              alt="user"
              width={100}
              height={100}
              className="w-ful h-full object-cover rounded-full"
            />
          </div>
          <div className="pr-3 space-y-1">
            <h5 className="text-sm text-primaryColor font-lexed truncate">
              Cameron Williamson
            </h5>
            <div className="flex items-center space-x-1">
              <span className=" right-0 bottom-0 w-2 h-2 rounded-full bg-green-400"></span>
              <p className="text-xs text-secondColor">Active Now</p>
            </div>
          </div>
        </div>
        <div className="text-lg text-primaryColor">
          <BsThreeDots />
        </div>
      </div>
      ChatMessage
      <div className="absolute bottom-0 left-0 h-14 px-3 border-t w-full bg-[#F1F7FF] flex items-center space-x-2">
        <div className=" flex rounded-lg shadow-sm w-full">
          <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
            <FiPaperclip />
          </span>
          <input
            type="text"
            name="company-website"
            id="company-website"
            className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border border-gray-300 px-3 py-2 focus:border-activeColor focus:ring-activeColor sm:text-sm"
            placeholder="Please type your message"
          />
        </div>
        <button className="p-1 rounded-full bg-activeColor">
          <Image src="/assets/Send.png" alt="plane" width={30} height={30} />
        </button>
      </div>
    </section>
  );
};

export default ChatMessage;
