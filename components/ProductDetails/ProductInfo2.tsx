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
  return variants.find((variant:any) => {
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
          <h2 className="text-2xl font-bold ">{product?.title}</h2>
          <SellerReviewDropdown sellerId={product?.id} />

          
          <div className="flex flex-wrap gap-1.5">
                <span className="lg:text-2xl text-lg  font-bold  inline-block text-activeColor">
                  ৳{selectedVariant?.salePrice ?? product?.price }
                </span>
                {selectedVariant?.salePrice != selectedVariant?.price && (

                  <span className="lg:text-2xl text-lg  text-gray-700   inline-block line-through">
                  ৳{selectedVariant.price}
                </span>
                )}
              </div>
        </div>
        
        
        {product.options && product.options.map( (option: {name: string, values: any, id: any})=> (

        
        <div className="space-y-2" key={option.id}>
          <span className="text-primaryColor font-semibold text-lg">
            {option.name}:{" "}
            <span className="text-secondColor font-medium capitalize text-base">
              {selectedOptions[option.name] || "Select Option"}
            </span>
          </span>
          <div className="flex items-start gap-3">
            {option.values.map((val : any) => (
              <div key={val} className="space-y-1">
                <div
                  onClick={() => handleOptionChange(option.name, val)}
                  className={`${
                    selectedOptions[option.name] === val
                      ? "border-activeColor"
                      : "border-gray-300"
                  } border-2  rounded-md cursor-pointer`}
                >
                  <span
                    className={` w-[40px] h-[40px] rounded-md border-2 border-white block`}
                    style={{ backgroundColor: val }}
                  ></span>
                </div>
                {/* {item.price && (
                  <span className="text-sm text-center block font-semibold text-activeColor">
                    ৳{item.price}
                  </span>
                )} */}
              </div>
            ))}
          </div>
        </div>
        ))}
        
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
        <div className="space-y-2 ">
          {/* <div className="flex gap-1">
            <span className="text-primaryColor font-semibold text-lg">
              {activeMethod.pl}
            </span>
            <span className="text-primaryColor font-semibold  text-lg underline">
              {activeMethod.destination}
            </span>
          </div>
           */}
          {selectedVariant?.stock < 10 && selectedVariant.stock > 0 && (
            <span className="text-red-500 pt-2">
              Only {selectedVariant.stock} left
            </span>
          )}
          {/* <span className="text-orange-400 ">Only 4 left</span> */}
        </div>
        {selectedVariant && selectedVariant?.stock > 0 ? (
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <UpdateQuantity
              item={product}
              variantId={selectedVariant?.id}
              localQuantity={localQuantity}
              setLocalQuantity={setLocalQuantity}
              padding="xl:px-2  xl:py-1 py-x"
              fontSize="xl:text-xl lg:text-lg text-base"
            />

            
            <div className="w-full flex-1 ">
              <button
                onClick={handleAddToCart}
                className="p-3 w-full bg-activeColor border border-activeColor rounded-2xl text-white font-semibold"
              >
                Add to cart
              </button>
            </div>
            
          </div>
          {/* <button className="p-3 w-full  border border-secondColor rounded-2xl text-primaryColor ">
            Sign in to buy now
          </button> */}
        </div>
        ) : (
          <>
          
          <div className="text-center">
            <span className="text-red-500">Sorry! we are temporarily out of stock</span>
          </div>
          <button className="p-3 w-full  border border-secondColor rounded-2xl text-primaryColor ">
            Notify me when available
          </button>
          </>

        )}
      </div>
    </div>
  );
};

export default ProductInfo2;
