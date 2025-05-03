import React from "react";
import { FiPlus } from "react-icons/fi";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

import { Product } from "@/app/redux/cartSlice";
import { incrementQuantity, decrementQuantity } from "@/app/redux/cartSlice";
import { useDispatch } from "react-redux";

const UpdateQuantity = ({
  item,
  padding,
  fontSize,
}: {
  item: Product;
  padding?: string;
  fontSize?: string;
}) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`flex items-center gap-4  border-secondColor ${
        padding ? `${padding}` : "px-2 py-x"
      }  ${
        fontSize ? `${fontSize}` : "text-sm"
      } text-primaryColor rounded-3xl `}
    >
      <button
        onClick={() => dispatch(decrementQuantity(item.id))}
        className="border border-secondColor rounded-md p-1"
      >
        <FaMinus />
      </button>{" "}
      <span className="font-semibold">{item?.quantity || 1}</span>
      <button
        onClick={() => dispatch(incrementQuantity(item.id))}
        className="border border-secondColor rounded-md p-1"
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default UpdateQuantity;
