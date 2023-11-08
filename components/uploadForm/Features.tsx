import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

const Features = () => {
  return (
    <section className="space-y-4">
      <div className="flex gap-3 items-center">
        <span className="block w-full min-w-0 flex-1 py-2 px-3 rounded-md border border-gray-300 text-sm bg-white">
          1. ashkdsgdsgfd
        </span>
        <button className="bg-activeColor p-3 rounded-md text-white">
          <BiMinus />
        </button>
      </div>

      <div className="flex gap-3 items-center">
        <input
          type="text"
          name=""
          id=""
          placeholder="write your feature"
          className="block w-full min-w-0 flex-1 py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-activeColor focus:ring-activeColor sm:text-sm bg-white"
        />
        <button className="bg-activeColor p-3 rounded-md text-white">
          <BiPlus />
        </button>
      </div>
    </section>
  );
};

export default Features;
