import { Product, removeFromCart } from "@/app/redux/cartSlice";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { LuTrash2 } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import UpdateQuantity from "../SelectOptions/UpdateQuantity";
import Image from "next/image";
import img from "@/public/pd.png";

export const CartItem = () => {
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [popup, setPopup] = useState(false);
  const dispatch = useDispatch();

  const cartItems = useSelector((state: any) => state.productCart.items);

  const totalQuantity = cartItems.reduce(
    (total: number, item: Product) => 
      total + (item.itemCount || 1),
    0
  );

  const handleRemove = ({id, variantId}: {id: number, variantId: number}) => {
    dispatch(removeFromCart({itemId: id, variantId: variantId}));
  };

  return (
    <div className="lg:space-y-4 space-y-2">
        <h5 className="lg:text-2xl text-lg font-bold xl:px-20 px-5 lg:px-10">
          Cart{" "}
          <span className="font-normal text-secondColor lg:text-xl text-base">
            ( {totalQuantity} items )
          </span>
        </h5>

        <div className="flex items-start lg:max-h-[calc(100vh-150px)] max-h-[calc(100vh-250px)] overflow-auto  rounded-md lg:gap-10 xl:px-20 sm:px-5 px-3 lg:px-10  transition ease-in delay-300 ">
          <div className="lg:w-[calc(100vw-620px)] rounded-md xl:p-8 lg:p-4 p-3 bg-white xl:min-w-[calc(100vw-600px)] md:min-w-[calc(100vw-500px)] w-full ">
            {cartItems.length === 0 ? (
              <p className="text-center text-lg text-secondColor">
                No product added
              </p>
            ) : (
              cartItems.map((item: any) => {
                const selectedVariant = item.variants?.find(
                  (variant: any) => variant.id === item.variantId
                );
                
                return (
                  <div
                    key={item?.id}
                    className="flex sm:flex-row flex-col sm:items-center justify-between py-5 gap-6 border-b last:border-b-0 border-gray-300"
                  >
                    <div className="flex items-center xl:gap-6  2xl:gap-5 md:gap-3 gap-3">
                      <Image
                        src={selectedVariant?.media?.length > 0 ? selectedVariant.media[0].url : img}
                        alt="product"
                        width={400}
                        height={600}
                      className="xl:w-[120px] lg:w-[80px] w-[60px] xl:h-[160px] lg:h-[100px] h-[90px] object-cover rounded-md "
                    />

                    <div className="lg:space-y-1  text-secondColor lg:text-base text-sm">
                      <h6 className="xl:text-xl lg:text-lg text-base line-clamp-1 font-bold text-primaryColor pb-1">
                        {item.title}
                      </h6>
                     
                       <span className="block text-sm">{selectedVariant.optionValues.map((option: any) => (
                          <span key={option.optionName} className="inline-block mr-1">
                            {option.optionName} : {option.value}
                          </span>
                        ))}</span>
                      {/* <p className="line-clamp-1 pe-5 ">{item.description}</p> */}
                    </div>
                  </div>

                  <div className="flex items-center gap-10 font-bold text-right xl:text-xl lg:text-lg text-base ">
                    <div className="flex gap-4">
                      <UpdateQuantity
                        item={item}
                        variantId={item.variantId}
                        padding="xl:px-2  xl:py-1 py-x"
                        fontSize="xl:text-xl lg:text-lg text-base"
                      />
                    </div>

                    <div className="2xl:w-[200px] xl:w-[80px] line-clamp-1">
                      {" "}
                      {item.discountPrice ? (
                        <div className="flex flex-wrap  gap-2 text-activeColor">
                          <span className="text-lime-700">
                            ৳{item.discountPrice}
                          </span>
                          <span className="inline-block line-through">
                            ৳{selectedVariant.price}
                          </span>
                        </div>
                      ) : (
                        <span className="text-activeColor">৳{selectedVariant.price}</span>
                      )}
                    </div>

                    <button
                      onClick={() => handleRemove({id: item.id, variantId: item.variantId})}
                      className="text-xl font-semibold text-primaryColor hover:bg-gray-100 px-2 transition duration-300 ease-in"
                    >
                      <LuTrash2 />
                    </button>
                  </div>
                </div>
              )})
            )}
          </div>
          
        </div>
      </div>

  );
};


