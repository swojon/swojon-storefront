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
import { IoMdClose } from "react-icons/io";

const Cart = () => {
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [popup, setPopup] = useState(false);
  const dispatch = useDispatch();

  const cartItems = useSelector((state: any) => state.productCart.items);

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <section className="lg:pt-5 pt-3 lg:space-y-4 space-y-2 text-primaryColor relative scroll-smooth hidden-scroll">
      <h5 className="lg:text-2xl text-lg font-bold xl:px-20 px-5 lg:px-10">
        Cart{" "}
        <span className="font-normal text-secondColor lg:text-xl text-base">
          (4 items)
        </span>
      </h5>

      <div className="flex items-start lg:max-h-[calc(100vh-150px)] max-h-[calc(100vh-250px)] overflow-auto  lg:gap-10 xl:px-20 px-5 lg:px-10  transition ease-in delay-300 ">
        <div className="lg:w-[calc(100vw-650px)]  w-full ">
          {cartItems.map((item: Product) => (
            <div
              key={item?.id}
              className="flex items-start justify-between py-4 gap-6 border-b border-gray-100"
            >
              <div className="flex items-start gap-5">
                <Image
                  src={item.image}
                  className="xl:max-w-[150px] lg:max-w-[100px] max-w-[70px] xl:max-h-[150px] lg:max-h-[100px] max-h-[70px] object-cover aspect-square"
                  alt="product"
                />

                <div className="lg:space-y-1  text-secondColor lg:text-base text-sm">
                  <h6 className=" font-semibold text-primaryColor">
                    {item.title}
                  </h6>
                  <span className="block ">Baby&apos;s Food</span>
                  <p className="line-clamp-1 pe-5 ">{item.description}</p>

                  <div className="flex gap-5  xl:pt-4 pt-3 xl:pe-5 pe-3">
                    <div className="flex gap-4">
                      <ResponsiveSelectOptions
                        title="size"
                        padding="xl:px-2 px-1.5 xl:py-1 py-x"
                        fontSize="xl:text-base text-sm"
                      />
                      <UpdateQuantity
                        item={item}
                        padding="xl:px-2 px-1.5 xl:py-1 py-x"
                      />
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

              <div className="ps-5 font-bold text-right lg:text-base text-sm">
                {item.discountPrice ? (
                  <div className="flex  gap-2">
                    <span className="text-lime-700">৳{item.discountPrice}</span>
                    <span className="inline-block line-through">
                      ৳{item.price}
                    </span>
                  </div>
                ) : (
                  <span>৳{item.price}</span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="xl:max-w-[500px] max-w-[400px] hidden lg:block lg:fixed top-20 xl:right-20 lg:right-10 right-5 ">
          <CheckoutInfo
            setPaymentMethod={setPaymentMethod}
            paymentMethod={paymentMethod}
            cartItems={cartItems}
          />
        </div>
      </div>

      <footer className="fixed lg:hidden min-h-[50px] w-full bottom-0 left-0 right-0 border border-gray-300/50 bg-white py-4 xl:px-20 px-5 lg:px-10 ">
        <div className="space-y-5 text-primaryColor font-medium">
          <div className="flex items-center justify-between text-base">
            <p className="">Payment Methods</p>

            <span
              onClick={() => setPopup(true)}
              className="block text-right text-secondColor/50 cursor-pointer"
            >
              +Add Now
            </span>
          </div>
          <button className="bg-activeColor border border-activeColor opacity-70 text-white px-3 py-2 w-full rounded-md font-bold text-base ">
            <span>
              Pay ৳
              {cartItems.reduce(
                (total: any, item: Product) =>
                  total +
                  (item.discountPrice || item.price) * (item.quantity || 1),
                0
              )}
            </span>
          </button>
        </div>
      </footer>

      {/* mobile pop up */}
      <div
        className={`${
          popup ? "translate-y-0 " : "translate-y-full "
        } fixed lg:hidden h-full w-full bottom-0   py-4 xl:px-20 px-5 lg:px-10 z-[1000] transition delay-200 duration-700 ease-in-out`}
      >
        <div
          onClick={() => setPopup(false)}
          className="w-full h-full bg-white/70 absolute left-0 top-0 z-100 "
        ></div>
        <div className="absolute bottom-0 left-0 right-0 border border-gray-300/50 bg-white py-4 xl:px-20 px-5 lg:px-10">
          <button
            onClick={() => setPopup(false)}
            className="px-1 cursor-pointer py-1 border rounded-full inline-block"
          >
            <IoMdClose />
          </button>
          <CheckoutInfo
            setPaymentMethod={setPaymentMethod}
            paymentMethod={paymentMethod}
            cartItems={cartItems}
          />
        </div>
      </div>
    </section>
  );
};

export default Cart;

const CheckoutInfo = ({
  setPaymentMethod,
  paymentMethod,
  cartItems,
}: {
  setPaymentMethod: any;
  paymentMethod: any;
  cartItems: any;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="lg:px-6 md:px-5 px-3 py-2 lg:border rounded-md space-y-2 bg-white lg:shadow">
        <div className="grid grid-cols-2 gap-3">
          <div className="md:text-base text-sm">
            <label className=" font-semibold ">Name</label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="John doe"
              className="block  xl:p-2 lg:p-1 p-1  text-gray-900 placeholder:text-secondColor focus:outline-none  border border-gray-400 w-full rounded-md"
            />
          </div>

          <div className="md:text-base text-sm">
            <label className=" font-semibold ">Phone Number</label>

            <input
              id="name"
              name="number"
              type="phone"
              placeholder="0157xxxxxxx"
              className="block xl:p-2 lg:p-1 p-1  text-gray-900 placeholder:text-secondColor focus:outline-none  border border-gray-400 w-full rounded-md"
            />
          </div>
        </div>

        <div className="lg:pb-2 md:text-base text-sm">
          <label className=" font-semibold ">Address</label>

          <textarea
            id="address"
            name="address"
            placeholder="1/a mohammadpur, dhaka"
            rows={3}
            className="block xl:p-2 lg:p-1 p-1  text-gray-900 placeholder:text-secondColor focus:outline-none text-base border border-gray-400 w-full rounded-md"
          ></textarea>
        </div>
      </div>
      <div className=" lg:px-6 md:px-5 px-3 py-2 lg:border rounded-md space-y-2 bg-white lg:shadow">
        <div className="grid grid-cols-2 gap-3 lg:pt-2">
          <button
            onClick={() => setPaymentMethod("cash")}
            className={`${
              paymentMethod === "cash"
                ? "border-activeColor text-primaryColor"
                : "border-secondColor text-secondColor"
            } border-2  hover:opacity-80  w-full xl:px-2 px-1 xl:py-4 py-2 rounded-md font-bold xl:text-lg lg:text-base text-sm`}
          >
            Cash on Delivery
          </button>

          <button
            onClick={() => setPaymentMethod("online")}
            className={`${
              paymentMethod === "online"
                ? "border-activeColor text-primaryColor"
                : "border-secondColor text-secondColor"
            } border-2  hover:opacity-80 text-primaryColor w-full xl:px-2 px-1 xl:py-4 py-2 rounded-md font-bold xl:text-lg lg:text-base text-sm `}
          >
            Payment Now
          </button>
        </div>
        <div className="md:space-y-2 space-y-1 lg:py-2">
          <span className="lg:text-base text-sm font-semibold">
            Do you have a promo code?
          </span>

          <input
            id="promo"
            name="promo"
            type="text"
            placeholder="Enter Promo Code"
            className="block  xl:p-2 lg:p-1 p-1 md:text-base text-gray-900 placeholder:text-secondColor focus:outline-none text-sm border border-gray-400 w-full rounded-md"
          />
        </div>
        <div className="lg:pt-4 pt-2">
          <button className="bg-activeColor hover:opacity-80 text-white w-full lg:p-3 p-2 rounded-md font-bold lg:text-lg text-base">
            <span>
              Pay ৳
              {cartItems.reduce(
                (total: any, item: Product) =>
                  total +
                  (item.discountPrice || item.price) * (item.quantity || 1),
                0
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
