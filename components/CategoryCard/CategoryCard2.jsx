import React from "react";
import img1 from "@/public/assets/cat1.png";
import img2 from "@/public/assets/cat2.png";
import img3 from "@/public/assets/cat3.png";
import img4 from "@/public/assets/cat4.png";
import img5 from "@/public/assets/cat5.png";
import img6 from "@/public/assets/cat6.png";
import Image from "next/image";

const card = [
  { id: 13, banner: img1, title: "Furniture" },
  { id: 14, banner: img2, title: "Electronics" },
  { id: 123, banner: img3, title: "Gym Accessories" },
  { id: 12235, banner: img4, title: "instructive" },
  { id: 146, banner: img5, title: "Fashion" },
  { id: 123, banner: img6, title: "Home Alliances" },
];

const CategoryCard2 = () => {
  return (
    <div className="mt-20  custom-container space-y-10">
      <div className="flex md:flex-row flex-col justify-between items-center space-y-2 md:space-x-0">
        <h2 className="lg:text-4xl text-2xl font-lexed text-primaryColor font-semiBold">
          Browse Our Category
        </h2>
        <button className="border border-activeColor md:py-2 md:px-3 py-1 px-2 rounded  text-activeColor lg:text-base text-sm font-lexed">
          See All Categories
        </button>
      </div>

      <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-3">
        {card.map((item) => (
          <div
            key={item.id}
            className=" lg:h-[260px] md:h-[200px] sm:h-[180px] h-[120px] rounded-lg relative"
          >
            <Image
              src={item.banner}
              alt="category image"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute top-0 md:p-4 p-2 text-whiteColor leading-3">
              <h6 className="md:text-lg sm:text-base text-sm capitalize font-lexed font-semibold">
                {item.title}
              </h6>
              <span className="md:text-sm text-xs">100 post</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard2;
