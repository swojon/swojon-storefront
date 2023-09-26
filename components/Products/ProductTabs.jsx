import React from "react";

const ProductTabs = ({ tabItem }) => {
  return (
    <div className="inline-block border border-[#C0C0C0] font-lexed px-3 py-2 rounded-2xl text-sm md:text-base cursor-pointer capitalize hover:-translate-y-1 transition ease-in-out delay-150 duration-300">
      <span>{tabItem.name}</span>
    </div>
  );
};

export default ProductTabs;
