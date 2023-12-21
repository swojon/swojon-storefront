import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MdKeyboardArrowUp } from "react-icons/md";
import React, { useState } from "react";
import { BiSelection } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";

const brands = [
  { id: 188, title: "Apple" },
  { id: 14, title: "Apple2" },
  { id: 15, title: "Apple3" },
  { id: 18, title: "Apple4" },
  { id: 157, title: "Apple5" },
  { id: 144, title: "Apple7" },
  { id: 17, title: "Apple" },
  { id: 177, title: "Apple9" },
];

const Brand = () => {
  const [selectBrand, setSelectBrand] = useState<any>(null);
  return (
    <section className="md:space-y-4 space-y-2 pt-4">
      <h6 className="md:text-2xl text-lg text-primaryColor font-bold  leading-9">
        Brand?
      </h6>
      <p className="md:text-base text-sm text-secondColor font-medium leading-6">
        Choose a brand from the list
      </p>

      <div className="rounded-2xl border border-gray-200  ">
        <div className="relative w-full md:p-6 p-2.5">
          <div className="pointer-events-none absolute inset-y-0 md:left-8 left-4 flex items-center  ">
            <MagnifyingGlassIcon
              className="h-7 w-7  p-1.5  text-primaryColor mr-1 "
              aria-hidden="true"
            />
          </div>
          <input
            id="search"
            name="search"
            className="block w-full rounded-3xl bg-gray-100 md:py-4 py-3 pr-3 pl-9 leading-5 placeholder-[#C0C0C0] focus:border-activeColor focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-activeColor sm:text-sm"
            placeholder="Search brand  e.g. Apple"
            type="search"
          />
        </div>
        <div className="md:p-6 p-2.5 border-y border-gray-200 flex items-center justify-between">
          <span className="md:text-base text-sm text-primaryColor font-lexed font-medium capitalize">
            {selectBrand ? selectBrand.title : "Select category from here"}
          </span>
          <span className="text-2xl text-primaryColor">
            <MdKeyboardArrowUp className="" />
          </span>
        </div>

        <div className="md:p-6 p-2.5 sm:grid lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-5 flex items-center  gap-4 overflow-x-auto ">
          {brands.map((item: any) => (
            <div
              key={item.id}
              className={`flex flex-col items-center gap-2 py-5 px-2 border  rounded-md cursor-pointer space-y-3  ${
                item?.id === selectBrand?.id
                  ? " border-activeColor "
                  : "opacity-50 hover:border-gray-500"
              }`}
              onClick={() => setSelectBrand(item)}
            >
              <BiSelection classNAme="text-primaryColor" />

              <span className="text-base text-primaryColor font-lexed font-medium capitalize">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4 ">
        <span className="md:text-2xl text-lg text-primaryColor font-lexed font-bold block ">
          Need to add more details?
        </span>

        <p className="md:text-base text-sm text-secondColor ">
          Adding additional details help your customers know more about the
          product results less query for you
        </p>

        <input
          id="text"
          name="name"
          className="block w-full rounded-md border border-gray-300  md:py-4 py-3 pr-3 px-5 leading-5 placeholder-[#C0C0C0] focus:border-activeColor focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-activeColor sm:text-sm"
          placeholder="e.g. This smartphone comes with some cool feature.."
          type="text"
        />
      </div>
    </section>
  );
};

export default Brand;
