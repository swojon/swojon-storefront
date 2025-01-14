import React, { useEffect, useState } from "react";
import { BiSelection } from "react-icons/bi";
import { BsStarFill, BsStarHalf, BsStars } from "react-icons/bs";

const condition = [
  {
    id: 188,
    slug: "brand-new",
    title: "Brand New",
    icon: <BsStars className="text-primaryColor h-5 w-5" />,
    description:
      "The product is in its original, unopened condition, never used. Includes all original accessories and packaging.",
  },
  {
    id: 14,
    slug: "like-new",
    icon: <BsStarFill className="text-primaryColor h-5 w-5" />,
    title: "Like New",
    description:
      "Excellent condition with minimal signs of use. Almost new appearance and functions perfectly.",
  },
  {
    id: 15,
    slug: "used",
    title: "Used",
    icon: <BsStarHalf className="text-primaryColor h-5 w-5" />,
    description:
      "Previously owned, Please refer to the item's listing for specific details on its condition.",
  },
];

const Condition = ({
  setFieldValue,
  values,
  handleBlur,
  touched,
  errors,
}: {
  touched: any;
  handleBlur: any;
  values: any;
  errors: any;
  setFieldValue: any;
}) => {
  const [selectCondition, setSelectCondition] = useState<any>(
    condition.find((c) => c.slug === values.condition)
  );
  useEffect(() => {
    setFieldValue("condition", selectCondition?.slug);
  }, [selectCondition]);
  return (
    <section className="md:space-y-4 space-y-2 pt-4">
      <h6 className="md:text-2xl text-lg text-primaryColor font-bold  leading-9">
        Condition of the item? <span className="text-red-500">*</span>
      </h6>
      {touched?.condition && errors?.condition ? (
        <p className="md:text-base text-sm text-red-500 font-medium leading-6">
          {errors.condition}
        </p>
      ) : (
        <p className="md:text-base text-sm text-secondColor font-medium leading-6">
          Sharing the condition of your item conveys transparent message to your
          customer
        </p>
      )}

      <div className="grid grid-cols-3  md:gap-5 gap-3">
        {condition.map((item: any) => (
          <div
            key={item.id}
            className={`flex flex-col justify-center items-center gap-2 py-5 px-3 border  rounded-md cursor-pointer md:space-y-2.5 text-center ${
              item?.id === selectCondition?.id
                ? "border border-activeColor bg-activeColor bg-opacity-5"
                : "border-gray-200 hover:border-gray-500"
            }`}
            onClick={() => setSelectCondition(item)}
          >
            {item.icon}

            <span className="text-base text-primaryColor font-lexed font-medium capitalize">
              {item.title}
            </span>

            <p className="text-sm text-secondColor text-center hidden md:block">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Condition;
