"use client";
import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { MdKeyboardArrowRight } from "react-icons/md";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const locationData = [
  {
    province: "Crestoria",
    cities: [
      {
        city: "Rivertown",
        areas: [{ id: 463, area: "mirpur" }],
      },
      {
        city: "Brookside",
        areas: [{ id: 467, area: "dhaka" }],
      },
    ],
  },
  {
    province: "asghjh",
    cities: [
      {
        city: "mivertownsdada",
        areas: [{ id: 463, area: "mirpur" }],
      },
      {
        city: "arooksidesdasd",
        areas: [{ id: 467, area: "dhaka" }],
      },
    ],
  },
];

const LocationDropDown = () => {
  const [selectItem1, setSelectItem1] = useState<any[]>([null, null, null]);

  return (
    <div>
      <Popover className=" z-0">
        {({ open }) => (
          <>
            <div className="relative z-10 ">
              <div className=" flex ">
                <Popover.Button
                  className={classNames(
                    open ? "text-secondColor" : "text-primaryColor",
                    "group inline-flex items-center rounded-md   font-medium  focus:outline-none   "
                  )}
                >
                  <span>All Category</span>
                  {open ? (
                    <IoIosArrowUp className="ml-2 text-activeColor text-base" />
                  ) : (
                    <IoIosArrowDown className="ml-2 text-activeColor text-base" />
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
              <Popover.Panel className="absolute h-[250px] w-auto  bg-white mt-3 left-0 inline  z-30 transform shadow-lg border py-2 text-primaryColor rounded ">
                <div className=" relative h-full ">
                  <div className="flex ">
                    <div className="sticky top-0 px-2 h-[220px] overflow-y-auto small-scroll w-[190px]">
                      <h2 className="text-base pb-1 font-lexed font-medium text-primaryColor">
                        Divisions
                      </h2>
                      {locationData.map((item) => (
                        <div
                          className="flex items-center hover:bg-slate-200 w-full justify-between cursor-pointer px-1 "
                          key={item.province}
                          onClick={() =>
                            setSelectItem1([item.province, null, null])
                          }
                        >
                          <h2
                            className={` py-1 text-activeColor w-[85%] capitalize font-lexed rounded-sm text-sm font-medium truncate `}
                          >
                            {item.province}
                          </h2>
                          <MdKeyboardArrowRight className="text-sm text-primaryColor" />
                        </div>
                      ))}
                    </div>
                    {selectItem1[0] && (
                      <div className="sticky top-0 px-2 h-[230px] small-scroll w-[190px]  border-l">
                        <h2 className="text-base font-lexed pb-1 font-medium text-primaryColor">
                          Cities
                        </h2>
                        <div className=" w-full  h-full overflow-y-auto ">
                          {locationData
                            .find((item) => item.province === selectItem1[0])
                            ?.cities.map((city) => (
                              <div
                                className="flex items-center justify-between hover:bg-slate-200 w-full cursor-pointer px-1 "
                                key={city.city}
                                onClick={() =>
                                  setSelectItem1([
                                    selectItem1[0],
                                    city.city,
                                    null,
                                  ])
                                }
                              >
                                <h6
                                  className={` py-1 text-activeColor  capitalize font-lexed rounded-sm text-sm font-medium truncate `}
                                >
                                  {city.city}
                                </h6>
                                <MdKeyboardArrowRight className="text-sm text-primaryColor" />
                              </div>
                            ))}
                        </div>
                      </div>
                    )}
                    {selectItem1[1] && (
                      <div className="sticky top-0 px-2 h-[230px] small-scroll w-[190px]  border-l">
                        <h2 className="text-base  font-lexed font-medium text-primaryColor">
                          Select other areas
                        </h2>
                        <div className=" w-full  h-full overflow-y-auto px-1 py-1.5">
                          <div className="relative">
                            {" "}
                            <div className="pointer-events-none absolute inset-y-0 left-1 flex items-center  ">
                              <MagnifyingGlassIcon
                                className="h-5 w-5  p-0.5  text-activeColor rounded-full mr-1 "
                                aria-hidden="true"
                              />
                            </div>
                            <input
                              id="search"
                              name="search"
                              className="block w-full rounded-md border border-gray-300 bg-white py-1 pl-6 pr-3 leading-5 placeholder-[#C0C0C0] focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-activeColor sm:text-sm"
                              placeholder="Search"
                              type="search"
                            />
                          </div>
                          <h6
                            className={` py-1 text-activeColor w-[85%] capitalize font-lexed rounded-sm text-sm font-medium truncate `}
                          >
                            Mirpur
                          </h6>
                          <h6
                            className={` py-1 text-activeColor w-[85%] capitalize font-lexed rounded-sm text-sm font-medium truncate `}
                          >
                            Dhaka
                          </h6>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default LocationDropDown;
