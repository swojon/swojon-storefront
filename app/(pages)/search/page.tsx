"use client";

import { useRouter, useSearchParams } from "next/navigation";
import FilterBar from "@/components/FilterBar/FilterBar";
import { MdKeyboardArrowRight } from "react-icons/md";
import ProductCard from "@/components/Products/ProductCard";
import SortDropDown from "@/components/SortDropDown/SortDropDown";
import Link from "next/link";
import { FiFilter } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { setFilterOpen } from "@/app/redux/filterSlice";
import { useListListingsQuery, useSearchListingsQuery } from "@/apollograph/generated";
import ProductLoader from "@/components/Loader/ProductLoader";

const SearchPage = ({ params }: { params: any }) => {

  const appliedFilter = [];
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const {data, loading, error } = useSearchListingsQuery({
    variables: {
      query: {
        search: query!
      }
    }
  })
  const results = data?.searchListings?.items

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
        
        <div className=" flex justify-between items-center gap-3 ">
          <span
            onClick={() => dispatch(setFilterOpen())}
            className="border border-gray-400 py-1.5 px-2 rounded-md  text-base flex justify-center items-center text-activeColor block lg:hidden"
          >
            <FiFilter />
          </span>
          <div className="lg:w-[200px] md:w-[130px]">
            <SortDropDown />
          </div>
        </div>
      </div>
      <div>
            <h3>Showing Result For : {query}</h3>
        </div>
      <div className="flex  gap-3 pt-5">
        <div className="w-[25%] lg:block hidden">
          <FilterBar />
        </div>
        <div className="lg:w-[75%] w-full">
          <div className="grid xl:grid-cols-3 lg:grid-cols-3  sm:grid-cols-2 grid-cols-1 md:gap-4 gap-2 w-full">
            {/* // results && results.length > 0 ? */}
            {results?.map((card) => (
              <ProductCard card={card} key={card.id} />
            ))}
                {loading && <ProductLoader />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchPage;
