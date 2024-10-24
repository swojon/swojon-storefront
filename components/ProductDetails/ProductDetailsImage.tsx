import Image from "next/image";
import React from "react";

const ProductDetailsImage = ({ images }: { images: any }) => {
  return (
    <div className="lg:h-[430px] h-[380px]  gap-3 relative">
      {/* <div className="w-full h-full rounded-lg">
        <Image
          src="/pd.png"
          width={1000}
          height={700}
          className="w-full h-full object-cover rounded-lg"
          alt="banner"
        />
      </div> */}

      {images?.map((im: any) => (
        <div className="w-[60%] mx-auto h-full rounded-lg" key={im.url}>
          <Image
            src={im.url}
            width={500}
            height={700}
            className="w-full h-full object-cover rounded-lg"
            alt="listing Image"
          />
        </div>
      ))}

      {/* <button className="absolute bg-whiteColor rounded border px-2 py-1 flex items-center space-x-2 bottom-5 right-5">
        <GoStack />
        <span className="capitalize text-xs ">See all photos</span>
      </button> */}
    </div>
  );
};

export default ProductDetailsImage;
