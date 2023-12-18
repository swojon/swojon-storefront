import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MdKeyboardArrowUp } from "react-icons/md";
import React, { useState } from "react";
import { BiSelection } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";

const category = [
  { id: 188, title: "electronic1" },
  { id: 14, title: "electronic2" },
  { id: 15, title: "electronic3" },
  { id: 18, title: "electronic4" },
  { id: 157, title: "electronic5" },
  { id: 144, title: "electronic7" },
  { id: 17, title: "electronic8" },
  { id: 177, title: "electronic9" },
];
const subCategory = [
  { id: 188, title: "mobile" },
  { id: 14, title: "mobile" },
  { id: 15, title: "mobile3" },
  { id: 18, title: "mobile4" },
  { id: 157, title: "mobile5" },
  { id: 144, title: "mobile7" },
  { id: 17, title: "electronic8" },
  { id: 177, title: "mobile9" },
];

const Category = () => {
  const [selectCategory, setSelectCategory] = useState<any>(null);
  const [selectSubCategory, setSelectSubCategory] = useState<any>(null);
  const [accordion, setAccordion] = useState<any>(true);
  return (
    <section className="space-y-4 pt-4">
      <h6 className="text-2xl text-primaryColor font-lexed font-medium">
        Category of your item? <span className="text-red-500">*</span>
      </h6>
      <p className="text-base text-secondColor ">
        Select or search the category of your item
      </p>

      <div className="rounded-2xl border border-gray-200  ">
        <div className="relative w-full p-6">
          <div className="pointer-events-none absolute inset-y-0 left-7 flex items-center  ">
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
        <div
          className="py-3 px-6 border-y border-gray-200 flex items-center justify-between"
          onClick={() => setAccordion(!accordion)}
        >
          <span className="text-lg text-primaryColor font-lexed font-medium capitalize">
            {selectCategory
              ? selectCategory.title
              : "Select category from here"}
          </span>
          <span className="text-2xl text-primaryColor">
            {selectCategory ? (
              <MdOutlineClose
                className="cursor-pointer"
                onClick={() => setSelectCategory(null)}
              />
            ) : (
              <MdKeyboardArrowUp className="" />
            )}
          </span>
        </div>
        {selectCategory === null && (
          <div className="px-6 py-6 grid grid-cols-7 gap-4 ">
            {category.map((item) => (
              <div
                key={item.id}
                className={`flex flex-col items-center gap-2 py-5 px-2 border  rounded-md cursor-pointer hover:border-gray-300 ${
                  item?.id === selectCategory?.id
                    ? "border-activeColor"
                    : "border-gray-200"
                }`}
                onClick={() => setSelectCategory(item)}
              >
                <BiSelection />

                <span className="text-base text-primaryColor font-lexed font-medium capitalize">
                  {item.title}
                </span>
                <span className="text-xs text-secondColor">
                  24 sub-category
                </span>
              </div>
            ))}
          </div>
        )}
        {selectCategory && (
          <div className="px-6 py-6 grid grid-cols-8 gap-4 ">
            {subCategory.map((item: any) => (
              <div
                key={item.id}
                className={`flex flex-col items-center gap-2 py-5 px-2 border  rounded-md cursor-pointer space-y-3 hover:border-gray-300 ${
                  item?.id === selectSubCategory?.id
                    ? " border-activeColor "
                    : "opacity-50"
                }`}
                onClick={() => setSelectSubCategory(item)}
              >
                <BiSelection classNAme="text-primaryColor" />

                <span className="text-base text-primaryColor font-lexed font-medium capitalize">
                  Mobile
                </span>
              </div>
            ))}
          </div>
        )}{" "}
      </div>
    </section>
  );
};

export default Category;
