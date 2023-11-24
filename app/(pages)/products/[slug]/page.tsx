'use client'
import Image from "next/image";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import shareIcon from "@/public/assets/share.png";
import saveIcon from "@/public/assets/heartIcon.png";
import ProductDetailsImage from "@/components/ProductDetails/ProductDetailsImage";
import ProductInfo from "@/components/ProductDetails/ProductInfo";
import SellerBox from "@/components/ProductDetails/SellerBox";
import SafetyTips from "@/components/SafetyTips/SafetyTips";
import Link from "next/link";
import ProductImageSlider from "@/components/ProductDetails/ProductImageSlider";
import { useGetListingQuery } from "@/apollograph/generated";

// const card2 = [
//   { id: 13, banner: "/assets/pro1.png", title: "partex delux bed" },
//   { id: 14, banner: "/assets/pro2.png", title: "partex delux bed" },
//   { id: 123, banner: "/assets/pro3.png", title: "partex delux bed" },
//   { id: 12235, banner: "/assets/pro4.png", title: "partex delux bed" },
//   { id: 146, banner: "/assets/pro5.png", title: "partex delux bed" },
//   { id: 123, banner: "/assets/pro6.png", title: "partex delux bed" },
//   { id: 124388, banner: "/assets/pro1.png", title: "partex delux bed" },
//   { id: 12783, banner: "/assets/pro8.png", title: "partex delux bed" },
// ];

const ProductDetails = ({ params }: { params: { slug: string } }) => {
  const productId = parseInt(params.slug, 10);
  const {data, error , loading} = useGetListingQuery({
    variables: {
      id: productId
    },
    skip: !productId
  })
  const product = data?.getListing;
  
  
  return (
    <section className="custom-container py-10 space-y-8">
      <div className="flex md:flex-row flex-col items-center justify-between gap-2">
        <div className="flex items-center space-x-1 justify-center text-sm text-secondColor">
          <h6 className="">Home</h6>
          <MdKeyboardArrowRight />
          {product?.category?.parentCategory && 
            <>
            <h6 className="">Categories</h6>
            <MdKeyboardArrowRight />
            </> 
          }

          <h6 className="">{product?.category?.name}</h6>
          <MdKeyboardArrowRight />
          <h6 className="text-primaryColor capitalize">
            {product?.title}
          </h6>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1">
            <Image src={shareIcon} alt="share icon" />
            <span className="text-sm text-primaryColor relative  leading-0 cursor">
              share
              <span className="absolute left-0 bottom-0.5 h-0.5 w-full bg-primaryColor"></span>
            </span>
          </div>

          <div className="flex items-center space-x-1">
            <Image src={saveIcon} alt="share icon" />
            <span className="text-sm text-primaryColor relative  leading-0 cursor">
              save
              <span className="absolute left-0 bottom-0.5 h-0.5 w-full bg-primaryColor"></span>
            </span>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <ProductDetailsImage images={product?.media} />
      </div>

      <div className="block md:hidden md:h-[350px] sm:h-[300px] h-[280px]">
        <ProductImageSlider images={product?.media} />
      </div>

      <div className="flex lg:flex-row flex-col items-start gap-4">
        <div className="lg:w-[70%] w-full">
          <ProductInfo product={product?? null }/>
          {/* <SafetyTips /> */}
        </div>
        <div className="lg:w-[30%] md:w-[50%] w-full pt-5 lg:pt-0">
          <SellerBox seller={product?.user}/>
        </div>
      </div>

      <div></div>
    </section>
  );
};

export default ProductDetails;
