import React from "react";

const Descriptions = ({ values, onChange }: { values: any; onChange: any }) => {
  return (
    <>
      <textarea
        id="description"
        name="description"
        rows={4}
        onChange={onChange}
        className="block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:outline-none focus:border-activeColor focus:ring-activeColor sm:text-sm"
        defaultValue={""}
      />
    </>
  );
};

export default Descriptions;
