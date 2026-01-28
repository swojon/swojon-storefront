"use client";
import { useEffect, useState, useRef } from "react";
import { useGetListingQuery } from "@/apollograph/generated";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import dynamic from "next/dynamic";

import { FiEdit } from "react-icons/fi";
import { useSession } from "next-auth/react";
import BreadCrumbsLoader from "../Loader/BreadCrumbsLoader";
import ProductInfoLoader from "../Loader/ProductInfoLoader";
import ThumbnailLoader from "../Loader/ThumbnailLoader";
import ProductInfo from "./ProductInfo";
import ProductThumbnailSlider from "./ProductThumbnailSlider";
import NotFound from "../NotMatched/NotFound";
import Review from "../Review/Review";
import ProductInfo2 from "./ProductInfo2";
import AboutItem from "./AboutItem";
import StickyCard from "./StickyCard";
import FeaturesSection from "./FeaturesSection";
import { useSelector } from "react-redux";
import { AppState } from "@/app/redux/store";

// const DynamicSafetyTips = dynamic(() => import("../SafetyTips/SafetyTips"), {ssr: false});
const DynamicFavoriteProduct = dynamic(
  () => import("../Products/FavoriteProduct"),
  { ssr: false }
);
const DynamicThumbnailSlider = dynamic(
  () => import("./ProductThumbnailSlider"),
  { ssr: false }
);

const ProductDetailsLoaded = ({ product }: { product: any }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<any>(product?.variants ? product.variants[0] : {});
  //add all images from product media and variants media
  let images = [];

  if (product?.media) {
    images.push(...product.media);
  }

  if (product?.variants) {
    product.variants.forEach((variant: any) => {
      if (variant.media) {
        images.push(...variant.media);
      }
    });
  }

  // const images = product?.media + product.variants?.map((variant: any) => variant.media) || [];
  console.log("images", images);
  // const filteredImages = useSelector(
  //   (state: AppState) => state.filterImages.filteredImages
  // );

  const productInfoRef = useRef<HTMLDivElement | null>(null);
  const { data: session, status } = useSession();
  

  const imagesToShow = selectedVariant?.media?.length > 0 ? selectedVariant.media : images


  return (
    <section className="">
      {/* <StickyCard product={product ?? null} />{" "} */}

      <div className="custom-container2 py-6 space-y-6 ">
        <div className="flex md:flex-row flex-col items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2 justify-center text-base text-secondColor">
              <Link href="/">
                <h6 className="">Home</h6>
              </Link>
              <MdKeyboardArrowRight />
              {product?.category?.parentCategory && (
                <>
                  <Link
                    href={`/categories/${product?.category?.parentCategory?.slug}`}
                  >
                    <h6 className="text-activeColor font-medium">
                      {product.category.parentCategory.name}
                    </h6>
                  </Link>
                  <MdKeyboardArrowRight />
                </>
              )}

              <Link href={`/categories/${product?.category?.slug}`}>
                <h6 className="">{product?.category?.name}</h6>
              </Link>
              <MdKeyboardArrowRight />
              <h6 className="text-primaryColor capitalize">{product?.title}</h6>
            </div>
      
          {/* <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1">
            <Image src={shareIcon} alt="share icon" />
            <span className="text-sm text-primaryColor relative  leading-0 cursor">
              share
              <span className="absolute left-0 bottom-0.5 h-0.5 w-full bg-secondColor"></span>
            </span>
          </div>

          <div className="flex items-center space-x-1">
            <Image src={saveIcon} alt="share icon" />
            <span className="text-sm text-primaryColor relative  leading-0 cursor">
              save
              <span className="absolute left-0 bottom-0.5 h-0.5 w-full bg-secondColor"></span>
            </span>
          </div>
        </div> */}
        </div>

        {/* <div className="flex flex-col md:flex-row md:gap-8 gap-2  lg:h-[850px] md:h-[600px]  rounded-md  ">
        <div className="lg:w-[58%] md:w-[50%] w-full h-full  space-y-6  ">
          {loading ? (
            <ThumbnailLoader />
          ) : (
            <ProductThumbnailSlider images={product?.media} />
          )}
          <div className="border-b "></div>
          {loading ? (
            <MeetTheSellerLoader />
          ) : (
            <div className="hidden md:block">
              <MeetSeller seller={product?.user} />
            </div>
          )}
        </div>
        <div className="lg:w-[42%] md:w-[50%] w-full h-full  md:overflow-auto scroll-hidden">
          {loading ? (
            <ProductInfoLoader />
          ) : (
            <>
              <ProductInfo product={product ?? null} />
              <div className="md:hidden">
                <MeetSeller seller={product?.user} />
              </div>
            </>
          )}
        </div>
      </div> */}

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2 justify-between items-center">
            <div className="flex items-center gap-3">
              {status === "authenticated" &&
                product?.user.id === session?.user?.id && (
                  <Link
                    href={`/edit-product/${product?.id}`}
                    className="w-12	h-12 border border-[#F5F5F5] rounded-full flex justify-center items-center"
                  >
                    <FiEdit className="text-lg text-primaryColor" />
                  </Link>
                )}
              {status === "authenticated" &&
                product?.user.id != session?.user?.id && (
                  <button className="w-12	h-12 border border-[#F5F5F5] rounded-full flex justify-center items-center">
                    <DynamicFavoriteProduct listing={product!} />
                  </button>
                )}

              {/* <button className="w-12	h-12 border border-[#F5F5F5] rounded-full flex justify-center items-center">
              <FiShare className="text-lg text-primaryColor"/>
            </button> */}
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:gap-10 gap-2  ">
            <div className="xl:w-[60%] lg:w-[57%]  md:w-[50%] w-full h-full space-y-6 ">
              
                <DynamicThumbnailSlider images={imagesToShow} videoUrl={product.videoUrl} />
            

              {/* <div className="pt-5 2xl:h-[450px] xl:h-[400px] lg:h-[350px] md:h-[300px] h-[300px] w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY"
                ></iframe>
              </div> */}
            </div>

            <div
              className="xl:w-[40%] lg:w-[43%]  md:w-[50%] w-full  rounded-md"
              ref={productInfoRef}
            >
             
                <div className=" w-full h-full">
                  <ProductInfo2 product={product ?? null} 
                  selectedVariant={selectedVariant} 
                  setSelectedVariant={setSelectedVariant} 
                  />
                </div>
             
            </div>
          </div>
        </div>

        <div className="w-full  ">
          {/* <Review /> */}
          <AboutItem product={product} />
          <FeaturesSection listingId={product.id}/>
        </div>

        {/* <div className="flex lg:flex-row flex-col items-start gap-4">
        <div className="lg:w-[100%] w-full">
          <DynamicSafetyTips />
        </div>
      </div> */}
      </div>
    </section>
  );
};

export default ProductDetailsLoaded;
