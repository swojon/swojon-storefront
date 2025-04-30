"use client";

import { setCartDrawerOpen } from "@/app/redux/cartDrawerSlice";
import { useEffect, useRef, useState } from "react";
import { LuShoppingCart } from "react-icons/lu";

import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";

const FloatingCart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state: any) => state.productCart.items);

  const totalQuantity = cartItems.reduce(
    (total: any, item: any) => total + (item.quantity || 1),
    0
  );

  const [animate, setAnimate] = useState(false);
  const prevQuantityRef = useRef(totalQuantity);

  useEffect(() => {
    if (totalQuantity > prevQuantityRef.current) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 300); // duration matches animation
    }
    prevQuantityRef.current = totalQuantity;
  }, [totalQuantity]);

  return (
    <div
      className="fixed md:bottom-10 bottom-5 md:right-10 right-5 z-[1000] shadow-xl shadow-gray-500/50 rounded-full cursor-pointer"
      onClick={() => dispatch(setCartDrawerOpen())}
    >
      <button
        className={`rounded-full bg-activeColor p-4 text-white text-xl font-bold shadow-2xl shadow-red-500/50 transition-transform duration-300 ${
          animate ? "scale-110" : "scale-100"
        }`}
      >
        <LuShoppingCart />
      </button>
      <div className="absolute -right-[5px] -top-1 h-[18px] lg:h-[18px] xl:h-[22px] w-[18px] lg:w-[18px] xl:w-[22px] rounded-full flex items-center justify-center bg-white text-center border">
        <span className="font-semibold text-activeColor text-[8px] xl:text-[10px] block p-0 leading-none">
          {totalQuantity}
        </span>
      </div>
    </div>
  );
};

export default FloatingCart;
