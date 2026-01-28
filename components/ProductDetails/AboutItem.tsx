import React from "react";
import Accordion from "./Accordion";
import Specifications from "./Specifications";
import ShippingReturn from "./ShippingReturn";


const AboutItem = ({product}: {product: any}) => {
  const ITEMS = [
    {
      title: "Description",
      content: product?.description ? product?.description.split("\n").map((line:any, i:any) => (
    <p key={i}>{line}</p>
  )) || "" : "",
    },
    // { title: "Specifications", content: <Specifications /> },
    { title: "Return Policy", content: <ShippingReturn /> },
    //   { title: "Shipping & Returns", content: "Shipping details..." },
  ];
  return (
    <div className="py-5 space-y-5">
      <h5 className="lg:text-2xl md:text-lg text-base text-primaryColor font-lexed font-semibold text-center ">
        About this product
      </h5>
      <div className="px-3 pb-2 bg-gray-50 rounded-sm">
        {ITEMS.map((item, index) => (
          <Accordion key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
};

export default AboutItem;
