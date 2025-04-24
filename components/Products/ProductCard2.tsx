import Image from "next/image";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/redux/cartSlice";

const ProductCard2 = ({ product }: { product: any }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <>
      <Link href={`/products/${product.id}`} className=" block">
        <div className="xl:h-[200px] max-h-[200px] max-w-[200px] relative aspect-[5/5]">
          <Image
             src={
              product.media?.length > 0
                ? product.media[0].url
                : "/assets/pro1.png"
            }
            width={550}
            height={550}
            alt="product banner"
            className="h-full w-full object-cover rounded-sm   transition ease-in-out delay-150 duration-300 "
          />
          {product.discountPrice && (
            <div className="bg-activeColor p-1 absolute top-0 left-1  text-white text-xs font-bold px-2 py-1 rounded-sm">
              21 tk OFF
            </div>
          )}
        </div>

        <div className="my-5 space-y-2 text-left">
          <div>
            {product.discountPrice ? (
              <div className="flex flex-wrap gap-1.5">
                <span className="md:text-lg text-[0.9rem] font-bold  inline-block text-lime-700">
                  Now ৳{product.discountPrice}
                </span>
                <span className="md:text-base text-[13px] text-gray-700   inline-block line-through">
                  ৳{product.price}
                </span>
              </div>
            ) : (
              <>
                <span className="md:text-lg text-[0.9rem] font-bold  inline-block">
                  ৳{product.price}
                </span>{" "}
              </>
            )}
          </div>

          <h6 className="md:text-[17px] text-sm font-light text-gray-800 overflow-hidden line-clamp-2">
            {product.description}
          </h6>
        </div>
      </Link>{" "}
      <button
        onClick={handleAddToCart}
        className="py-1.5 px-4 border border-primaryColor rounded-full md:text-[16px] font-semibold text-sm flex items-center gap-1 group transition  duration-700 ease-in-out relative mb-8"
      >
        <div className="w-full h-full absolute inset-0 rounded-full group-hover:border-[1.5px] border-primaryColor transition duration-700 ease-in-out"></div>
        <FiPlus className="font-semibold" /> <span>Add</span>
      </button>
    </>
  );
};

export default ProductCard2;
