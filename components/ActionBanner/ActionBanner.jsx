import React from "react";
import "./ActionBanner.scss";

const ActionBanner = () => {
  return (
    <section className="lg:h-[450px] md:h-[390px] h-[300px] actionBanner-container w-full">
      <div className="custom-container flex items-center h-full">
        {" "}
        <div className="md:w-[43%] w-[80%] mx-auto md:mx-0 border lg:p-6 md:p-4 p-3 bg-[#fccc1c] rounded-md lg:space-y-5 md:space-y-3 space-y-2">
          <h5 className="font-lexed xl:text-5xl lg:text-3xl md:text-2xl sm:text-xl text-xl text-primaryColor ">
            Get More Coin, Sell More Products.
          </h5>
          <p className="lg:text-base md:text-sm text-xs text-[#4D4D4D] ">
            Get more sell your products by getting more coin. Buy the coin, get
            all more points.
          </p>
          <button className="border border-whiteColor bg-whiteColor md:py-2 md:px-3 py-1 px-2 rounded  text-primaryColor  lg:text-base text-sm font-lexed">
            Buy More Coins
          </button>
        </div>
      </div>
    </section>
  );
};

export default ActionBanner;
