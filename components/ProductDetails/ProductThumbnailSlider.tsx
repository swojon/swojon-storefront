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
    <section className="flex md:gap-4 gap-2 lg:h-[600px] md:h-[400px] sm:h-[350px] h-[280px]">
      <div className="w-[18%]">
        <Swiper
          onSwiper={(swiper) => {
            setThumbsSwiper(swiper);
          }}
          direction={"vertical"}
          loop={true}
          spaceBetween={10}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper "
          initialSlide={0}
          style={{ zIndex: 1 }}
        >
          {images?.map((im: any) => (
            <SwiperSlide key={im.url} className="cursor-pointer z-0">
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
      <div className="w-[82%]">
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          initialSlide={0}
          freeMode={true}
          className="mySwiper2 w-full lg:h-[600px] md:h-[400px] sm:h-[350px] h-[280px]"
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
    </section>
  );
};

export default ProductThumbnailSlider;
