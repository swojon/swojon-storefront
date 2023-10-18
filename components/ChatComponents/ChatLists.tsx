import Image from "next/image";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const ChatLists = ({ setSideProfile }: { setSideProfile: any }) => {
  return (
    <section className="bg-[#F1F7FF] h-full w-full p-3 space-y-2 lg:space-y-4 overflow-y-auto ">
      <div className="flex justify-between items-center">
        <h5 className="lg:text-lg text-base text-primaryColor font-lexed font-medium">
          Chat List
        </h5>

        <div
          className="block lg:hidden text-primaryColor  cursor-pointer"
          onClick={() => setSideProfile("")}
        >
          <AiOutlineClose />
        </div>
      </div>

      <div className="space-y-2.5">
        <div className="xl:p-2 lg:p-1 p-2 w-full flex items-center bg-white rounded-md border border-transparent hover:border-activeColor">
          <div className="lg:w-[18%] w-[12%] ">
            <div className="xl:w-8 lg:w-5 w-7  xl:h-8 lg:h-5 h-7 rounded-full relative">
              <Image
                src="/user1.jpg"
                alt="user"
                width={100}
                height={100}
                className="w-ful h-full object-cover rounded-full"
              />
              <span className="absolute right-0 bottom-0 w-2 h-2 rounded-full bg-green-400"></span>
            </div>
          </div>
          <div className="lg:w-[82%] w-[88%] flex justify-between">
            <div className="pr-3 space-y-1 w-[80%] ">
              <h5 className="xl:text-sm lg:text-xs text-primaryColor font-lexed truncate">
                Ibrahim K. Sakib
              </h5>
              <p className="text-xs text-primaryColor truncate">
                I need a Furniture!
              </p>
            </div>
            <div className="flex flex-col space-y-1 items-end justify-center w-[20%] ">
              <span className="xl:text-xs text-[9px] truncate">7:30 PM</span>
              <span className="xl:w-4 w-3 xl:h-4 h-3 rounded-full bg-green-400 xl:text-xs text-[9px] text-white flex justify-center items-center">
                2
              </span>
            </div>
          </div>
        </div>

        <div className="xl:p-2 lg:p-1 p-2 w-full flex items-center bg-white rounded-md border border-transparent hover:border-activeColor">
          <div className="lg:w-[18%] w-[12%]  ">
            <div className="xl:w-8 lg:w-5 w-7  xl:h-8 lg:h-5 h-7 rounded-full relative">
              <Image
                src="/user1.jpg"
                alt="user"
                width={100}
                height={100}
                className="w-ful h-full object-cover rounded-full"
              />
              <span className="absolute right-0 bottom-0 w-2 h-2 rounded-full bg-gray-300"></span>
            </div>
          </div>
          <div className="lg:w-[82%] w-[88%] flex justify-between">
            <div className="pr-3 space-y-1 w-[80%] ">
              <h5 className="xl:text-sm lg:text-xs text-primaryColor font-lexed truncate">
                Ibrahim K. Sakib
              </h5>
              <p className="text-xs text-primaryColor truncate">
                I need a Furniture!
              </p>
            </div>
            <div className="flex flex-col space-y-1 items-end justify-center w-[20%]  ">
              <span className="xl:text-xs text-[9px] truncate">7:30 PM</span>
              <span className="xl:w-4 w-3 xl:h-4 h-3 rounded-full bg-green-400 xl:text-xs text-[9px] text-white flex justify-center items-center">
                2
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatLists;
