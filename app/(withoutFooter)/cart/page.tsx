"use client";

import React, { useState } from "react";
import product from "@/public/hero/Baby Food.png";
import Image from "next/image";
import ResponsiveSelectOptions from "@/components/SelectOptions/ResponsiveSelectOptions";
import { AiOutlineDelete } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Product, removeFromCart } from "@/app/redux/cartSlice";
import UpdateQuantity from "@/components/SelectOptions/UpdateQuantity";

const Cart = () => {
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const dispatch = useDispatch();

  const cartItems = useSelector((state: any) => state.productCart.items);

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <section className=" pt-5 space-y-4 text-primaryColor relative scroll-smooth hidden-scroll">
      <h5 className="text-2xl font-bold px-20">
        Cart{" "}
        <span className="font-normal text-secondColor text-xl">(4 items)</span>
      </h5>

      <div className="flex items-start max-h-[70vh] overflow-auto  gap-10 px-20   transition ease-in delay-300">
        <div className="w-[54%]  ">
          {cartItems.map((item: Product) => (
            <div
              key={item?.id}
              className="flex items-start justify-between py-4 gap-6 border-b border-gray-100"
            >
              <div className="flex items-start gap-5">
                <Image
                  src={item.image}
                  className="max-w-[150px] max-h-[150px] object-cover aspect-square"
                  alt="product"
                />

                <div className="space-y-1  text-secondColor text-base">
                  <h6 className="text-base font-semibold text-primaryColor">
                    {item.title}
                  </h6>
                  <span className="block ">Baby&apos;s Food</span>
                  <p className="line-clamp-1 pe-5">{item.description}</p>

                  <div className="flex gap-5  pt-4 pe-5">
                    <div className="flex gap-4">
                      <ResponsiveSelectOptions
                        title="size"
                        padding="px-2 py-1"
                      />
                      <UpdateQuantity item={item} />
                    </div>

                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-xl font-semibold text-primaryColor hover:bg-gray-100 px-2 transition duration-300 ease-in"
                    >
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
              </div>

              <div className="ps-5 font-bold">
                {item.discountPrice ? (
                  <div className="flex  gap-2">
                    <span className="text-lime-700">৳{item.discountPrice}</span>
                    <span className="   inline-block line-through">
                      ৳{item.price}
                    </span>
                  </div>
                ) : (
                  <>৳{item.price}</>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="w-[32%] fixed top-20 right-20">
          <div className="flex flex-col gap-4">
            <div className=" px-6 py-2 border rounded-md space-y-2 bg-white shadow">
              {/* <h6 className="text-xl font-semibold">Shipping to</h6> */}
              <div className="grid grid-cols-2 gap-3">
                <div className="">
                  <label className="text-base font-semibold text-secondColor">
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John doe"
                    className="block   p-2 text-base text-gray-900 placeholder:text-secondColor focus:outline-none sm:text-base border border-gray-400 w-full rounded-md"
                  />
                </div>

                <div className="">
                  <label className="text-base font-semibold text-secondColor">
                    Phone Number
                  </label>

                  <input
                    id="name"
                    name="number"
                    type="phone"
                    placeholder="0157xxxxxxx"
                    className="block   p-2 text-base text-gray-900 placeholder:text-secondColor focus:outline-none sm:text-base border border-gray-400 w-full rounded-md"
                  />
                </div>
              </div>

              <div className="pb-2">
                <label className="text-base font-semibold text-secondColor">
                  Address
                </label>

                <textarea
                  id="address"
                  name="address"
                  placeholder="1/a mohammadpur, dhaka"
                  rows={3}
                  className="block p-2 text-base text-gray-900 placeholder:text-secondColor focus:outline-none sm:text-base border border-gray-400 w-full rounded-md"
                ></textarea>
              </div>
            </div>
            <div className=" px-6 py-2 border rounded-md space-y-2 bg-white shadow">
              {/* <h6 className="text-xl font-semibold">Payment Method</h6>{" "} */}
              {/* <h6 className="text-xl font-semibold">Summary</h6>
              <div className="flex items-start justify-between border-b border-gray-300 ">
                <span className="block text-base font-medium">
                  Subtotal (3 items)
                </span>

                <div className="text-right">
                  <span className="block text-base font-semibold">৳ 1000</span>
                  <span className="text-sm text-secondColor">
                    (Inclusive of VAT)
                  </span>
                </div>
              </div>
              <div className="flex items-start justify-between  border-gray-300 ">
                <span className="block text-base font-medium">Total</span>

                <div className="text-right">
                  <span className="block text-base font-semibold">৳ 1000</span>
                </div>
              </div>
              <div className="text-sm text-secondColor flex items-center gap-4">
                <BsTruck className="text-2xl" />
                <p>
                  Delivery fee (if applicable) will be calculated at checkout.
                </p>
              </div> */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={() => setPaymentMethod("cash")}
                  className={`${
                    paymentMethod === "cash"
                      ? "border-activeColor text-primaryColor"
                      : "border-secondColor text-secondColor"
                  } border-2  hover:opacity-80  w-full px-3 py-4 rounded-md font-bold text-lg `}
                >
                  Cash on Delivery
                </button>

                <button
                  onClick={() => setPaymentMethod("online")}
                  className={`${
                    paymentMethod === "online"
                      ? "border-activeColor text-primaryColor"
                      : "border-secondColor text-secondColor"
                  } border-2  hover:opacity-80 text-primaryColor w-full px-3 py-4 rounded-md font-bold text-lg `}
                >
                  Payment Now
                </button>
              </div>
              <div className="space-y-2 py-2">
                <span className="text-base font-semibold">
                  Do you have a promo code?
                </span>

                <input
                  id="promo"
                  name="promo"
                  type="text"
                  placeholder="Enter Promo Code"
                  className="block   p-3 text-base text-gray-900 placeholder:text-secondColor focus:outline-none sm:text-base border border-gray-400 w-full rounded-md"
                />
              </div>
              {/* <div className="pt-4">
              <button className="bg-activeColor hover:opacity-80 text-white w-full p-3 rounded-md font-bold text-lg ">
                Checkout
              </button>
            </div> */}
            </div>
          </div>
        </div>
      </div>

      <footer className="fixed min-h-[50px] w-full bottom-0 left-0 right-0 border border-gray-300/50 bg-white py-4 px-20 flex items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <div className="flex items-center  gap-2">
            <div className="flex items-center">
              <input
                id="comments"
                aria-describedby="comments-description"
                name="comments"
                type="checkbox"
                className="md:h-4 h-2.5 md:w-4 w-2.5 rounded border-gray-300 text-activeColor focus:ring-activeColor custom-checkedInput"
              />
            </div>
            <span className="block">All</span>
          </div>
          <span className="font-semibold text-lg block">
            Total: ৳
            {cartItems.reduce(
              (total: any, item: Product) =>
                total +
                (item.discountPrice || item.price) * (item.quantity || 1),
              0
            )}
          </span>
        </div>
        <div className="flex items-center gap-5">
          <button className="border border-primaryColor hover:opacity-80 text-secondColor w-[200px] px-6 py-2 rounded-md font-bold text-lg ">
            Back to shopping
          </button>
          <button className="bg-activeColor border border-activeColor hover:opacity-80 text-white w-[200px] px-6 py-2 rounded-md font-bold text-lg ">
            Checkout
          </button>
        </div>
      </footer>
    </section>
  );
};

export default Cart;
