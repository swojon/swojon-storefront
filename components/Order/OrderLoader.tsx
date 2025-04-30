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
  const [currentStep, setCurrentStep] = useState(2);
  return (
    <div className="border rounded-md p-3 text-primaryColor">
      <div className="flex items-start justify-between cursor-pointer">
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
      <div className="pt-5 lg:pb-5 md:pb-3 pb-2 space-y-3">
        <div className="lg:text-lg md:text-base text-sm font-semibold flex items-center gap-1">
          <MdOutlineInbox />
          <h6 className="w-32 h-4 rounded-md bg-gray-300"></h6>
        </div>

        <div className="flex justify-center items-start h-[55px] w-full ">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative flex flex-col justify-center items-center lg:w-[200px] w-[30%] step-item  ${
                currentStep === i + 1 && "active-step"
              } ${i < currentStep && "complete"}  `}
            >
              <div className="w-[17px] h-[17px] rounded-full bg-gray-200 z-10 step"></div>

              <span
                className={`pt-6 absolute top-0 left-1/2 -translate-x-1/2 block lg:text-base md:text-sm text-xs  font-semibold text-center ${
                  currentStep === i + 1 ? "text-primaryColor" : "text-gray-400"
                } ${i < currentStep ? "text-primaryColor" : "text-gray-400"} `}
              >
                {step.title}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 items-start justify-between pt-3">
          <div className=" space-y-1">
            <div className="lg:text-base md:text-sm text-xs">
              <span className="font-semibold">Tracking: </span>{" "}
              <span className="underline underline-offset-1 text-secondColor">
                4512
              </span>
            </div>

            <div className="lg:text-base md:text-sm text-xs">
              <span className="font-semibold">Delivery Method: </span>{" "}
              <span className=" text-secondColor">Redx</span>
            </div>

            <div className="lg:text-base md:text-sm text-xs">
              <span className="font-semibold">Shipping to: </span>{" "}
              <span className=" text-secondColor">1/2, Dhaka</span>
            </div>
          </div>

          <div className="text-end space-y-1">
            <div className="lg:text-base md:text-sm text-xs">
              <span className="font-semibold">Order SubTotal: </span>{" "}
              <span className=" text-secondColor">৳4512</span>
            </div>

            <div className="lg:text-base md:text-sm text-xs">
              <span className="font-semibold">Shipping: </span>{" "}
              <span className=" text-secondColor">৳80</span>
            </div>

            <div className="lg:text-base md:text-sm text-xs">
              <span className="font-semibold">Order Total: </span>{" "}
              <span className=" text-primaryColor font-bold">৳4500</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderLoader;
