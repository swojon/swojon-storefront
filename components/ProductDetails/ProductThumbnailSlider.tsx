"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Video from "yet-another-react-lightbox/plugins/video";
import type { Slide } from "yet-another-react-lightbox";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "yet-another-react-lightbox/styles.css";

type ImageItem = {
  url: string;
};

const ProductThumbnailSlider = ({
  images,
  videoUrl,
}: {
  images: ImageItem[];
  videoUrl?: string;
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides: Slide[] = [
  ...images.map((im) => ({
    src: im.url,
  })),
  ...(videoUrl
    ? [
        {
          type: "video",
          sources: [
            {
              src: videoUrl,
              type: "video/mp4",
            },
          ],
        } as Slide,
      ]
    : []),
];
  return (
    <section className="w-full">

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={activeIndex}
        plugins={[Fullscreen, Zoom, Video]}
      />

      {/* ===== DESKTOP LAYOUT ===== */}
      <div className="hidden lg:flex gap-4 h-[600px]">

        {/* Thumbnails (LEFT) */}
        <div className="w-[110px] h-full">
          <Swiper
            direction="vertical"
            slidesPerView={5}
            spaceBetween={12}
            freeMode
            watchSlidesProgress
            onSwiper={setThumbsSwiper}
            observer={true}
            observeParents={true}
            modules={[FreeMode, Thumbs]}
            className="h-full"
          >
            {images.map((im, i) => (
              <SwiperSlide key={im.url}>
                <Image
                  src={im.url}
                  width={200}
                  height={200}
                  alt="thumb"
                  className={`w-full h-[90px] object-cover rounded-lg cursor-pointer border-2 ${
                    activeIndex === i
                      ? "border-blue-500"
                      : "border-transparent"
                  }`}
                />
              </SwiperSlide>
            ))}

            {videoUrl && (
              <SwiperSlide>
                <div className="relative h-[90px] cursor-pointer rounded-lg overflow-hidden border-2 border-transparent">
                  <Image
                    src={images[0].url}
                    fill
                    alt="video"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Image
                      src="/play-button.png"
                      width={40}
                      height={40}
                      alt="play"
                      className="invert"
                    />
                  </div>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>

        {/* Main Image (RIGHT) */}
        <div className="flex-1 w-full h-[600px] lg:h-[600px]">
          <Swiper
            thumbs={{ swiper: thumbsSwiper }}
            onSlideChange={(s) => setActiveIndex(s.activeIndex)}
            modules={[Thumbs]}
            observer={true}
            observeParents={true}
            className="h-full"
          >
            {images.map((im, i) => (
              <SwiperSlide key={i}>
                <div
                  className="relative w-full h-full cursor-zoom-in"
                  onClick={() => setLightboxOpen(true)}
                >
                  <Image
                    src={im.url}
                    fill
                    priority
                    alt="product"
                    className="object-cover rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}

            {videoUrl && (
              <SwiperSlide>
                <iframe
                  src={videoUrl}
                  className="w-full h-full rounded-lg"
                  allowFullScreen
                />
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>

      {/* ===== MOBILE LAYOUT ===== */}
      <div className="lg:hidden space-y-3">
        <Swiper
          onSlideChange={(s) => setActiveIndex(s.activeIndex)}
          className="w-full aspect-square"
        >
          {images.map((im, i) => (
            <SwiperSlide key={i}>
              <Image
                src={im.url}
                fill
                alt="product"
                className="object-cover rounded-lg"
                onClick={() => setLightboxOpen(true)}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper slidesPerView={4} spaceBetween={10}>
          {images.map((im, i) => (
            <SwiperSlide key={i}>
              <Image
                src={im.url}
                width={120}
                height={120}
                alt="thumb"
                className={`rounded-lg border-2 ${
                  activeIndex === i
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductThumbnailSlider;
