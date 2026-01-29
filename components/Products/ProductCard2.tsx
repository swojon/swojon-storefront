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

  const { minPrice, maxPrice, hasDiscountLabel, discountLabel } = getPricingSummary(product.variants);
  const isOutOfStock = !product?.variants || product.variants.every((v: any) => v.stock <= 0);
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <div className="">
      <Link href={`/products/${product.id}`} className=" block">
       <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-50">
  <Image
    src={product.media?.[0]?.url.replace('/upload/', '/upload/w_600,q_auto,f_auto/') || "/assets/pro1.png"}
    fill
    unoptimized
    alt={product.title}
    className={`object-cover transition
      ${isOutOfStock ? "opacity-75" : "hover:scale-105"}`}
  />

  {/* Out of stock badge */}
  {isOutOfStock && (
    <span className="absolute top-2 right-2 text-[11px] font-medium
      bg-gray-900/80 text-white px-2 py-1 rounded-full">
      Out of stock
    </span>
  )}

  {/* Discount badge */}
  {hasDiscountLabel && !isOutOfStock && (
    <span className="absolute top-2 left-2 text-[11px] font-semibold
      bg-activeColor text-white px-2 py-1 rounded-full">
      {discountLabel}
    </span>
  )}
</div>

        
        <div className="mt-5 space-y-2 text-left">
       <h3 className="text-sm font-medium text-gray-900 line-clamp-2 leading-snug">
  {product.title}
</h3>

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
               <span
                className={`md:text-lg text-[0.9rem] font-bold inline-block
                  ${isOutOfStock ? "text-gray-400" : "text-primaryColor"}`}
                >
                ৳{minPrice}
                {minPrice != maxPrice && ` - ${maxPrice}`}
              </span>
              </>
            )}
          </div>
          {isOutOfStock && (
  <p className="text-xs text-gray-500 mt-1">
    Temporarily unavailable
  </p>
)}

          { product?.options?.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {product.options.map((option: any) => (
               <span key={option.name} className="text-[11px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
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
