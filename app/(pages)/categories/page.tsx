"use client";

import { useListCategoriesQuery } from "@/apollograph/generated";
import CategoryCard2 from "@/components/CategoryCard/CategoryCard2";
import { Waypoint } from "react-waypoint";
import { MdKeyboardArrowRight } from "react-icons/md";
import CategoryCardLoader from "@/components/Loader/CategoryCardLoader";

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
        limit: 30,
      },
      notifyOnNetworkStatusChange: true,
      nextFetchPolicy: "cache-first",
    });

  const loadMore = () => {
    fetchMore({
      variables: {
        limit: 10,
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
    <main className="custom-container">
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
      {loading && (
        <div className="w-full pt-10">
          {" "}
          <CategoryCardLoader />
        </div>
      )}
      <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4 pt-10">
        {data &&
          data?.listCategories.items.map((category) => (
            <CategoryCard2 item={category} key={category.id} />
          ))}
      </div>
      {data?.listCategories.hasMore && (
        <div>
          <button onClick={loadMore}>Load More</button>
        </div>
      )}
    </main>
  );
};

export default Categories;
