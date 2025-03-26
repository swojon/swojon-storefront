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

const COLOR = [
  { id: 11, color: "bg-red-500", price: 400, colorName: "red" },
  { id: 12, color: "bg-purple-500", colorName: "purple" },
  { id: 13, color: "bg-green-600", colorName: "green" },
  { id: 14, color: "bg-sky-700", price: 400, colorName: "sky" },
];

const SIZES = [
  { id: 11, size: 4 },
  { id: 12, size: 6 },
  { id: 13, size: 8 },
  { id: 14, size: 10 },
];

const ProductInfo2 = ({ product }: { product: any }) => {
  const [activeMethod, setActiveMethod] = useState(DELIVERYMETHOD[0]);
  const [activeColor, setActiveColor] = useState(COLOR[0]);
  const [activeSize, setActiveSize] = useState(SIZES[0]);

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
        <div className="space-y-2">
          <span className="text-primaryColor font-semibold text-lg">
            Color:{" "}
            <span className="text-secondColor font-medium capitalize text-base">
              {activeColor.colorName}
            </span>
          </span>
          <div className="flex items-start gap-3">
            {COLOR.map((item) => (
              <div key={item.id} className="space-y-1">
                <div
                  onClick={() => setActiveColor(item)}
                  className={`${
                    item.id === activeColor.id
                      ? "border-activeColor"
                      : "border-gray-300"
                  } border-2  rounded-md cursor-pointer`}
                >
                  <span
                    className={`${item.color} w-[40px] h-[40px] rounded-md border-2 border-white block`}
                  ></span>
                </div>
                {item.price && (
                  <span className="text-sm text-center block font-semibold text-activeColor">
                    ৳{item.price}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <span className="text-primaryColor font-semibold text-lg">
            Size:{" "}
            <span className="text-secondColor font-medium capitalize text-base">
              {activeSize.size}
            </span>
          </span>

          <div className="grid grid-cols-4 gap-3 ">
            {SIZES.map((item) => (
              <div
                onClick={() => setActiveSize(item)}
                key={item.id}
                className={`rounded-md border ${
                  activeSize.id === item.id
                    ? "border-secondColor"
                    : "border-gray-200"
                } p-1 text-sm text-center cursor-pointer`}
              >
                {item.size}
              </div>
            ))}
          </div>
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
