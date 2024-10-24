"use client";
import React from "react";
import Uploads from "@/components/Uploads/Uploads";

const UploadProduct = () => {
  return (
    <section className=" py-10 ">
      {/* <div className="flex flex-col items-center space-y-2">
        <div className="flex items-center space-x-1  text-sm text-secondColor">
          <h6>Home</h6>
          <MdKeyboardArrowRight />
          <h6 className="text-primaryColor">Upload product</h6>
        </div>
       
       
      </div> */}
      <Uploads product={null} />
      {/* <UploadForm /> */}
    </section>
  );
};

export default UploadProduct;
