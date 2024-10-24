"use client";
import React from "react";

import Image from "next/image";

import {
  AiFillMessage,
  AiFillMinusCircle,
  AiOutlineClose,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";


import { setUserClose } from "@/app/redux/userProfileSlice";
import { TbFileText } from "react-icons/tb";
import { MdLocalPhone } from "react-icons/md";

const ResUserProfile = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: any) => state.userProfile.open);
  console.log("isOpen", isOpen)
  return (
    <>
    {isOpen && <section
      className={`fixed top-0 lg:hidden right-0  w-full h-screen z-20000 transition delay-200 duration-700 ease-in-out ${
        isOpen ? "translate-x-0  bg-[#9392926d]" : "-translate-x-full "
      }`}
    >
      <div
        className={`w-[85%] md:w-[55%] bg-white h-screen opacity-100  relative transition duration-700 ease-in-out delay-200 float-right	`}
      >
        <button
          className="absolute right-0 top-0 border p-2 m-2 rounded-sm text-activeColor"
          onClick={() => dispatch(setUserClose())}
        >
          <AiOutlineClose className="text-lg" />
        </button>
        <section className="sticky top-0 h-full rounded-md min-h-screen py-7 pl-6 pr-16 overflow-y-auto">
          <div className="w-full h-full px-3 py-5 bg-white  overflow-y-visible">
            <div className="flex flex-col items-center space-y-3 border-b pb-4">
              <div className="w-14 h-14 rounded-full relative">
                <Image
                  src="/user1.jpg"
                  alt="user"
                  width={100}
                  height={100}
                  className="w-ful h-full object-cover rounded-full"
                />
                <span className="absolute right-1 bottom-0 w-3 h-3 border rounded-full bg-green-400"></span>
              </div>
              <h5 className="xl:text-lg lg:text-base text-base font-lexed font-medium text-primaryColor">
                Cameron Williamson
              </h5>
              <div className="flex items-center gap-5	">
                <div className="flex flex-col items-center">
                  <div className="w-7 h-7 flex  justify-center items-center rounded-full bg-[#fceced] text-activeColor">
                    <MdLocalPhone />
                  </div>
                  <h6 className="text-xs text-primaryColor pt-1 capitalize">
                    call
                  </h6>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-7 h-7 flex  justify-center items-center rounded-full bg-[#fceced] text-activeColor">
                    <AiFillMessage />
                  </div>
                  <h6 className="text-xs text-primaryColor pt-1 capitalize">
                    Message
                  </h6>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-7 h-7 flex  justify-center items-center rounded-full bg-[#fceced] text-activeColor">
                    <AiFillMinusCircle />
                  </div>
                  <h6 className="text-xs text-primaryColor pt-1 capitalize">
                    Block
                  </h6>
                </div>
              </div>
            </div>

            <div className="space-y-2 py-4 border-b">
              <div>
                <h6 className="xl:text-base lg:text-sm font-lexed text-primaryColor">
                  Phone
                </h6>
                <p className="xl:text-sm lg:text-xs text-secondColor">
                  +123 456 789 98
                </p>
              </div>
              <div>
                <h6 className="xl:text-base lg:text-sm font-lexed text-primaryColor">
                  Email
                </h6>
                <p className="xl:text-sm lg:text-xs text-secondColor">
                  xyzabc@gmail.com
                </p>
              </div>
              <div>
                <h6 className="xl:text-base lg:text-sm font-lexed text-primaryColor">
                  Type
                </h6>
                <p className="xl:text-sm lg:text-xs text-secondColor">
                  Verified Seller
                </p>
              </div>
            </div>
            <div className="pt-4 space-y-3">
              <h6 className="text-base font-lexed text-primaryColor font-medium">
                Shared files
              </h6>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-1">
                  <div className="w-6 h-6 flex  justify-center items-center rounded-full bg-[#fceced] text-activeColor">
                    <TbFileText className="xl:text-sm lg:text-xs" />
                  </div>
                  <div className="flex flex-col">
                    <span className="xl:text-sm lg:text-xs text-primaryColor font-lexed">
                      Product image.abc
                    </span>
                    <span className="text-xs text-secondColor">
                      02 Jan, 2022
                    </span>
                  </div>
                </div>
                <span className="text-primaryColor xl:text-sm lg:text-xs font-lexed">
                  1.1 MB
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>}
    </>
    
  );
};

export default ResUserProfile;
