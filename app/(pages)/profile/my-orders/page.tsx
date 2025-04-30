import OrderHistory from "@/components/Order/OrderHistory";
import OrderLoader from "@/components/Order/OrderLoader";
import React from "react";

const MyOrders = () => {
  return (
    <div className="space-y-5">
      <OrderHistory />
      <OrderHistory />
      <OrderHistory />
      <OrderLoader />
    </div>
  );
};

export default MyOrders;
