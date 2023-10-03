import React from "react";
import { Disclosure } from "@headlessui/react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

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
              <span className="block font-medium text-base font-lexed text-primaryColor">
                All of Bangladesh
              </span>
              <div className="pt-1 space-y-1 h-[150px]  overflow-y-auto small-scroll">
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
