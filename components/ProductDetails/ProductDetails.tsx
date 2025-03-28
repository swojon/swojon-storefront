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

const ProductDetails = ({ productId }: { productId: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const filteredImages = useSelector(
    (state: AppState) => state.filterImages.filteredImages
  );

  const productInfoRef = useRef<HTMLDivElement | null>(null);
  const { data: session, status } = useSession();
  const { data, error, loading } = useGetListingQuery({
    variables: {
      id: productId,
    },
    skip: !productId,
  });
  const product = data?.getListing;

  const imagesToShow =
    filteredImages.length > 0 ? filteredImages : product?.media;

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 600) {
  //       setIsVisible(true);
  //     } else {
  //       setIsVisible(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { root: null, threshold: 0 }
    );

    if (productInfoRef.current) {
      observer.observe(productInfoRef.current);
    }

    return () => {
      if (productInfoRef.current) {
        observer.unobserve(productInfoRef.current);
      }
    };
  }, []);

  if (!loading && !data) {
    return (
      <NotFound
        title="Oops! We can’t seem to find that product"
        subtitle="It might have been moved, or maybe the link is broken."
        cta={{
          text: "Explore Products",
          link: "/explore",
        }}
      />
    );
  }

  return (
    <section>
      {/* <StickyCard product={product ?? null} />{" "} */}

      <StickyCard product={product ?? null} isVisible={isVisible} />

      <div className="custom-container2 py-6 space-y-6 ">
        <div className="flex md:flex-row flex-col items-center justify-between gap-2">
          {loading ? (
            <BreadCrumbsLoader />
          ) : (
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
          )}

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
              {loading ? (
                <ThumbnailLoader />
              ) : (
                <DynamicThumbnailSlider images={imagesToShow} />
              )}
            </div>
            <div
              className="xl:w-[40%] lg:w-[43%]  md:w-[50%] w-full  rounded-md"
              ref={productInfoRef}
            >
              {loading ? (
                <ProductInfoLoader />
              ) : (
                <div className=" w-full h-full">
                  <ProductInfo2 product={product ?? null} />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full  ">
          {/* <Review /> */}
          <AboutItem />
          <FeaturesSection />
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

export default ProductDetails;
