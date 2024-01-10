"use client";
import SettingsEditInfo from "@/components/Settings/SettingsEditInfo";
import SettingsInfo from "@/components/Settings/SettingsInfo";
import React, { useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { HiArrowLeft } from "react-icons/hi2";
import useIsMobile from "@/lib/hooks/useIsMobile";
import Link from "next/link";

const Settings = () => {
  const [editInformation, setEditInformation] = useState("edit");
  const isMobile = useIsMobile();
  return (
    <section>
      <div className="flex items-center gap-3">
        {isMobile && (
                   <Link
                   href={"/profile"}
            className=" p-2 border border-secondColor  rounded-md  cursor-pointer "
            // onClick={handleLeftArrowIconClick}
          >
            <HiArrowLeft className="text-primaryColor" />
          </Link>
        )}{" "}
        <h6 className="text-primaryColor lg:text-2xl md:text-lg text-base font-lexed font-medium ">
          Settings
        </h6>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-3 py-8 ">
        <div className=" lg:w-[80%] w-full">
          {editInformation === "edit" ? <SettingsInfo /> : <SettingsEditInfo />}
        </div>
        <div className="flex md:justify-end justify-center items-start gap-3">
          {editInformation === "update" ? (
            <>
              <button
                onClick={() => setEditInformation("edit")}
                className="bg-white px-3 py-2 text-sm text-primaryColor rounded-md border border-gray-300"
              >
                cancel
              </button>
              <button
                onClick={() => setEditInformation("update")}
                className="bg-activeColor px-3 py-2 text-sm text-white rounded-md border border-activeColor"
              >
                Update
              </button>
            </>
          ) : (
            <button
              onClick={() => setEditInformation("update")}
              className="bg-activeColor px-3 py-2 text-sm text-white rounded-md border border-activeColor"
            >
              Edit Information
            </button>
          )}
        </div>
      </div>

      <div className=" ">
        <h6 className="text-lg font-lexed font-medium text-primaryColor">
          Connect Other Accounts
        </h6>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 py-5 ">
          <div className="space-y-3">
            <span className="flex items-center gap-3">
              <FcGoogle className=" text-lg" />
              <span className="text-secondColor text-base">Google Account</span>
            </span>
            <div className="flex items-center gap-4">
              <button className="py-1 px-7 text-sm bg-gray-100 text-secondColor border-transparent rounded-md">
                Edit
              </button>
              <button className="py-1 px-7 text-sm bg-activeColor text-white border-activeColor rounded-md">
                Remove
              </button>
            </div>
          </div>
          <div className="space-y-3">
            <span className="flex items-center gap-3">
              <FaFacebookSquare className=" text-blue-600 text-lg" />{" "}
              <span className="text-secondColor text-base">
                Facebook Account
              </span>
            </span>
            <div className="flex items-center gap-4">
              {/* <button className="py-1 px-5 text-sm bg-gray-100 text-secondColor border-transparent rounded-md">
                Edit
              </button> */}
              <button className="py-1 px-7 text-sm bg-activeColor text-white border-activeColor rounded-md">
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settings;
