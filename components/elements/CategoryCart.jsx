import Image from "next/image";
import React from "react";

const CategoryCart = ({ data, height }) => {
  return (
    <section className="w-full  flex flex-col items-center">
      <div
        className="bg-[#F1F1F1] p-7 w-full rounded-full flex items-center justify-center hover:-translate-y-2 transition duration-700 ease-in-out"
        style={({ height: `${height}` }, { width: `${height}` })}
      >
        <Image src={data.img} alt="" className="w-full " />
      </div>
      <h6 className="pt-3 capitalize text-slate-700 text-2xl font-medium">
        {data.item}
      </h6>
      <h6 className="text-sm pt-1 text-slate-500">{data.title}</h6>
    </section>
  );
};

export default CategoryCart;
