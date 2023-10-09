"use client";
import React from "react";
import Image from "next/image";
import "./Navbar.scss";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setNavClose, setNavOpen } from "@/app/redux/navSlice";
import Link from "next/link";

const ResNavbar = () => {
  const dispatch = useDispatch();
  const isNavOpen = useSelector((state: any) => state.nav.open);

  return (
    <div
      className={`fixed top-0 left-0  w-full h-screen z-50 transition delay-200 duration-700 ease-in-out ${
        isNavOpen ? "block lg:hidden  resNavbar-container" : "hidden "
      }`}
    >
      <div
        className={`w-[280px] md:w-[400px] bg-white h-screen opacity-100 py-7 pl-6 pr-20 relative transition duration-700 ease-in-out delay-200 ${
          isNavOpen ? "left-0" : "-left-[400px]"
        }`}
        onClick={() => dispatch(setNavClose())}
      >
        <button className="absolute right-0 top-0 border p-3 m-2 rounded-sm">
          {" "}
          <AiOutlineClose className="text-lg" />
        </button>
        <div className=" ">
          <div className="space-y-1 pt-2 pb-3">
            <Link
              href="/"
              className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
            >
              Dashboard
            </Link>
            <Link
              href="/categories"
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
            >
              Team
            </Link>
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
