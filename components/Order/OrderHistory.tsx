import React from "react";
import OrderSummary from "./OrderSummary";

const OrderHistory = () => {
  return (
    <div className="border p-3">
      <div className="flex items-center justify-between ">
        <div className="space-y-1.5">
          <h6 className="text-xl font-bold">Order #12460154</h6>

          <span className="block text-base text-secondColor">
            November 27, 2025
          </span>
        </div>

        <div className="space-y-1.5">
          <span className="block text-base text-secondColor font-semibold">
            ৳4521
          </span>
        </div>
      </div>

      <OrderSummary />
    </div>
  );
};

export default OrderHistory;
