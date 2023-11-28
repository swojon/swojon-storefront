import React from "react";
import { BsDot } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";

const ProductInfo = ({ product }: { product: any }) => {
  return (
    <section className="space-y-3">
      <div className="  space-y-4">
        <div className="space-y-2">
          <small className="text-xs text-secondColor">Posted 5 min ago</small>
          <h5 className="lg:text-4xl md:text-lg text-base font-lexed text-primaryColor  capitalize">
            {product?.title}
          </h5>
          <h5 className="lg:text-2xl md:text-lg text-base font-lexed text-primaryColor ">
            TK {product?.price}
          </h5>
        </div>

        <div className="flex space-x-1 items-center">
          <div className="flex items-center space-x-1">
            <FaStar className="text-[#FFB800]" />
            <span className="text-sm">0.00</span>
          </div>

          <div className="flex items-center space-x-1">
            <BsDot className="text-secondColor" />
            <span className="text-sm">No Reviews Yet</span>
          </div>
        </div>
        {/* 
        <div className="flex space-x-1 items-center">
          <HiLocationMarker className="text-activeColor" />
          <span className=" md:text-sm text-xs">Halishohor, Chattagram</span>
        </div> */}

        <div className="grid grid-cols-2 gap-2 pb-3">
          <button className="border border-activeColor text-whiteColor bg-activeColor  rounded-lg py-1 text-center md:text-base sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300">
            Offer Price
          </button>
          <button className="border border-activeColor text-activeColor  rounded-lg py-1 text-center md:text-base  sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300">
            Chat Now
          </button>
        </div>

        <div className=" border-t border-gray-200 space-y-2 pt-3">
          <h6 className="xl:text-lg lg:text-base md:text-base text-sm font-lexed text-primaryColor">
            Details
          </h6>
          <div className="flex items-start gap-2">
            <div className="w-[30%]  text-sm text-secondColor">Condition:</div>
            <div className="w-[70%] text-sm text-primaryColor">Used</div>
          </div>

          <div className="flex items-start gap-2">
            <div className="w-[30%]  text-sm text-secondColor">Brand</div>
            <div className="w-[70%] text-sm text-primaryColor">Iphone</div>
          </div>

          <div className="flex items-start gap-2">
            <div className="w-[30%]  text-sm text-secondColor">Category</div>
            <div className="w-[70%] text-sm text-primaryColor">
              Electronics Computer Components & Parts
            </div>
          </div>

          <div className="flex items-start gap-2">
            <div className="w-[30%]  text-sm text-secondColor">Posted</div>
            <div className="w-[70%] text-sm text-primaryColor">1/23/23</div>
          </div>
        </div>
      </div>

      <div className="space-y-2 ">
        <h6 className="xl:text-lg lg:text-base md:text-base text-sm font-lexed text-primaryColor">
          Description
        </h6>
        <p className="text-secondColor pb-2 lg:text-base md:text-sm text-xs">
          {product?.description}
        </p>
      </div>

      <div className="space-y-2 ">
        <h6 className="xl:text-lg lg:text-base md:text-base text-sm font-lexed text-primaryColor">
          Tags
        </h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          perspiciatis perferendis repudiandae autem quod est architecto minima,
          quaerat eaque repellendus animi nobis! Esse dolore quidem perspiciatis
          voluptas voluptate. Delectus expedita, id omnis quam pariatur officia
          maxime quo quis ipsum debitis, eum, earum commodi. Accusamus laborum
          sint ipsa ducimus ea, eum perferendis. Laboriosam exercitationem,
          perspiciatis excepturi ad vero repudiandae accusantium provident enim
          ut aspernatur saepe assumenda earum fuga maiores ea asperiores eum
          adipisci, sit sapiente, blanditiis iusto. Qui iusto, ut, veritatis
          nulla earum molestias, ducimus delectus facilis veniam obcaecati ipsum
          voluptate sapiente? Ad eos, ducimus, quos, molestiae officiis itaque
          dolore reiciendis eveniet officia minima excepturi laudantium
          blanditiis numquam neque. Eius, quibusdam natus! Perferendis
          voluptatibus tenetur delectus odio aliquid harum ratione. Velit et
          facilis ad totam dolores iure, consequuntur quae eligendi aperiam?
          Impedit debitis placeat quod molestias labore et ullam, obcaecati quae
          ut, veritatis quis est consectetur quaerat aspernatur aliquid rem ad.
        </p>
      </div>
    </section>
  );
};

export default ProductInfo;
