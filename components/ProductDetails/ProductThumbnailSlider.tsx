"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";
import type { Slide } from "yet-another-react-lightbox";

type ImageItem = {
  url: string;
};

export default function ProductThumbnailSlider({
  images,
  videoUrl,
}: {
  images: ImageItem[];
  videoUrl?: string;
}) {
  const mainSwiperRef = useRef<any>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Lightbox slides (images + optional video)
  const slides:Slide[] = [
    ...images.map((im) => ({ src: im.url })),
    ...(videoUrl
      ? [
          {
            type: "video",
            sources: [{ src: videoUrl, type: "video/mp4" }],
          } as Slide
        ]
      : []),
  ];

  // Thumbnail click → go to slide
  const goToSlide = (index: number) => {
    mainSwiperRef.current?.slideTo(index);
    setActiveIndex(index);
  };

  return (
    <section className="w-full">
      {/* ✅ LIGHTBOX */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={activeIndex}
        plugins={[Fullscreen, Zoom, Video]}
      />

      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:flex gap-4 h-[600px]">
        {/* ✅ DESKTOP THUMBNAILS */}
        <div className="w-[110px] h-full overflow-hidden">
          <div className="flex flex-col gap-3 h-full overflow-y-auto pr-1">
            {/* Image thumbs */}
            {images.map((im, i) => (
              <button
                key={im.url}
                onClick={() => goToSlide(i)}
                className={`border-2 rounded-lg overflow-hidden ${
                  activeIndex === i
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
              >
                <Image
                  src={im.url}
                  width={110}
                  height={90}
                  alt="thumb"
                  className="w-full h-[90px] object-cover"
                />
              </button>
            ))}

            {/* Video thumb */}
            {videoUrl && (
              <button
                onClick={() => goToSlide(images.length)}
                className="relative h-[90px] rounded-lg overflow-hidden border-2 border-transparent"
              >
                <Image
                  src={images[0].url}
                  width={110}
                  height={90}
                  alt="video-thumb"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Image
                    src="/play-button.png"
                    width={35}
                    height={35}
                    alt="play"
                    className="invert"
                  />
                </div>
              </button>
            )}
          </div>
        </div>

        {/* ✅ DESKTOP MAIN SWIPER */}
        <div className="flex-1 h-full rounded-xl overflow-hidden">
          <Swiper
            onSwiper={(s) => (mainSwiperRef.current = s)}
            onSlideChange={(s) => setActiveIndex(s.activeIndex)}
            slidesPerView={1}
            className="h-full"
          >
            {/* Image slides */}
            {images.map((im, i) => (
              <SwiperSlide key={i}>
                <div
                  className="relative w-full h-full cursor-zoom-in bg-white"
                  onClick={() => setLightboxOpen(true)}
                >
                  <Image
                    src={im.url}
                    fill
                    alt="product"
                    sizes="600px"
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}

            {/* Video slide */}
            {videoUrl && (
              <SwiperSlide>
                <iframe
                  src={videoUrl}
                  className="w-full h-full"
                  allowFullScreen
                />
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="lg:hidden space-y-3">
        {/* ✅ MOBILE MAIN SWIPER */}
        <Swiper
          onSwiper={(s) => (mainSwiperRef.current = s)}
          onSlideChange={(s) => setActiveIndex(s.activeIndex)}
          slidesPerView={1}
          className="w-full aspect-square rounded-xl overflow-hidden"
        >
          {/* Image slides */}
          {images.map((im, i) => (
            <SwiperSlide key={i}>
              <div
                className="relative w-full h-full bg-white"
                onClick={() => setLightboxOpen(true)}
              >
                <Image
                  src={im.url}
                  fill
                  alt="product"
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}

          {/* Video slide */}
          {videoUrl && (
            <SwiperSlide>
              <iframe
                src={videoUrl}
                className="w-full h-full"
                allowFullScreen
              />
            </SwiperSlide>
          )}
        </Swiper>

        {/* ✅ MOBILE THUMB ROW */}
        <div className="flex gap-2 overflow-x-auto">
          {/* Image thumbs */}
          {images.map((im, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`border-2 rounded-lg overflow-hidden flex-shrink-0 ${
                activeIndex === i
                  ? "border-blue-500"
                  : "border-transparent"
              }`}
            >
              <Image
                src={im.url}
                width={80}
                height={80}
                alt="thumb"
                className="object-cover"
              />
            </button>
          ))}

          {/* Video thumb */}
          {videoUrl && (
            <button
              onClick={() => goToSlide(images.length)}
              className="relative w-[80px] h-[80px] flex-shrink-0 rounded-lg overflow-hidden border-2 border-transparent"
            >
              <Image
                src={images[0].url}
                fill
                alt="video-thumb"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <Image
                  src="/play-button.png"
                  width={28}
                  height={28}
                  alt="play"
                  className="invert"
                />
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
