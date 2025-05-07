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
  localQuantity,
  setLocalQuantity,
}: {
  item: any;
  padding?: string;
  fontSize?: string;
  localQuantity?: number;
  setLocalQuantity?: (value: any) => void;
}) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    if (setLocalQuantity) {
      setLocalQuantity((prev: any) => prev + 1);
    } else {
      dispatch(incrementQuantity(item.id));
    }
  };

  const handleDecrement = () => {
    if (setLocalQuantity) {
      setLocalQuantity((prev: any) => (prev > 1 ? prev - 1 : 1));
    } else {
      dispatch(decrementQuantity(item.id));
    }
  };

  const quantity = localQuantity ?? item?.quantity ?? 1;
  return (
    <div
      className={`flex items-center gap-4  border-secondColor ${
        padding ? `${padding}` : "px-2 py-x"
      }  ${
        fontSize ? `${fontSize}` : "text-sm"
      } text-primaryColor rounded-3xl `}
    >
      <button
        onClick={handleDecrement}
        className="border border-secondColor rounded-md p-1"
      >
        <FaMinus />
      </button>
      <span className="font-semibold">{quantity}</span>
      <button
        onClick={handleIncrement}
        className="border border-secondColor rounded-md p-1"
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default UpdateQuantity;
