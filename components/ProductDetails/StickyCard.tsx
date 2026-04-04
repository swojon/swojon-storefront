import React from "react";
import UpdateQuantity from "../SelectOptions/UpdateQuantity";
import { addToCart } from "@/app/redux/cartSlice";
import { useDispatch } from "react-redux";
import { pushToDataLayer } from "@/lib/helpers/datelayer";

const StickyCard = ({
  variant,
  product,
  isVisible,
  localQuantity,
  setLocalQuantity,
}: {
  variant?: any;
  product: any;
  isVisible: any;
  localQuantity?: number;
  setLocalQuantity?: (value: any) => void;
}) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    if (variant?.stock <= 0) return;
    pushToDataLayer({
      event: "add_to_cart",
      ecommerce: {
        currency: "BDT",
        value: (variant?.salePrice ?? variant?.price) * (localQuantity ? localQuantity : 1),
        items: [
          {
            item_id: product.id,
            item_name: product.title,
            price: variant?.salePrice ?? variant?.price,
            quantity: localQuantity ? localQuantity : 1,
            item_category: product.category.name ?? "Uncategorized",
          },
        ],
      },
    });
    dispatch(addToCart({ ...product, quantity: localQuantity }));
  };
  const getProductImage = (url:any, width?:number) => {
    if (!url) return "/assets/dots.png"
    if (!url.includes("res.cloudinary.com")) return url
    const secureUrl = url.replace("http://", "https://")
    if (width) {
      return secureUrl.replace(
        "/upload/",
        `/upload/w_${width},q_auto,f_auto/`
      )
    }
    return secureUrl.replace(
      "/upload/",
      "/upload/w_600,q_auto,f_auto/"
    )
  }

  return (
    <div
      className={`fixed w-full md:top-0 bottom-0 left-0 right-0 z-[1000] md:h-[120px] h-[100px] md:border-b border-t  bg-white shadow-md  px-[2vw] flex items-center transition-transform duration-300 ${
        isVisible ? "translate-y-0 " : "md:-translate-y-full translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between gap-5 w-full">
        <div className="md:flex hidden items-center gap-6">
          <img
            src={getProductImage(product?.media[0]?.url, 70)}
            width={70}
            height={80}
            alt={product?.title}
            className="h-[80px] w-[70px] object-cover"
          />

          <div className="flex flex-col gap-2">
            <h6 className="line-clamp-1 text-base font-semibold">
              {product?.title}
            </h6>{" "}
            <span className="text-sm text-secondColor">
              {variant?.optionValues?.map((option: any) => (
                <span key={option.id} className="capitalize">
                  {option.optionName} : {option.value}
                </span>
              ))}
            </span>
            {/* <SellerReviewDropdown sellerId={product?.id} /> */}
          </div>
        </div>

        <div className="flex items-center md:justify-normal justify-between gap-5 md:w-auto w-full">
           <span className="lg:text-2xl text-lg  font-bold  inline-block text-activeColor">
                  ৳{variant?.salePrice ?? product?.price }
                </span>
                {variant?.salePrice != variant?.price && (

                  <span className="lg:text-2xl text-lg  text-gray-700   inline-block line-through">
                  ৳{variant.price}
                </span>
                )}
            
          
          <div className="hidden md:block">
            <UpdateQuantity
              item={product}
              variantId={variant?.id}
              localQuantity={localQuantity}
              
              setLocalQuantity={setLocalQuantity}
              padding="xl:px-2  xl:py-1 py-x"
              fontSize="xl:text-xl lg:text-lg text-base"
            />
          </div>
          {variant?.stock > 0 ? (  
            <button
              onClick={handleAddToCart}
              className="p-3 md:w-[120px] w-full bg-activeColor border border-activeColor rounded-2xl text-white font-semibold "
            >
              Add to cart
            </button> 
          ) : (
            <button
              disabled
              className="p-3 md:w-[120px] w-full bg-gray-300 border border-gray-300 rounded-2xl text-white font-semibold cursor-not-allowed"
            >
              Out of Stock
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StickyCard;
