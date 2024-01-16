import Image from "next/image";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FiPaperclip } from "react-icons/fi";
import { HiUsers } from "react-icons/hi";
import { MdLocationPin } from "react-icons/md";

const ChatMessageLoader = () => {
  return (
    <section className="h-full w-full relative border-l">
      <div className="sticky top-0 left-0 h-14 px-3  w-full flex  items-center ">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-300 animate-pulse"></div>
          <div className="pr-3 space-y-2  animate-pulse ">
            <h5 className="  h-3 w-24 bg-gray-200 rounded-md "></h5>
            <p className="h-2 w-16 bg-gray-200 rounded-md"></p>
          </div>
        </div>
      </div>
      <div className="sticky h-24 border bg-[#F1F7FF] px-3 flex space-x-3 items-center ">
        <div className="h-20 w-32 border rounded-md bg-gray-300 animate-pulse"></div>
        <div className="space-y-2 animate-pulse">
          <h5 className=" h-3 w-36 bg-gray-300 rounded-md"></h5>
          <div className="h-3 w-24 bg-gray-200 rounded-md"></div>
          <span className="h-3 w-14 bg-gray-200 rounded-md"></span>
        </div>
      </div>
      <div className=" chatBoxLoader px-3  flex items-end  w-full relative animate-pulse ">
        <div className=" w-full space-y-3 ">
          <div className="relative w-full flex justify-end ">
            <div className="w-1/2  flex justify-end p-2 relative space-y-2.5">
              <span className=" bg-gray-200 h-6 w-36 rounded-md rounded-br-none"></span>
              <span className="absolute right-2 -bottom-2 bg-gray-200 h-3 w-6 rounded-md block"></span>
            </div>
          </div>
          <div className="relative w-full flex justify-start">
            <div className="w-1/2  flex justify-start items-center p-2  space-x-2">
              <div className="w-7 h-7 rounded-full bg-gray-200"></div>
              <div className="relative w-full space-y-2.5  ">
                <h6 className=" bg-gray-200 h-6 w-36 rounded-md rounded-bl-none"></h6>
                <span className="absolute left-0 -bottom-4 bg-gray-200 h-3 w-6 rounded-md block"></span>
              </div>
            </div>
          </div>
          <div className="relative w-full flex justify-end ">
            <div className="w-1/2  flex justify-end p-2 relative space-y-2.5">
              <span className=" bg-gray-200 h-6 w-36 rounded-md rounded-br-none"></span>
              <span className="absolute right-2 -bottom-2 bg-gray-200 h-3 w-6 rounded-md block"></span>
            </div>
          </div>
        </div>
      </div>

      <form>
        <div className="absolute  bottom-0 left-0 h-14 px-3 border-t w-full bg-[#F1F7FF] flex items-center space-x-2">
          <div className=" flex rounded-lg shadow-sm w-full">
            <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
              <FiPaperclip />
            </span>

            <input
              readOnly
              className="block text-gray-300 w-full min-w-0 flex-1 rounded-none rounded-r-md border border-gray-300 px-3 py-2 focus:border-activeColor focus:ring-activeColor sm:text-sm animate-pulse"
              value="loading....."
              type="text"
              id="msgText"
              name="msgText"
            />
          </div>

          <button
            type="submit"
            form="MessageInputForm"
            className="p-1 rounded-full bg-activeColor"
          >
            <Image src="/assets/Send.png" alt="plane" width={30} height={30} />
          </button>
        </div>
      </form>
    </section>
  );
};

export default ChatMessageLoader;
