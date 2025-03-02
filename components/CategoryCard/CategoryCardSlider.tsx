"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css"
import "./SwiperSlider.css"
// import 'swiper/modules/navigation';
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import "./CategoryCard.css";

const CategoryCardSlider = ({ categories}: { categories: any }) => {
  console.log("I am rendered twice", categories)
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
        // cssMode={true}
        navigation={true}
        pagination={false}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper "
        onInit={()=> {
          console.log("I am initited");
        }}
        onSwiper={(swiper) => swiper.update()}
        observer={true}
        // observeParents={true}
        
        // style={{
        //   height: "230px",
        //   top: "38%",
        //   //  "--swiper-navigation-size": "25px"
        // }}
      >
        {categories.map((category: any) => (
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
                className="w-full h-full object-cover rounded-lg transition ease-in-out delay-150 duration-300"
              />
              
            </Link>
          </SwiperSlide>
        ))}

     
      </Swiper>
    </>
  );
};

export default CategoryCardSlider;
