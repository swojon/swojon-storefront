import { setUserProfileOpen } from "@/app/redux/userProfileSlice";
import Image from "next/image";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FiPaperclip } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
import { useDispatch } from "react-redux";

const ChatMessage = ({
  sideProfile,
  setSideProfile,
}: {
  sideProfile: any;
  setSideProfile: any;
}) => {
  const dispatch = useDispatch();
  return (
    <section className="h-full w-full relative border-l">
      <div className="sticky top-0 left-0 h-14 px-3  w-full flex justify-between items-center">
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
        {/* <div
          className="text-lg text-primaryColor cursor block lg:hidden"
          onClick={() => dispatch(setUserProfileOpen())}
        >
          <BsThreeDots />
        </div> */}
        <div
          className="text-lg text-primaryColor cursor block "
          onClick={() => setSideProfile(!sideProfile)}
        >
          <BsThreeDots />
        </div>
      </div>
      <div className="sticky h-24 border bg-[#F1F7FF] px-3 flex space-x-3 items-center">
        <div className="h-20 w-32 border rounded-md ">
          <Image
            src="/assets/pro2.png"
            alt="product"
            width={100}
            height={100}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="">
          <h5 className="font-lexed text-primaryColor text-lg font-medium">
            Home Deluxe Furniture
          </h5>
          <div className="flex items-center space-x-1">
            <MdLocationPin className="text-activeColor" />
            <span className="block text-secondColor text-sm">
              Fatehpur, Hathazari, Chattogram
            </span>
          </div>
          <span className="text-activeColor text-base font-lexed font-medium pt-1">
            TK, 7000.00
          </span>
        </div>
      </div>
      <div className=" chatBox px-3 pb-8 flex items-end  w-full relative overflow-y-auto">
        <div className="max-h-full w-full space-y-3 ">
          <div className="relative w-full flex justify-end">
            <div className="w-1/2  flex justify-end p-2 relative">
              <span className="p-2  bg-activeColor text-white text-sm rounded-md rounded-br-none">
                hello
              </span>
              <span className="absolute right-2 -bottom-2 text-[#979696] text-xs block">
                just now
              </span>
            </div>
          </div>

          <div className="relative w-full flex justify-end">
            <div className="w-1/2  flex justify-end p-2 relative">
              <span className="p-2  bg-activeColor text-white text-sm rounded-md rounded-br-none">
                hello
              </span>
              <span className="absolute right-2 -bottom-2 text-[#979696] text-xs block">
                just now
              </span>
            </div>
          </div>
          <div className="relative w-full flex justify-start">
            <div className="w-1/2  flex justify-start items-center p-2  space-x-2">
              <div className="w-7 h-7 rounded-full">
                <Image
                  src="/user1.jpg"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover rounded-full"
                  alt="user"
                />
              </div>
              <div className="relative w-full">
                <span className="p-2  bg-[#F1F7FF] text-primaryColor text-sm rounded-md rounded-bl-none">
                  Sure Sir
                </span>
                <span className="absolute left-0 -bottom-6 text-[#979696] text-xs block">
                  02 min ago
                </span>
              </div>
            </div>
          </div>
          <div className="relative w-full flex justify-end">
            <div className="w-1/2  flex justify-end p-2 relative">
              <span className="p-2  bg-activeColor text-white text-sm rounded-md rounded-br-none">
                I want to buy a furniture
              </span>
              <span className="absolute right-2 -bottom-2 text-[#979696] text-xs block">
                just now
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute  bottom-0 left-0 h-14 px-3 border-t w-full bg-[#F1F7FF] flex items-center space-x-2">
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
