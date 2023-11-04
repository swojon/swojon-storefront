import React from "react";

const Descriptions = () => {
  return (
    <>
      <textarea
        id="about"
        name="about"
        rows={4}
        className="block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-activeColor focus:ring-activeColor sm:text-sm"
        defaultValue={""}
      />
    </>
  );
};

export default Descriptions;
