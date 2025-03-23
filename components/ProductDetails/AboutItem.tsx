import React from "react";
import Accordion from "./Accordion";
import Specifications from "./Specifications";
import ShippingReturn from "./ShippingReturn";

const ITEMS = [
  {
    title: "Description",
    content:
      "Add a touch of fun to your little one's outfit with the Girls' Easter Bunny Paper Straw Crossbody Bag - Cat & Jack™️ Off-White. This adorable bag features a cute bunny face and ears, perfect for carrying small treasures. Made from durable paper straw, it's lightweight and easy to carry, making it ideal for Easter egg hunts or everyday adventures.",
  },
  { title: "Specifications", content: <Specifications /> },
  { title: "Shipping & Returns", content: <ShippingReturn /> },
  //   { title: "Shipping & Returns", content: "Shipping details..." },
];

const AboutItem = () => {
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
