"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import ReelCard from "./ReelCard";
import "@/components/CategoryCard/SwiperSlider.css";

const reelsData = [
  {
    id: 1,
    video: "https://youtube.com/shorts/ppa0UrT17cU?feature=share",
    user: "@swojon",
    description: "Trending fashion picks for summer!",
    productId: 67
  },
  {
    id: 2,
    video: "https://youtube.com/shorts/hNc7heFwBzI?feature=share",
    user: "@swojon",
    description: "Home decor ideas to transform your space.",
    productId: 81
  },
  {
    id: 3,
    video: "https://youtube.com/shorts/b-m15vi4dTc?feature=share",
    user: "@swojon",
    description: "Affordable outfits you won't believe!",
    productId: 89
  },
  {
    id: 4,
    video: "https://youtube.com/shorts/l9FLhWnFuXw?feature=share",
    user: "@swojon",
    description: "Luxury handbags on a budget.",
    productId: 41
  },
  {
    id: 44,
    video: "https://youtube.com/shorts/oFKUM0lj26g?feature=share",
    user: "@swojon",
    description: "Luxury handbags on a budget.",
    productId: 87
  },
  {
    id: 45,
    video: "https://youtube.com/shorts/-bPD-cgIRjQ?feature=share",
    user: "@swojon",
    description: "Luxury handbags on a budget.",
    productId: 7
  },
];

const ReelSection = () => {
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);
  return (
    <div className=" custom-container2 mt-10">
       <h2 className="lg:text-3xl text-2xl font-semibold text-primaryColor capitalize truncate">
            Reels
        </h2>

      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          // 768: {
          //   slidesPerView: 3,
          // },
          1024: { slidesPerView: 4 },
          //   1300: { slidesPerView: 4 },
        }}
        spaceBetween={20}
        slidesPerView={4}
        cssMode={true}
        navigation={true}
        pagination={false}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper mt-10 "
      
        onSwiper={(swiper) => swiper.update()}
        observer={true}
      >
        {reelsData.map((reel) => (
          <SwiperSlide
            key={reel.id}
            className="relative h-auto overflow-hidden"
          >
            <ReelCard
              videoSrc={reel.video}
              user={reel.user}
              videoId={reel.id}
              description={reel.description}
              productId={reel.productId}
              isPlaying={playingVideoId === reel.id}
              setPlayingVideoId={setPlayingVideoId}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReelSection;
