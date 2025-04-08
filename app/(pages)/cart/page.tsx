import React from "react";
import product from "@/public/hero/Baby Food.png";
import Image from "next/image";
import ResponsiveSelectOptions from "@/components/SelectOptions/ResponsiveSelectOptions";
import { AiOutlineDelete } from "react-icons/ai";

const Cart = () => {
  return (
    <section className="min-h-[50vh]  px-20 py-10 space-y-6 text-primaryColor">
      <h5 className="text-2xl font-bold ">
        Cart{" "}
        <span className="font-normal text-secondColor text-xl">(4 items)</span>
      </h5>

      <div className="flex items-start gap-5">
        <div className="w-[60%] ">
          <div className="flex items-start py-4 gap-5 border-b border-gray-100">
            <div className="flex items-start gap-5">
              <Image
                src={product}
                className="max-w-[150px] max-h-[150px] object-cover aspect-square"
                alt="product"
              />

              <div className="space-y-1  text-secondColor text-base">
                <h6 className="text-base font-semibold text-primaryColor">
                  Baby Cerelac
                </h6>
                <span className="block ">Baby&apos;s Food</span>
                <p className="line-clamp-1 pe-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                  pariatur beatae ahsdkjsdj{" "}
                </p>

                <div className="flex gap-4 justify-between pt-4 pe-5">
                  <div className="flex gap-4">
                    <ResponsiveSelectOptions title="size" padding="px-2 py-1" />
                    <ResponsiveSelectOptions title="qty" padding="px-2 py-1" />
                  </div>

                  <button className="text-xl font-semibold hover:bg-gray-100 px-2 transition duration-300 ease-in">
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start py-4 gap-5 border-b border-gray-100">
            <div className="flex items-start gap-5">
              <Image
                src={product}
                className="max-w-[150px] max-h-[150px] object-cover aspect-square"
                alt="product"
              />

              <div className="space-y-1  text-secondColor text-base">
                <h6 className="text-base font-semibold text-primaryColor">
                  Baby Cerelac
                </h6>
                <span className="block ">Baby&apos;s Food</span>
                <p className="line-clamp-1 pe-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                  pariatur beatae ahsdkjsdj{" "}
                </p>

                <div className="flex gap-4 justify-between pt-4 pe-5">
                  <div className="flex gap-4">
                    <ResponsiveSelectOptions title="size" padding="px-2 py-1" />
                    <ResponsiveSelectOptions title="qty" padding="px-2 py-1" />
                  </div>

                  <button className="text-xl font-semibold hover:bg-gray-100 px-2 transition duration-300 ease-in">
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[40%] border "></div>
      </div>
    </section>
  );
};

export default Cart;
