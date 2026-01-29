"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "@/components/CategoryCard/SwiperSlider.css";

import ProductCard2 from "./ProductCard2";

const CardSlider = ({ products }: { products: any }) => {
  // ✅ Ensure always array
  const safeProducts = Array.isArray(products) ? products : [];

  if (safeProducts.length === 0) return null;

  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 2 },
        640: { slidesPerView: 4 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
        1300: { slidesPerView: 6 },
      }}
      spaceBetween={20}
      navigation={true}
      pagination={false}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      {safeProducts.map((product: any, index: number) => (
        <SwiperSlide
          key={product?.id ?? index}
          className="relative h-auto overflow-hidden"
        >
          <ProductCard2 product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSlider;
