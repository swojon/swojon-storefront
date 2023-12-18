import React from "react";

const ProductTitle = () => {
  return (
    <section className="space-y-4 pt-4">
      <h6 className="text-2xl text-primaryColor font-lexed font-medium">
        Title would be? <span className="text-red-500">*</span>
      </h6>
      <p className="text-base text-secondColor ">
        Choose a brief yet clear title for your item, it makes the good
        impression after photos
      </p>

      <div className="w-full ">
        <input
          id="text"
          name="name"
          className="block w-full rounded-md border border-gray-300 bg-gray-50 py-2.5 pr-3 px-5 leading-5 placeholder-[#C0C0C0] focus:border-activeColor focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-activeColor sm:text-sm"
          placeholder="e.g. Samsung smartphone"
          type="text"
        />
      </div>

      <div className="flex items-center space-x-2 ">
        <div className="flex h-5 items-center">
          <input
            id="comments"
            name="comments"
            type="checkbox"
            className="md:h-4 h-2.5 md:w-4 w-2.5 rounded border-gray-300 text-activeColor focus:ring-activeColor custom-checkedInput"
          />
        </div>
        <label
          htmlFor="comments"
          className="text-secondColor lg:text-sm md:text-xs text-[10px]"
        >
          I have more than one item
        </label>
      </div>

      <div>
        <span className="text-2xl text-primaryColor font-lexed font-medium block pb-4">
          Quantity <span className="text-red-500">*</span>
        </span>

        <input
          id="text"
          name="name"
          className="block w-full rounded-md border border-gray-300 bg-gray-50 py-2.5 pr-3 px-5 leading-5 placeholder-[#C0C0C0] focus:border-activeColor focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-activeColor sm:text-sm"
          placeholder="1"
          type="text"
        />
      </div>
    </section>
  );
};

export default ProductTitle;
