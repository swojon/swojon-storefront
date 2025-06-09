"use client";

import React, { useEffect } from "react";
import { setCartDrawerClose } from "@/app/redux/cartDrawerSlice";
import { useSelector, useDispatch } from "react-redux";
import { CartItem, Product, removeFromCart } from "@/app/redux/cartSlice";
import img from "@/public/pd.png";
import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";

import { useRouter } from "next/navigation";
import UpdateQuantity from "../SelectOptions/UpdateQuantity";
import { LuTrash2 } from "react-icons/lu";
import NotMatched from "../NotMatched/NotMatched";

const CartDrawer = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const cartItems = useSelector((state: any) => state.productCart.items);

  const handleRemove = ({itemId, variantId}: CartItem) => {
    dispatch(removeFromCart({itemId, variantId}));
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
      className={`fixed top-0 z-[10000]  w-full  h-screen lg:h-screen max-lg:[height:100dvh]   transition delay-200 duration-700 ease-in-out text-primaryColor ${
        isDrawerOpen ? "translate-x-0 " : "translate-x-full "
      }`}
    >
      <div
        onClick={() => dispatch(setCartDrawerClose())}
        className="w-full h-full  absolute left-0 top-0 z-100 "
      ></div>
      <div
        className={`2xl:w-[30%] xl:w-[35%] lg:w-[45%] md:w-[55%] sm:w-[65%] w-[80%] bg-white resNav opacity-100   relative transition duration-700 ease-in-out delay-200 ms-auto border-l border-secondColor/20`}
      >
        <div className="xl:px-4 px-2 xl:py-4 py-2 space-y-4 h-[calc(100vh-110px)] overflow-y-auto ">
          <h6 className="text-base font-semibold">Cart Items</h6>
          <div className="space-y-4">
            {cartItems.length === 0 ? (
              // <p className="text-center text-lg text-secondColor">
              //   No product added
              // </p>
              <div className="flex items-center justify-center h-full">

                <NotMatched title={"So clean. So empty. So lonely."} />
              </div>
            ) : (
              cartItems.map((item: any) => {
                const selectedVariant = item.variants?.find(
                  (variant: any) => variant.id === item.variantId
                );
                return (
                <div
                  className="flex items-center gap-3 border-b last:border-b-0 border-gray-300"
                  key={item.id}
                >
                  <div className="">
                    <input
                      id="comments"
                      aria-describedby="comments-description"
                      name="comments"
                      type="checkbox"
                      className="md:h-4 h-2.5 md:w-4 w-2.5 rounded border-gray-300 text-activeColor focus:ring-activeColor custom-checkedInput"
                    />
                  </div>

                  <div className="flex md:flex-row flex-col md::items-center xl:gap-2 lg:gap-2 gap-2 relative w-full pb-3 md:pb-0">
                    <div className="flex items-center md:justify-between py-5 gap-3 ">
                      <Image
                        src={selectedVariant?.media?.length > 0 ? selectedVariant.media[0].url : img}
                        alt="product"
                        width={400}
                        height={600}
                        className=" w-[60px]  h-[90px] object-cover rounded-md "
                      />

                      <div className="  text-secondColor lg:text-base text-sm">
                        <h6 className="xl:text-base lg:text-base text-base line-clamp-1 font-bold text-primaryColor pb-1">
                          {item.title}
                        </h6>
                        <span className="block  text-sm">Baby&apos;s Food</span>
                        <span className="block text-sm">{selectedVariant.optionValues.map((option: any) => (
                          <span key={option.optionName} className="inline-block mr-1">
                            {option.optionName} : {option.value}
                          </span>
                        ))}</span>
                        {/* <p className="line-clamp-1 pe-5 ">{item.description}</p> */}
                      </div>
                    </div>

                    <div className="flex items-center gap-5 font-bold md:text-right xl:text-xl lg:text-lg text-base ">
                      <div className="">
                        <UpdateQuantity
                          item={item}
                          variantId={item.variantId}
                          padding="py-x"
                          fontSize="text-sm"
                        />
                      </div>

                      <div className="xl:min-w-[50px]  line-clamp-1 text-sm">
                        {item.discountPrice ? (
                          <div className="flex flex-wrap  gap-2 text-activeColor">
                            <span className="text-lime-700">
                              ৳{item.discountPrice}
                            </span>
                            <span className="inline-block line-through">
                              ৳{selectedVariant.price}
                            </span>
                          </div>
                        ) : (
                          <span className="text-activeColor">
                            ৳{selectedVariant.price}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => handleRemove({itemId: item.id, variantId: item.variantId})}
                        className="text-sm font-semibold text-primaryColor hover:bg-gray-100 px-2 transition duration-300 ease-in"
                      >
                        <LuTrash2 />
                      </button>
                    </div>
                  </div>
                </div>
              )
            }
          )
            )}
          </div>
        </div>

        <footer className="absolute bg-white bottom-0 left-0 w-full min-h-[100px]  text-primaryColor  xl:px-4 px-2 py-3 space-y-2 border-t">
          <div className="flex items-end justify-between gap-3">
            <div className="flex items-center  gap-2 xl:text-base text-sm">
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
              <span className="font-semibold  xl:text-base text-sm">
                Total: ৳
                {cartItems.reduce(
                  (total: any, item: Product) =>
                    total + (item.variants?.find((variant: any) => variant.id === item.variantId)?.price || item.price) * (item.quantity || 1),
                    // (item.discountPrice || item.price) * (item.quantity || 1),
                  0
                )}
              </span>
            </div>
          </div>

          <button
            onClick={handleCheckout}
            className="bg-activeColor xl:text-base text-sm xl:p-3 p-2 rounded-md text-white w-full hover:opacity-80 transition ease-in-out delay-150 duration-300"
          >
          Checkout
          </button>
        </footer>
      </div>
    </section>
  );
};

export default CartDrawer;
