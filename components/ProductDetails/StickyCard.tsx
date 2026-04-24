import React from "react";
import UpdateQuantity from "../SelectOptions/UpdateQuantity";
import { addToCart } from "@/app/redux/cartSlice";
import { useDispatch } from "react-redux";
import { pushToDataLayer } from "@/lib/helpers/datelayer";
import { useGuestInfo } from "@/lib/hooks/useGuestInfo";
import { useRouter } from "next/navigation";

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
   const router = useRouter();
  const dispatch = useDispatch();
  const { guestInfo, isReady: guestInfoReady, saveGuestInfo } = useGuestInfo();
  const atc_event_id = `${product.id}_${variant?.id}_add_to_cart`;
  const bc_event_id = `${product.id}_${variant?.id}_begin_checkout`;

 const handleOrderNow = () => {
     pushToDataLayer({
          event: "add_to_cart",
          event_id: atc_event_id,
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
          user_data: {
            'email': guestInfo?.email || '', 
            'phone': guestInfo?.phoneNumber || '',
            'first_name': guestInfo?.name ? guestInfo.name.split(' ')[0] : '',
            'last_name': guestInfo?.name ? guestInfo.name.split(' ').slice(1).join(' ') : '',
          } 
        });
    dispatch(addToCart({ ...product, itemCount: localQuantity, variantId: variant?.id }));
    pushToDataLayer({
      event: "begin_checkout",
      event_id: bc_event_id,
      ecommerce: {
        currency: "BDT",
        value: variant.salePrice ?? variant?.price,
        items: [{
          item_id: product.id,
          item_name: product.title,
          price: variant?.salePrice ?? variant?.price ?? product?.salePrice ?? product?.price,
          quantity: localQuantity ? localQuantity : 1,
          item_category: product.category.name ?? "Uncategorized",
        }],
      },
      user_data: {
        'email': guestInfo?.email || '', 
        'phone': guestInfo?.phoneNumber || '',
        'first_name': guestInfo?.name ? guestInfo.name.split(' ')[0] : '',
        'last_name': guestInfo?.name ? guestInfo.name.split(' ').slice(1).join(' ') : '',
      } 
    });
    router.push("/checkout");
  };
 const handleAddToCart = () => {
     pushToDataLayer({
          event: "add_to_cart",
          event_id: atc_event_id,
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
          user_data: {
            'email': guestInfo?.email || '', 
            'phone': guestInfo?.phoneNumber || '',
            'first_name': guestInfo?.name ? guestInfo.name.split(' ')[0] : '',
            'last_name': guestInfo?.name ? guestInfo.name.split(' ').slice(1).join(' ') : '',
          } 
        });
    dispatch(addToCart({ ...product, itemCount: localQuantity, variantId: variant?.id }));
  };

  

  const getProductImage = (url: any, width?: number) => {
    if (!url) return "/assets/dots.png";
    if (!url.includes("res.cloudinary.com")) return url;

    const secureUrl = url.replace("http://", "https://");

    if (width) {
      return secureUrl.replace(
        "/upload/",
        `/upload/w_${width},q_auto,f_auto/`
      );
    }

    return secureUrl.replace("/upload/", "/upload/w_600,q_auto,f_auto/");
  };

  const stockLeft = variant?.stock;

  return (
  <div
    className={`fixed w-full md:top-0 bottom-0 left-0 right-0 z-[1000]
    md:h-[110px] h-[85px]
    md:border-b border-t bg-white shadow-md px-[2vw]
    flex items-center transition-transform duration-300
    ${
      isVisible
        ? "translate-y-0"
        : "md:-translate-y-full translate-y-full"
    }`}
  >
    <div className="flex items-center justify-between gap-3 w-full">

      {/* LEFT (desktop only) */}
      <div className="hidden md:flex items-center gap-4">
        <img
          src={getProductImage(product?.media?.[0]?.url, 70)}
          width={60}
          height={60}
          className="h-[60px] w-[60px] object-cover rounded-md"
          alt={product?.title}
        />

        <div className="flex flex-col">
          <h6 className="text-sm font-semibold line-clamp-1">
            {product?.title}
          </h6>

          {variant?.stock <= 5 && variant?.stock > 0 && (
            <span className="text-xs text-orange-500">
              Only {variant.stock} left
            </span>
          )}
        </div>
      </div>

      {/* RIGHT (mobile + desktop actions) */}
      <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-3">

        {/* PRICE */}
        <div className="flex flex-col leading-tight">
          <span className="text-lg font-bold text-activeColor">
            ৳{variant?.salePrice ?? variant?.price}
          </span>

          {variant?.salePrice !== variant?.price && (
            <span className="text-xs text-gray-500 line-through">
              ৳{variant?.price}
            </span>
          )}
        </div>

        {/* QUANTITY (desktop only) */}
        <div className="hidden md:block">
          <UpdateQuantity
            item={product}
            variantId={variant?.id}
            localQuantity={localQuantity}
            setLocalQuantity={setLocalQuantity}
            padding="px-2 py-1"
            fontSize="text-base"
          />
        </div>

        {/* ORDER CTA */}
        {variant?.stock > 0 ? (
          <button
            onClick={handleOrderNow}
            className="flex-1 md:flex-none md:w-[140px]
            py-3 bg-activeColor text-white font-semibold rounded-xl
            active:scale-95 transition"
          >
             Order Now
          </button>
        ) : (
          <button
            disabled
            className="flex-1 md:flex-none md:w-[140px]
            py-3 bg-gray-300 text-white font-semibold rounded-xl cursor-not-allowed"
          >
            Out of Stock
          </button>
        )}

        {/* CART */}
        {variant?.stock > 0 && (
          <button
            onClick={handleAddToCart}
            className="w-10 h-10 flex items-center justify-center
            rounded-lg border border-gray-300 text-gray-600
            hover:border-activeColor hover:text-activeColor transition"
          >
            🛒
          </button>
        )}
      </div>
    </div>
  </div>
);
};

export default StickyCard;