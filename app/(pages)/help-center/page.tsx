import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import icon1 from "@/public/assets/help1.png";
import icon2 from "@/public/assets/help2.png";
import icon3 from "@/public/assets/help3.png";
import icon4 from "@/public/assets/help4.png";
import icon5 from "@/public/assets/help5.png";
import icon6 from "@/public/assets/help6.png";
import Image from "next/image";

const safetyTips = [
  {
    id: 188,
    title: "Account Settings",
    desc: "Adjust settings, manage notifications, learn about name change and more",
    icon: icon1,
  },
  {
    id: 148,
    title: "Login and Password",
    desc: "Meet the seller in person and check the item before you make a payment. Where available, use",
    icon: icon2,
  },
  {
    id: 718,
    title: "Privacy and Policy",
    desc: "Adjust settings, manage notifications, learn about name change and more",
    icon: icon3,
  },
  {
    id: 187,
    title: "FAQ",
    desc: "Adjust settings, manage notifications, learn about name change and more",
    icon: icon4,
  },
  {
    id: 145,
    title: "Community",
    desc: "Fix login issues and learn how to change or reset your password",
    icon: icon5,
  },
  {
    id: 178,
    title: "Category",
    desc: "Adjust settings, manage notifications, learn about name change and more",
    icon: icon6,
  },
];

const HelpCenter = () => {
  return (
    <section className=" py-10 ">
      <div className="flex flex-col items-center space-y-3">
        <div className="flex items-center space-x-1  text-sm text-secondColor">
          <h6>Home</h6>
          <MdKeyboardArrowRight />
          <h6 className="text-primaryColor">Help Center</h6>
        </div>
        <h2 className="text-primaryColor font-lexed xl:text-3xl lg:text-2xl md:text-lg text-base font-medium">
          Help Center
        </h2>
        <div className="text-center text-base text-secondColor">
          <p>Need something cleared up? Here are our most</p>
          <p>frequently asked questions.</p>
        </div>

        <div className="relative w-[250px]">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center  ">
            <MagnifyingGlassIcon
              className="h-7 w-7  p-1.5  text-primaryColor mr-1 "
              aria-hidden="true"
            />
          </div>
          <input
            id="search"
            name="search"
            className="block w-full rounded-md border border-gray-300 bg-white py-2 pr-3 pl-9 leading-5 placeholder-[#C0C0C0] focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-activeColor sm:text-sm"
            placeholder="Search"
            type="search"
          />
        </div>
      </div>

      <div className="pt-16 custom-container">
        <h5 className="text-primaryColor font-lexed xl:text-3xl lg:text-2xl md:text-lg text-base font-medium text-center pb-10">
          Popular Topics
        </h5>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6">
          {safetyTips.map((item) => (
            <div
              className="lg:space-y-3 md:space-y-2 space-y-1 border rounded-md p-4 flex flex-col items-center"
              key={item.id}
            >
              <Image
                src={item.icon}
                alt="icon"
                className="w-10 h-10 object-cover rounded-full"
              />
              <h6 className="lg:text-lg text-base font-medium font-lexed text-primaryColor">
                {item.title}
              </h6>
              <p className="lg:text-sm text-xs text-secondColor text-center">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 bg-[#F9F9F9] p-8 flex flex-col items-center">
        <div className="relative flex pb-5">
          <div className="w-8 h-8 border-2 border-white rounded-full z-0 ">
            <Image
              src="/profile.jpg"
              width={200}
              height={200}
              alt="member"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="relative w-8 h-8 border-2 border-white rounded-full -left-2 -top-0.5">
            {" "}
            <Image
              src="/user1.jpg"
              width={200}
              height={200}
              alt="member"
              className="w-full h-full object-cover rounded-full z-20"
            />
          </div>
          <div className="w-8 h-8 border-2 border-white rounded-full  relative -left-4 ">
            <Image
              src="/profile.jpg"
              width={200}
              height={200}
              alt="member"
              className="w-full h-full object-cover rounded-full z-10"
            />
          </div>
        </div>

        <span className="block text-primaryColor font-lexed text-sm">
          Still have questions?
        </span>
        <span className="block text-secondColor text-sm">
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </span>
        <button className="bg-activeColor px-3 py-2 text-sm text-white rounded-md mt-5">
          Get in touch
        </button>
      </div>
    </section>
  );
};

export default HelpCenter;
