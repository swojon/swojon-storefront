import React from "react";
import { FiPlus } from "react-icons/fi";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

import { Product } from "@/app/redux/cartSlice";
import { incrementQuantity, decrementQuantity } from "@/app/redux/cartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const UpdateQuantity = ({
  item,
  padding,
  fontSize,
  localQuantity,
  setLocalQuantity,
  variantId
}: {
  item: any;
  padding?: string;
  fontSize?: string;
  localQuantity?: number;
  variantId?: number;
  setLocalQuantity?: (value: any) => void;
}) => {
  console.log("item variant id", item.variantId);
  const dispatch = useDispatch();
  let maximumItemCount = item?.variants?.find(
    (variant: any) => variant.id === variantId
  )?.stock ?? 5;
  console.log("Maximum item count:", maximumItemCount);
 
  const handleIncrement = () => {
    if (setLocalQuantity) {
      // Check if the local quantity is less than the maximum item count
      if (localQuantity && localQuantity >= maximumItemCount) {
        toast.error(
          `Can't add more than ${maximumItemCount} items of this product.`
        );
        return; // Prevent incrementing beyond the maximum item count  
      }
      setLocalQuantity((prev: any) => prev + 1);
    } else {
       if (item.itemCount && item.itemCount >= maximumItemCount) {
        toast.error(
          `Can't add more than ${maximumItemCount} items of this product.`
        );
        return; // Prevent incrementing beyond the maximum item count  
      }
      dispatch(incrementQuantity({ itemId: item.id, variantId: item.variantId }));
    }
  };

  const handleDecrement = () => {
    if (setLocalQuantity) {
      setLocalQuantity((prev: any) => (prev > 1 ? prev - 1 : 1));
    } else {
      dispatch(decrementQuantity({ itemId: item.id, variantId: item.variantId }));
    }
  };

  const itemCount = localQuantity ?? item?.itemCount ?? 1;
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
      <span className="font-semibold">{itemCount}</span>
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
