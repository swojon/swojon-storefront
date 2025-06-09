"use client";

import { useSearchParams } from "next/navigation";

import { MdKeyboardArrowRight } from "react-icons/md";
import ProductCard from "@/components/Products/ProductCard";
import SortDropDown from "@/components/SortDropDown/SortDropDown";
import Link from "next/link";
import { FiFilter } from "react-icons/fi";
import { useDispatch } from "react-redux";
import {  useSearchListingsQuery } from "@/apollograph/generated";
import ProductLoader from "@/components/Loader/ProductLoader";
import NotMatched from "@/components/NotMatched/NotMatched";
import AppliedFilter from "@/components/FilterBar/AppliedFilter";
import { setModalOpen } from "@/app/redux/modalSlice";

const SearchPage = ({ params }: { params: any }) => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const orderBy = searchParams.get("sort") ?? "default";

  const {data, loading, error } = useSearchListingsQuery({
    variables: {
      query: {
        search: query!,
      },
      orderBy: orderBy,
      limit: 36
    }
  })
  const results = data?.searchListings?.items

  const dispatch = useDispatch();

  return (
    <section className="custom-container py-10">
      <div className="flex md:flex-row flex-col gap-2 md:items-center md:justify-between">
        <div className="flex items-center space-x-1 justify-center text-sm text-secondColor">
          <Link href={"/"} className="">Home</Link>
          <MdKeyboardArrowRight />
          <h6 className="">Search Results</h6>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-between sm:items-center pt-4  gap-3">
        
        
          <h3 className="text text-lg md:w-[50%] w-full">Showing Result for: {query}</h3>
          <div className="flex  md:flex-row flex-col gap-3 md:items-center  md:w-[50%] w-full">
            <AppliedFilter />
          </div>
          <div className=" flex justify-between items-center gap-3 ">
            <span
              onClick={() =>
                dispatch(
                  setModalOpen({
                    title: "this is a modal",
                    body: "filterModal",
                  })
                )
              }
              className="border border-gray-400 py-1.5 px-2 rounded-md  text-base flex justify-center items-center text-activeColor cursor-pointer"
            >
              <FiFilter />
            </span>
            <div className="lg:w-[200px] md:w-[130px]">
              <SortDropDown />
            </div>
          </div>
      </div>
      
      <div className="flex  gap-3 pt-5">
        {/* <div className="w-[25%] lg:block hidden">
          <FilterBar />
        </div> */}
        <div className="w-full">
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 md:gap-4 gap-2 w-full">
            {/* // results && results.length > 0 ? */}
            {results?.map((card) => (
              <ProductCard product={card} key={card.id} />
            ))}
            
          </div>
          {loading && <ProductLoader />}
          {!loading && (!results || results.length <= 0) && (
            <div className=" pt-16">
              <NotMatched title={"Sorry! We didn't Find Any Product"} imagePath="/stickers/SearchNotFound.svg" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchPage;
