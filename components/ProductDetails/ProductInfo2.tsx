import React, { useEffect, useRef, useState } from "react";
import { IoStorefrontOutline } from "react-icons/io5";
import { RiShoppingBag2Line } from "react-icons/ri";
import { LiaShippingFastSolid } from "react-icons/lia";
import ResponsiveSelectOptions from "../SelectOptions/ResponsiveSelectOptions";
import SellerReviewDropdown from "../Review/SellerReviewDropdown";
import { useDispatch } from "react-redux";
import { setFilteredImages } from "@/app/redux/filterImagesSlice";
import img1 from "@/public/hero/red1-min.jpg";
import UpdateQuantity from "../SelectOptions/UpdateQuantity";
import { addToCart } from "@/app/redux/cartSlice";
import StickyCard from "./StickyCard";

const DELIVERYMETHOD = [
  {
    id: 11,
    icon: <IoStorefrontOutline />,
    title: "Pickup",
    desc: "Ready within 2 hours",
    destination: "Nasirabad, Muradpur, Chittagong",
    pl: "Pick up at",
  },
  {
    id: 12,
    icon: <RiShoppingBag2Line />,
    title: "Delivery",
    desc: "Check availability",
    destination: "520101",
    pl: "Same Day Delivery",
  },
  {
    id: 13,
    icon: <LiaShippingFastSolid />,
    title: "Shipping",
    desc: "Arrives by Wed, Mar 26",
    destination: "52404",
    pl: "Ship to",
  },
];

// const COLOR = [
//   { id: 11, color: "bg-red-500", price: 400, colorName: "red" },
//   { id: 12, color: "bg-purple-500", colorName: "purple" },
//   { id: 13, color: "bg-green-600", colorName: "green" },
//   { id: 14, color: "bg-sky-700", price: 400, colorName: "sky" },
// ];

const COLOR = [
  {
    id: 11,
    color: "bg-red-500",
    price: 400,
    colorName: "red",
    images: [{ url: "/hero/red1-min.jpg" }, { url: "/hero/red2-min.jpg" }],
  },
  {
    id: 12,
    color: "bg-purple-500",
    colorName: "purple",
    images: [
      { url: "/hero/purple1-min.jpg" },
      { url: "/hero/purple12-min.jpg" },
    ],
  },
  {
    id: 13,
    color: "bg-green-600",
    colorName: "green",
    images: [{ url: "/hero/green1-min.jpg" }, { url: "/hero/green2-min.jpg" }],
  },
  {
    id: 14,
    color: "bg-sky-700",
    price: 400,
    colorName: "sky",
    images: [{ url: "/hero/red1-min.jpg" }, { url: "/hero/red1-min.jpg" }],
  },
];

const SIZES = [
  { id: 11, size: 4 },
  { id: 12, size: 6 },
  { id: 13, size: 8 },
  { id: 14, size: 10 },
];

function findMatchingVariant(variants:any, selectedOptions:any) {
  return variants?.find((variant:any) => {
    return variant.optionValues.every((ov:any) => {
      const optionName = ov.optionName;
      return selectedOptions[optionName] === ov.value;
    });
  });
}

const ProductInfo2 = ({ product, selectedVariant, setSelectedVariant }: { product: any, selectedVariant:any, setSelectedVariant:any }) => {
  const dispatch = useDispatch();
  const [activeMethod, setActiveMethod] = useState(DELIVERYMETHOD[0]);
  const [selectedOptions, setSelectedOptions] = useState<any>({});
  // const [activeOption, setActiveOption] = useState<string>("Select Option");
  const [activeColor, setActiveColor] = useState<string>("Select Color");
  const [filteredImages, setSelectedFilteredImages] = useState(COLOR[0].images);
  const [activeSize, setActiveSize] = useState(SIZES[0]);
  const [localQuantity, setLocalQuantity] = useState<number>(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (selectedVariant){
      console.log("selected variant fro", selectedVariant);
      selectedVariant?.optionValues?.forEach((option: { optionName: string, value: string }) => {
        setSelectedOptions((prev: any) => ({
          ...prev,
          [option.optionName]: option.value,
        }));
        }
      );
      
    }
  }, [selectedVariant]);

  
  useEffect(() => {
    // if (product.variants.length == 1) {
    //   setSelectedVariant(product.variants[0])
    // } else {
      const variant = findMatchingVariant(product.variants, selectedOptions);

      setSelectedVariant(variant);
    // }
  }, [selectedOptions]);

  const handleOptionChange = (option:string, color: string) => {
    setSelectedOptions((prev: any) => ({
      ...prev,
      [option]: color,
    }));
    
    // setSelectedFilteredImages(color.images);
    // dispatch(setFilteredImages(color.images));
  };
  const stock = selectedVariant?.stock ?? 0;
  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, itemCount: localQuantity, variantId: selectedVariant?.id }));
  };
  const productInfoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { root: null, threshold: 0 }
    );

    if (productInfoRef.current) {
      observer.observe(productInfoRef.current);
    }

    return () => {
      if (productInfoRef.current) {
        observer.unobserve(productInfoRef.current);
      }
    };
  }, []);

  console.log("product ghadjsfhdkjshf", product);

  return (
    <div>
      <StickyCard
        product={product ?? null}
        variant={selectedVariant}
        isVisible={isVisible}
        localQuantity={localQuantity}
        setLocalQuantity={setLocalQuantity}
      />
      <div className="space-y-5 text-primaryColor" ref={productInfoRef}>
       <div className="space-y-2">
            <h2 className="text-2xl font-bold leading-tight">
              {product?.title}
            </h2>

            <SellerReviewDropdown sellerId={product?.id} />

            <div className="flex items-center gap-3 mt-2">
              <span className="text-3xl font-bold text-activeColor">
                ৳{selectedVariant?.salePrice ?? product?.price}
              </span>

              {selectedVariant?.salePrice !== selectedVariant?.price && (
                <span className="text-lg text-gray-400 line-through">
                  ৳{selectedVariant?.price}
                </span>
              )}
            </div>
            <div className="mt-2">
  {stock > 10 && (
    <span className="inline-block text-sm px-3 py-1 rounded-full bg-green-100 text-green-700">
      In stock
    </span>
  )}

  {stock > 0 && stock <= 10 && (
    <span className="inline-block text-sm px-3 py-1 rounded-full bg-orange-100 text-orange-700">
      Only {stock} left
    </span>
  )}

  {stock === 0 && (
    <span className="inline-block text-sm px-3 py-1 rounded-full bg-red-100 text-red-700">
      Out of stock
    </span>
  )}
</div>
      </div>

  {product.options && product.options.length > 0 && (
    
  
  <div className="p-4 border rounded-xl space-y-4 bg-gray-50">
  {product.options?.map((option: any) => (
    <div key={option.id} className="space-y-2">
      <span className="font-semibold">
        {option.name}:
        <span className="ml-1 text-gray-600 font-medium">
          {selectedOptions[option.name] || "Select"}
        </span>
      </span>

      <div className="flex flex-wrap gap-2">
        {option.values.map((val: any) => (
          <button
            key={val}
            onClick={() => handleOptionChange(option.name, val)}
            className={`px-3 py-2 rounded-lg border transition
              ${
                selectedOptions[option.name] === val
                  ? "border-activeColor bg-activeColor/10"
                  : "border-gray-300 hover:border-gray-400"
              }`}
          >
            {val}
          </button>
        ))}
      </div>
    </div>
  ))}
</div>
  )}      
        
        {/* <div className="space-y-2">
          <span className="text-primaryColor font-semibold text-lg">
            Size:{" "}
            <span className="text-secondColor font-medium capitalize text-base">
              {activeSize.size}
            </span>
          </span>

          <div className="grid grid-cols-4 gap-3 ">
            {SIZES.map((item) => (
              <div
                onClick={() => setActiveSize(item)}
                key={item.id}
                className={`rounded-md border ${
                  activeSize.id === item.id
                    ? "border-secondColor"
                    : "border-gray-200"
                } p-1 text-sm text-center cursor-pointer`}
              >
                {item.size}
              </div>
            ))}
          </div>
        </div> */}
        {/* <div className="flex flex-wrap gap-3 ">
          {DELIVERYMETHOD.map((method) => (
            <div
              onClick={() => setActiveMethod(method)}
              key={method.id}
              className={`w-[120px] border ${
                activeMethod.id === method.id
                  ? "border-activeColor"
                  : " border-secondColor"
              }  rounded-md p-2.5 cursor-pointer space-y-2`}
            >
              <span
                className={`text-xl ${
                  activeMethod.id === method.id
                    ? "text-activeColor"
                    : " text-secondColor"
                }`}
              >
                {method.icon}
              </span>

              <span className="block text-base  text-primaryColor font-medium">
                {method.title}
              </span>

              <span className="block text-xs  text-primaryColor ">
                {method.desc}
              </span>
            </div>
          ))}
        </div> */}
       
  
  {/* Stock */}
  <div className="p-5 border rounded-2xl space-y-4 bg-white shadow-sm">

  {/* OUT OF STOCK */}
  {stock === 0 ? (
    <>
      <p className="text-center text-red-500 font-medium">
        This variant is currently out of stock
      </p>

      <button
        disabled
        className="w-full py-3 rounded-xl bg-gray-300 text-gray-600 cursor-not-allowed"
      >
        Out of Stock
      </button>

      <button
        className="w-full py-3 rounded-xl border border-activeColor text-activeColor font-semibold hover:bg-activeColor/10 transition"
      >
        Notify me when available
      </button>

      <p className="text-sm text-gray-500 text-center">
        Try selecting another color or size
      </p>
    </>
  ) : (
    <>
      {/* LOW STOCK */}
      {stock <= 10 && (
        <p className="text-sm text-red-500 font-medium">
          Hurry! Only {stock} left
        </p>
      )}

      <div className="flex items-center gap-4">
        <UpdateQuantity
          item={product}
          variantId={selectedVariant?.id}
          localQuantity={localQuantity}
          setLocalQuantity={setLocalQuantity}
        />

        <button
          onClick={handleAddToCart}
          className="flex-1 py-3 bg-activeColor rounded-xl text-white font-semibold text-lg hover:opacity-90 transition"
        >
          Add to Cart
        </button>
      </div>
    </>
  )}

  {/* Trust */}
  <div className="text-sm text-gray-500 space-y-1">
    <p>✔ Genuine product</p>
    <p>✔ Easy returns</p>
    <p>✔ Fast delivery</p>
  </div>
   {/* Delivery Box */}
    <div className="border rounded-xl p-4 bg-gray-50 space-y-2">
      <h3 className="font-semibold text-gray-900">
        Delivery Information
      </h3>

      <p className="text-sm text-gray-600">
        🚚 Dhaka / Chittagong: 1–2 working days
      </p>
      <p className="text-sm text-gray-600">
        📦 Outside Dhaka: 2–3 working days
      </p>

      <p className="text-sm text-gray-500 pt-2 border-t">
        Cash on Delivery available
      </p>
    </div>
     <div className="border rounded-xl p-4 bg-white">
            <p className="text-sm text-gray-600">
              Need help ordering?
            </p>
            <p className="font-semibold text-blue-600">
              📞 Call: 01974829429
            </p>
          </div>
    
</div>

     </div>
      </div>
  
  );
};

export default ProductInfo2;
