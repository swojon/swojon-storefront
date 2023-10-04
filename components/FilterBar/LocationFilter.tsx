import React from "react";
import { Disclosure } from "@headlessui/react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const LocationFilter = () => {
  return (
    <div className="">
      <Disclosure as="div" className="border-b border-gray-200 py-4">
        {({ open }) => (
          <>
            <h3 className="-my-3 flow-root">
              <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                <span className="font-medium text-lg font-lexed text-primaryColor">
                  Location
                </span>
                <span className="ml-6 flex items-center">
                  {open ? (
                    <IoIosArrowDropup
                      className="text-2xl text-activeColor"
                      aria-hidden="true"
                    />
                  ) : (
                    <IoIosArrowDropdown
                      className="text-2xl text-activeColor"
                      aria-hidden="true"
                    />
                  )}
                </span>
              </Disclosure.Button>
            </h3>
            <Disclosure.Panel className="pt-2 ">
              <div className="relative w-full ">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center  ">
                  <MagnifyingGlassIcon
                    className="h-7 w-7 text-gray-400 p-1.5 rounded-full mr-1 "
                    aria-hidden="true"
                  />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full rounded-2xl border border-gray-300 bg-white py-1.5 pl-8 pr-3 leading-5 placeholder-[#C0C0C0] focus:border-activeColor focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-activeColor sm:text-sm"
                  placeholder="Search"
                  type="search"
                />
              </div>
              <span className="block font-medium text-base font-lexed text-primaryColor my-3">
                All of Bangladesh
              </span>

              <div className=" space-y-1 h-[150px]  overflow-y-auto small-scroll">
                <div className="flex gap-1">
                  <span className="font-medium text-sm font-lexed text-activeColor capitalize">
                    Dhaka
                  </span>
                  <span className="font-medium text-sm font-lexed text-gray-400 capitalize">
                    (12,544)
                  </span>
                </div>
                <div className="flex gap-1">
                  <span className="font-medium text-sm font-lexed text-activeColor capitalize">
                    Chittagong
                  </span>
                  <span className="font-medium text-sm font-lexed text-gray-400 capitalize">
                    (12,544)
                  </span>
                </div>
                <div className="flex gap-1">
                  <span className="font-medium text-sm font-lexed text-activeColor capitalize">
                    Dhaka
                  </span>
                  <span className="font-medium text-sm font-lexed text-gray-400 capitalize">
                    (12,544)
                  </span>
                </div>
                <div className="flex gap-1">
                  <span className="font-medium text-sm font-lexed text-activeColor capitalize">
                    Chittagong
                  </span>
                  <span className="font-medium text-sm font-lexed text-gray-400 capitalize">
                    (12,544)
                  </span>
                </div>
                <div className="flex gap-1">
                  <span className="font-medium text-sm font-lexed text-activeColor capitalize">
                    Dhaka
                  </span>
                  <span className="font-medium text-sm font-lexed text-gray-400 capitalize">
                    (12,544)
                  </span>
                </div>
                <div className="flex gap-1">
                  <span className="font-medium text-sm font-lexed text-activeColor capitalize">
                    Chittagong
                  </span>
                  <span className="font-medium text-sm font-lexed text-gray-400 capitalize">
                    (12,544)
                  </span>
                </div>
                <div className="flex gap-1">
                  <span className="font-medium text-sm font-lexed text-activeColor capitalize">
                    Dhaka
                  </span>
                  <span className="font-medium text-sm font-lexed text-gray-400 capitalize">
                    (12,544)
                  </span>
                </div>
                <div className="flex gap-1">
                  <span className="font-medium text-sm font-lexed text-activeColor capitalize">
                    Chittagong
                  </span>
                  <span className="font-medium text-sm font-lexed text-gray-400 capitalize">
                    (12,544)
                  </span>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default LocationFilter;
