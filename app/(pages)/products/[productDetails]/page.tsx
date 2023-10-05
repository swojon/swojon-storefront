import Image from "next/image";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import icon1 from "@/public/assets/share.png";
import icon2 from "@/public/assets/heartIcon.png";
import ProductDetailsImage from "@/components/ProductDetails/ProductDetailsImage";
import ProductInfo from "@/components/ProductDetails/ProductInfo";
import SellerBox from "@/components/ProductDetails/SellerBox";
import SafetyTips from "@/components/SafetyTips/SafetyTips";

const card2 = [
  { id: 13, banner: "/assets/pro1.png", title: "partex delux bed" },
  { id: 14, banner: "/assets/pro2.png", title: "partex delux bed" },
  { id: 123, banner: "/assets/pro3.png", title: "partex delux bed" },
  { id: 12235, banner: "/assets/pro4.png", title: "partex delux bed" },
  { id: 146, banner: "/assets/pro5.png", title: "partex delux bed" },
  { id: 123, banner: "/assets/pro6.png", title: "partex delux bed" },
  { id: 124388, banner: "/assets/pro1.png", title: "partex delux bed" },
  { id: 12783, banner: "/assets/pro8.png", title: "partex delux bed" },
];

const ProductDetails = ({ params }: { params: { productDetails: string }}) => {
  const productItem = parseInt(params.productDetails, 10);
  const selectedProduct = card2.find((item) => item.id === productItem);

  return (
    <section className="custom-container py-10 space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1 justify-center text-sm text-secondColor">
          <h6 className="">Home</h6>
          <MdKeyboardArrowRight />
          <h6 className="">Categories</h6>
          <MdKeyboardArrowRight />
          <h6 className="">Furniture</h6>
          <MdKeyboardArrowRight />
          <h6 className="text-primaryColor capitalize">
            {selectedProduct?.title}
          </h6>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1">
            <Image src={icon1} alt="share icon" />
            <span className="text-sm text-primaryColor relative  leading-0 cursor">
              share
              <span className="absolute left-0 bottom-0.5 h-0.5 w-full bg-primaryColor"></span>
            </span>
          </div>

          <div className="flex items-center space-x-1">
            <Image src={icon2} alt="share icon" />
            <span className="text-sm text-primaryColor relative  leading-0 cursor">
              save
              <span className="absolute left-0 bottom-0.5 h-0.5 w-full bg-primaryColor"></span>
            </span>
          </div>
        </div>
      </div>

      <div>
        <ProductDetailsImage product={selectedProduct?.banner} />
      </div>

      <div className="flex items-start gap-4">
        <div className="w-[70%] ">
          <ProductInfo />
          <SafetyTips />
        </div>
        <div className="w-[30%] ">
          <SellerBox />
        </div>
      </div>

      <div></div>
    </section>
  );
};

export default ProductDetails;
