import Image from "next/image";
import React from "react";
import ResponsiveSelectOptions from "../SelectOptions/ResponsiveSelectOptions";
import SellerReviewDropdown from "../Review/SellerReviewDropdown";

const StickyCard = ({
  product,
  isVisible,
}: {
  product: any;
  isVisible: any;
}) => {
  return (
    <div
      className={`fixed w-full top-0 left-0 right-0 z-[1000] h-[120px] border-b bg-white shadow-md  px-[2vw] flex items-center transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between gap-5 w-full">
        <div className="flex items-center gap-6">
          <Image
            src={product?.media[0]?.url}
            width={700}
            height={700}
            alt={product?.title}
            className="h-[80px] w-[70px] object-cover"
          />

          <div className="flex flex-col gap-2">
            <h6 className="line-clamp-1 text-base font-semibold">
              John Timberland Outdoor Post Light Veranda Bronze 102 4-Light
              Street Lantern Champagne Hammered Glass for hafgds Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Officiis tenetur
              pariatur iure quos cumque beatae minima incidunt debitis quas
              animi, id eius quaerat laboriosam unde sed inventore doloribus
              fuga possimus.
            </h6>{" "}
            <SellerReviewDropdown sellerId={product?.id} />
          </div>
        </div>

        <div className="flex items-center gap-5 ">
          <span className="block font-semibold ">৳{product?.price}</span>
          <ResponsiveSelectOptions title="Qty" />{" "}
          <button className="p-3 w-[120px] bg-activeColor border border-activeColor rounded-2xl text-white font-semibold ">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyCard;
