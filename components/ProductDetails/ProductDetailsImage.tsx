import Image from "next/image";
import React from "react";
import { GoStack } from "react-icons/go";

const ProductDetailsImage = ({ images }: { images: any }) => {
  return (
    <div className="lg:h-[430px] h-[380px] grid grid-cols-2 gap-3 relative">
      {/* <div className="w-full h-full rounded-lg">
        <Image
          src="/pd.png"
          width={1000}
          height={700}
          className="w-full h-full object-cover rounded-lg"
          alt="banner"
        />
      </div> */}
      <div className="w-full h-full grid grid-cols-2 gap-3">
        {images?.map((im: any) => (
        <div className="w-full h-full rounded-lg">
          <Image
            src={im.url}
            width={500}
            height={700}
            className="w-full h-full object-cover rounded-lg"
            alt="listing Image"
          />
        </div>))}
      </div>

      <button className="absolute bg-whiteColor rounded border px-2 py-1 flex items-center space-x-2 bottom-5 right-5">
        <GoStack />
        <span className="capitalize text-xs ">See all photos</span>
      </button>
    </div>
  );
};

export default ProductDetailsImage;
