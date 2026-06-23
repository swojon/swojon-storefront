"use client";
import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import "./MegaMenu.css";

import MegaMenuCategories from "./MegaMenuCategories";

export default function MegaMenu({ border }: { border: any }) {

  // console.log("sub categories", currentCategory);
  return (
    <>
      <Popover className="z-[100]">
        {({ open }) => {
        
          return (
          <>
            <div className="relative z-10 ">
              <div className=" flex ">
                <Popover.Button
                  className={`${ open ? "  " : ""} group inline-flex items-center rounded-md whitespace-nowrap  font-medium  focus:outline-none  xl:text-sm text-xs `}
                >
                  <span
                    className={`inline-flex items-center border-b-2 border-transparent px-1 xl:text-sm text-xs  font-lexed  font-bold hover:border-activeColor  leading-none ${
                      border === "border" ? "  text-primaryColor" : "text-white"
                    }`}
                  >
                    All Category
                  </span>
                  {open ? (
                    <IoMdArrowDropup
                      className={`pl-1  text-xl ${
                        border === "border" ? "text-activeColor" : "text-white"
                      }`}
                    />
                  ) : (
                    <IoMdArrowDropdown
                      className={`pl-1  text-xl ${
                        border === "border" ? "text-activeColor" : "text-white"
                      }`}
                    />
                  )}
                </Popover.Button>
              </div>
            </div>
          
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            > 
            <Popover.Panel className="absolute shadow-2xl meg-menu w-[100vw]   top-[68px] inline  z-30 transform border-b border-gray-200   text-primaryColor rounded left-0  ">
               {open && <MegaMenuCategories />}
              </Popover.Panel>
            </Transition>
            
          </>
        )}}
      </Popover>
    </>
  );
}
