"use client";
import React from "react";
import CategoryCard2 from "./CategoryCard2";
import Link from "next/link";
import { useListCategoriesQuery } from "@/apollograph/generated";
import CategoryCardLoader from "../Loader/CategoryCardLoader";
import CategoryCardSlider from "./CategoryCardSlider";

const FeaturedCategoriesBox = () => {
  const { data, loading, error, networkStatus } = useListCategoriesQuery({
    variables: {
      limit: 6,
      filters: {
        isFeatured: [true],
      },
    },
    notifyOnNetworkStatusChange: true,
    nextFetchPolicy: "cache-first",
  });

  console.log(data?.listCategories.items);

  return (
    <div className="md:mt-20 mt-16  custom-container space-y-10">
      <div className="flex md:flex-row flex-col justify-between items-center space-y-2 md:space-x-0">
        <h2 className="lg:text-4xl text-2xl  text-primaryColor font-Bold">
          Ready to Shop?
        </h2>
        <Link href="/categories">
          <button className="border border-activeColor md:py-2 md:px-5 py-1 px-3 rounded  text-activeColor lg:text-base text-sm  hover:shadow-lg hover:-translate-y-1 transition ease-in-out delay-150 duration-300 font-Bold">
            See All Categories
          </button>
        </Link>
      </div>
      {loading && (
        <div className="w-full ">
          <CategoryCardLoader />
        </div>
      )}
      <div className="w-full hidden  md:grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-3">
        {data &&
          data.listCategories.items.map((category) => (
            <CategoryCard2 item={category} key={`featured${category.id}`} />
          ))}
      </div>

      <div className="md:hidden">
        {data && <CategoryCardSlider data={data} />}
      </div>
    </div>
  );
};

export default FeaturedCategoriesBox;
