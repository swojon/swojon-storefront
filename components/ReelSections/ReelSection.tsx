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
    video: "https://www.youtube.com/shorts/yzGOTaBneUc?feature=share",
    user: "@walmartfinds",
    description: "Trending fashion picks for summer!",
  },
  {
    id: 2,
    video: "https://www.youtube.com/shorts/SGCxSpcBWew?feature=share",
    user: "@joyfullygreen",
    description: "Home decor ideas to transform your space.",
  },
  {
    id: 3,
    video: "https://www.youtube.com/shorts/N27BTAUtTio?feature=share",
    user: "@maketodayahollyday",
    description: "Affordable outfits you won't believe!",
  },
  {
    id: 4,
    video: "https://www.youtube.com/shorts/N27BTAUtTio?feature=share",
    user: "@pickyourperfect",
    description: "Luxury handbags on a budget.",
  },
  {
    id: 44,
    video: "https://www.youtube.com/shorts/N27BTAUtTio?feature=share",
    user: "@pickyourperfect",
    description: "Luxury handbags on a budget.",
  },
  {
    id: 45,
    video: "https://www.youtube.com/shorts/N27BTAUtTio?feature=share",
    user: "@pickyourperfect",
    description: "Luxury handbags on a budget.",
  },
];

const ReelSection = () => {
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);
  return (
    <div className=" custom-container2 py-5">
      <h2 className="text-xl font-bold  mb-3">Reels</h2>

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
        className="mySwiper "
        onInit={() => {
          console.log("I am initited");
        }}
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
