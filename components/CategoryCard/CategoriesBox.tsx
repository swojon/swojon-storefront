import React from "react";
import img1 from "@/public/assets/cat1.png";
import img2 from "@/public/assets/cat2.png";
import img3 from "@/public/assets/cat3.png";
import img4 from "@/public/assets/cat4.png";
import img5 from "@/public/assets/cat5.png";
import img6 from "@/public/assets/cat6.png";
import CategoryCard2 from "./CategoryCard2";
import Link from "next/link";

const card = [
  { id: 13, banner: img1, title: "Furniture" },
  { id: 14, banner: img2, title: "Electronics" },
  { id: 123, banner: img3, title: "Gym Accessories" },
  { id: 12235, banner: img4, title: "instructive" },
  { id: 146, banner: img5, title: "Fashion" },
  { id: 123, banner: img6, title: "Home Alliances" },
];

const CategoriesBox = () => {
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
        {card.map((item) => (
          <CategoryCard2 item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesBox;
