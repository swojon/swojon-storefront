"use client";
import React from "react";
import Image from "next/image";

import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import AdDropdown from "./AdDropdown";
import PriceRangeSlider from "./PriceRangeSlider";
import LocationFilter from "./LocationFilter";
import CategoriesFilter from "./CategoriesFilter";
import CommunityFilter from "./CommunityFilter";
import StatusFilter from "./StatusFilter";
import BrandFilter from "./BrandFilter";
import { setFilterClose } from "@/app/redux/filterSlice";

const ResFilter = () => {
  const dispatch = useDispatch();
  const isFilterOpen = useSelector((state: any) => state.filter.open);

  return (
    <div
      className={`fixed top-0 lg:hidden   w-full h-screen z-50 transition delay-200 duration-700 ease-in-out ${
        isFilterOpen ? "translate-x-0  bg-[#2222226d]" : "-translate-x-full "
      }`}
    >
      <div
        className={`w-[85%] md:w-[55%] bg-white h-screen opacity-100  relative transition duration-700 ease-in-out delay-200 `}
      >
        <button
          className="absolute right-0 top-0 border p-2 m-2 rounded-sm text-activeColor"
          onClick={() => dispatch(setFilterClose())}
        >
          <AiOutlineClose className="text-lg" />
        </button>
        <section className="sticky top-0 h-full rounded-md min-h-screen py-7 pl-6 pr-16 overflow-y-auto">
          <div className="flex justify-between items-center p-3 border-b ">
            <h6 className="text-lg font-lexed text-primaryColor">Filter by:</h6>
            <span className="text-activeColor  relative  leading-0">
              Reset
              <span className="absolute left-0 bottom-1 h-0.5 w-full bg-activeColor"></span>
            </span>
          </div>

          <div className="py-4 mx-3 border-b">
            <span className="block text-lg pb-2  pt-0 text-primaryColor font-lexed">
              Ad Posted by
            </span>
            <AdDropdown />
          </div>

          <div className="py-4 mx-3 border-b">
            <span className="block text-lg pb-2  pt-0 text-primaryColor font-lexed">
              Price Range (TK)
            </span>
            <PriceRangeSlider />
          </div>

          <div className="px-3">
            <LocationFilter />
          </div>

          <div className="px-3">
            <CategoriesFilter />
          </div>

          <div className="px-3">
            <CommunityFilter />
          </div>

          <div className="px-3">
            <StatusFilter initial={[]} />
          </div>

          <div className="px-3">
            <BrandFilter />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResFilter;
