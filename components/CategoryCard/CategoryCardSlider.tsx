"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper/modules";

import Image from "next/image";
import Link from "next/link";

const CategoryCardSlider = ({ data }: { data: any }) => {
  return (
    <>
      <Swiper
        breakpoints={{
          375: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={15}
        slidesPerView={2}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper "
        style={{
          height: "230px",
          //  "--swiper-navigation-size": "25px"
        }}
      >
        {data.listCategories.items.map((category: any) => (
          <SwiperSlide
            key={category.id}
            style={{ height: "170px" }}
            className="relative rounded-lg overflow-hidden"
          >
            <Link
              href={`/categories/${category.slug}`}
              className=" h-full  rounded-lg  w-full   overflow-hidden hover:shadow-2xl transition ease-in-out delay-150 duration-300"
            >
              <Image
                src={category?.banner ? category.banner : "/assets/cat6.png"}
                alt="category image"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-lg hover:scale-110 transition ease-in-out delay-150 duration-300"
              />
              <div className="absolute top-0 left-0 md:p-4 w-full h-full p-1 py-2 text-whiteColor leading-3 category-bg">
                <h6 className="md:text-lg sm:text-sm text-sm capitalize font-lexed font-semibold">
                  {category?.name}
                </h6>
                <span className="md:text-sm text-xs">100 post</span>
              </div>
            </Link>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          {" "}
          <Image
            src="/pd2.png"
            width={1000}
            height={700}
            className="w-full h-full object-cover rounded-lg"
            alt="banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src="/pd3.png"
            width={1000}
            height={700}
            className="w-full h-full object-cover rounded-lg"
            alt="banner"
          />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default CategoryCardSlider;
