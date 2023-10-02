import React from "react";
import Navbar2 from "@/components/navbar/Navbar2";
import Footer from "@/components/footer/Footer";

interface Iprops {
  session: any;
  children: React.ReactNode;
}

function layout({ children }: Iprops) {
  return (
    <>
      <Navbar2 />
      {children}
    </>
  );
}

export default layout;
