import Image from "next/image";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";

const ProductCard2 = ({ product }: { product: any }) => {
  return (
    <Link href={`/products/${product.id}`} className="pb-5  block">
      <div className="h-[220px] relative">
        <Image
          src={product.image}
          width={550}
          height={550}
          alt="product banner"
          className="h-full max-w-[220px] object-cover rounded-sm   transition ease-in-out delay-150 duration-300 "
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
              <span className="md:text-xl text-[0.9rem] font-bold  inline-block text-lime-700">
                Now ৳{product.discountPrice}
              </span>
              <span className="md:text-base text-[13px] text-gray-700   inline-block line-through">
                ৳{product.price}
              </span>
            </div>
          ) : (
            <>
              <span className="md:text-xl text-[0.9rem] font-bold  inline-block">
                ৳{product.price}
              </span>{" "}
            </>
          )}
        </div>

        <h6 className="md:text-[17px] text-sm font-light text-gray-800 overflow-hidden line-clamp-2">
          {product.description}
        </h6>
        <button className="py-1.5 px-4 border border-primaryColor rounded-full md:text-[16px] font-semibold text-sm flex items-center gap-1 group transition ease-in-out delay-150 duration-300 relative">
          <div className="w-full h-full absolute inset-0 rounded-full group-hover:border-2 border-primaryColor"></div>
          <FiPlus className="font-semibold" /> <span>Add</span>
        </button>
      </div>
    </Link>
  );
};

export default ProductCard2;
