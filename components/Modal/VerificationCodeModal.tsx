"use client";
import { setModalClose } from "@/app/redux/modalSlice";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import VerificationCode from "../VerificationCode/VerificationCode";

const VerificationCodeModal = ({ props }: { props: any }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  return (
    <section className=" lg:w-[30%] md:w-[45%] sm:w-[55%] w-[80%] bg-white rounded-md mx-auto h-full  space-y-3 lg:space-y-5 p-6 relative">
      <button
        className="rounded-full bg-activeColor p-1 border  text-white absolute right-2 top-2"
        onClick={() => dispatch(setModalClose(true))}
      >
        <MdClose />
      </button>
      <h6 className="text-2xl font-lexed font-bold text-primaryColor text-center">
        Enter verification code
      </h6>

      <div className="text-sm  text-secondColor text-center">
        <span className="block">We sent a verification code to: </span>
        <span>mousumitu@gmail.com</span>
      </div>

      {/* <div className=" flex rounded-md shadow-sm">
        <div className="relative flex flex-grow items-stretch focus-within:z-10">
          <input
            type="password"
            name="confirmPass"
            id="confirmPass"
            className="block w-full rounded-none rounded-l-md border border-gray-300 pl-3 focus:outline-none focus:border-activeColor focus:ring-activeColor text-sm bg-gray-50"
          />
        </div>
        <button
          type="button"
          className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700   focus:outline-none "
        >
          resend
        </button>
      </div> */}

      <VerificationCode
        length={6}
        label="Code Label"
        loading={loading}
        onComplete={() => {
          setLoading(true);
          setTimeout(() => setLoading(false), 10000);
        }}
      />

      <button className="whitespace-nowrap border border-activeColor py-2 px-2 rounded bg-white text-activeColor relative  transition ease-in-out delay-150 duration-300 md:text-base text-sm hover:shadow-lg  font-lexed font-medium shadow-md text-center w-full">
        Resend code in 00:08
      </button>
      <button className="whitespace-nowrap   px-2 rounded  text-secondColor relative  transition ease-in-out delay-150 duration-300 md:text-base text-sm  font-lexed font-medium  text-center w-full">
        try another method
      </button>
    </section>
  );
};

export default VerificationCodeModal;
