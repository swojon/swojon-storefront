import CommunityLists from "@/components/Community/CommunityLists";
import React from "react";

interface Iprops {
  session: any;
  children: React.ReactNode;
}

function layout({ children }: Iprops) {
  return (
    <>
      <section className=" bg-[#f5f5f6]  lg:py-10 md:py-6 py-4.5">
        <div className="custom-container flex  gap-4 w-full ">
          <CommunityLists />

          <>{children}</>
        </div>
      </section>
    </>
  );
}

export default layout;
