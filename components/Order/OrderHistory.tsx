"use client";

import { useState, useRef } from "react";
import OrderSummary from "./OrderSummary";
import "./Order.css";

const OrderHistory = () => {
  const [isOpen, setIsOpen] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border rounded-md p-3 text-primaryColor">
      <div
        className="flex items-start justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="space-y-1.5">
          <h6 className="lg:text-xl md:text-lg text-base font-bold">
            Order #12460154
          </h6>

          <span className="block lg:text-base md:text-sm text-xs text-secondColor">
            November 27, 2025
          </span>
        </div>

        <div className="space-y-1.5">
          <span className="block lg:text-base md:text-sm text-xs text-secondColor font-semibold">
            ৳4521
          </span>
        </div>
      </div>

      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          height: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <OrderSummary />
      </div>
    </div>
  );
};

export default OrderHistory;
