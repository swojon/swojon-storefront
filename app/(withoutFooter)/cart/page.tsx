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
import img from "@/public/pd.png";
import { LuTrash2 } from "react-icons/lu";

const Cart = () => {
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [popup, setPopup] = useState(false);
  const dispatch = useDispatch();

  const cartItems = useSelector((state: any) => state.productCart.items);

  const totalQuantity = cartItems.reduce(
    (total: any, item: Product) => total + (item.quantity || 1),
    0
  );

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <section className="lg:pt-5 pt-3 lg:space-y-4 space-y-2 text-primaryColor relative scroll-smooth hidden-scroll bg-gray-100/90 w-full min-h-[calc(100vh-65px)]">
      <div className="lg:space-y-4 space-y-2">
        <h5 className="lg:text-2xl text-lg font-bold xl:px-20 px-5 lg:px-10">
          Cart{" "}
          <span className="font-normal text-secondColor lg:text-xl text-base">
            ( {totalQuantity} items )
          </span>
        </h5>

        <div className="flex items-start lg:max-h-[calc(100vh-150px)] max-h-[calc(100vh-250px)] overflow-auto  rounded-md lg:gap-10 xl:px-20 sm:px-5 px-3 lg:px-10  transition ease-in delay-300 ">
          <div className="lg:w-[calc(100vw-620px)] rounded-md xl:p-8 lg:p-4 p-3 bg-white xl:min-w-[calc(100vw-600px)] md:min-w-[calc(100vw-500px)] w-full ">
            {cartItems.length === 0 ? (
              <p className="text-center text-lg text-secondColor">
                No product added
              </p>
            ) : (
              cartItems.map((item: any) => (
                <div
                  key={item?.id}
                  className="flex sm:flex-row flex-col sm:items-center justify-between py-5 gap-6 border-b last:border-b-0 border-gray-300"
                >
                  <div className="flex items-center xl:gap-6  2xl:gap-5 md:gap-3 gap-3">
                    <Image
                      src={item.media?.length > 0 ? item.media[0].url : img}
                      alt="product"
                      width={400}
                      height={600}
                      className="xl:w-[120px] lg:w-[80px] w-[60px] xl:h-[160px] lg:h-[100px] h-[90px] object-cover rounded-md "
                    />

                    <div className="lg:space-y-1  text-secondColor lg:text-base text-sm">
                      <h6 className="xl:text-xl lg:text-lg text-base line-clamp-1 font-bold text-primaryColor pb-1">
                        {item.title}
                      </h6>
                      <span className="block xl:text-base text-sm">
                        Baby&apos;s Food
                      </span>
                      <span className="block xl:text-base text-sm">
                        Size: 2
                      </span>
                      {/* <p className="line-clamp-1 pe-5 ">{item.description}</p> */}
                    </div>
                  </div>

                  <div className="flex items-center gap-10 font-bold text-right xl:text-xl lg:text-lg text-base ">
                    <div className="flex gap-4">
                      <UpdateQuantity
                        item={item}
                        padding="xl:px-2  xl:py-1 py-x"
                        fontSize="xl:text-xl lg:text-lg text-base"
                      />
                    </div>

                    <div className="2xl:w-[200px] xl:w-[80px] line-clamp-1">
                      {" "}
                      {item.discountPrice ? (
                        <div className="flex flex-wrap  gap-2 text-activeColor">
                          <span className="text-lime-700">
                            ৳{item.discountPrice}
                          </span>
                          <span className="inline-block line-through">
                            ৳{item.price}
                          </span>
                        </div>
                      ) : (
                        <span className="text-activeColor">৳{item.price}</span>
                      )}
                    </div>

                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-xl font-semibold text-primaryColor hover:bg-gray-100 px-2 transition duration-300 ease-in"
                    >
                      <LuTrash2 />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          <div
            className={`xl:max-w-[420px] max-w-[400px] hidden lg:block lg:fixed top-20 xl:right-20 lg:right-10 right-5 h-[calc(100vh-90px)] bg-white rounded-md transition ease-in delay-300
         ${cartItems.length === 0 ? "opacity-60 pointer-events-none" : ""}`}
          >
            <CheckoutInfo
              setPaymentMethod={setPaymentMethod}
              paymentMethod={paymentMethod}
              cartItems={cartItems}
            />
          </div>
        </div>
      </div>

      {/* Mobile ver */}

      <div
        className={`fixed lg:hidden min-h-[50px]  w-full bottom-0 left-0 right-0 border border-gray-300/50 bg-white py-4 xl:px-20 px-5 lg:px-10   ${
          cartItems.length === 0 ? "opacity-60 pointer-events-none" : ""
        }`}
      >
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
      </div>

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
        <div className="absolute bottom-0 left-0 right-0 border border-gray-300/50 bg-white py-4 xl:px-20 px-3 lg:px-10">
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
    <div className="flex flex-col gap-2 2xl:pt-5 xl:pt-4 pt-3 lg:px-6 md:px-5 px-2 2xl:space-y-5 xl:space-y-4 space-y-3 h-full  relative  ">
      <div className="scroll-smooth overflow-y-auto lg:h-[calc(100vh-180px)] hidden-scroll 2xl:space-y-5 xl:space-y-4 space-y-3">
        <div className="rounded-md 2xl:space-y-4 xl:space-y-3 md:space-y-3 space-y-2">
          <h6 className="lg:text-lg md:text-base text-sm font-semibold text-primaryColor">
            Shipping To
          </h6>

          <div className="grid grid-cols-2 gap-3">
            <div className="md:text-base text-sm">
              {/* <label className=" font-semibold ">Name</label> */}

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                className="block  xl:p-2  p-2  text-gray-900 placeholder:text-primaryColor focus:outline-none  border border-gray-400 w-full rounded-xl bg-gray-100/90 "
              />
            </div>

            <div className="md:text-base text-sm">
              {/* <label className=" font-semibold ">Phone Number</label> */}

              <input
                id="name"
                name="number"
                type="phone"
                placeholder="Phone Number"
                className="block xl:p-2 lg:p-2 p-2  text-gray-900 placeholder:text-primaryColor focus:outline-none  border border-gray-400 w-full rounded-xl bg-gray-100/90"
              />
            </div>
          </div>

          <div className=" md:text-base text-sm">
            {/* <label className=" font-semibold ">Address</label> */}

            <textarea
              id="address"
              name="address"
              placeholder="Address"
              rows={2}
              className="block xl:p-2 p-2  text-gray-900 placeholder:text-primaryColor focus:outline-none  border border-gray-400 w-full rounded-xl bg-gray-100/90"
            ></textarea>
          </div>
        </div>

        <div className="border-b border-secondColor " />

        <div className=" 2xl:space-y-6 xl:space-y-4  space-y-3">
          <div className="md:space-y-2 space-y-1 2xl:pb-4">
            <label className="lg:text-lg md:text-base text-sm font-semibold block leading-none  p-0">
              Do you have a promo code?
            </label>

            <input
              id="promo"
              name="promo"
              type="text"
              placeholder="Enter Promo Code"
              className="block  xl:p-2 p-2 md:text-base text-gray-900 placeholder:text-primaryColor focus:outline-none  border border-gray-400 w-full rounded-xl bg-gray-100/90"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 rounded-lg bg-activeColor/10 px-5 xl:py-6 py-4">
            <button
              onClick={() => setPaymentMethod("cash")}
              className={`${
                paymentMethod === "cash"
                  ? "border-activeColor text-primaryColor"
                  : "border-secondColor text-secondColor"
              } border-2  flex flex-col gap-1 items-center hover:opacity-80  w-full xl:px-2 px-1 xl:py-4 py-2 rounded-lg font-bold xl:text-base lg:text-base text-sm bg-white`}
            >
              <Image
                src="/money.png"
                alt=""
                width={200}
                height={200}
                className="xl:w-[40px] w-[30px]"
              />
              <span className="block"> Cash on Delivery</span>
            </button>

            <button
              onClick={() => setPaymentMethod("online")}
              className={`${
                paymentMethod === "online"
                  ? "border-activeColor text-primaryColor"
                  : "border-secondColor text-secondColor"
              } border-2  flex flex-col gap-1 items-center  hover:opacity-80 text-primaryColor w-full xl:px-2 px-1 xl:py-4 py-2 rounded-lg font-bold xl:text-base lg:text-base text-sm bg-white`}
            >
              <Image
                src="/payment-method.png"
                alt=""
                width={200}
                height={200}
                className="xl:w-[40px] w-[30px]"
              />{" "}
              <span className="block"> Payment Now</span>
            </button>
          </div>
        </div>
      </div>

      <div className="lg:pt-4 pt-2 lg:absolute relative bottom-0 pb-3 w-full left-0 right-0 lg:px-6 ">
        <button className="bg-activeColor hover:opacity-80 text-white w-full lg:p-3 p-2 rounded-lg font-bold lg:text-lg text-base">
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
  );
};
