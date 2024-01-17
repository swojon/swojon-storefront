"use client";
import React, { useState } from "react";

const EnterEmail = ({ setPasswordProcess }: { setPasswordProcess: any }) => {
  const [email, setEmail] = useState<any>(null);
  return (
    <div className="space-y-2 pt-4 w-full ">
      <h4 className="text-3xl font-bold text-primaryColor text-center">
        Enter your email to <br /> reset password
      </h4>
      <form className="lg:space-y-4 md:space-y-3 space-y-2  pt-3 w-full">
        <div className="relative mt-1 rounded-md shadow-sm">
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border border-gray-200 pr-10 text-primaryColor placeholder-[#717171] focus:border-activeColor focus:outline-none focus:ring-activeColor  py-2.5 px-4 md:text-lg text-base "
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          className={`py-2.5  border border-activeColor text-lg   text-white w-full rounded-md font-lexed font-bold flex justify-center ${
            email
              ? "bg-activeColor border border-activeColor cursor-pointer"
              : "cursor-default bg-gray-200 border border-gray-200"
          }`}
          onClick={() => setPasswordProcess("checking")}
          disabled={!email}
        >
          Reset Password
        </button>
      </form>
      <button className="text-lg   text-secondColor text-center rounded-md font-lexed font-bold  bg-white flex justify-center cursor-pointer relative mx-auto">
        Cancel
        <span className="absolute left-0 px-1 bottom-0.5 h-[0.5px] w-full bg-secondColor"></span>
      </button>
    </div>
  );
};

export default EnterEmail;
