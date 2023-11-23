"use client";

import { useRouter } from "next/navigation";

import CategoryCart from "../../../../components/elements/CategoryCart";
import FilterBar from "@/components/FilterBar/FilterBar";
import { MdKeyboardArrowRight } from "react-icons/md";
import ProductCard from "@/components/Products/ProductCard";
import SortDropDown from "@/components/SortDropDown/SortDropDown";
import Link from "next/link";
import { FiFilter } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { setFilterOpen } from "@/app/redux/filterSlice";
import { useListListingsQuery } from "@/apollograph/generated";
import ProductLoader from "@/components/Loader/ProductLoader";
import { MdOutlineClose } from "react-icons/md";

const CategoryDetail = ({ params }: { params: any }) => {
  const appliedFilter = [];

  const { data, loading, error } = useListListingsQuery({
    variables: {
      filters: {
        categorySlug: params.categorySlug,
      },
    },
  });
  const listings = data?.listListings?.items;

  const dispatch = useDispatch();

  return (
    <section className="custom-container py-10">
      <div className="flex md:flex-row flex-col gap-2 md:items-center md:justify-between">
        <div className="flex items-center space-x-1 justify-center text-sm text-secondColor">
          <h6 className="">Home</h6>
          <MdKeyboardArrowRight />
          <h6 className="">Categories</h6>
          <MdKeyboardArrowRight />
          <h6 className="text-primaryColor capitalize">
            {params.categorySlug}
          </h6>
        </div>
      </div>

      <div className="flex justify-between items-center pt-4 pb-2">
        <div className="flex items-center  w-[75%]">
          <span className="text-2xl text-primaryColor font-lexed flex items-center gap-2 w-[36%]">
            <span>Search Results </span>
            <span className="text-sm text-secondColor">(100 items)</span>
          </span>

          <div className="flex gap-2.5 items-center flex-wrap w-[63%] ">
            <div className="bg-gray-100 px-3 py-1 flex gap-2.5 items-center rounded-2xl">
              <span className="text-sm">Furniture</span>{" "}
              <MdOutlineClose className="text-sm border border-primaryColor rounded-full p-0.5" />
            </div>

            <div className="bg-gray-100 px-3 py-1 flex gap-2.5 items-center rounded-2xl">
              <span className="text-sm">Furniture</span>{" "}
              <MdOutlineClose className="text-sm border border-primaryColor rounded-full p-0.5" />
            </div>

            <div className="bg-gray-100 px-3 py-1 flex gap-2.5 items-center rounded-2xl">
              <span className="text-sm">Furniture</span>{" "}
              <MdOutlineClose className="text-sm border border-primaryColor rounded-full p-0.5" />
            </div>
            <button className="bg-activeColor px-3 py-1 text-sm text-white rounded-2xl">
              Clear All
            </button>
          </div>
        </div>
        <div className=" flex justify-between items-center gap-3 ">
          <span
            onClick={() => dispatch(setFilterOpen())}
            className="border border-gray-400 py-1.5 px-2 rounded-md  text-base flex justify-center items-center text-activeColor  lg:hidden"
          >
            <FiFilter />
          </span>
          <div className="lg:w-[200px] md:w-[130px]">
            <SortDropDown />
          </div>
        </div>
      </div>

      <div className="flex  gap-3 pt-5">
        <div className="w-[25%] lg:block hidden">
          <FilterBar />
        </div>
        <div className="lg:w-[75%] w-full">
          <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-2 w-full">
            {listings?.map((card) => (
              <ProductCard card={card} key={card.id} />
            ))}
            {loading && <ProductLoader />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryDetail;
