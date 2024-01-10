"use client";
import React from "react";
import { HiArrowLeft } from "react-icons/hi2";
import useIsMobile from "@/lib/hooks/useIsMobile";
import Link from "next/link";
import NotFound from "../../not-found/page";

const LoginAndSecurity = () => {
  const isMobile = useIsMobile();
  return (
    <section>
      <div className="relative">
        {isMobile && (
          <Link
            href={"/profile"}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 border border-secondColor  rounded-md  cursor-pointer"
            // onClick={handleLeftArrowIconClick}
          >
            <HiArrowLeft className="text-primaryColor" />
          </Link>
        )}{" "}
        <h6 className="text-primaryColor md:text-left text-center lg:text-2xl md:text-lg text-base font-lexed font-medium ">
          Login & security
        </h6>
      </div>

      <div className="w-full">
        <NotFound />
      </div>
    </section>
  );
};

export default LoginAndSecurity;
