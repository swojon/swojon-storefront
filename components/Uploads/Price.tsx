import React from "react";

const Price = ({
  touched,
  handleBlur,
  setFieldValue,
  values,
  handleChange,
  errors
}: {
  handleBlur:any;
  touched:any;
  setFieldValue: any;
  values: any;
  handleChange: any;
  errors:any
}) => {
  const handleChecked = (e: { target: { checked: any } }) => {
    if (e.target.checked) {
      setFieldValue("isDonation", true);
      setFieldValue("price", 0);
    } else {
      setFieldValue("isDonation", false);
    }
  };
  return (
    <section className="md:space-y-4 space-y-2 pt-4">
      <h6 className="md:text-2xl text-lg text-primaryColor font-bold  leading-9">
        Price <span className="text-red-500">*</span>
      </h6>
      {(touched?.price && errors?.price) ?
       <p className="md:text-base text-sm text-red-500 font-medium leading-6">
        {errors.price}
      </p>
      :    
      <p className="md:text-base text-sm text-secondColor font-medium leading-6">
        Choose a fair pricing for your item or donate easily
      </p>
      }

      <div>
        <div className="relative  rounded-md shadow-sm">
          <input
            type="number"
            name="price"
            id="price"
            onBlur={handleBlur}
            value={values.price ?? ""}
            onChange={handleChange}
            className="block w-full rounded-md border border-gray-300 md:py-4 py-3 pl-4 pr-20 text-primaryColor font-medium placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-activeColor text-sm sm:leading-6"
          />
          <div className="absolute inset-y-0 right-1 flex items-center border-l border-gray-300">
            <label htmlFor="currency" className="sr-only">
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-3 text-gray-500 focus:outline-none focus:ring-1 focus:ring-activeColor text-sm"
            >
              <option>Bangladeshi Taka</option>
              {/* <option>CAD</option> */}
              {/* <option>EUR</option> */}
            </select>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2 ">
        <div className="flex  items-center">
          <input
            id="isDonation"
            name="isDonation"
            type="checkbox"
            onChange={handleChecked}
            className=" h-4  w-4 rounded border-primaryColor text-activeColor focus:ring-activeColor custom-checkedInput"
          />
        </div>
        <label
          htmlFor="comments"
          className="text-secondColor lg:text-sm md:text-xs text-[10px] font-medium"
        >
          I want to donate
        </label>
      </div>
    </section>
  );
};

export default Price;
