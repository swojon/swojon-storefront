"use client";

import { useListCategoriesQuery } from "@/apollograph/generated";
import CategoryCard2 from "@/components/CategoryCard/CategoryCard2";
import { Waypoint } from "react-waypoint";
import { MdKeyboardArrowRight } from "react-icons/md";
import CategoryCardLoader from "@/components/Loader/CategoryCardLoader";
import ResFilter from "@/components/FilterBar/ResFilter";
import CategoryDetailCard from "@/components/CategoryCard/CategoryDetailCard";
import CategoryDetailCardLoader from "@/components/Loader/CategoryDetailCardLoader";

const card = [
  {
    id: 13,
    banner: "/assets/cat1.png",
    title: "Furniture",
    children: [
      { id: 13, banner: "/assets/pro1.png", title: "partex delux bed" },
      { id: 14, banner: "/assets/pro2.png", title: "partex delux bed" },
      { id: 123, banner: "/assets/pro3.png", title: "partex delux bed" },
      { id: 12443, banner: "/assets/pro4.png", title: "partex delux bed" },
      { id: 124388, banner: "/assets/pro5.png", title: "partex delux bed" },
      { id: 12783, banner: "/assets/pro6.png", title: "partex delux bed" },
      { id: 12784443, banner: "/assets/pro6.png", title: "partex delux bed" },
    ],
  },
  {
    id: 14,
    banner: "/assets/cat2.png",
    title: "Electronics",
    children: [
      { id: 13, banner: "/assets/pro1.png", title: "partex delux bed" },
      { id: 14, banner: "/assets/pro2.png", title: "partex delux bed" },
      { id: 123, banner: "/assets/pro3.png", title: "partex delux bed" },
      { id: 12235, banner: "/assets/pro4.png", title: "partex delux bed" },
      { id: 146, banner: "/assets/pro5.png", title: "partex delux bed" },
    ],
  },
  {
    id: 123,
    banner: "/assets/cat3.png",
    title: "Gym Accessories",
    children: [
      { id: 146, banner: "/assets/pro5.png", title: "partex delux bed" },
      { id: 123, banner: "/assets/pro6.png", title: "partex delux bed" },
      { id: 124388, banner: "/assets/pro1.png", title: "partex delux bed" },
      { id: 12783, banner: "/assets/pro8.png", title: "partex delux bed" },
    ],
  },
  {
    id: 12235,
    banner: "/assets/cat4.png",
    title: "instructive",
    children: [
      { id: 13, banner: "/assets/pro1.png", title: "partex delux bed" },
      { id: 14, banner: "/assets/pro2.png", title: "partex delux bed" },

      { id: 146, banner: "/assets/pro5.png", title: "partex delux bed" },
      { id: 123, banner: "/assets/pro6.png", title: "partex delux bed" },
      { id: 124388, banner: "/assets/pro1.png", title: "partex delux bed" },
      { id: 12783, banner: "/assets/pro8.png", title: "partex delux bed" },
    ],
  },
  {
    id: 146,
    banner: "/assets/cat5.png",
    title: "Fashion",
    children: [
      { id: 13, banner: "/assets/pro1.png", title: "partex delux bed" },
      { id: 14, banner: "/assets/pro2.png", title: "partex delux bed" },

      { id: 123, banner: "/assets/pro6.png", title: "partex delux bed" },
      { id: 124388, banner: "/assets/pro1.png", title: "partex delux bed" },
      { id: 12783, banner: "/assets/pro8.png", title: "partex delux bed" },
    ],
  },
  {
    id: 123,
    banner: "/assets/cat6.png",
    title: "Home Alliances",
    children: [
      { id: 13, banner: "/assets/pro1.png", title: "partex delux bed" },
      { id: 14, banner: "/assets/pro2.png", title: "partex delux bed" },
      { id: 123, banner: "/assets/pro3.png", title: "partex delux bed" },

      { id: 124388, banner: "/assets/pro1.png", title: "partex delux bed" },
      { id: 12783, banner: "/assets/pro8.png", title: "partex delux bed" },
    ],
  },
  {
    id: 88814,
    banner: "/assets/cat2.png",
    title: "Electronics",
    children: [
      { id: 13, banner: "/assets/pro1.png", title: "partex delux bed" },
      { id: 14, banner: "/assets/pro2.png", title: "partex delux bed" },
      { id: 123, banner: "/assets/pro3.png", title: "partex delux bed" },
      { id: 12235, banner: "/assets/pro4.png", title: "partex delux bed" },
      { id: 146, banner: "/assets/pro5.png", title: "partex delux bed" },
    ],
  },
  {
    id: 126663,
    banner: "/assets/cat3.png",
    title: "Gym Accessories",
    children: [
      { id: 146, banner: "/assets/pro5.png", title: "partex delux bed" },
      { id: 123, banner: "/assets/pro6.png", title: "partex delux bed" },
      { id: 124388, banner: "/assets/pro1.png", title: "partex delux bed" },
      { id: 12783, banner: "/assets/pro8.png", title: "partex delux bed" },
    ],
  },
];

const Categories = () => {
  const { data, loading, error, fetchMore, networkStatus } =
    useListCategoriesQuery({
      variables: {
        limit: 100,
      },
      notifyOnNetworkStatusChange: true,
      nextFetchPolicy: "cache-first",
    });

  const categories = data?.listCategories.items;
  const parentCategories = categories?.filter(
    (item) => item.parentCategory == null
  );

  const loadMore = () => {
    fetchMore({
      variables: {
        limit: 100,
        startingAfter:
          data?.listCategories.items[data.listCategories.items.length - 1].id,
      },
      updateQuery: (prev: any, { fetchMoreResult }: any) => {
        if (!fetchMoreResult.listCategories.items) return prev;
        return {
          listCategories: {
            items: [
              ...prev.listCategories.items,
              ...fetchMoreResult.listCategories.items,
            ],
            hasMore: fetchMoreResult.listCategories.hasMore,
            count: fetchMoreResult.listCategories.count,
          },
        };
      },
    });
  };

  return (
    <main className="custom-container relative">
      <div className="mt-10 text-center font-lexed space-y-3">
        <div className="flex items-center space-x-1 justify-center text-secondColor">
          <h1 className="text-base">Home</h1>
          <MdKeyboardArrowRight />
          <h1 className="text-base">Categories</h1>
        </div>
        <h5 className="text-3xl  font-medium text-primaryColor">
          Browse All Category
        </h5>
      </div>

      <div className="grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-5 pt-10">
        {data &&
          parentCategories?.map((category) => (
            <CategoryDetailCard
              item={category}
              categories={categories}
              key={category.id}
            />
          ))}

        {loading && <CategoryDetailCardLoader />}
      </div>
      {data?.listCategories.hasMore && (
        <div className="flex items-center justify-center mt-2">
          <button
            onClick={loadMore}
            className="border border-activeColor text-activeColor  rounded-md p-1 text-center md:text-base  sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </main>
  );
};

export default Categories;
