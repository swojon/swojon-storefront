import React from "react";
import SellerBox from "../ProductDetails/SellerBox";
import SellerProfileCard from "./SellerProfileCard";

const SellerBar = ({seller} : {seller: any }) => {
  return (
    <section className="sticky top-0 h-auto  min-h-screen  ">
      <SellerProfileCard seller={seller}/>
    </section>
  );
};

export default SellerBar;
