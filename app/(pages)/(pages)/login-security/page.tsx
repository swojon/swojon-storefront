"use client";
import React from "react";
import { HiArrowLeft } from "react-icons/hi2";
import useIsMobile from "@/lib/hooks/useIsMobile";

const LoginAndSecurity = () => {
  const isMobile = useIsMobile();
  return (
    <section>
      <div className="flex items-center gap-3">
        {isMobile && (
          <div
            className=" p-2 border border-secondColor  rounded-md  cursor-pointer "
            // onClick={handleLeftArrowIconClick}
          >
            <HiArrowLeft className="text-primaryColor" />
          </div>
        )}{" "}
        <h6 className="text-primaryColor lg:text-2xl md:text-lg text-base font-lexed font-medium ">
          Login & security
        </h6>
      </div>
    </section>
  );
};

export default LoginAndSecurity;
