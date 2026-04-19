"use client";

import { setCartDrawerOpen } from "@/app/redux/cartDrawerSlice";
import { useEffect, useRef, useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { FaFacebookMessenger } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import "./Cart.css";

const FloatingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.productCart.items);

  const totalQuantity = cartItems.reduce(
    (total: number, item: any) => total + (item.quantity || 1),
    0
  );

  const [animate, setAnimate] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const prevQuantityRef = useRef(totalQuantity);

  useEffect(() => {
    if (totalQuantity > prevQuantityRef.current) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 400);
    }
    prevQuantityRef.current = totalQuantity;
  }, [totalQuantity]);

  // Auto-hide hint after 4 sec
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-5 md:bottom-10 right-5 md:right-10 z-[1000] flex flex-col items-end gap-3">

      {/* CART BUTTON */}
      <div className="relative group">
        {/* Tooltip */}
        {showHint && (
          <div className="absolute right-[110%] top-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-1 rounded shadow-lg whitespace-nowrap animate-fadeIn">
            View your cart
          </div>
        )}

        <button
          onClick={() => dispatch(setCartDrawerOpen())}
          className={`flex items-center gap-2 bg-activeColor text-white px-4 py-3 rounded-full shadow-xl transition-all duration-300 
          hover:scale-105 hover:shadow-2xl
          ${animate ? "scale-110" : ""}
          `}
        >
          <LuShoppingCart className="text-xl" />

          {/* Expanding text */}
          <span className="hidden md:inline text-sm font-semibold">
            Cart ({totalQuantity})
          </span>

          {/* Badge for mobile */}
          <span className="absolute -top-1 -right-1 bg-white text-activeColor text-[10px] font-bold px-1.5 py-[2px] rounded-full md:hidden">
            {totalQuantity}
          </span>
        </button>
      </div>

      {/* MESSENGER BUTTON */}
      <div className="relative group">
        {showHint && (
          <div className="absolute right-[110%] top-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-1 rounded shadow-lg whitespace-nowrap animate-fadeIn">
            Order quickly via chat
          </div>
        )}

        <Link
          href="https://m.me/weareswojon"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#168AFF] text-white px-4 py-3 rounded-full shadow-xl transition-all duration-300 
          hover:scale-105 hover:shadow-2xl"
        >
          <FaFacebookMessenger className="text-xl" />

          <span className="hidden md:inline text-sm font-semibold">
            Order on Messenger
          </span>
        </Link>
      </div>
    </div>
  );
};

export default FloatingCart;