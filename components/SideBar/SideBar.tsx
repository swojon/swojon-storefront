"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiOutlineInbox } from "react-icons/ai";
import { RiSettings4Line } from "react-icons/ri";
import {
  HiLockClosed,
  HiMiniUser,
  HiOutlineCurrencyDollar,
  HiOutlineHeart,
} from "react-icons/hi2";

const data = [
  { id: 1, title: "profile", icon: <HiMiniUser />, url: "/profile" },
  {
    id: 2,
    title: "my points",
    icon: <HiOutlineCurrencyDollar />,
    url: "/points",
  },
  { id: 3, title: "wishlists", icon: <HiOutlineHeart />, url: "/wishlists" },
  {
    id: 5,
    title: "your products",
    icon: <AiOutlineInbox />,
    url: "/your-products",
  },
  { id: 7, title: "settings", icon: <RiSettings4Line />, url: "/settings" },
  {
    id: 8,
    title: "login & security",
    icon: <HiLockClosed />,
    url: "/login-security",
  },
];

const SideBar = () => {
  const pathname = usePathname();
  return (
    <section className="sticky top-0 h-auto border border-t-0 rounded-md min-h-[88vh] p-5">
      <div className="space-y-1  pb-3">
        {data.map((item) => (
          <Link
            href={item.url}
            key={item.id}
            className={`flex items-center  py-2 pl-3 pr-4 text-base font-medium  hover:border-l-4 hover:border-gray-300 hover:bg-gray-50 hover:text-primaryColor ${
              pathname === item.url
                ? "border-l-4 border-activeColor bg-[#e3e6ee] text-activeColor"
                : "border-l-4 border-transparent text-secondColor"
            }`}
          >
            <span className="pe-3.5">{item.icon}</span>{" "}
            <span className="capitalize">{item.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SideBar;
