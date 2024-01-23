import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./CategoryCard.css";

const CategoryCard2 = ({ item }) => {
  return (
    <Link
      href={`/categories/${item.slug}`}
      className=" h-[200px]  rounded-lg relative    overflow-hidden hover:shadow-2xl transition ease-in-out delay-150 duration-300"
    >
      <Image
        src={item?.banner ? item.banner : "/assets/cat6.png"}
        alt="category image"
        width={500}
        height={500}
        className="w-full h-full object-cover rounded-lg hover:scale-110 transition ease-in-out delay-150 duration-300"
      />
      <div className="absolute top-0 md:p-4 w-full h-full p-2 text-whiteColor leading-3 category-bg">
        <h6 className="md:text-lg sm:text-base text-sm capitalize font-lexed font-semibold">
          {item?.name}
        </h6>
        <span className="md:text-sm text-xs">100 post</span>
      </div>
    </Link>
  );
};

export default CategoryCard2;
