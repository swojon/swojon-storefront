import React from "react";
import { FiPlus } from "react-icons/fi";
import { FaMinus } from "react-icons/fa6";
import { Product } from "@/app/redux/cartSlice";
import { incrementQuantity, decrementQuantity } from "@/app/redux/cartSlice";
import { useDispatch } from "react-redux";

const UpdateQuantity = ({ item }: { item: Product }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 border border-gray-100/80 px-2 py-x  rounded-3xl text-sm">
      <button onClick={() => dispatch(decrementQuantity(item.id))}>
        <FaMinus />
      </button>{" "}
      {item.quantity}
      <button onClick={() => dispatch(incrementQuantity(item.id))}>
        <FiPlus />
      </button>
    </div>
  );
};

export default UpdateQuantity;
