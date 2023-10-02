import React from "react";
import Image from "next/image";
import Link from "next/link";

const CategoryCard2 = ({ item }) => {
  return (
    <Link
      href={`/categories/${item.id}`}
      className=" lg:h-[260px] md:h-[200px] sm:h-[180px] h-[120px] rounded-lg relative    overflow-hidden hover:shadow-2xl transition ease-in-out delay-150 duration-300"
    >
      <Image
        src={item?.banner}
        alt="category image"
        width={500}
        height={500}
        className="w-full h-full object-cover rounded-lg hover:scale-110 transition ease-in-out delay-150 duration-300"
      />
      <div className="absolute top-0 md:p-4 p-2 text-whiteColor leading-3">
        <h6 className="md:text-lg sm:text-base text-sm capitalize font-lexed font-semibold">
          {item?.title}
        </h6>
        <span className="md:text-sm text-xs">100 post</span>
      </div>
    </Link>
  );
};

export default CategoryCard2;
