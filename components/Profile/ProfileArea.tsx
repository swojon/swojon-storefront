"use client";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import SideBar from "../SideBar/SideBar";
import useIsMobile from "@/lib/hooks/useIsMobile";
import { useSearchParams, usePathname } from "next/navigation";

const data = [
  { id: 1, title: "profile", url: "/profile" },
  {
    id: 2,
    title: "My products",

    url: "/profile/my-ads",
  },
  {
    id: 3,
    title: "My favorites",

    url: "/profile/wishlists",
  },
  {
    id: 35,
    title: "followers",

    url: "/profile/followers",
  },
  {
    id: 75,
    title: "People you follow",

    url: "/profile/following",
  },

  {
    id: 8,
    title: "login & security",

    url: "/profile/login-security",
  },
  // {
  //   id: 7,
  //   title: "settings",
  //   icon: <RiSettings4Line />,
  //   url: "/profile/settings",
  // },
  // { id: 74, title: "sign out", icon: , url: "/sign-out" },
];

function ProfileArea({ children }: { children: any }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const sidebar = searchParams.get("sidebar");
  const isMobile = useIsMobile();

  const breadcrumb = () => {
    const matchingRoute = data.find((item) => pathname === item.url);
    return matchingRoute && matchingRoute.title;
  };
  const currentBreadcrumb = breadcrumb();
  return (
    <section className=" bg-white">
      <div className="pt-4 md:flex items-center gap-2 custom-container hidden">
        <span className="text-xs text-secondColor ">My account</span>
        <MdKeyboardArrowRight />
        <span className="text-xs text-primaryColor font-medium capitalize">
          {currentBreadcrumb}
        </span>
      </div>
      <div className="flex custom-container gap-6 justify-between py-4">
        {(!isMobile ||
          (pathname === "/profile" && (!sidebar || sidebar !== "hide"))) && (
          <div className="lg:w-[22%] md:w-[27%]  w-full">
            <SideBar />
          </div>
        )}
        {(!isMobile ||
          pathname !== "/profile" ||
          (pathname === "/profile" && sidebar == "hide")) && (
          <div className="lg:w-[75%] w-full md:mx-3">{children}</div>
        )}
      </div>
    </section>
  );
}

export default ProfileArea;
