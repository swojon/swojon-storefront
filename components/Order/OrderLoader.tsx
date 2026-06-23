"use client";

import React, { useState } from "react";
import { MdOutlineInbox } from "react-icons/md";

const steps = [
  {
    id: 1,
    title: "Order Placed",
  },
  {
    id: 2,
    title: "Packed",
  },
  {
    id: 3,
    title: "Shipped",
  },
  {
    id: 4,
    title: "Delivered",
  },
];

const OrderLoader = () => {
  return (
    <div className="border rounded-md p-3 text-primaryColor animate-pulse">
      <div className="flex items-start justify-between cursor-pointer">
        <div className="space-y-1.5">
          <h6 className="lg:text-xl md:text-lg text-base font-bold flex items-center gap-1">
            <span className="block">Order</span>
            <span className="w-24 h-5 rounded-md bg-gray-300 block"></span>
          </h6>

          <span className="w-32 h-3 rounded-md bg-gray-300 block"></span>
        </div>

        <div className="space-y-1.5">
          <span className="block w-20 h-5 rounded-md bg-gray-300"></span>
        </div>
      </div>
      <div className="pt-5 lg:pb-5 md:pb-3 pb-2 space-y-3">
        <div className="lg:text-lg md:text-base text-sm font-semibold flex items-center gap-1">
          <MdOutlineInbox />
          <h6 className="w-32 h-4 rounded-md bg-gray-300"></h6>
        </div>

        <div className="flex justify-center items-start h-[55px] w-full ">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative flex flex-col justify-center items-center lg:w-[200px] w-[30%] step-item  `}
            >
              <div className="w-[17px] h-[17px] rounded-full bg-gray-300 z-10 step"></div>

              <div className={`pt-7 absolute top-0 left-1/2 -translate-x-1/2`}>
                <div className=" md:w-20 w-14 bg-gray-300 h-3 rounded-md"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 items-start justify-between pt-3">
          <div className=" space-y-1">
            <div className="lg:text-base md:text-sm text-xs flex items-center gap-1">
              <span className="font-semibold block">Tracking: </span>
              <span className="w-24 h-3 rounded-md bg-gray-300 block"></span>
            </div>

            <div className="lg:text-base md:text-sm text-xs flex items-center gap-1">
              <span className="font-semibold block">Delivery Method: </span>{" "}
              <span className=" w-24 h-3 rounded-md bg-gray-300 block"></span>
            </div>

            <div className="lg:text-base md:text-sm text-xs flex items-center gap-1">
              <span className="font-semibold block">Shipping to: </span>{" "}
              <span className=" w-24 h-3 rounded-md bg-gray-300 block "></span>
            </div>
          </div>

          <div className="text-end space-y-1">
            <div className="lg:text-base md:text-sm text-xs flex items-center gap-1">
              <span className="font-semibold block">Order SubTotal: </span>{" "}
              <span className=" w-24 h-3 rounded-md bg-gray-300 block"></span>
            </div>

            <div className="lg:text-base md:text-sm text-xs flex items-center gap-1">
              <span className="font-semibold block">Shipping: </span>{" "}
              <span className=" w-24 h-3 rounded-md bg-gray-300 block"></span>
            </div>

            <div className="lg:text-base md:text-sm text-xs flex items-center gap-1">
              <span className="font-semibold block">Order Total: </span>{" "}
              <span className=" w-24 h-3 rounded-md bg-gray-300 block"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderLoader;
