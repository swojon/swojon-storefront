import Image from "next/image";
import React from "react";

const ProductLists = () => {
  return (
    <section>
      <div className="lg:h-[340px] h-[320px] grid grid-cols-2 gap-2 ">
        <div className="w-full lg:h-[340px] h-[320px] rounded-l-lg  overflow-hidden">
          <Image
            src="/wish.png"
            width={1000}
            height={500}
            className="w-full h-full  object-cover rounded-l-lg "
            alt="banner"
          />
        </div>
        <div className="w-full lg:h-[340px] h-[320px] grid grid-rows-2 gap-2">
          <div className="w-full h-full rounded-tr-lg">
            <Image
              src="/wish3.png"
              width={500}
              height={700}
              className="w-full h-full object-cover rounded-tr-lg"
              alt="banner"
            />
          </div>
          <div className="w-full h-full rounded-br-lg ">
            <Image
              src="/wish3.png"
              width={500}
              height={700}
              className="w-full h-full object-cover rounded-br-lg "
              alt="banner"
            />
          </div>
        </div>
      </div>
      <h2 className="pt-5 text-lg font-lexed text-primaryColor">
        {" "}
        Product Lists
      </h2>
    </section>
  );
};

export default ProductLists;
