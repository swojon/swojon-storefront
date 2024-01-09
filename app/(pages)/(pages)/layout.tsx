'use client'
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
  console.log("pathname", pathname)
  return (
    <>
      <section className=" bg-white">
        <div className="py-4 flex items-center gap-2 custom-container ">
          <span className="text-xs text-secondColor ms-3">My account</span>
          <MdKeyboardArrowRight />
          <span className="text-xs text-primaryColor">My Points</span>
        </div>
        <div className="flex custom-container  justify-between">
          {(!isMobile || (pathname === "/profile" && sidebar !== "show")) &&  
          <div className="lg:w-[22%] md:w-[20%] w-[18%]">
            <SideBar />
          </div>
          }
          {((isMobile || sidebar === "hide") || pathname !== "/profile") && 
          <div className="lg:w-[75%] w-full">{children}</div>
          }
        </div>
      </section>
    </>
  );
}

export default layout;
