"use client";
import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

import categoryData from "@/data/categoryData";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MegaMenu2() {
  const [hoveredItem, setHoveredItem] = useState("item1");

  useEffect(() => {
    setHoveredItem("item1");
  }, []);

  const handleItemHover = (itemName) => {
    setHoveredItem(itemName);
  };

  const handleItemLeave = () => {
    setHoveredItem(null);
  };
  return (
    <div className="">
      <Popover className=" z-0">
        {({ open }) => (
          <>
            <div className="relative z-10 ">
              <div className=" flex ">
                <Popover.Button
                  className={classNames(
                    open ? "text-gray-400" : "text-black",
                    "group inline-flex items-center rounded-md bg-white text-base font-medium  focus:outline-none   "
                  )}
                >
                  <span>All Category</span>
                  {open ? (
                    <IoMdArrowDropup className="pl-1 text-[#cc0000] text-xl" />
                  ) : (
                    <IoMdArrowDropdown className="pl-1 text-[#cc0000] text-xl" />
                  )}
                  {/* <ChevronDownIcon
                    className={classNames(
                      open ? "text-gray-600" : "text-gray-400",
                      "ml-2 h-5   group-hover:text-gray-500"
                    )}
                    aria-hidden="true"
                  /> */}
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
              <Popover.Panel className="absolute bg-white top-[61px] h-[70vh] w-[90%] mx-auto inset-x-0 z-[1000] transform shadow-lg py-5">
                <div className="absolute inset-0 flex" aria-hidden="true">
                  <div className="w-1/4 bg-white" />
                  <div className="w-3/4 bg-gray-50" />
                </div>
                <div className=" w-full  relative">
                  {categoryData.data.listCategories.items.map((item) => (
                    <div
                      className="category-items  pl-[4vw]"
                      onMouseEnter={() => handleItemHover(item.id)}
                      // onMouseLeave={handleItemLeave}
                      key={item.id}
                    >
                      <h2
                        className={`  px-3 py-2 w-[25%] rounded-sm text-lg font-medium ${
                          hoveredItem === item.id && " megamenu-heading"
                        }`}
                      >
                        {item.name}
                      </h2>

                      {hoveredItem === item.id && (
                        <div className="category-sub-items px-4  w-[70%]  h-[60vh] grid grid-cols-4 overflow-auto gap-2	">
                          {item.children.map((sub) => (
                            <div className="sub-item " key={sub.id}>
                              <div className="relative mb-2">
                                <h3 className="text-base italic text-gray-600	megamenu-subHead">
                                  {sub.name}
                                </h3>
                              </div>

                              {sub.children.map((child) => (
                                <p
                                  key={child.id}
                                  className="text-sm text-gray-400 py-[3px]"
                                >
                                  {child.name}
                                </p>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
