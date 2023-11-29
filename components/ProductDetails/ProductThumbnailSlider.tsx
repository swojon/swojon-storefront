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
          className="mySwiper"
        >
          {images?.map((im: any) => (
            <SwiperSlide key={im.url} className="cursor-pointer">
              <Image
                src={im.url}
                width={500}
                height={700}
                className="w-full h-full object-cover rounded-lg"
                alt="listing Image"
              />
            </SwiperSlide>
          ))}

          {/* <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide> */}
        </Swiper>
      </div>
      <div className="w-[82%]">
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 w-full lg:h-[600px] md:h-[400px] sm:h-[350px] h-[280px]"
        >
          {images?.map((im: any) => (
            <SwiperSlide key={im.url} className="w-full">
              <Image
                src={im.url}
                width={1000}
                height={1000}
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
