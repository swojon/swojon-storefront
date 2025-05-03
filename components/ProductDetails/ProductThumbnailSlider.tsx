"use client";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import "./ProductDetail.css";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setImagePopUpOpen } from "@/app/redux/ImagePopSlice";
// import ModalImage from "react-modal-image";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const ProductThumbnailSlider = ({ images }: { images: any }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const dispatch = useDispatch();

  const handleExpandImage = (imageUrl: any) => {
    dispatch(setImagePopUpOpen(imageUrl));
  };
  console.log("Images", images);
  const slides = images.map((im: any) => ({ src: im.url }));
  console.log("slides", slides);
  return (
    <section className="lg:h-[577px]  space-y-4">
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        plugins={[Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
        controller={{ closeOnBackdropClick: true, closeOnPullDown: true }}
      />

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

              <div
                onClick={() => setLightboxOpen(true)}
                className="absolute w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center right-3 top-3"
              >
                <div className="w-4 h-4">
                  <Image
                    src="/assets/expand.png"
                    alt="expand"
                    width={100}
                    height={100}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}

          <SwiperSlide className="w-full h-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
              className="rounded-lg"
            ></iframe>
          </SwiperSlide>
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

          <SwiperSlide className="cursor-pointer z-0  h-full relative">
            {/* <div className="pointer-events-none rounded-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
                className="rounded-lg"
              ></iframe>
            </div> */}

            <Image
              src={images[0].url}
              width={500}
              height={700}
              priority
              className="w-full h-full object-cover rounded-lg z-0"
              alt="listing Image "
            />

            <div className="absolute inset-0 bg-gray-200/50 flex items-center justify-center">
              <Image
                src="/play-button.png"
                alt="play"
                width={100}
                height={100}
                className="!w-[50px] !h-[50px] invert opacity-90 "
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default ProductThumbnailSlider;
