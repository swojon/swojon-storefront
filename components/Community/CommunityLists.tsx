import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { AiOutlinePlus } from "react-icons/ai";
import React from "react";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { TiLocation } from "react-icons/ti";

const CommunityLists = () => {
  return (
    <section className="sticky top-0 h-auto  rounded-md min-h-screen space-y-4 bg-white p-4">
      <div className="space-y-3">
        <h2 className="lg:text-2xl md:text-lg text-base text-primaryColor font-lexed font-medium">
          Community
        </h2>
        <div className="relative  ">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center  ">
            <MagnifyingGlassIcon
              className="h-7 w-7  p-1.5  text-gray-400 rounded-full ml-1 "
              aria-hidden="true"
            />
          </div>
          <input
            id="search"
            name="search"
            className="block w-full rounded-lg border border-gray-100 bg-gray-100 py-2 pl-8 pr-3 leading-5 placeholder-text-gray-400 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-activeColor sm:text-sm "
            placeholder="Search community"
            type="search"
          />
        </div>
        <div className="border-b"></div>
        <div className="w-full py-2 bg-activeColor text-white text-sm flex justify-center items-center gap-2 rounded-md">
          <span>
            <AiOutlinePlus />
          </span>
          <span>Create community</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center gap-2">
          <h6 className="xl:text-lg md:text-base text-base text-primaryColor font-lexed font-medium">
            You’ve joined
          </h6>
          <span className="xl:text-sm md:text-xs text-xs text-activeColor cursor-pointer">
            See all
          </span>
        </div>
        <div className="flex items-center justify-between gap-1 p-1.5 bg-[#F5F5F6] rounded-md">
          <div className="h-[70px] w-[48px] rounded-md ">
            <Image
              src="/assets/comm3.png"
              className="w-full h-full object-cover rounded-md"
              alt="community"
              width={400}
              height={500}
            />
          </div>
          <div className="w-[70%]  space-y-1">
            <h6 className="text-xs text-primaryColor font-lexed font-medium">
              Dhaka University
            </h6>
            <div className="flex items-center  text-secondColor ">
              <span className=" text-xs font-lexed ">2.8K members</span>
              <span className=" text-xs font-lexed  flex items-center">
                <BsDot className="text-xs" /> 8 Post uploaded
              </span>
            </div>
            <div className="flex items-center text-secondColor ">
              <TiLocation className="text-sm text-activeColor pe-1" />{" "}
              <span className="text-xs">Fatehpur, Hathazari</span>
            </div>
          </div>
          <div className="w-4">
            <Image
              src="/assets/checked.png"
              width={200}
              height={200}
              className="w-full"
              alt="icon"
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-1 p-1.5 bg-[#F5F5F6] rounded-md">
          <div className="h-[70px] w-[48px] rounded-md ">
            <Image
              src="/assets/comm3.png"
              className="w-full h-full object-cover rounded-md"
              alt="community"
              width={400}
              height={500}
            />
          </div>
          <div className="w-[70%]  space-y-1">
            <h6 className="text-xs text-primaryColor font-lexed font-medium">
              Dhaka University
            </h6>
            <div className="flex items-center  text-secondColor ">
              <span className=" text-xs font-lexed ">2.8K members</span>
              <span className=" text-xs font-lexed  flex items-center">
                <BsDot className="text-xs" /> 8 Post uploaded
              </span>
            </div>
            <div className="flex items-center text-secondColor ">
              <TiLocation className="text-sm text-activeColor pe-1" />{" "}
              <span className="text-xs">Fatehpur, Hathazari</span>
            </div>
          </div>
          <div className="w-4">
            <Image
              src="/assets/checked.png"
              width={200}
              height={200}
              className="w-full"
              alt="icon"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center gap-2">
          <h6 className="xl:text-lg md:text-base text-base text-primaryColor font-lexed font-medium">
            You haven’t joined
          </h6>
          <span className="xl:text-sm md:text-xs text-xs text-activeColor cursor-pointer">
            See all
          </span>
        </div>
        <div className="flex items-center justify-between gap-1 p-1.5 bg-[#F5F5F6] rounded-md">
          <div className="h-[70px] w-[48px] rounded-md ">
            <Image
              src="/assets/comm3.png"
              className="w-full h-full object-cover rounded-md"
              alt="community"
              width={400}
              height={500}
            />
          </div>
          <div className="w-[70%]  space-y-1">
            <h6 className="text-xs text-primaryColor font-lexed font-medium">
              Dhaka University
            </h6>
            <div className="flex items-center  text-secondColor ">
              <span className=" text-xs font-lexed ">2.8K members</span>
              <span className=" text-xs font-lexed  flex items-center">
                <BsDot className="text-xs" /> 8 Post uploaded
              </span>
            </div>
            <div className="flex items-center text-secondColor ">
              <TiLocation className="text-sm text-activeColor pe-1" />{" "}
              <span className="text-xs">Fatehpur, Hathazari</span>
            </div>
          </div>
          <div className="w-5">
            <Image
              src="/assets/community.png"
              width={200}
              height={200}
              className="w-full"
              alt="icon"
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-1 p-1.5 bg-[#F5F5F6] rounded-md">
          <div className="h-[70px] w-[48px] rounded-md ">
            <Image
              src="/assets/comm3.png"
              className="w-full h-full object-cover rounded-md"
              alt="community"
              width={400}
              height={500}
            />
          </div>
          <div className="w-[70%]  space-y-1">
            <h6 className="text-xs text-primaryColor font-lexed font-medium">
              Dhaka University
            </h6>
            <div className="flex items-center  text-secondColor ">
              <span className=" text-xs font-lexed ">2.8K members</span>
              <span className=" text-xs font-lexed  flex items-center">
                <BsDot className="text-xs" /> 8 Post uploaded
              </span>
            </div>
            <div className="flex items-center text-secondColor ">
              <TiLocation className="text-sm text-activeColor pe-1" />{" "}
              <span className="text-xs">Fatehpur, Hathazari</span>
            </div>
          </div>
          <div className="w-5">
            <Image
              src="/assets/community.png"
              width={200}
              height={200}
              className="w-full"
              alt="icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityLists;
