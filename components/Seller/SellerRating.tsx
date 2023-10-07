import React from "react";
import user from "@/public/userMale.png";
import { FaStar } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";
import { MdVerifiedUser } from "react-icons/md";
import Image from "next/image";

const reviews = [
  {
    id: 188,
    title: "Keep things local",
    desc: "Meet the seller in person and check the item before you make a payment. Where available, use",
  },
  {
    id: 148,
    title: "Exchange item and payment",
    desc: "Meet the seller in person and check the item before you make a payment. Where available, use",
  },
  {
    id: 718,
    title: "Fake payment services",
    desc: "Meet the seller in person and check the item before you make a payment. Where available, use",
  },
  {
    id: 187,
    title: "Use common sense",
    desc: "Meet the seller in person and check the item before you make a payment. Where available, use",
  },
  {
    id: 145,
    title: "Fake information requests",
    desc: "Meet the seller in person and check the item before you make a payment. Where available, use",
  },
  {
    id: 178,
    title: "Information sharing",
    desc: "Meet the seller in person and check the item before you make a payment. Where available, use",
  },
];

const SellerRating = () => {
  return (
    <section>
      <h5 className="capitalize lg:text-2xl md:text-lg text-base font-lexed text-primaryColor font-medium">
        Rating & reviews
      </h5>
      <div className="flex space-x-1 items-center flex-wrap pt-3">
        <div className="flex items-center space-x-1">
          <FaStar className="text-[#FFB800]" />
          <span className="text-sm">4.80</span>
        </div>

        <div className="flex items-center space-x-1">
          <BsDot className="text-secondColor" />
          <span className="text-sm">33 reviews</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 py-5">
        {reviews.map((item) => (
          <div className="space-y-3" key={item.id}>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full">
                <Image
                  src="/user1.jpg"
                  alt="icon"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div className="">
                <h6 className="font-lexed  text-base text-primaryColor">
                  David Jhon
                </h6>
                <p className="text-secondColor text-sm">November, 1999</p>
              </div>
            </div>

            <p className="text-sm text-secondColor">{item.desc}</p>
          </div>
        ))}
      </div>

      <button className="border border-activeColor text-activeColor  rounded-md py-1 text-center md:text-base  sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300 px-3">
        Show more
      </button>
    </section>
  );
};

export default SellerRating;
