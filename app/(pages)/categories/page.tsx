import CategoryCard2 from "@/components/CategoryCard/CategoryCard2";
import React from "react";

import { MdKeyboardArrowRight } from "react-icons/md";
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
  { id: 1343, banner: "/assets/cat7.png", title: "Furniture" },
  { id: 34514, banner: "/assets/cat8.png", title: "Electronics" },
  {
    id: 33123,
    banner: "/assets/cat9.png",
    title: "Gym Accessories",
  },
  {
    id: 1662235,
    banner: "/assets/cat10.png",
    title: "instructive",
  },
  { id: 15546, banner: "/assets/cat13.png", title: "Fashion" },
  {
    id: 1333,
    banner: "/assets/cat12.png",
    title: "Home Alliances",
  },
];

const Categories = () => {
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
      <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4 pt-10">
        {card.map((item) => (
          <CategoryCard2 item={item} key={item.id} />
        ))}
      </div>
    </main>
  );
};

export default Categories;
