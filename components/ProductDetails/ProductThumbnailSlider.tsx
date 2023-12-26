"use client";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import "./ProductDetail.css";
import Image from "next/image";

const ProductThumbnailSlider = ({ images }: { images: any }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return (
    <section className="lg:h-[577px]  space-y-4">
      <div className="w-full">
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          initialSlide={0}
          freeMode={true}
          // style={{ height: "441px" }}
          className="mySwiper2 w-full  slider1"
        >
          {images?.map((im: any, index: number) => (
            <SwiperSlide key={index} className="w-full">
              <Image
                src={im.url}
                width={1000}
                height={1000}
                priority
                className="w-full h-full object-cover rounded-lg"
                alt="listing Image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full">
        <Swiper
          onSwiper={(swiper) => {
            setThumbsSwiper(swiper);
          }}
          loop={true}
          spaceBetween={13}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper w-full slider2 "
          initialSlide={0}
          // style={{ zIndex: 1, height: "120px" }}
        >
          {images?.map((im: any) => (
            <SwiperSlide key={im.url} className="cursor-pointer z-0  h-full">
              <Image
                src={im.url}
                width={500}
                height={700}
                priority
                className="w-full h-full object-cover rounded-lg z-0"
                alt="listing Image "
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductThumbnailSlider;
