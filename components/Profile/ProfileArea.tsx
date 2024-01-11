"use client";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import SideBar from "../SideBar/SideBar";
import useIsMobile from "@/lib/hooks/useIsMobile";
import { useSearchParams, usePathname } from "next/navigation";

function ProfileArea({ children }: { children: any }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const sidebar = searchParams.get("sidebar");
  const isMobile = useIsMobile();
  return (
    <section className=" bg-white">
      <div className="pt-4 md:flex items-center gap-2 custom-container hidden">
        <span className="text-xs text-secondColor ">My account</span>
        <MdKeyboardArrowRight />
        <span className="text-xs text-primaryColor">My Points</span>
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
