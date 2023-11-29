import { useGetTrendingSearchesQuery } from "@/apollograph/generated";
import React from "react";

function TrendingSearches({ handleClick }: { handleClick: any }) {
  const { data, loading, error } = useGetTrendingSearchesQuery();
  const trendingSearches = data?.getTrendingSearches.items;

  return (
    <>
      <h6 className="text-secondColor font-lexed text-sm font-medium ">
        Trending Searches
      </h6>

      {loading && (
        <div className="flex items-center gap-2 pt-3 animate-pulse flex-wrap">
          <span className=" bg-gray-100 text-primaryColor text-sm py-3 w-20 rounded-2xl cursor-pointer"></span>
          <span className=" bg-gray-100 text-primaryColor text-sm py-3 w-20 rounded-2xl cursor-pointer"></span>
          <span className=" bg-gray-100 text-primaryColor text-sm py-3 w-20 rounded-2xl cursor-pointer"></span>
        </div>
      )}

      <div className="flex items-center gap-2 pt-3 flex-wrap">
        {trendingSearches?.map((term, index) => (
          <span
            key={index}
            onClick={() => handleClick(term.searchQuery)}
            className=" bg-gray-100 text-primaryColor text-sm py-2 px-3 rounded-2xl cursor-pointer"
          >
            {term.searchQuery}
          </span>
        ))}
      </div>
    </>
  );
}

export default TrendingSearches;
