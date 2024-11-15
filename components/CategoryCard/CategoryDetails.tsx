"use client";
import { useListListingsQuery } from '@/apollograph/generated';
import { setModalOpen } from '@/app/redux/modalSlice';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react'
import { FiFilter } from 'react-icons/fi';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import AppliedFilter from '../FilterBar/AppliedFilter';
import ProductLoader from '../Loader/ProductLoader';
import NotMatched from '../NotMatched/NotMatched';
import ProductCard from '../Products/ProductCard';
import SortDropDown from '../SortDropDown/SortDropDown';


const CategoryDetail = ({ slug }: { slug: any }) => {
    const searchParams = useSearchParams();
    // const conditionFilter = searchParams.get("condition")?.split(",");
    const brandFilter = searchParams.get("brand")?.split(",");
    const communityFilter = searchParams.get("community")?.split(",");
    const orderBy = searchParams.get("sort") ?? "default";
  
    var filters = {};
    filters = {
      ...filters,
      categorySlug: slug,
      status: "approved",
    };
    // if (conditionFilter && conditionFilter.length > 0 ) filters = {...filters, condition: conditionFilter}
    if (brandFilter && brandFilter.length > 0)
      filters = { ...filters, brandSlug: brandFilter };
    if (communityFilter && communityFilter.length > 0)
      filters = { ...filters, communitySlug: communityFilter };
  
    console.log("Applying filter", filters);
    const { data, loading, error } = useListListingsQuery({
      variables: {
        filters: filters,
        limit: 36,
        orderBy: orderBy,
      },
    });
    const listings = data?.listListings?.items;
  
    const dispatch = useDispatch();
  
    return (
      <section className="custom-container py-10">
        <div className="flex md:flex-row flex-col gap-2 md:items-center md:justify-between">
          <div className="flex items-center space-x-1 justify-center text-sm text-secondColor">
            <Link href="/">
              <h6 className="">Home</h6>
            </Link>
            <MdKeyboardArrowRight />
            <Link href={`/categories`}>
              <h6 className="">Categories</h6>
            </Link>
            <MdKeyboardArrowRight />
            <h6 className="text-primaryColor capitalize">
              {slug}
            </h6>
          </div>
        </div>
  
        <div className="flex sm:flex-row flex-col justify-between sm:items-center pt-4  gap-3">
          <div className="flex  md:flex-row flex-col gap-3 md:items-center  md:w-[75%] w-full">
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
          <div className=" w-full">
            <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-2 w-full">
              {listings?.map((card) => (
                <ProductCard product={card} key={card.id} />
              ))}
              {loading && <ProductLoader />}
            </div>
            {!loading && (!listings || listings.length <= 0) && (
              <div className=" pt-16">
                <NotMatched title={"Sorry! We didn't Find Any Product"} />
              </div>
            )}
          </div>
        </div>
      </section>
    );
  };

  
export default CategoryDetail;