import React from "react";
import product from "@/public/hero/Baby Food.png";
import Image from "next/image";
import ResponsiveSelectOptions from "@/components/SelectOptions/ResponsiveSelectOptions";
import { AiOutlineDelete } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";

const Cart = () => {
  return (
    <section className=" pt-10 space-y-6 text-primaryColor relative scroll-smooth hidden-scroll">
      <h5 className="text-2xl font-bold px-20">
        Cart{" "}
        <span className="font-normal text-secondColor text-xl">(4 items)</span>
      </h5>

      <div className="flex items-start max-h-[70vh] overflow-auto  gap-10 px-20   transition ease-in delay-300">
        <div className="w-[54%]  ">
          <div className="flex items-start justify-between py-4 gap-6 border-b border-gray-100">
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

                <div className="flex gap-5  pt-4 pe-5">
                  <div className="flex gap-4">
                    <ResponsiveSelectOptions title="size" padding="px-2 py-1" />
                    <ResponsiveSelectOptions title="qty" padding="px-2 py-1" />
                  </div>

                  <button className="text-xl font-semibold text-primaryColor hover:bg-gray-100 px-2 transition duration-300 ease-in">
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            </div>

            <div className="ps-5">
              <span className="text-base text-primaryColor block whitespace-nowrap font-bold">
                ৳ 100
              </span>
            </div>
          </div>
          <div className="flex items-start justify-between py-4 gap-6 border-b border-gray-100">
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

                <div className="flex gap-5  pt-4 pe-5">
                  <div className="flex gap-4">
                    <ResponsiveSelectOptions title="size" padding="px-2 py-1" />
                    <ResponsiveSelectOptions title="qty" padding="px-2 py-1" />
                  </div>

                  <button className="text-xl font-semibold hover:bg-gray-100 px-2 transition duration-300 ease-in text-primaryColor">
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            </div>
            <div className="ps-5">
              <span className="text-base text-primaryColor block whitespace-nowrap font-bold">
                ৳ 100
              </span>
            </div>
          </div>
          <div className="flex items-start justify-between py-4 gap-6 border-b border-gray-100">
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

                <div className="flex gap-5  pt-4 pe-5">
                  <div className="flex gap-4">
                    <ResponsiveSelectOptions title="size" padding="px-2 py-1" />
                    <ResponsiveSelectOptions title="qty" padding="px-2 py-1" />
                  </div>

                  <button className="text-xl font-semibold text-primaryColor hover:bg-gray-100 px-2 transition duration-300 ease-in">
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            </div>

            <div className="ps-5">
              <span className="text-base text-primaryColor block whitespace-nowrap font-bold">
                ৳ 100
              </span>
            </div>
          </div>
          <div className="flex items-start justify-between py-4 gap-6 border-b border-gray-100">
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

                <div className="flex gap-5  pt-4 pe-5">
                  <div className="flex gap-4">
                    <ResponsiveSelectOptions title="size" padding="px-2 py-1" />
                    <ResponsiveSelectOptions title="qty" padding="px-2 py-1" />
                  </div>

                  <button className="text-xl font-semibold hover:bg-gray-100 px-2 transition duration-300 ease-in text-primaryColor">
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            </div>
            <div className="ps-5">
              <span className="text-base text-primaryColor block whitespace-nowrap font-bold">
                ৳ 100
              </span>
            </div>
          </div>
        </div>
        <div className="w-[34%] fixed top-32 right-20">
          <div className="sticky  top-20 p-6 border rounded-md space-y-4 bg-white shadow">
            <h6 className="text-xl font-semibold">Summary</h6>
            <div className="flex items-start justify-between border-b border-gray-300 pb-4">
              <span className="block text-base font-medium">
                Subtotal (3 items)
              </span>

              <div className="text-right">
                <span className="block text-base font-semibold">৳ 1000</span>
                <span className="text-sm text-secondColor">
                  (Inclusive of VAT)
                </span>
              </div>
            </div>
            <div className="flex items-start justify-between border-b border-gray-300 pb-4">
              <span className="block text-base font-medium">Total</span>

              <div className="text-right">
                <span className="block text-base font-semibold">৳ 1000</span>
              </div>
            </div>
            <div className="text-sm text-secondColor flex items-center gap-4">
              <BsTruck className="text-2xl" />
              <p>
                Delivery fee (if applicable) will be calculated at checkout.
              </p>
            </div>
            <div className="space-y-4 pt-3">
              <span className="text-base font-semibold">
                Do you have a promo code?
              </span>

              <input
                id="promo"
                name="promo"
                type="text"
                placeholder="Enter Promo Code"
                className="block   p-3 text-base text-gray-900 placeholder:text-secondColor focus:outline-none sm:text-base border border-gray-400 w-full rounded-md"
              />
            </div>
            <div className="pt-4">
              <button className="bg-activeColor hover:opacity-80 text-white w-full p-3 rounded-md font-bold text-lg ">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
