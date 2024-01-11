"use client";
import React, { useState } from "react";
import { HiArrowLeft } from "react-icons/hi2";
import useIsMobile from "@/lib/hooks/useIsMobile";
import Link from "next/link";
import NotFound from "../../not-found/page";
import Password from "@/components/Login&Security/Password";

const LoginAndSecurity = () => {
  const isMobile = useIsMobile();
  const [editBtn, setEditBtn] = useState("");
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
        <h6 className="text-primaryColor md:text-left text-center lg:text-2xl md:text-lg text-base font-lexed font-bold ">
          Login & security
        </h6>
      </div>

      <div className=" space-y-3">
        <div className="lg:w-[53%] w-full py-5  rounded-md space-y-5">
          <div className="pb-2 border-b border-gray-200 space-y-2">
            <span className="text-base text-primaryColor font-lexed font-medium block">
              Password
            </span>

            {editBtn === "username" ? (
              <>
                <Password setEditBtn={setEditBtn} />
              </>
            ) : (
              <div className="flex flex-wrap justify-between items-center gap-2">
                <span className="text-lg text-secondColor font-lexed  block">
                  Last updated an hour ago
                </span>
                <button
                  onClick={() => setEditBtn("username")}
                  className="text-lg relative text-primaryColor  whitespace-nowrap cursor-pointer"
                >
                  Edit
                  <span className="absolute left-0 px-1 bottom-0.5 h-[0.5px] w-full bg-primaryColor"></span>
                </button>
              </div>
            )}
          </div>

          <h6 className="text-primaryColor  lg:text-2xl md:text-lg text-base font-lexed font-bold ">
            Social accounts
          </h6>

          <div className="pb-2 border-b border-gray-200 space-y-2">
            <span className="text-base text-primaryColor font-lexed font-medium block">
              Facebook
            </span>
            <div className="flex flex-wrap justify-between items-center gap-2">
              <span className="text-lg text-secondColor font-lexed  block">
                Not connected
              </span>
              <button
                // onClick={() =>
                //   dispatch(
                //     setModalOpen({
                //       title: "this is a modal",
                //       body: "editEmail",
                //     })
                //   )
                // }
                className="text-lg relative  text-primaryColor  whitespace-nowrap cursor-pointer"
              >
                Connect
                <span className="absolute left-0 px-1 bottom-0.5 h-[0.5px] w-full bg-primaryColor"></span>
              </button>
            </div>
          </div>

          <div className="pb-2 border-b border-gray-200 space-y-2">
            <span className="text-base text-primaryColor font-lexed font-medium block">
              Google
            </span>
            <div className="flex flex-wrap justify-between items-center gap-2">
              <span className="text-lg text-secondColor font-lexed  block">
                Not connected
              </span>
              <button
                // onClick={() =>
                //   dispatch(
                //     setModalOpen({
                //       title: "this is a modal",
                //       body: "editEmail",
                //     })
                //   )
                // }
                className="text-lg relative  text-primaryColor  whitespace-nowrap cursor-pointer"
              >
                Connect
                <span className="absolute left-0 px-1 bottom-0.5 h-[0.5px] w-full bg-primaryColor"></span>
              </button>
            </div>
          </div>

          <h6 className="text-primaryColor  lg:text-2xl md:text-lg text-base font-lexed font-bold ">
            Account
          </h6>

          <div className="pb-2 border-b border-gray-200 space-y-2">
            <div className="flex flex-wrap justify-between items-center gap-2">
              <span className="text-lg text-secondColor font-lexed  block">
                Deactivate your account
              </span>
              <button
                // onClick={() =>
                //   dispatch(
                //     setModalOpen({
                //       title: "this is a modal",
                //       body: "editEmail",
                //     })
                //   )
                // }
                className="text-lg relative  text-red-500  whitespace-nowrap cursor-pointer"
              >
                Deactivate
                <span className="absolute left-0 px-1 bottom-0.5 h-[0.5px] w-full bg-red-500"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginAndSecurity;
