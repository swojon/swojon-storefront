import React from "react";
import { BsDot } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";

const ProductInfo = ({ product }: { product: any }) => {
  return (
    <section className="space-y-3">
      <div className="lg:w-2/3  space-y-2">
        <div className="flex justify-between items-center">
          <h5 className="lg:text-2xl md:text-lg text-base font-lexed text-primaryColor font-medium capitalize">
            {product?.title}
          </h5>
          <h5 className="lg:text-2xl md:text-lg text-base font-lexed text-activeColor font-medium">
            TK {product?.price}
          </h5>
        </div>

        <div className="flex space-x-1 items-center">
          <div className="flex items-center space-x-1">
            <FaStar className="text-[#FFB800]" />
            <span className="text-sm">0.00</span>
          </div>

          <div className="flex items-center space-x-1">
            <BsDot className="text-secondColor" />
            <span className="text-sm">No Reviews Yet</span>
          </div>
        </div>
        {/* 
        <div className="flex space-x-1 items-center">
          <HiLocationMarker className="text-activeColor" />
          <span className=" md:text-sm text-xs">Halishohor, Chattagram</span>
        </div> */}

        <div className="flex space-x-2 items-center  md:text-sm text-xs">
          <span className=" text-secondColor">Condition:</span>
          <span className=" text-primaryColor">Used</span>
        </div>
        <div className="flex space-x-2 items-center  md:text-sm text-xs">
          <span className=" text-secondColor">Product Type:</span>
          <span className=" text-primaryColor">Furniture</span>
        </div>
      </div>

      {/* <div className="border-b pb-8">
        <h5 className="lg:text-2xl md:text-lg text-base text-primaryColor font-lexed font-medium pb-4">
          Description
        </h5>
        <p className="text-secondColor pb-2 lg:text-base md:text-sm text-xs">
          {product?.description}
        </p>
      </div> */}
    </section>
  );
};

export default ProductInfo;
