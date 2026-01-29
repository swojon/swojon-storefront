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
  // ✅ Separate refs
  const desktopSwiperRef = useRef<any>(null);
  const mobileSwiperRef = useRef<any>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Lightbox slides
  const slides: Slide[] = [
    ...images.map((im) => ({ src: im.url })),
    ...(videoUrl
      ? [
          {
            type: "video",
            sources: [{ src: videoUrl, type: "video/mp4" }],
          } as Slide,
        ]
      : []),
  ];

  // ✅ Thumbnail click handler
  const goToSlide = (index: number) => {
    // Desktop swiper
    if (desktopSwiperRef.current) {
      desktopSwiperRef.current.slideTo(index);
    }

    // Mobile swiper
    if (mobileSwiperRef.current) {
      mobileSwiperRef.current.slideTo(index);
    }

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
                  src={im.url.replace("/upload/", "/upload/w_110,q_auto,f_auto/") }
                  unoptimized
                  width={110}
                  height={90}
                  alt="thumb"
                  className="w-full h-[90px] object-contain"
                />
              </button>
            ))}

            {/* Video thumb */}
            {videoUrl && (
              <button
                onClick={() => goToSlide(images.length)}
                className={`relative h-[90px] rounded-lg overflow-hidden border-2 ${
                  activeIndex === images.length
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
              >
                <Image
                  src={images[0].url}
                  width={110}
                  height={90}
                  alt="video-thumb"
                  className="object-contain"
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
            onSwiper={(s) => (desktopSwiperRef.current = s)}
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
                    src={im.url.replace("/upload/", "/upload/w_600,q_auto,f_auto/")}
                    unoptimized
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
                <div className="w-full h-full bg-black">
                  <video
                    controls
                    className="w-full h-full object-contain"
                  >
                    <source src={videoUrl} type="video/mp4" />
                  </video>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="lg:hidden space-y-3">
        {/* ✅ MOBILE MAIN SWIPER */}
        <Swiper
          onSwiper={(s) => (mobileSwiperRef.current = s)}
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
                  src={im.url.replace("/upload/", "/upload/w_600,q_auto,f_auto/")}
                  unoptimized
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
              <video
                controls
                className="w-full h-full object-contain"
              >
                <source src={videoUrl} type="video/mp4" />
              </video>
            </SwiperSlide>
          )}
        </Swiper>

        {/* ✅ MOBILE THUMB ROW */}
        <div className="flex gap-2 overflow-x-auto">
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
                src={im.url.replace("/upload/", "/upload/w_80,q_auto,f_auto/")}
                unoptimized
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
              className={`relative w-[80px] h-[80px] flex-shrink-0 rounded-lg overflow-hidden border-2 ${
                activeIndex === images.length
                  ? "border-blue-500"
                  : "border-transparent"
              }`}
            >
              <Image
                src={images[0].url.replace("/upload/", "/upload/w_80,q_auto,f_auto/")}
                unoptimized
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
