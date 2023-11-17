import React from "react";
import "./ActionBanner2.scss";
import Image from "next/image";
import mbl from "@/public/assets/mobile.png";
import googleImg from "@/public/assets/googlePlay.png";
import appStoreImg from "@/public/assets/appStore.png";

const ActionBanner2 = () => {
  return (
    <section className="xl:h-[450px] lg:h-[410px] md:h-[300px]  h-auto   bg-[#fff8df] w-full  relative ">
      <div className="absolute clip-path-banner left-0 top-0 w-full h-full z-10"></div>
      <div className="flex md:flex-row flex-col w-full h-full custom-container ">
        <div className="md:flex-1  pt-[3vh] md:pt-0 flex items-center z-10 ">
          <div className=" lg:space-y-3 space-y-2">
            <h4 className="lg:text-4xl md:text-2xl text-xl font-medium font-lexed text-primaryColor">
              Download Our Mobile App
            </h4>
            <div className="lg:text-lg md:text-base text-sm text-secondColor flex flex-col">
              <span>Get all services like Sell or buy. Almost</span>
              <span>everything you can do.</span>
            </div>

            <div className="flex space-x-2">
              <Image
                src={googleImg}
                alt="googleimg"
                className="lg:w-[35%] md:w-[25%] w-[35%]"
              />
              <Image
                src={appStoreImg}
                alt="appStoreImg"
                className="lg:w-[35%] md:w-[25%] w-[35%]"
              />
            </div>
          </div>
        </div>
        <div className="md:flex-1 h-full z-10">
          <div className="w-full h-full  flex md:justify-center justify-end md:items-end">
            <Image
              src={mbl}
              alt="mobile"
              className="md:w-[65%] w-[40%] xl:h-[90%] md:h-auto h-[70%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionBanner2;
