"use client";
import React, { useMemo } from "react";
import Link from "next/link";
import { useListCategoriesQuery } from "@/apollograph/generated";
import dynamic from "next/dynamic";
import useIsMobile from "@/lib/hooks/useIsMobile";

const DynamicCategoryCard2 = dynamic(() => import("./CategoryCard2"), {ssr: false})
const DynamicCategoryCardLoader = dynamic(() => import("../Loader/CategoryCardLoader"), {ssr: false})
const DynamicCategoryCardSlider = dynamic(() => import("./CategoryCardSlider"), {ssr: false})

const FeaturedCategoriesBox = () => {
  const isMobile = useIsMobile()
  console.log("I am rendered", isMobile)
  const { data, loading, error } = useListCategoriesQuery({
    variables: {
      limit: 6,
      filters: {
        isFeatured: [true],
      },
    },
   
    // nextFetchPolicy: "cache-first",
  });

  const featuredCategories = useMemo(() => data?.listCategories.items , [data])

  return (
    <div className="md:mt-20 mt-12  custom-container space-y-10">
      <div className="flex  justify-between items-center gap-2">
        <h2 className="lg:text-4xl text-2xl font-semibold text-primaryColor capitalize truncate">
          Explore Categories
        </h2>
        <Link href="/categories">
          <button className="border border-activeColor md:py-2 md:px-5 py-1 px-3 rounded  text-activeColor lg:text-base text-sm  hover:shadow-lg hover:-translate-y-1 transition ease-in-out delay-150 duration-300 font-bold whitespace-nowrap">
            All Categories
          </button>
        </Link>
      </div>
      {loading && (
        <div className="w-full ">
          <DynamicCategoryCardLoader />
        </div>
      )}
      { !isMobile ? 
        <div className="w-full md:grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-3">
          {featuredCategories?.map((category) => (
            <DynamicCategoryCard2 item={category} key={`featured${category.id}`} />
          ))}
        </div>
       : 
      <div>
        {!!featuredCategories && <DynamicCategoryCardSlider categories={featuredCategories} /> }
      </div>
       
      }
    </div>
  );
};

export default FeaturedCategoriesBox;
