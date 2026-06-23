import Image from "next/image";
import React from "react";
import { IoMdTime } from "react-icons/io";

const AdStartConversation = () => {
  return (
    <div className="lg:w-[350px] max-w-[300px]  border rounded-md ">
      <div className="w-full h-[200px]">
        <Image
          src="/assets/pro5.png"
          alt="ad"
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-t-md"
        />
      </div>
      <div className="p-2">
        <h6 className="lg:text-lg text-base font-semibold text-primaryColor capitalize truncate">
          PArtex sofa
        </h6>

        <div className="pb-1  flex items-center  text-secondColor ">
          <IoMdTime className="text-xs " />
          <span className="text-xs  ps-1">1 min ago</span>
        </div>

        <div className=" pb-1 flex items-center gap-3  text-secondColor">
          <span className="text-secondColor    text-sm  ">Main price:</span>
          <span className="text-primaryColor    text-sm  font-medium">
            <span className="text-xs pe-0.5">Tk </span> 100
          </span>
        </div>
        <div className=" pb-1 flex items-center gap-3  text-secondColor">
          <span className="text-secondColor    text-sm  ">Offer price:</span>
          <span className="text-primaryColor    text-sm  font-medium">
            <span className="text-xs pe-0.5">Tk </span> 100
          </span>
        </div>

        <button className="py-1 w-full  bg-activeColor text-white text-sm rounded-md ">
          start conversation
        </button>
      </div>
    </div>
  );
};

export default AdStartConversation;
