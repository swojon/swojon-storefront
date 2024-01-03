"use client";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import AdDropdown from "./AdDropdown";
import PriceRangeSlider from "./PriceRangeSlider";
import LocationFilter from "./LocationFilter";
import CategoriesFilter from "./CategoriesFilter";
import CommunityFilter from "./CommunityFilter";
import StatusFilter from "./ConditionFilter";
import BrandFilter from "./BrandFilter";
import { setFilterClose } from "@/app/redux/filterSlice";

const ResFilter = () => {
  const dispatch = useDispatch();
  const isFilterOpen = useSelector((state: any) => state.filter.open);

  return (
    <div
      className={`fixed top-0 lg:hidden  w-full h-screen z-50 transition delay-200 duration-700 ease-in-out ${
        isFilterOpen
          ? "translate-x-0  bg-[#2222226d] block"
          : "-translate-x-full hidden"
      }`}
    >
      <div
        className={`w-[80%] md:w-[55%]  bg-white h-screen opacity-100  relative transition duration-700 ease-in-out delay-200 `}
      >
        <section className="sticky top-0 h-full rounded-md min-h-screen md:py-7 py-5 md:px-6 px-2 overflow-y-auto">
          <div className="flex justify-between items-center p-3 border-b ">
            <h6 className="md:text-lg text-base font-bold font-lexed text-primaryColor">
              Filter by:
            </h6>
            <span className="text-activeColor md:text-lg text-base font-bold relative  leading-0">
              Reset
              <span className="absolute left-0 bottom-1 h-0.5 w-full bg-activeColor"></span>
            </span>
          </div>

          <div className="py-4 mx-3 border-b">
            <span className="block md:text-lg text-base font-bold pb-2  pt-0 text-primaryColor font-lexed">
              Ad Posted by
            </span>
            <AdDropdown />
          </div>

          <div className="py-4 mx-3 border-b">
            <span className="block md:text-lg text-base  font-bold pb-2 pt-0 text-primaryColor font-lexed">
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

        <button
          className="absolute -right-12 top-0  p-3 bg-black rounded-sm text-white"
          onClick={() => dispatch(setFilterClose())}
        >
          <AiOutlineClose className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default ResFilter;
