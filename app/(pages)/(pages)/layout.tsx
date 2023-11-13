import React from "react";

import SideBar from "@/components/SideBar/SideBar";

interface Iprops {
  session: any;
  children: React.ReactNode;
}

function layout({ children }: Iprops) {
  return (
    <>
      <section className=" bg-[#f5f5f5]">
        <div className=" custom-container ">
          <div className="flex bg-white">
            <div className="lg:w-[22%] ">
              <SideBar />
            </div>

            <div className="lg:w-[78%] w-full">{children}</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default layout;
