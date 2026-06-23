"use client";

import { setCartDrawerOpen } from "@/app/redux/cartDrawerSlice";
import { useEffect, useRef, useState } from "react";
import { LuShoppingCart } from "react-icons/lu";

import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import Link from "next/link";
import { FaFacebookMessenger } from "react-icons/fa6";

const MessengerIcon = () => {
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
    <Link
      className="fixed md:bottom-30 bottom-20 md:right-10 right-5 z-[1000] shadow-xl shadow-gray-500/50 rounded-full cursor-pointer"
      href={"/m.me"}
      >
      <button
        className={`rounded-full bg-activeColor p-4 text-white text-xl font-bold shadow-2xl shadow-red-500/50 transition-transform duration-300 ${
          animate ? "scale-110" : "scale-100"
        }`}
      >
        <FaFacebookMessenger />
      </button>
    </Link>
  );
};

export default MessengerIcon;
