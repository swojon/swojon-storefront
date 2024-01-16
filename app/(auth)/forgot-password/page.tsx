"use client";
import CheckCode from "@/components/SignIn/CheckCode";
import EnterEmail from "@/components/SignIn/EnterEmail";
import SecondVerification from "@/components/SignIn/SecondVerification";
import SetNewPassword from "@/components/SignIn/SetNewPassword";
import VerifyCode from "@/components/SignIn/VerifyCode";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ForgotPassword = () => {
  const [passwordProcess, setPasswordProcess] = useState("enter");
  return (
    <div className=" bg-white lg:w-[50%] md:w-[75%] w-full">
      <div className="lg:px-24 md:px-16 flex flex-col items-center w-full">
        <Link href="/">
          <Image
            src="/assets/swojon.svg"
            width={100}
            height={500}
            alt="logo"
            className="lg:w-[120px] md:w-20 w-16  "
          />
        </Link>
        {passwordProcess === "enter" ? (
          <EnterEmail setPasswordProcess={setPasswordProcess} />
        ) : (
          <div className="py-7 w-full flex flex-col items-center">
            <h6 className="text-base text-primaryColor text-center">
              If an account exist for email@com, you will get an email with
              instruction on resetting your password. If it doesnt arrive, be
              sure to check your spam folder.
            </h6>
            <Link href="/login">
              <button className="pt-8 text-lg  text-activeColor text-center rounded-md font-bold  bg-white  cursor-pointer relative mx-auto">
                Back to Log in
              </button>
            </Link>
          </div>
        )}
        {/* <CheckCode /> */}
        {/* <VerifyCode /> */}
        {/* <SetNewPassword /> */}
      </div>
    </div>
  );
};

export default ForgotPassword;
