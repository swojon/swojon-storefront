import React from "react";
import CategoryCard2 from "./CategoryCard2";
import Link from "next/link";
import { useListCategoriesQuery } from "@/apollograph/generated";

const card = [
  { id: 13, banner: "/assets/cat1.png", title: "Furniture" },
  { id: 14, banner: "/assets/cat2.png", title: "Electronics" },
  {
    id: 123,
    banner: "/assets/cat3.png",
    title: "Gym Accessories",
  },
  {
    id: 9712235,
    banner: "/assets/cat4.png",
    title: "instructive",
  },
  { id: 99146, banner: "/assets/cat5.png", title: "Fashion" },
  {
    id: 3465123,
    banner: "/assets/cat6.png",
    title: "Home Alliances",
  },
];

const FeaturedCategoriesBox = () => {
  const { data, loading, error, networkStatus } =
  useListCategoriesQuery({
    variables: {
      limit: 8,
      filters: {
        isFeatured: [true]
      }
    },
    notifyOnNetworkStatusChange: true,
    nextFetchPolicy: "cache-first",
  });

  console.log(data?.listCategories.items)


  return (
    <div className="mt-20  custom-container space-y-10">
      <div className="flex md:flex-row flex-col justify-between items-center space-y-2 md:space-x-0">
        <h2 className="lg:text-4xl text-2xl font-lexed text-primaryColor font-semiBold">
          Browse Our Category
        </h2>
        <Link href="/categories">
          <button className="border border-activeColor md:py-2 md:px-3 py-1 px-2 rounded  text-activeColor lg:text-base text-sm font-lexed hover:shadow-lg hover:-translate-y-1 transition ease-in-out delay-150 duration-300 ">
            See All Categories
          </button>
        </Link>
      </div>

      <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-3">
        {loading && <p>Loading</p>}
        {data && data.listCategories.items.map((category) => 
          <CategoryCard2 item={category} key={category.id} />
        )}
    
      </div>
    </div>
  );
};

export default FeaturedCategoriesBox;
