"use client";
import React from "react";
import Image from "next/image";
import "./Navbar.scss";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";

const ResNavbar = () => {
  return (
    <div className="fixed top-0 left-0 resNavbar-container  w-full h-screen z-50 ">
      <div className="w-[60%] bg-white h-screen opacity-100 py-7 pl-6 pr-20 relative">
        <button className="absolute right-0 top-0 border p-3 m-2 rounded-sm">
          {" "}
          <AiOutlineClose className="text-2xl" />
        </button>
        <div className=" ">
          <div className="space-y-1 pt-2 pb-3">
            <div className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700">
              Dashboard
            </div>
            <div className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800">
              Team
            </div>
            <div className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800">
              Projects
            </div>
            <div className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800">
              Calendar
            </div>
          </div>
          <div className="border-t border-gray-200 pt-4 pb-3">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <Image
                  className="h-10 w-10 rounded-full"
                  src="/user1.jpg"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">
                  Tom Cook
                </div>
                <div className="text-sm font-medium text-gray-500">
                  tom@example.com
                </div>
              </div>
              <button
                type="button"
                className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-3 space-y-1">
              <div className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800">
                Your Profile
              </div>
              <div className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800">
                Settings
              </div>
              <div className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800">
                Sign out
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResNavbar;
