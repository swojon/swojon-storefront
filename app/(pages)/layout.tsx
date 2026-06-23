import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

interface Iprops {
  children: React.ReactNode;
}

function layout({ children }: Iprops) {
  return (
    <>
      <Navbar border="border" />
      {children}
      <Footer />
    </>
  );
}

export default layout;
