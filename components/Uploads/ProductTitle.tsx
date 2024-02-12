import React, { useState } from "react";

const ProductTitle = ({
  handleChange,
  handleBlur,
  touched,
  values,
  errors,
}: // handleChangeWithProgress,
{
  handleBlur: any;
  touched: any;
  handleChange: any;
  values: any;
  errors: any;
  // handleChangeWithProgress: any;
}) => {
  const [showQuantity, setShowQuantity] = useState(false);
  const handleCheckBox = (e: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    // console.log("checked", e.target.checked)
    setShowQuantity(e.target.checked);
  };
  console.log("error", errors.title);
  console.log("new title", values.title);
  return (
    <section className="md:space-y-4 space-y-2 pt-4">
      <h6 className="md:text-2xl text-lg text-primaryColor font-bold  leading-9">
        Title would be? <span className="text-red-500">*</span>
      </h6>
      {touched?.title && errors?.title ? (
        <p className="md:text-base text-sm text-red-500 font-medium leading-6">
          {errors?.title}
        </p>
      ) : (
        <p className="md:text-base text-sm text-secondColor font-medium leading-6">
          Choose a brief yet clear title for your item, it makes the good
          impression after photos
        </p>
      )}
      <div className="w-full ">
        <input
          id="text"
          name="title"
          value={values.title}
          onBlur={handleBlur}
          onChange={handleChange}
          className={`block w-full rounded-md  border border-gray-300 md:py-4 py-3 pr-3 px-5 leading-5 placeholder-[#C0C0C0] focus:border-activeColor focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-activeColor md:text-base text-sm"
          placeholder="e.g. Samsung smartphone ${
            touched.title && errors.title
              ? "border border-red-500"
              : "border border-[#F1F1F1]"
          }`}
          type="text"
        />

        {touched.title && errors.title ? <div>{errors.title}</div> : null}
      </div>

      <div className="flex items-center space-x-2 ">
        <div className="flex h-5 items-center">
          <input
            id="comments"
            type="checkbox"
            onChange={handleCheckBox}
            className="md:h-4 h-4 md:w-4 w-4 rounded border border-gray-300 text-activeColor focus:ring-activeColor custom-checkedInput"
          />
        </div>
        <label
          htmlFor="comments"
          className="text-secondColor lg:text-sm md:text-xs text-[10px]"
        >
          I have more than one item
        </label>
      </div>
      {showQuantity && (
        <div>
          <span className="md:text-2xl text-lg text-primaryColor font-lexed font-bold block pb-4">
            Quantity <span className="text-red-500">*</span>
          </span>

          <input
            id="text"
            name="quantity"
            value={values.quantity}
            onChange={handleChange}
            className="block w-full rounded-md border border-[#F1F1F1] md:py-4 py-3 pr-3 px-5 leading-5 placeholder-[#C0C0C0] focus:border-activeColor focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-activeColor sm:text-sm"
            placeholder="1"
            type="number"
          />
        </div>
      )}
    </section>
  );
};

export default ProductTitle;
