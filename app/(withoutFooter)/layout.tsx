import React from "react";
import Navbar from "@/components/navbar/Navbar";

interface Iprops {
  children: React.ReactNode;
}

function layout({ children }: Iprops) {
  return (
    <>
      <Navbar border="border" />
      {children}
      
    </>
  );
}

export default layout;
