import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MdKeyboardArrowUp } from "react-icons/md";
import React, { useState } from "react";
import { BiSelection } from "react-icons/bi";

const Category = () => {
  const [selectCategory, setSelectCategory] = useState(null);
  return (
    <section className="space-y-4 pt-4">
      <h6 className="text-2xl text-primaryColor font-lexed font-medium">
        Category of your item? <span className="text-red-500">*</span>
      </h6>
      <p className="text-base text-secondColor ">
        Select or search the category of your item
      </p>

      <div className="rounded-2xl border border-gray-200  ">
        <div className="relative w-full p-5">
          <div className="pointer-events-none absolute inset-y-0 left-6 flex items-center  ">
            <MagnifyingGlassIcon
              className="h-7 w-7  p-1.5  text-primaryColor mr-1 "
              aria-hidden="true"
            />
          </div>
          <input
            id="search"
            name="search"
            className="block w-full rounded-2xl border border-gray-300 bg-gray-100 py-2 pr-3 pl-9 leading-5 placeholder-[#C0C0C0] focus:border-activeColor focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-activeColor sm:text-sm"
            placeholder="Search"
            type="search"
          />
        </div>

        <div className="py-3 px-5 border-y border-gray-200 flex items-center justify-between">
          <span className="text-lg text-primaryColor font-lexed font-medium">
            Select category from here
          </span>
          <MdKeyboardArrowUp className="text-2xl" />
        </div>

        <div className="px-5 py-6 grid grid-cols-7 gap-4 ">
          <div className="flex flex-col items-center gap-2 py-5 px-2 border border-gray-200 rounded-md cursor-pointer hover:border-gray-300">
            <BiSelection />

            <span className="text-base text-primaryColor font-lexed font-medium">
              Electronics
            </span>
            <span className="text-xs text-secondColor">24 sub-category</span>
          </div>

          <div className="flex flex-col items-center gap-2 py-5 px-2 border border-gray-200 rounded-md cursor-pointer hover:border-gray-300">
            <BiSelection />

            <span className="text-base text-primaryColor font-lexed font-medium">
              Electronics
            </span>
            <span className="text-xs text-secondColor">24 sub-category</span>
          </div>

          <div className="flex flex-col items-center gap-2 py-5 px-2 border border-gray-200 rounded-md cursor-pointer hover:border-gray-300">
            <BiSelection />

            <span className="text-base text-primaryColor font-lexed font-medium">
              Electronics
            </span>
            <span className="text-xs text-secondColor">24 sub-category</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
