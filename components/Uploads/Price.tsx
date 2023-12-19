import React from "react";

const Price = () => {
  return (
    <section className="space-y-4 pt-4">
      <h6 className="text-2xl text-primaryColor font-bold  leading-9">
        Price <span className="text-red-500">*</span>
      </h6>
      <p className="text-base text-secondColor font-medium leading-6">
        Choose a fair pricing for your item or donate easily
      </p>

      <div>
        <div className="relative  rounded-md shadow-sm">
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md  border-[#F1F1F1] py-4 pl-4 pr-20 text-primaryColor font-medium ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-activeColor text-sm sm:leading-6"
            placeholder="1500"
          />
          <div className="absolute inset-y-0 right-0 flex items-center ">
            <label htmlFor="currency" className="sr-only">
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:outline-none focus:ring-1 focus:ring-activeColor text-sm"
            >
              <option>Bangladeshi Taka</option>
              <option>CAD</option>
              <option>EUR</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2 ">
        <div className="flex  items-center">
          <input
            id="comments"
            name="comments"
            type="checkbox"
            className="md:h-6 h-2.5 md:w-6 w-2.5 rounded border-primaryColor text-activeColor focus:ring-activeColor custom-checkedInput"
          />
        </div>
        <label
          htmlFor="comments"
          className="text-secondColor lg:text-sm md:text-xs text-[10px] font-medium"
        >
          I have more than one item
        </label>
      </div>
    </section>
  );
};

export default Price;
