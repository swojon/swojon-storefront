import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import { GrLocation } from "react-icons/gr";
import { MdOutlineClose } from "react-icons/md";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { IoWarningOutline } from "react-icons/io5";

const MeetUp = () => {
  return (
    <div className="px-6 py-4 space-y-5 ">
      <div className="relative w-full ">
        <div className="pointer-events-none absolute inset-y-0 left-2 flex items-center  ">
          <MagnifyingGlassIcon
            className="h-7 w-7  p-1.5  text-primaryColor mr-1 "
            aria-hidden="true"
          />
        </div>
        <input
          id="search"
          name="search"
          className="block w-full rounded-3xl  bg-[#F5F5F5] py-4 pr-3 pl-9 leading-5 placeholder-[#C0C0C0] focus:border-activeColor focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-activeColor sm:text-sm"
          placeholder="Search"
          type="search"
        />
      </div>

      <div className="grid grid-cols-2 gap-4  ">
        <div className="p-4 border border-[#F1F1F1] rounded-md space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-base text-primaryColor font-bold">
              Oxygen, Bayezid Bostami, Chittagong
            </span>
            <span>
              <MdOutlineClose className="text-2xl text-primaryColor" />
            </span>
          </div>

          <span className="text-base text-secondColor font-medium block">
            Default Address
          </span>

          <div className="h-[104px] rounded-md">
            <Image
              src="/assets/map.png"
              alt="map"
              height={800}
              width={1000}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>

        <div className="border-dashed border-2 border-activeColor h-full w-full rounded-2xl flex items-center justify-center">
          <div className="space-y-4 text-center flex flex-col items-center">
            <GrLocation className="text-activeColor text-3xl" />
            <span className="text-primaryColor font-lexed text-base font-medium">
              Add New Location
            </span>
            <p className="text-secondColor text-base font-medium">
              You can add upto 5 locations
            </p>
          </div>
        </div>
      </div>

      <div className="border-b border-[#F1F1F1]"></div>

      <div className="space-y-4">
        <span className="text-base font-bold font-lexed  text-[#FA4119]">
          Reminders
        </span>

        <div className="flex items-center gap-4">
          <MdOutlinePhotoCamera className="leading-0 text-2xl text-primaryColor " />

          <span className="block font-medium text-primaryColor text-base ">
            Take a picture of delivery slip for proof
          </span>
        </div>
        <div className="flex items-center gap-4">
          <IoWarningOutline className="leading-0 text-2xl text-primaryColor " />

          <span className="block font-medium text-primaryColor text-base ">
            Resolve conflict before you make the deal, swojon is not responsible
            for any unwanted situation
          </span>
        </div>
      </div>
    </div>
  );
};

export default MeetUp;
