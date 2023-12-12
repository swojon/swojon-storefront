import React from "react";
import Navbar2 from "@/components/navbar/Navbar2";
import Footer from "@/components/footer/Footer";

interface Iprops {
  children: React.ReactNode;
}

function layout({ children }: Iprops) {
  return (
    <>
      <Navbar2 border="border" />
      {children}
      
    </>
  );
}

export default layout;
