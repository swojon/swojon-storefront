import Image from "next/image";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/redux/cartSlice";
import { FaOpencart } from "react-icons/fa";
import { BiCartAdd } from "react-icons/bi";
import { useState } from "react";
import { useSession } from "next-auth/react";
import FavoriteProduct from "./FavoriteProduct";

export function getPricingSummary(variants: any) {
  if (!variants) return {
    minPrice: null,
    maxPrice: null,
    hasDiscountLabel: false,
    discountLabel: null
  }
  // ✅ Single Variant Case
  if (variants?.length === 1) {
    const va = variants[0];
    const regular = va.price;
    const sale = va.salePrice ?? va.price;
    const discountAmount = regular - sale;
    const discountPercent = (discountAmount / regular) * 100;

    let discountLabel = '';
    if (discountAmount > 0) {
      discountLabel =
        discountPercent >= 15
          ? `${Math.round(discountPercent)}% OFF`
          : `Save ${Math.round(discountAmount)} BDT`;
    }

    return {
      minPrice: sale,
      maxPrice: regular,
      hasDiscountLabel: discountAmount > 0,
      discountLabel,
    };
  }
// ✅ Multiple Variants Case
  const prices = variants.map((p:any) => p.salePrice ?? p.price)
  console.log("var prices", prices)

  let minSale = Math.min(...prices);
  let maxSale = Math.max(...prices);
  if (prices.length == 0) {
    minSale = 0;
    maxSale = 0
  }
  console.log(minSale, maxSale)

  let maxDiscount = { amount: 0, percent: 0 };

  for (const v of variants) {
    const regular = v.price;
    const sale = v.salePrice ?? v.price;
    const discountAmount = regular - sale;
    const discountPercent = (discountAmount / regular) * 100;

    if (discountPercent > maxDiscount.percent) {
      maxDiscount = { amount: discountAmount, percent: discountPercent };
    }
  }

  let discountLabel = '';
  if (maxDiscount.amount > 0) {
    discountLabel =
      maxDiscount.percent >= 15
        ? `UP TO ${Math.round(maxDiscount.percent)}% OFF`
        : `SAVE UP TO ${Math.round(maxDiscount.amount)} Tk`;
  }

  return {
    minPrice: minSale,
    maxPrice: maxSale,
    hasDiscountLabel: maxDiscount.amount > 0,
    discountLabel,
  };
}

const ProductCard2 = ({ product }: { product: any }) => {
  const dispatch = useDispatch();
  const { data: session, status } = useSession();
  console.log("card ", product)
  const { minPrice, maxPrice, hasDiscountLabel, discountLabel } = getPricingSummary(product.variants);

  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <div className="">
      <Link href={`/products/${product.id}`} className=" block">
        <div className=" relative aspect-[5/5] ">
          <Image
            src={
              product.media?.length > 0
                ? product.media[0].url
                : "/assets/pro1.png"
            }
            width={550}
            height={550}
            alt="product banner"
            className="h-full w-full object-cover  transition ease-in-out delay-150 duration-300 rounded-md"
          />
          {hasDiscountLabel && (
            <div className="bg-activeColor p-1 absolute top-0 left-1  text-white text-xs font-bold px-2 py-1 rounded-sm">
              {discountLabel }
            </div>
          )}
        </div>
        
        <div className="mt-5 space-y-2 text-left">
          <h6 className="md:text-[17px] text-sm font-light text-black overflow-hidden line-clamp-1 ">
            {product.title}
          </h6>

          <div>
            {product.variants?.length == 1 && hasDiscountLabel ? (
              <div className="flex flex-wrap gap-1.5">
                <span className="md:text-lg text-[0.9rem] font-bold  inline-block text-activeColor">
                  ৳{minPrice}
                </span>
                <span className="md:text-base text-[13px] text-gray-700   inline-block line-through">
                  ৳{maxPrice}
                </span>
              </div>
            ) : (
              <>
                <span className="md:text-lg text-[0.9rem] font-bold  inline-block text-primaryColor">
                  ৳{minPrice} {minPrice != maxPrice  && `- ${maxPrice}`}
                </span>{" "}
              </>
            )}
          </div>
          { product?.options?.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {product.options.map((option: any) => (
                <span                
                  key={option.id}
                  className="text-xs bg-gray-100 px-2 py-1 rounded-md"
                >
                  {option.values.length} {option.name} 
                </span>
              ))}
            </div>
          )}
        </div>
        {status === "authenticated" &&  (
          <div className="absolute right-0 top-0 m-3 w-7 h-7 flex justify-center items-center border border-[#EFEFEF] rounded-full bg-whiteColor hover:scale-105 transition ease-in-out delay-150 duration-300">
            <FavoriteProduct listing={product} />
          </div>
        )}
      </Link>
      
           
        
      
      
      {/* <div className="flex justify-center">
        <button
          onClick={handleAddToCart}
          className="py-1.5 px-4 border border-primaryColor rounded-md md:text-[16px] font-semibold text-sm flex items-center gap-1 group transition  duration-700 ease-in-out relative mb-8 w-[90%] text-center justify-center"
        >
          <div className="w-full h-full absolute inset-0 rounded-md group-hover:border-[1.5px] border-primaryColor transition duration-700 ease-in-out space-x-2"></div>
        
          <span className="block">Add</span>{" "}
          <BiCartAdd className="font-semibold block" />
        </button>
      </div> */}
    </div>
  );
};

export default ProductCard2;
