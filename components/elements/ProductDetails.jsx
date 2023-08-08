import React from "react";
import Image from "next/image";

const ProductDetails = ({ data, height }) => {
  return (
    <section className="w-full bg-[#f6f5f5ea] hover:shadow-lg rounded">
      <div
        className="m-2  bg-[#F1F1F1] flex items-center justify-center border transition duration-700 ease-in-out"
        style={{ height: `${height}` }}
      >
        <Image src={data.img} alt="product img" className="w-full " />
      </div>
      <div className="px-2 py-3">
        <h6 className=" text-slate-700 text-xl font-medium">{data.title}</h6>
        <h6 className="text-base py-1 text-slate-500">From ${data.price}</h6>
        <h6 className="text-xs  text-slate-400">{data.stock}+ in stock</h6>
      </div>
    </section>
  );
};

export default ProductDetails;
