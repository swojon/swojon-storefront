import CheckCode from "@/components/SignIn/CheckCode";
import SecondVerification from "@/components/SignIn/SecondVerification";
import SetNewPassword from "@/components/SignIn/SetNewPassword";
import VerifyCode from "@/components/SignIn/VerifyCode";
import React from "react";

const ForgotPassword = () => {
  return (
    <div className=" bg-white lg:w-[50%] md:w-[75%] w-full">
      <div className="lg:px-24 md:px-16 ">
        {/* <SecondVerification /> */}
        {/* <CheckCode /> */}
        {/* <VerifyCode /> */}
        <SetNewPassword />
      </div>
    </div>
  );
};

export default ForgotPassword;
