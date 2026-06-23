"use client";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import useIsMobile from "@/lib/hooks/useIsMobile";
import { useSearchParams, usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const DynamicSideBar = dynamic(() => import("../SideBar/SideBar"), {ssr: false});

function ProfileArea({ children }: { children: any }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const sidebar = searchParams.get("sidebar");
  const isMobile = useIsMobile();
  return (
    <section className=" bg-white">
      <div className="pt-4 md:flex items-center gap-2 custom-container hidden">
        <span className="text-sm text-secondColor ">My account</span>
        <MdKeyboardArrowRight />
        <span className="text-sm text-primaryColor">Settings</span>
      </div>
      <div className="flex custom-container gap-6 justify-between py-4">
        {(!isMobile ||
          (pathname === "/profile" && (!sidebar || sidebar !== "hide"))) && (
          <div className="lg:w-[22%] md:w-[27%]  w-full">
            <DynamicSideBar />
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
