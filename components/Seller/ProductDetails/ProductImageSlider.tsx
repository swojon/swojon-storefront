import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
const ProductImageSlider = ({images}: {images:any}) => {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {images?.map((img: any ) => (
          <SwiperSlide key={img.url}>
            <Image
              src={img.url}
              width={1000}
              height={700}
              className="w-full h-full object-cover rounded-lg"
              alt="banner"
            />
          </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default ProductImageSlider;
