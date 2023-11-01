"use client";
import Image from "next/image";
import React, { useState } from "react";

import Link from "next/link";
import {
  MdKeyboardArrowRight,
  MdOutlineAccessTimeFilled,
} from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { HiSquare3Stack3D } from "react-icons/hi2";

const PostproductDetails = () => {
  const [clickBtn, setClickBtn] = useState("On going AD");
  return (
    <main className="custom-container py-10">
      <div className="flex flex-col items-center space-y-2">
        <div className="flex items-center space-x-1  text-sm text-secondColor">
          <h6>Home</h6>
          <MdKeyboardArrowRight />
          <h6 className="text-primaryColor">Post details</h6>
        </div>
        <h2 className="text-primaryColor font-lexed xl:text-3xl lg:text-2xl md:text-lg text-base font-medium">
          Product Post Details
        </h2>
        <div className="text-center text-base text-secondColor">
          <p>Need something cleared up? Here are our most</p>
          <p>frequently asked questions.</p>
        </div>
      </div>

      <div className="pt-16">
        <div className="flex items-start ">
          <div className="flex-1">
            <h6 className="text-primaryColor font-lexed  lg:text-2xl md:text-lg text-base font-medium">
              Here all of your products listing.
            </h6>{" "}
            <p className="text-secondColor   lg:text-base md:text-sm text-sm  pt-1">
              Need something cleared up? Here are our most frequently <br />{" "}
              asked questions.
            </p>
          </div>
          <div className="flex-1  flex justify-end">
            <div className="flex bg-[#F9FAFB] p-1 border rounded-md w-[270px]">
              <button
                onClick={() => setClickBtn("Posted AD")}
                className={`py-2 px-4 text-sm   rounded-md flex-1 ${
                  clickBtn !== "On going AD"
                    ? "text-white bg-activeColor"
                    : "text-primaryColor"
                }`}
              >
                Posted AD
              </button>
              <button
                onClick={() => setClickBtn("On going AD")}
                className={`py-2 px-4 text-sm text-primaryColor  rounded-md flex-1 ${
                  clickBtn === "On going AD"
                    ? "text-white bg-activeColor"
                    : "text-primaryColor"
                }`}
              >
                On going AD
              </button>
            </div>
          </div>
        </div>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-10">
          {" "}
          {clickBtn === "Posted AD" ? (
            <>
              <div className="  rounded-md bg-whiteColor border border-[#EFEFEF] p-2.5 hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300 space-y-3">
                <div className="lg:h-[170px] md:h-[170px] h-[130px]  overflow-hidden rounded-tl-md  rounded-tr-md">
                  <Image
                    src="/assets/pro1.png"
                    width={500}
                    height={500}
                    alt="product banner"
                    className="h-full w-full object-cover rounded-tl-md  rounded-tr-md hover:scale-110 transition ease-in-out delay-150 duration-300 "
                  />
                </div>

                <div className=" flex flex-row  justify-between items-center font-lexed ">
                  <div>
                    <h6 className="md:text-base text-sm font-semibold text-primaryColor capitaliz truncate">
                      Premium Quality Sofa
                    </h6>
                  </div>
                  <span className="text-activeColor md:text-sm text-xs">
                    TK, 7000
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center  text-secondColor">
                    <FaLocationDot className="text-activeColor text-sm pe-1" />
                    <span className="text-xs font-lexed ps-1">
                      Mirpur-14, Dhaka
                    </span>
                  </div>
                  <div className="flex items-center  text-secondColor">
                    <HiSquare3Stack3D className="text-activeColor text-sm pe-1" />
                    <span className="text-xs font-lexed ps-1">Electronics</span>
                  </div>
                  <div className="flex items-center  text-secondColor">
                    <MdOutlineAccessTimeFilled className="text-activeColor text-sm pe-1" />
                    <span className="text-xs font-lexed ps-1">
                      You’ve 6 days to edit this AD
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1">
                  <button className="border border-activeColor text-whiteColor bg-activeColor  rounded-md py-1 text-center md:text-base sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300">
                    Delete Ad
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="  rounded-md bg-whiteColor border border-[#EFEFEF] p-2.5 hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300 space-y-3">
                <div className="lg:h-[170px] md:h-[170px] h-[130px]  overflow-hidden rounded-tl-md  rounded-tr-md">
                  <Image
                    src="/assets/pro1.png"
                    width={500}
                    height={500}
                    alt="product banner"
                    className="h-full w-full object-cover rounded-tl-md  rounded-tr-md hover:scale-110 transition ease-in-out delay-150 duration-300 "
                  />
                </div>

                <div className=" flex flex-row  justify-between items-center font-lexed ">
                  <div>
                    <h6 className="md:text-base text-sm font-semibold text-primaryColor capitalize">
                      Premium Quality Sofa
                    </h6>
                  </div>
                  <span className="text-activeColor md:text-sm text-xs">
                    TK, 7000
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center  text-secondColor">
                    <FaLocationDot className="text-activeColor text-sm pe-1" />
                    <span className="text-xs font-lexed ps-1">
                      Mirpur-14, Dhaka
                    </span>
                  </div>
                  <div className="flex items-center  text-secondColor">
                    <HiSquare3Stack3D className="text-activeColor text-sm pe-1" />
                    <span className="text-xs font-lexed ps-1">Electronics</span>
                  </div>
                  <div className="flex items-center  text-secondColor">
                    <MdOutlineAccessTimeFilled className="text-activeColor text-sm pe-1" />
                    <span className="text-xs font-lexed ps-1">
                      You’ve 6 days to edit this AD
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button className="border border-activeColor text-whiteColor bg-activeColor  rounded-md py-1 text-center md:text-base sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300">
                    Delete Ad
                  </button>
                  <button className="border border-activeColor text-activeColor  rounded-md py-1 text-center md:text-base  sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300">
                    Edit Ad
                  </button>
                </div>
              </div>
              <div className="  rounded-md bg-whiteColor border border-[#EFEFEF] p-2.5 hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300 space-y-3">
                <div className="lg:h-[170px] md:h-[170px] h-[130px]  overflow-hidden rounded-tl-md  rounded-tr-md">
                  <Image
                    src="/assets/pro1.png"
                    width={500}
                    height={500}
                    alt="product banner"
                    className="h-full w-full object-cover rounded-tl-md  rounded-tr-md hover:scale-110 transition ease-in-out delay-150 duration-300 "
                  />
                </div>

                <div className=" flex flex-row  justify-between items-center font-lexed ">
                  <div>
                    <h6 className="md:text-base text-sm font-semibold text-primaryColor capitalize">
                      Premium Quality Sofa
                    </h6>
                  </div>
                  <span className="text-activeColor md:text-sm text-xs">
                    TK, 7000
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center  text-secondColor">
                    <FaLocationDot className="text-activeColor text-sm pe-1" />
                    <span className="text-xs font-lexed ps-1">
                      Mirpur-14, Dhaka
                    </span>
                  </div>
                  <div className="flex items-center  text-secondColor">
                    <HiSquare3Stack3D className="text-activeColor text-sm pe-1" />
                    <span className="text-xs font-lexed ps-1">Electronics</span>
                  </div>
                  <div className="flex items-center  text-secondColor">
                    <MdOutlineAccessTimeFilled className="text-activeColor text-sm pe-1" />
                    <span className="text-xs font-lexed ps-1">
                      You’ve 6 days to edit this AD
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button className="border border-activeColor text-whiteColor bg-activeColor  rounded-md py-1 text-center md:text-base sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300">
                    Delete Ad
                  </button>
                  <button className="border border-activeColor text-activeColor  rounded-md py-1 text-center md:text-base  sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300">
                    Edit Ad
                  </button>
                </div>
              </div>
              <div className="  rounded-md bg-whiteColor border border-[#EFEFEF] p-2.5 hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300 space-y-3">
                <div className="lg:h-[170px] md:h-[170px] h-[130px]  overflow-hidden rounded-tl-md  rounded-tr-md">
                  <Image
                    src="/assets/pro1.png"
                    width={500}
                    height={500}
                    alt="product banner"
                    className="h-full w-full object-cover rounded-tl-md  rounded-tr-md hover:scale-110 transition ease-in-out delay-150 duration-300 "
                  />
                </div>

                <div className=" flex flex-row  justify-between items-center font-lexed ">
                  <div>
                    <h6 className="md:text-base text-sm font-semibold text-primaryColor capitalize">
                      Premium Quality Sofa
                    </h6>
                  </div>
                  <span className="text-activeColor md:text-sm text-xs">
                    TK, 7000
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center  text-secondColor">
                    <FaLocationDot className="text-activeColor text-sm pe-1" />
                    <span className="text-xs font-lexed ps-1">
                      Mirpur-14, Dhaka
                    </span>
                  </div>
                  <div className="flex items-center  text-secondColor">
                    <HiSquare3Stack3D className="text-activeColor text-sm pe-1" />
                    <span className="text-xs font-lexed ps-1">Electronics</span>
                  </div>
                  <div className="flex items-center  text-secondColor">
                    <MdOutlineAccessTimeFilled className="text-activeColor text-sm pe-1" />
                    <span className="text-xs font-lexed ps-1">
                      You’ve 6 days to edit this AD
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button className="border border-activeColor text-whiteColor bg-activeColor  rounded-md py-1 text-center md:text-base sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300">
                    Delete Ad
                  </button>
                  <button className="border border-activeColor text-activeColor  rounded-md py-1 text-center md:text-base  sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300">
                    Edit Ad
                  </button>
                </div>
              </div>
              <div className="  rounded-md bg-whiteColor border border-[#EFEFEF] p-2.5 hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300 space-y-3">
                <div className="lg:h-[170px] md:h-[170px] h-[130px]  overflow-hidden rounded-tl-md  rounded-tr-md">
                  <Image
                    src="/assets/pro1.png"
                    width={500}
                    height={500}
                    alt="product banner"
                    className="h-full w-full object-cover rounded-tl-md  rounded-tr-md hover:scale-110 transition ease-in-out delay-150 duration-300 "
                  />
                </div>

                <div className=" flex flex-row  justify-between items-center font-lexed ">
                  <div>
                    <h6 className="md:text-base text-sm font-semibold text-primaryColor capitalize">
                      Premium Quality Sofa
                    </h6>
                  </div>
                  <span className="text-activeColor md:text-sm text-xs">
                    TK, 7000
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center  text-secondColor">
                    <FaLocationDot className="text-activeColor text-sm pe-1" />
                    <span className="text-xs font-lexed ps-1">
                      Mirpur-14, Dhaka
                    </span>
                  </div>
                  <div className="flex items-center  text-secondColor">
                    <HiSquare3Stack3D className="text-activeColor text-sm pe-1" />
                    <span className="text-xs font-lexed ps-1">Electronics</span>
                  </div>
                  <div className="flex items-center  text-secondColor">
                    <MdOutlineAccessTimeFilled className="text-activeColor text-sm pe-1" />
                    <span className="text-xs font-lexed ps-1">
                      You’ve 6 days to edit this AD
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button className="border border-activeColor text-whiteColor bg-activeColor  rounded-md py-1 text-center md:text-base sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300">
                    Delete Ad
                  </button>
                  <button className="border border-activeColor text-activeColor  rounded-md py-1 text-center md:text-base  sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300">
                    Edit Ad
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default PostproductDetails;
