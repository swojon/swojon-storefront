"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
const ProductImageSlider = () => {
  return (
    <>
      {" "}
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <Image
            src="/pd.png"
            width={1000}
            height={700}
            className="w-full h-full object-cover rounded-lg"
            alt="banner"
          />
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ProductImageSlider;
