import React from "react";

import SideBar from "@/components/SideBar/SideBar";

interface Iprops {
  session: any;
  children: React.ReactNode;
}

function layout({ children }: Iprops) {
  return (
    <>
      <section className="flex">
        <div className="w-[23%] md:block hidden">
          <SideBar />
        </div>

        <div className="lg:w-[77%] w-full">{children}</div>
      </section>
    </>
  );
}

export default layout;
