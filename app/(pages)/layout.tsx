import React from "react";
import Navbar2 from "@/components/navbar/Navbar2";

interface Iprops {
  session: any;
  children: React.ReactNode;
}

function layout({ children }: Iprops) {  
  return (
    <>
    <Navbar2/>
    {children}
    </>
  );
}

export default layout;
