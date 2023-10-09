import React from "react";
import SellerBox from "../ProductDetails/SellerBox";
import SellerProfile from "./SellerProfile";

const SellerBar = () => {
  return (
    <section className="sticky top-0 h-auto  min-h-screen  ">
      <SellerProfile />
    </section>
  );
};

export default SellerBar;
