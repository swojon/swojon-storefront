"use client";

import React, { useEffect } from "react";
import { setCartDrawerClose } from "@/app/redux/cartDrawerSlice";
import { useSelector, useDispatch } from "react-redux";
import { Product, removeFromCart } from "@/app/redux/cartSlice";
import img from "@/public/pd.png";
import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";

import { useRouter } from "next/navigation";
import UpdateQuantity from "../SelectOptions/UpdateQuantity";

const CartDrawer = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const cartItems = useSelector((state: any) => state.productCart.items);

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    dispatch(setCartDrawerClose());
    setTimeout(() => {
      router.push("/cart");
    }, 300);
  };
  const isDrawerOpen = useSelector((state: any) => state.cart.open);

  useEffect(() => {
    const html = document.documentElement;

    if (isDrawerOpen) {
      html.classList.add("no-scroll");
    } else {
      html.classList.remove("no-scroll");
    }

    return () => {
      html.classList.remove("no-scroll");
    };
  }, [isDrawerOpen]);

  return (
    <section
      className={`fixed top-0 z-[1000]  w-full  h-screen lg:h-screen max-lg:[height:100dvh]   transition delay-200 duration-700 ease-in-out text-primaryColor ${
        isDrawerOpen ? "translate-x-0 " : "translate-x-full "
      }`}
    >
      <div
        onClick={() => dispatch(setCartDrawerClose())}
        className="w-full h-full  absolute left-0 top-0 z-100 "
      ></div>
      <div
        className={`lg:w-[28%] md:w-[45%] w-[76%] sm:w-[65%] bg-white resNav opacity-100   relative transition duration-700 ease-in-out delay-200 ms-auto`}
      >
        <div className="p-4 space-y-4 h-[calc(100vh-110px)] overflow-y-auto ">
          <h6 className="text-base font-semibold">Cart Items</h6>
          <div className="space-y-4">
            {cartItems.length === 0 ? (
              <p className="text-center text-lg text-secondColor">
                No product added
              </p>
            ) : (
              cartItems.map((item: Product) => (
                <div className="flex items-center gap-5" key={item.id}>
                  <div className="">
                    <input
                      id="comments"
                      aria-describedby="comments-description"
                      name="comments"
                      type="checkbox"
                      className="md:h-4 h-2.5 md:w-4 w-2.5 rounded border-gray-300 text-activeColor focus:ring-activeColor custom-checkedInput"
                    />
                  </div>

                  <div className="flex items-start gap-4">
                    <Image
                      src={item.image}
                      alt="product"
                      className="w-[80px] h-[80px] "
                    />

                    <div className="space-y-1">
                      <h6 className="text-[15px] line-clamp-1 text-primaryColor">
                        {item.description}
                      </h6>
                      <div className="flex justify-between gap-2">
                        <div className="text-sm text-secondColor ">
                          {item.discountPrice ? (
                            <div className="flex flex-wrap gap-1.5">
                              <span className="text-lime-700">
                                ৳{item.discountPrice}
                              </span>
                              <span className="   inline-block line-through">
                                ৳{item.price}
                              </span>
                            </div>
                          ) : (
                            <>৳{item.price}</>
                          )}
                        </div>
                        <UpdateQuantity item={item} />
                      </div>

                      <div className="pt-2 ">
                        <button
                          onClick={() => handleRemove(item.id)}
                          className="text-xl font-semibold  text-primaryColor float-right"
                        >
                          <AiOutlineDelete />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <footer className="absolute bg-white bottom-0 left-0 w-full min-h-[100px]  text-primaryColor  px-4 py-3 space-y-2 border-t">
          <div className="flex items-end justify-between gap-3">
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

            <div>
              <span className="font-semibold text-base">
                Total: ৳
                {cartItems.reduce(
                  (total: any, item: Product) =>
                    total +
                    (item.discountPrice || item.price) * (item.quantity || 1),
                  0
                )}
              </span>
            </div>
          </div>

          <button
            onClick={handleCheckout}
            className="bg-activeColor p-3 rounded-md text-white w-full hover:opacity-80 transition ease-in-out delay-150 duration-300"
          >
            Checkout to proceed
          </button>
        </footer>
      </div>
    </section>
  );
};

export default CartDrawer;
