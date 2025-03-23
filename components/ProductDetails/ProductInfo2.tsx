import React, { useState } from "react";
import { IoStorefrontOutline } from "react-icons/io5";
import { RiShoppingBag2Line } from "react-icons/ri";
import { LiaShippingFastSolid } from "react-icons/lia";
import ResponsiveSelectOptions from "../SelectOptions/ResponsiveSelectOptions";
import SellerReviewDropdown from "../Review/SellerReviewDropdown";

const DELIVERYMETHOD = [
  {
    id: 11,
    icon: <IoStorefrontOutline />,
    title: "Pickup",
    desc: "Ready within 2 hours",
    destination: "Cedar Rapids South",
    pl: "Pick up at",
  },
  {
    id: 12,
    icon: <RiShoppingBag2Line />,
    title: "Delivery",
    desc: "Check availability",
    destination: "520101",
    pl: "Same Day Delivery",
  },
  {
    id: 13,
    icon: <LiaShippingFastSolid />,
    title: "Shipping",
    desc: "Arrives by Wed, Mar 26",
    destination: "52404",
    pl: "Ship to",
  },
];

const ProductInfo2 = ({ product }: { product: any }) => {
  const [activeMethod, setActiveMethod] = useState(DELIVERYMETHOD[0]);

  console.log("active", activeMethod);
  return (
    <div>
      <div className="space-y-5 text-primaryColor">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold ">{product?.title}</h2>
          <SellerReviewDropdown sellerId={product?.id} />
          <span className="lg:text-2xl text-lg font-lexed font-bold  block">
            ৳{product?.price}
          </span>
        </div>
        <div className="flex flex-wrap gap-3 ">
          {DELIVERYMETHOD.map((method) => (
            <div
              onClick={() => setActiveMethod(method)}
              key={method.id}
              className={`w-[120px] border ${
                activeMethod.id === method.id
                  ? "border-activeColor"
                  : " border-secondColor"
              }  rounded-md p-2.5 cursor-pointer space-y-2`}
            >
              <span
                className={`text-xl ${
                  activeMethod.id === method.id
                    ? "text-activeColor"
                    : " text-secondColor"
                }`}
              >
                {method.icon}
              </span>

              <span className="block text-base  text-primaryColor font-medium">
                {method.title}
              </span>

              <span className="block text-xs  text-primaryColor ">
                {method.desc}
              </span>
            </div>
          ))}
        </div>
        <div className="space-y-2 ">
          <div className="flex gap-1">
            <span className="text-primaryColor font-semibold text-lg">
              {activeMethod.pl}
            </span>
            <span className="text-primaryColor font-semibold  text-lg underline">
              {activeMethod.destination}
            </span>
          </div>

          <span className="text-orange-400 ">Only 4 left</span>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <ResponsiveSelectOptions />{" "}
            <div className="w-full flex-1 ">
              <button className="p-3 w-full bg-activeColor border border-activeColor rounded-2xl text-white font-semibold">
                Add to cart
              </button>
            </div>
          </div>
          <button className="p-3 w-full  border border-secondColor rounded-2xl text-primaryColor ">
            Sign in to buy now
          </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default ProductInfo2;
