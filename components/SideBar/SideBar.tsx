"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiOutlineInbox } from "react-icons/ai";
import { RiSettings4Line } from "react-icons/ri";
import { HiOutlineInbox } from "react-icons/hi";
import {
  HiLockClosed,
  HiMiniUser,
  HiOutlineCurrencyDollar,
  HiOutlineHeart,
} from "react-icons/hi2";
import { useSelector } from "react-redux";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { RiUserFollowLine } from "react-icons/ri";
import { HiOutlineUsers } from "react-icons/hi2";
import { motion } from "framer-motion";
import useIsMobile from "@/lib/hooks/useIsMobile";

const data = [
  { id: 1, title: "profile", icon: <HiMiniUser />, url: "/profile" },
  // {
  //   id: 2,
  //   title: "my points",
  //   icon: <HiOutlineCurrencyDollar />,
  //   url: "/points",
  // },
  {
    id: 2,
    title: "My products",
    icon: <HiOutlineInbox />,
    url: "/profile/my-ads",
  },
  {
    id: 3,
    title: "wishlists",
    icon: <HiOutlineHeart />,
    url: "/profile/wishlists",
  },
  {
    id: 35,
    title: "followers",
    icon: <HiOutlineUsers />,
    url: "/profile/followers",
  },
  {
    id: 75,
    title: "People you follow",
    icon: <RiUserFollowLine />,
    url: "/profile/following",
  },

  {
    id: 8,
    title: "login & security",
    icon: <HiLockClosed />,
    url: "/profile/login-security",
  },
  {
    id: 7,
    title: "settings",
    icon: <RiSettings4Line />,
    url: "/profile/settings",
  },
  { id: 74, title: "sign out", icon: <LiaSignOutAltSolid />, url: "/sign-out" },
];

const SideBar = () => {
  const pathname = usePathname();
  const { user } = useSelector((state: any) => state.auth);
  const isMobile = useIsMobile();

  return (
    <section className="sticky top-0  rounded-md min-h-[87vh] h-full py-4 md:px-0 sm:px-[6vw]">
      {/* <div className="border-b  pb-3 sm:px-3 px-1 leading-none">
        <h6 className="lg:text-2xl md:text-lg sm:text-base text-xs font-bold text-primaryColor font-lexed truncate">
          Hi, {user?.username ?? user?.email}
        </h6>
        <small className="sm:text-xs hidden md:block text-[10px] text-secondColor lg:leading-normal leading-none pt-1">
          Thanks for being a Swojon customer
        </small>
      </div> */}
      <div className="">
        {data.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{
              opacity: 0,
              // translateX: i % 2 === 0 ? -50 : 50,
              // translateY: -50,
            }}
            animate={{
              opacity: 1,
              //  translateX: 0, translateY: 0
            }}
            transition={{ duration: 0.12, delay: i * 0.02 }}
          >
            <Link
              href={item.url}
              className={`flex  items-center   py-2.5 lg:px-3 md:px-2  text-lg font-bold gap-x-5 gap-y-3 ${
                pathname === item.url ? "text-primaryColor" : "text-secondColor"
              }`}
            >
              <span
                className={`text-2xl ${
                  pathname === item.url
                    ? "text-activeColor"
                    : "text-secondColor"
                }`}
              >
                {item.icon}
              </span>{" "}
              <span className="capitalize  inline-block leading-snug truncate">
                {item.title}
              </span>
            </Link>
          </motion.div>
        ))}

        {/* <Link
          href="/followers"
          className={`flex lg:flex-row lg:items-center flex-col  py-2  lg:pr-4  md:pr-1  pr-1 text-base font-medium  hover:border-l-4 hover:lg:pl-3 hover:md:pl-2 hover:pl-1  ${
            pathname === "/followers"
              ? "border-l-4 border-activeColor lg:pl-3 md:pl-2 pl-1 bg-[#eaecf1] text-activeColor"
              : "border-l-4 border-transparent text-secondColor hover:border-gray-300 hover:bg-gray-50 hover:text-primaryColor"
          }`}
        >
          <span className="lg:pe-3.5 lg:pb-0 pb-1">
            <HiOutlineCurrencyDollar />
          </span>{" "}
          <span className="capitalize text-[10px] md:text-xs lg:text-sm inline-block truncate leading-snug">
            Followers
          </span>
        </Link>
        <Link
          href="/following"
          className={`flex lg:flex-row lg:items-center flex-col  py-2 lg:pr-4  md:pr-1  pr-1 text-base font-medium  hover:border-l-4 hover:lg:pl-3 hover:md:pl-2 hover:pl-1   ${
            pathname === "/following"
              ? "border-l-4 border-activeColor lg:pl-3 md:pl-2 pl-1 bg-[#eaecf1] text-activeColor"
              : "border-l-4 border-transparent text-secondColor hover:border-gray-300 hover:bg-gray-50 hover:text-primaryColor"
          }`}
        >
          <span className="lg:pe-3.5 lg:pb-0 pb-1">
            <HiOutlineCurrencyDollar />
          </span>{" "}
          <span className="capitalize text-[10px] md:text-xs lg:text-sm inline-block truncate leading-snug">
            People you follow
          </span>
        </Link> */}
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
        {/* <Link
          href="/wishlists"
          className={`flex lg:flex-row lg:items-center flex-col  py-2 lg:pr-4  md:pr-1  pr-1 text-base font-medium  hover:border-l-4 hover:lg:pl-3 hover:md:pl-2 hover:pl-1  ${
            pathname === "/wishlists"
              ? "border-l-4 border-activeColor lg:pl-3 md:pl-2 pl-1 bg-[#eaecf1] text-activeColor"
              : "border-l-4 border-transparent text-secondColor hover:border-gray-300 hover:bg-gray-50 hover:text-primaryColor"
          }`}
        >
          <span className="lg:pe-3.5 lg:pb-0 pb-1">
            <HiOutlineHeart />
          </span>{" "}
          <span className="capitalize text-[10px] md:text-xs lg:text-sm inline-block truncate leading-snug">
            wishlists
          </span>
        </Link> */}
      </div>

      {/* <div className="">
        <Link
          href="/profile"
          className={`flex lg:flex-row lg:items-center flex-col  py-2 lg:pr-4  md:pr-1  pr-1 text-base font-medium  hover:border-l-4  hover:lg:pl-3 hover:md:pl-2 hover:pl-1  ${
            pathname === "/profile"
              ? "border-l-4 border-activeColor lg:pl-3 md:pl-2 pl-1 bg-[#eaecf1] text-activeColor"
              : "border-l-4 border-transparent text-secondColor hover:border-gray-300 hover:bg-gray-50 hover:text-primaryColor"
          }`}
        >
          <span className="lg:pe-3.5 lg:pb-0 pb-1">
            <HiMiniUser />
          </span>{" "}
          <span className="capitalize text-[10px] md:text-xs lg:text-sm  leading-snug  inline-block truncate">
            My Profile
          </span>
        </Link>
        <Link
          href="/my-ads"
          className={`flex lg:flex-row lg:items-center flex-col  py-2 llg:pr-4  md:pr-1  pr-1 text-base font-medium  hover:border-l-4  hover:lg:pl-3 hover:md:pl-2 hover:pl-1  ${
            pathname === "/my-ads"
              ? "border-l-4 border-activeColor lg:pl-3 md:pl-2 pl-1 bg-[#eaecf1] text-activeColor"
              : "border-l-4 border-transparent text-secondColor hover:border-gray-300 hover:bg-gray-50 hover:text-primaryColor"
          }`}
        >
          <span className="lg:pe-3.5 lg:pb-0 pb-1">
            <AiOutlineInbox />
          </span>{" "}
          <span className="capitalize text-[10px] md:text-xs lg:text-sm leading-snug  inline-block truncate">
            My products
          </span>
        </Link>
      </div> */}

      {/* <div className="md:py-5 py-2.5 border-b">
        <Link
          href="/login-security"
          className={`flex lg:flex-row lg:items-center flex-col  py-2 lg:pr-4  md:pr-1  pr-1 text-base font-medium  hover:border-l-4 hover:lg:pl-3 hover:md:pl-2 hover:pl-1  ${
            pathname === "/login-security"
              ? "border-l-4 border-activeColor lg:pl-3 md:pl-2 pl-1 bg-[#eaecf1] text-activeColor"
              : "border-l-4 border-transparent text-secondColor hover:border-gray-300 hover:bg-gray-50 hover:text-primaryColor"
          }`}
        >
          <span className="lg:pe-3.5 lg:pb-0 pb-1">
            <HiLockClosed />
          </span>{" "}
          <span className="capitalize text-[10px] md:text-xs lg:text-sm leading-snug  inline-block truncate">
            login & security
          </span>
        </Link>
        <Link
          href="/settings"
          className={`flex lg:flex-row lg:items-center flex-col  py-2 lg:pr-4  md:pr-1  pr-1 text-base font-medium  hover:border-l-4 hover:lg:pl-3 hover:md:pl-2 hover:pl-1   ${
            pathname === "/settings"
              ? "border-l-4 border-activeColor lg:pl-3 md:pl-2 pl-1 bg-[#eaecf1] text-activeColor"
              : "border-l-4 border-transparent text-secondColor hover:border-gray-300 hover:bg-gray-50 hover:text-primaryColor"
          }`}
        >
          <span className="lg:pe-3.5 lg:pb-0 pb-1">
            <RiSettings4Line />
          </span>{" "}
          <span className="capitalize text-[10px] md:text-xs lg:text-sm leading-snug  inline-block truncate">
            settings
          </span>
        </Link>
      </div>

      <div className=" py-2 flex lg:flex-row lg:items-center flex-col  lg:pr-4  md:pr-1  pr-1 text-base font-medium  hover:border-l-4 border-l-4 border-transparent text-secondColor">
        <span className="lg:pe-3.5 lg:pb-0 pb-1">
          <HiOutlineLogout />
        </span>{" "}
        <span className="capitalize text-[10px] md:text-xs lg:text-sm leading-snug  inline-block truncate">
          sign out
        </span>
      </div> */}
    </section>
  );
};

export default SideBar;
