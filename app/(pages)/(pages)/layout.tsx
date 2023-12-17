import React, { useState } from "react";
import { RxSlash } from "react-icons/rx";

import SideBar from "@/components/SideBar/SideBar";

interface Iprops {
  children: React.ReactNode;
}

function layout({ children }: Iprops) {
  return (
    <>
      <section className=" bg-white">
        <div className="py-4 flex items-center gap-2 custom-container ">
          <span className="text-xs text-secondColor ms-3">My account</span>
          <RxSlash />{" "}
          <span className="text-xs text-primaryColor">My Points</span>
        </div>
        <div className="flex custom-container  ">
          <div className="lg:w-[22%] md:w-[20%] ">
            <SideBar />
          </div>

          <div className="lg:w-[78%] w-full">{children}</div>
        </div>
      </section>
    </>
  );
}

export default layout;
