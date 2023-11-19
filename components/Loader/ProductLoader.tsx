import Image from "next/image";
import React from "react";

const ProductLoader = () => {
  return (
    <>
      <div className="animate-pulse  rounded-md bg-whiteColor border border-[#EFEFEF] p-2.5 hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300">
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
      <div className="animate-pulse  rounded-md bg-whiteColor border border-[#EFEFEF] p-2.5 hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300">
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
      <div className="animate-pulse  rounded-md bg-whiteColor border border-[#EFEFEF] p-2.5 hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300">
        <div className="md:h-[215px] h-[225px] w-full relative overflow-hidden rounded-tl-md  rounded-tr-md bg-gray-100 flex justify-center items-center">
          <Image
            src="/assets/image.png"
            width={200}
            height={100}
            alt="product banner"
            className="h-16 w-20 object-cover rounded-tl-md  rounded-tr-md  opacity-25"
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
      <div className="animate-pulse  rounded-md bg-whiteColor border border-[#EFEFEF] p-2.5 hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300">
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
    </>
  );
};

export default ProductLoader;
