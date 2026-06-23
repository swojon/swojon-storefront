"use client";
import { setImagePopUpClose } from "@/app/redux/ImagePopSlice";
import Image from "next/image";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const ImagePop = () => {
  const dispatch = useDispatch();
  const isImageOpen = useSelector((state: any) => state.imagePopUp.open);
  const currentImageUrl = useSelector(
    (state: any) => state.imagePopUp.currentImageUrl
  );
  return (
    <div
      className={`fixed top-0   w-full h-screen z-[100] transition delay-200 duration-700 ease-in-out flex items-center justify-center p-6 ${
        isImageOpen ? "block  bg-[#111111a5]" : "hidden "
      }`}
    >
      <div className="relative w-full h-full flex justify-center items-center">
        <button
          className="absolute right-2 top-2  p-3 bg-black rounded-sm text-white"
          onClick={() => dispatch(setImagePopUpClose())}
        >
          <AiOutlineClose className="text-2xl" />
        </button>
        {currentImageUrl && (
          <Image
            src={currentImageUrl}
            alt="img"
            width={700}
            height={500}
            className=" w-auto md:h-auto h-auto m-6  min-h-[60dvh] "
          />
        )}
      </div>
    </div>
  );
};

export default ImagePop;
