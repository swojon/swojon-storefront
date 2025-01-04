import React from "react";
import "./ActionBanner.scss";
import Link from "next/link";

const ActionBanner = () => {
  return (
    <section className="lg:h-[450px] md:h-[390px] h-[300px] actionBanner-container w-full">
      <div className="custom-container flex items-center h-full">
        {" "}
        <div className="md:w-[43%] w-[80%] mx-auto md:mx-0 border lg:p-6 md:p-4 p-3 bg-[#fccc1c] rounded-md lg:space-y-5 md:space-y-3 space-y-2">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-tight">
        Reach More Buyers, Make Extra Cash, and Simplify Your Space, It&apos;s FREE!
          </h2>
          
          <p className="text-base md:text-xl text-gray-600 leading-relaxed">
          List your products on swojon and unlock instant visibility to thousands of potential customers. Get a free store, increased product exposure.
          </p>
          
          <div className="flex space-x-4">
            <Link href="/upload-product">
                <button className="py-3.5 px-9  xs:px-3  bg-activeColor  rounded-md text-whiteColor relative  transition ease-in-out delay-150 duration-300 xl:text-xl lg:text-lg md:text-base sm:text-xs font-lexed font-medium  whitespace-nowrap shadow-2xl  w-full md:w-auto  hover:shadow-lg hover:-translate-y-1">
                  List Your Product Now
                </button>
              </Link>
              </div>
        </div>
      </div>
    </section>
  );
};

export default ActionBanner;
