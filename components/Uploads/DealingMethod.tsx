import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MdKeyboardArrowUp } from "react-icons/md";
import React, { useEffect, useRef, useState } from "react";
import { BiSelection } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";

import Courier from "./Courier";
import dynamic from "next/dynamic";

const DynamicMeetup = dynamic(() => import("./MeetUp"), {ssr: false})

const method = [
  { id: 188, title: "Meet-up", slug: "meetup" },
  { id: 14, title: "Courier Delivery", slug: "courier" },
];

const DealingMethod = ({
  setFieldValue,
  values,
  handleChange,
  handleBlur,
  errors,
  touched
}: {
  handleBlur: any;
  touched:any;
  errors:any;
  setFieldValue: any;
  values: any;
  handleChange: any;
}) => {
  const [selectMethod, setSelectMethod] = useState<any>(method.find(i => i.slug == values.dealingMethod) ?? null);
  const [showSelectedMethod, setShowSelectedMethod] = useState<any>(null);
  useEffect(() => {
    setFieldValue("dealingMethod", selectMethod?.slug);
  }, [selectMethod]);

  console.log("Dealing method", values.dealingMethod)
  return (
    <section className="md:space-y-4 space-y-2 pt-4">
      <h6 className="md:text-2xl text-lg text-primaryColor font-bold  leading-9">
        Dealing Method? <span className="text-red-500">*</span>
      </h6>
      {(touched.dealingMethod && errors.dealingMethod) ? 
      <p className="md:text-base text-sm text-red-500 font-medium leading-6">
        {errors.dealingMethod}
      </p>
      :
      <p className="md:text-base text-sm text-secondColor font-medium leading-6">
        Select the method, how you want to send the item
      </p>  }  

      <div className="rounded-2xl border border-gray-200  ">
        <div className="md:p-6 p-2.5 border-b border-gray-200 flex items-center justify-between">
          <span className="md:text-base text-sm text-primaryColor font-lexed font-medium capitalize">
            {selectMethod ? selectMethod.title : "Chose a dealing method"}
          </span>
          <span className="text-2xl text-primaryColor">
            {selectMethod ? (
              <MdOutlineClose
                className="cursor-pointer"
                onClick={() => setSelectMethod(null)}
              />
            ) : (
              <MdKeyboardArrowUp className="" />
            )}
          </span>
        </div>
        {selectMethod === null && (
          <div className="md:p-6 p-2.5 grid grid-cols-2 gap-4 ">
            {method.map((item) => (
              <div
                key={item.id}
                className={`flex h-[98px] flex-col justify-center items-center  p-4 md:space-y-4 space-y-1 border  rounded-md cursor-pointer text-center ${
                  item?.id === selectMethod?.id
                    ? "border-activeColor"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setSelectMethod(item)}
              >
                <BiSelection />

                <span className="md:text-base text-sm text-primaryColor font-lexed font-medium capitalize">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        )}
        {selectMethod && selectMethod?.title === "Meet-up" ? (
          <DynamicMeetup  setFieldValue={setFieldValue} values={values} errors={errors} touched={touched} handleBlur={handleBlur}  />
        ) : (
          selectMethod?.title === "Courier Delivery" && <Courier setFieldValue={setFieldValue} values={values} handleChange={handleChange} />
        )}
      </div>
    </section>
  );
};

export default DealingMethod;
