"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "@/components/CategoryCard/SwiperSlider.css";
// import 'swiper/modules/navigation';
import Image from "next/image";
import Link from "next/link";
import ProductCard2 from "./ProductCard2";
// import "./CategoryCard.css";

const CardSlider = ({ products }: { products: any }) => {
  return (
    <>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 4,
          },
          1024: { slidesPerView: 5 },
          1300: { slidesPerView: 6 },
        }}
        spaceBetween={20}
        slidesPerView={6}
        cssMode={true}
        navigation={true}
        pagination={false}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper "
        onInit={() => {
          console.log("I am initited");
        }}
        onSwiper={(swiper) => swiper.update()}
        observer={true}
      >
        {products.map((product: any) => (
          <SwiperSlide
            key={product.id}
            // style={{ height: "170px" }}
            className="relative h-auto overflow-hidden"
          >
            <ProductCard2 product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CardSlider;
