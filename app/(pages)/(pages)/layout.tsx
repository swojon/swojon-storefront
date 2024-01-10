"use client";
import React, { useState } from "react";
import SideBar from "@/components/SideBar/SideBar";
import { MdKeyboardArrowRight } from "react-icons/md";
import { usePathname, useSearchParams } from "next/navigation";
import useIsMobile from "@/lib/hooks/useIsMobile";

interface Iprops {
  children: React.ReactNode;
}

function layout({ children }: Iprops) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const sidebar = searchParams.get("sidebar");
  const isMobile = useIsMobile();
  console.log("pathname", pathname);
  return (
    <>
      <section className=" bg-white">
        <div className="pt-4 md:flex items-center gap-2 custom-container hidden">
          <span className="text-xs text-secondColor ">My account</span>
          <MdKeyboardArrowRight />
          <span className="text-xs text-primaryColor">My Points</span>
        </div>
        <div className="flex custom-container  justify-between py-4">
          {(!isMobile || (pathname === "/profile" && (!sidebar || sidebar !== "hide" ))) && (
            <div className="lg:w-[22%] md:w-[27%]  w-full">
              <SideBar />
            </div>
          )}
          {(!isMobile || pathname !== "/profile" || (pathname === "/profile" && sidebar == "hide") )&& 
            <div className="lg:w-[75%] w-full md:mx-3">{children}</div>
          }
        </div>
      </section>
    </>
  );
}

export default layout;
