import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { getPricingSummary } from '../Products/ProductCard2';

function SearchSuggestionsProductCard({product} : {product:any}) {
    const variant = product.variants ? product.variants[0] : null;
    const { minPrice, maxPrice, hasDiscountLabel, discountLabel } = getPricingSummary(product.variants);

    return (
        <Link href={`/products/${product.id}`}>
    <div className="flex my-2 items-center justify-between gap-5 w-full">
        <div className="md:flex hidden items-center gap-6">
          <Image
            src={variant ? variant.media[0]?.url : product?.media[0]?.url}
            width={700}
            height={700}
            alt={product?.title}
            className="h-[80px] w-[70px] object-cover"
          />

          <div className="flex flex-col gap-2">
            <h6 className="line-clamp-1 text-base font-semibold">
              {product?.title}
            </h6>{" "}
            <span className="text-sm text-secondColor">
               {product.options.map((option: any) => (
                <span                
                  key={option.id}
                  className="text-xs bg-gray-100 px-2 py-1 rounded-md"
                >
                  {option.values.length} {option.name} 
                </span>
              ))}
            </span>
            {/* <SellerReviewDropdown sellerId={product?.id} /> */}
          </div>
        </div>

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
        </Link>
  )
}

export default SearchSuggestionsProductCard