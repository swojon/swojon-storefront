import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { GrLocation } from "react-icons/gr";
import { MdOutlineClose } from "react-icons/md";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { IoWarningOutline } from "react-icons/io5";

const MeetUp = () => {
  const ref = useRef<any>(null);
  const [searchValue, setSearchValue] = useState<any>(null);
  const handleClick = () => {
    ref.current.focus();
  };

  const handleSearchChange = (event: any) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="px-6 py-4 space-y-5 ">
      <div className="relative w-full ">
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
            ref={ref}
            onChange={handleSearchChange}
            className={`block w-full   bg-[#F5F5F5] py-4 pr-3 pl-9 leading-5 placeholder-[#C0C0C0]  focus:placeholder-gray-400 focus:outline-none  sm:text-sm ${
              searchValue
                ? "rounded-t-3xl"
                : "rounded-3xl focus:border-activeColor focus:ring-1 focus:ring-activeColor"
            }`}
            placeholder="Search"
            type="search"
          />
        </div>

        {searchValue && (
          <div className="w-full   bg-white shadow-md">
            <div className="flex items-center space-x-4 border-b border-gray-100 px-5  py-4">
              <input
                id="isDonation"
                name="isDonation"
                type="checkbox"
                // onChange={handleChecked}
                className="md:h-4 h-4 md:w-4 w-4 rounded border-primaryColor text-activeColor focus:ring-activeColor custom-checkedInput"
              />

              <label
                htmlFor="comments"
                className="text-secondColor lg:text-base md:text-xs text-[10px] font-medium"
              >
                Dampara, Chittagong, Bangladesh
              </label>
            </div>

            <div className="flex items-center space-x-4 border-b border-gray-100 px-5  py-4">
              <input
                id="isDonation"
                name="isDonation"
                type="checkbox"
                // onChange={handleChecked}
                className="md:h-4 h-4 md:w-4 w-4 rounded border-primaryColor text-activeColor focus:ring-activeColor custom-checkedInput"
              />

              <label
                htmlFor="comments"
                className="text-secondColor lg:text-base md:text-xs text-[10px] font-medium"
              >
                Dampara, Chittagong, Bangladesh
              </label>
            </div>

            <div className="flex items-center space-x-4 border-b border-gray-100 px-5  py-4">
              <input
                id="isDonation"
                name="isDonation"
                type="checkbox"
                // onChange={handleChecked}
                className="md:h-4 h-4 md:w-4 w-4 rounded border-primaryColor text-activeColor focus:ring-activeColor custom-checkedInput"
              />

              <label
                htmlFor="comments"
                className="text-secondColor lg:text-base md:text-xs text-[10px] font-medium"
              >
                Dampara, Chittagong, Bangladesh
              </label>
            </div>
          </div>
        )}
      </div>
      {searchValue ? (
        <div className="w-full flex justify-end items-center gap-5">
          <button className="px-8 py-3.5 text-white bg-secondColor text-base rounded-md">
            Cancel
          </button>
          <button className="px-8 py-3.5 text-white bg-activeColor text-base rounded-md">
            Done
          </button>
        </div>
      ) : (
        <div className="space-y-5">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4  ">
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

            <div
              onClick={handleClick}
              className="border-dashed border-2 border-activeColor h-full w-full rounded-2xl flex items-center justify-center cursor-pointer p-4"
            >
              <div className="md:space-y-4 space-y-2 text-center flex flex-col items-center">
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

            <div className="flex items-center md:gap-0 gap-4">
              <div className="lg:w-[5%] md:w-[7%] w-[10%]">
                <MdOutlinePhotoCamera className="leading-0 text-3xl text-primaryColor " />
              </div>

              <span className="block font-medium text-primaryColor md:text-base text-sm lg:w-[95%] md:w-[93%] w-[90%]">
                Take a picture of delivery slip for proof
              </span>
            </div>
            <div className="flex items-center md:gap-0 gap-4">
              <div className=" lg:w-[5%] md:w-[7%] w-[10%]">
                <IoWarningOutline className="leading-0 text-3xl text-primaryColor " />
              </div>

              <span className="block font-medium text-primaryColor md:text-base text-sm lg:w-[95%] md:w-[93%] w-[90%]">
                Resolve conflict before you make the deal, swojon is not
                responsible for any unwanted situation
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MeetUp;
