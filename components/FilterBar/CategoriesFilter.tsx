import React from "react";
import { Disclosure } from "@headlessui/react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import icon from "@/public/assets/desktop.png";
import Image from "next/image";

const categories = [
  {
    id: 13,
    icon: icon,
    title: "Furniture",
    children: [
      { id: 45, title: "bedroom furniture" },
      { id: 475, title: "bedroom furniture" },
      { id: 4475, title: "bedroom furniture" },
      { id: 4775, title: "bedroom furniture" },
    ],
  },
  { id: 14, icon: icon, title: "Electronics", children: [] },
  {
    id: 123,
    icon: icon,
    title: "Gym Accessories",
    children: [],
  },
  {
    id: 9712235,
    icon: icon,
    title: "instructive",
    children: [],
  },
  { id: 99146, icon: icon, title: "Fashion", children: [] },
  {
    id: 3465123,
    icon: icon,
    title: "Home Alliances",
    children: [],
  },
];

const CategoriesFilter = () => {
  return (
    <div className="">
      <Disclosure as="div" className="border-b border-gray-200 py-4">
        {({ open }) => (
          <>
            <h3 className="-my-3 flow-root">
              <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                <span className="font-medium text-lg font-lexed text-primaryColor">
                  Categories
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
                All Categories
              </span>

              <div className=" space-y-1 h-[190px]  overflow-y-auto small-scroll">
                {categories.map((category) => (
                  <div className="" key={category.id}>
                    <div className="flex gap-1">
                      <span className="font-medium text-sm font-lexed text-activeColor capitalize flex items-center space-x-2">
                        <Image
                          src={category.icon}
                          alt="icon"
                          width={300}
                          height={300}
                          className="h-3 w-4"
                        />{" "}
                        <span>{category.title}</span>
                      </span>
                      <span className="font-medium text-sm font-lexed text-gray-400 capitalize">
                        (12,544)
                      </span>
                    </div>
                    {category.children.map((subCat) => (
                      <>
                        <div
                          className="ml-7   flex gap-1 pt-0.5"
                          key={subCat.id}
                        >
                          <span className="font-medium text-sm font-lexed text-activeColor capitalize flex items-center space-x-2">
                            <span>{subCat.title}</span>
                          </span>
                          <span className="font-medium text-sm font-lexed text-gray-400 capitalize">
                            (12,544)
                          </span>
                        </div>
                      </>
                    ))}
                    {/* <button className="ml-7 text-secondColor rounded text-sm ">
                      show more
                    </button> */}
                  </div>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default CategoriesFilter;
