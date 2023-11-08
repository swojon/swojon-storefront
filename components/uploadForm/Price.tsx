import React from "react";

const Price = ({ values, onChange }: { values: any; onChange: any }) => {
  return (
    <section className="space-y-2">
      <input
        type="number"
        name="price"
        onChange={onChange}
        id=""
        placeholder="write your price"
        className="block w-full min-w-0 flex-1 py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-activeColor focus:ring-activeColor sm:text-sm bg-white"
      />
      <div className="flex items-center space-x-2">
        <input
          id=""
          name="comments"
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-activeColor focus:ring-activeColor custom-checkedInput"
        />
        <span className="text-xs text-primaryColor ">Negotiable</span>
      </div>
    </section>
  );
};

export default Price;
