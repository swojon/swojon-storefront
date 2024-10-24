import Image from "next/image";
import React from "react";

const SellerContentLoader = () => {
  return (
    <div className="animate-pulse">
      <div className=" flex justify-between items-center pb-10 lg:px-2">
        <div
          className={`flex flex-row items-center gap-5 text-base capitalize`}
        >
          <div className="w-14 h-4 bg-gray-300 rounded-md"></div>
          <div className="w-14 h-4 bg-gray-300 rounded-md"></div>
          <div className="w-14 h-4 bg-gray-300 rounded-md"></div>
        </div>
        <div className="w-14 h-3 bg-gray-300 rounded-md"></div>
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-2 w-full lg:pb-10 md:pb-6 pb-4">
        <div className="  rounded-md bg-whiteColor border border-[#EFEFEF] p-2.5 hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300">
          <div className="md:h-[215px] h-[225px] w-full relative overflow-hidden rounded-tl-md  rounded-tr-md bg-gray-100 flex justify-center items-center">
            <Image
              src="/assets/image.png"
              width={200}
              height={100}
              alt="product banner"
              className="h-16 w-20 object-cover rounded-tl-md  rounded-tr-md opacity-25 "
            />
          </div>
          <div className="pt-6  flex flex-row  justify-between items-center font-lexed ">
            <div className="w-32 h-3.5 bg-gray-300 rounded-md"></div>
            <div className="w-16 h-3.5 bg-gray-300 rounded-md"></div>
          </div>

          <div className="w-24 h-2.5 bg-gray-300 rounded-md mt-2"></div>

          <div className="flex items-center md:space-x-2 space-x-1 md:py-4 py-3">
            <div className="w-7 h-7 rounded-full bg-gray-300"></div>
            <span className=" w-16 h-2.5 bg-gray-300 rounded-md"></span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button className="border border-gray-300  bg-gray-300  rounded-md py-4 "></button>
            <button className="border border-gray-300    rounded-md py-4 "></button>
          </div>
        </div>
        <div className="  rounded-md bg-whiteColor border border-[#EFEFEF] p-2.5 hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300">
          <div className="md:h-[215px] h-[225px] w-full relative overflow-hidden rounded-tl-md  rounded-tr-md bg-gray-100 flex justify-center items-center">
            <Image
              src="/assets/image.png"
              width={200}
              height={100}
              alt="product banner"
              className="h-16 w-20 object-cover rounded-tl-md  rounded-tr-md opacity-25 "
            />
          </div>
          <div className="pt-6  flex flex-row  justify-between items-center font-lexed ">
            <div className="w-32 h-3.5 bg-gray-300 rounded-md"></div>
            <div className="w-16 h-3.5 bg-gray-300 rounded-md"></div>
          </div>

          <div className="w-24 h-2.5 bg-gray-300 rounded-md mt-2"></div>

          <div className="flex items-center md:space-x-2 space-x-1 md:py-4 py-3">
            <div className="w-7 h-7 rounded-full bg-gray-300"></div>
            <span className=" w-16 h-2.5 bg-gray-300 rounded-md"></span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button className="border border-gray-300  bg-gray-300  rounded-md py-4 "></button>
            <button className="border border-gray-300    rounded-md py-4 "></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerContentLoader;
