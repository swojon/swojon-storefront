import OrderHistory from "@/components/Order/OrderHistory";
import React from "react";

const MyOrders = () => {
  return (
    <div className="space-y-5">
      <OrderHistory />
      <OrderHistory />
      <OrderHistory />
    </div>
  );
};

export default MyOrders;
