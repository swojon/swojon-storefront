import UploadForm from "@/components/uploadForm/UploadForm";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const UploadProduct = () => {
  return (
    <section className="custom-container py-10 ">
      <div className="flex flex-col items-center space-y-2">
        <div className="flex items-center space-x-1  text-sm text-secondColor">
          <h6>Home</h6>
          <MdKeyboardArrowRight />
          <h6 className="text-primaryColor">Upload product</h6>
        </div>
        <h2 className="text-primaryColor font-lexed xl:text-3xl lg:text-2xl md:text-lg text-base font-medium">
          Upload product
        </h2>
        <div className="text-center text-base text-secondColor">
          <p>Need something cleared up? Here are our most</p>
          <p>frequently asked questions.</p>
        </div>
      </div>
      <UploadForm />
    </section>
  );
};

export default UploadProduct;
