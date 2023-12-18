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
import { HiOutlineLogout } from "react-icons/hi";
import { useSelector } from "react-redux";

const data = [
  { id: 1, title: "profile", icon: <HiMiniUser />, url: "/profile" },
  // {
  //   id: 2,
  //   title: "my points",
  //   icon: <HiOutlineCurrencyDollar />,
  //   url: "/points",
  // },
  { id: 3, title: "wishlists", icon: <HiOutlineHeart />, url: "/wishlists" },
  {
    id: 5,
    title: "My Ads",
    icon: <AiOutlineInbox />,
    url: "/my-ads",
  },
  { id: 7, title: "settings", icon: <RiSettings4Line />, url: "/settings" },
  // {
  //   id: 8,
  //   title: "login & security",
  //   icon: <HiLockClosed />,
  //   url: "/login-security",
  // },
];

const SideBar = () => {
  const pathname = usePathname();
  const { user } = useSelector((state: any) => state.auth);

  return (
    <section className="sticky top-0   border-r rounded-md min-h-[87vh] h-full py-4">
      <div className="border-b  pb-3 sm:px-3 px-1 leading-none">
        <h6 className="lg:text-2xl md:text-lg sm:text-base text-sm text-primaryColor font-lexed">
          Hi, {user?.username ?? user?.email}
        </h6>
        <small className="sm:text-xs text-[10px] text-secondColor lg:leading-normal leading-none pt-1">
          Thanks for being a Swojon customer
        </small>
      </div>
      <div className="py-5 border-b">
        {/* {data.map((item) => (
          <Link
            href={item.url}
            key={item.id}
            className={`flex lg:flex-row lg:items-center flex-col  py-2 lg:pl-3 lg:pr-4 md:pl-2 md:pr-1 pl-1 pr-1 text-base font-medium  hover:border-l-4   ${
              pathname === item.url
                ? "border-l-4 border-activeColor bg-[#eaecf1] text-activeColor"
                : "border-l-4 border-transparent text-secondColor hover:border-gray-300 hover:bg-gray-50 hover:text-primaryColor"
            }`}
          >
            <span className="lg:pe-3.5 lg:pb-0 pb-1">{item.icon}</span>{" "}
            <span className="capitalize text-[10px] md:text-xs lg:text-sm inline-block leading-snug">
              {item.title}
            </span>
          </Link>
        ))} */}
        <Link
          href="/followers"
          className={`flex lg:flex-row lg:items-center flex-col  py-2 lg:pl-3 lg:pr-4 md:pl-2 md:pr-1 pl-1 pr-1 text-base font-medium  hover:border-l-4   ${
            pathname === "/followers"
              ? "border-l-4 border-activeColor bg-[#eaecf1] text-activeColor"
              : "border-l-4 border-transparent text-secondColor hover:border-gray-300 hover:bg-gray-50 hover:text-primaryColor"
          }`}
        >
          <span className="lg:pe-3.5 lg:pb-0 pb-1">
            <HiOutlineCurrencyDollar />
          </span>{" "}
          <span className="capitalize text-[10px] md:text-xs lg:text-sm inline-block leading-snug">
            Followers
          </span>
        </Link>
        <Link
          href="/following"
          className={`flex lg:flex-row lg:items-center flex-col  py-2 lg:pl-3 lg:pr-4 md:pl-2 md:pr-1 pl-1 pr-1 text-base font-medium  hover:border-l-4   ${
            pathname === "/following"
              ? "border-l-4 border-activeColor bg-[#eaecf1] text-activeColor"
              : "border-l-4 border-transparent text-secondColor hover:border-gray-300 hover:bg-gray-50 hover:text-primaryColor"
          }`}
        >
          <span className="lg:pe-3.5 lg:pb-0 pb-1">
            <HiOutlineCurrencyDollar />
          </span>{" "}
          <span className="capitalize text-[10px] md:text-xs lg:text-sm inline-block leading-snug">
            People you follow
          </span>
        </Link>
        {/* <Link
          href="/points"
          className={`flex lg:flex-row lg:items-center flex-col  py-2 lg:pl-3 lg:pr-4 md:pl-2 md:pr-1 pl-1 pr-1 text-base font-medium  hover:border-l-4   ${
            pathname === "/points"
              ? "border-l-4 border-activeColor bg-[#eaecf1] text-activeColor"
              : "border-l-4 border-transparent text-secondColor hover:border-gray-300 hover:bg-gray-50 hover:text-primaryColor"
          }`}
        >
          <span className="lg:pe-3.5 lg:pb-0 pb-1">
            <HiOutlineCurrencyDollar />
          </span>{" "}
          <span className="capitalize text-[10px] md:text-xs lg:text-sm inline-block leading-snug">
            my points
          </span>
        </Link> */}
        <Link
          href="/wishlists"
          className={`flex lg:flex-row lg:items-center flex-col  py-2 lg:pl-3 lg:pr-4 md:pl-2 md:pr-1 pl-1 pr-1 text-base font-medium  hover:border-l-4   ${
            pathname === "/wishlists"
              ? "border-l-4 border-activeColor bg-[#eaecf1] text-activeColor"
              : "border-l-4 border-transparent text-secondColor hover:border-gray-300 hover:bg-gray-50 hover:text-primaryColor"
          }`}
        >
          <span className="lg:pe-3.5 lg:pb-0 pb-1">
            <HiOutlineHeart />
          </span>{" "}
          <span className="capitalize text-[10px] md:text-xs lg:text-sm inline-block leading-snug">
            wishlists
          </span>
        </Link>
      </div>

      <div className="  py-5 border-b">
        <h6 className="sm:text-base text-sm pb-3 text-primaryColor font-lexed">
          Your Profile
        </h6>
        <Link
          href="/profile"
          className={`flex lg:flex-row lg:items-center flex-col  py-2 lg:pl-3 lg:pr-4 md:pl-2 md:pr-1 pl-1 pr-1 text-base font-medium  hover:border-l-4   ${
            pathname === "/profile"
              ? "border-l-4 border-activeColor bg-[#eaecf1] text-activeColor"
              : "border-l-4 border-transparent text-secondColor hover:border-gray-300 hover:bg-gray-50 hover:text-primaryColor"
          }`}
        >
          <span className="lg:pe-3.5 lg:pb-0 pb-1">
            <HiMiniUser />
          </span>{" "}
          <span className="capitalize text-[10px] md:text-xs lg:text-sm inline-block leading-snug">
            My Profile
          </span>
        </Link>
        <Link
          href="/my-ads"
          className={`flex lg:flex-row lg:items-center flex-col  py-2 lg:pl-3 lg:pr-4 md:pl-2 md:pr-1 pl-1 pr-1 text-base font-medium  hover:border-l-4   ${
            pathname === "/my-ads"
              ? "border-l-4 border-activeColor bg-[#eaecf1] text-activeColor"
              : "border-l-4 border-transparent text-secondColor hover:border-gray-300 hover:bg-gray-50 hover:text-primaryColor"
          }`}
        >
          <span className="lg:pe-3.5 lg:pb-0 pb-1">
            <AiOutlineInbox />
          </span>{" "}
          <span className="capitalize text-[10px] md:text-xs lg:text-sm inline-block leading-snug">
            My products
          </span>
        </Link>
      </div>

      <div className="  py-5 border-b">
        <h6 className="sm:text-base text-sm pb-3 text-primaryColor font-lexed">
          Privacy
        </h6>
        <Link
          href="/login-security"
          className={`flex lg:flex-row lg:items-center flex-col  py-2 lg:pl-3 lg:pr-4 md:pl-2 md:pr-1 pl-1 pr-1 text-base font-medium  hover:border-l-4   ${
            pathname === "/login-security"
              ? "border-l-4 border-activeColor bg-[#eaecf1] text-activeColor"
              : "border-l-4 border-transparent text-secondColor hover:border-gray-300 hover:bg-gray-50 hover:text-primaryColor"
          }`}
        >
          <span className="lg:pe-3.5 lg:pb-0 pb-1">
            <HiLockClosed />
          </span>{" "}
          <span className="capitalize text-[10px] md:text-xs lg:text-sm inline-block leading-snug">
            login & security
          </span>
        </Link>
        <Link
          href="/settings"
          className={`flex lg:flex-row lg:items-center flex-col  py-2 lg:pl-3 lg:pr-4 md:pl-2 md:pr-1 pl-1 pr-1 text-base font-medium  hover:border-l-4   ${
            pathname === "/settings"
              ? "border-l-4 border-activeColor bg-[#eaecf1] text-activeColor"
              : "border-l-4 border-transparent text-secondColor hover:border-gray-300 hover:bg-gray-50 hover:text-primaryColor"
          }`}
        >
          <span className="lg:pe-3.5 lg:pb-0 pb-1">
            <RiSettings4Line />
          </span>{" "}
          <span className="capitalize text-[10px] md:text-xs lg:text-sm inline-block leading-snug">
            settings
          </span>
        </Link>
      </div>

      <div className="mt-5 py-2 flex items-center  lg:pl-3 lg:pr-4 md:pl-2 md:pr-1 pl-1 pr-1 text-base font-medium  hover:border-l-4 border-l-4 border-transparent text-secondColor">
        <span className="lg:pe-3.5 lg:pb-0 pb-1">
          <HiOutlineLogout />
        </span>{" "}
        <span className="capitalize text-[10px] md:text-xs lg:text-sm inline-block leading-snug">
          sign out
        </span>
      </div>
    </section>
  );
};

export default SideBar;
