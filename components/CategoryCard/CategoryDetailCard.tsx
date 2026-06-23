import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryDetailCard = ({
  item,
  categories,
}: {
  item: any;
  categories: any;
}) => {
  const subCategories = categories.filter(
    (sub: any) => sub.parentCategory?.id === item.id
  );
  console.log("cap", item);
  return (
    <div className="rounded-2xl bg-whiteColor border border-[#EFEFEF] hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300 space-y-2 relative">
      <div className="md:h-[250px] h-[250px] relative overflow-hidden  rounded-t-xl rounded-b-sm">
        <Image
          src={item?.banner ? item.banner : "/assets/pro1.png"}
          width={500}
          height={500}
          alt="product banner"
          className="h-full w-full object-cover rounded-t-xl rounded-b-sm hover:scale-110 transition ease-in-out delay-150 duration-300 "
        />
      </div>

      <h6 className="xl:text-2xl lg:text-lg text-base font-semibold font-lexed text-primaryColor capitalize  px-2">
        {item.name}
      </h6>

      <div className="px-2 space-y-1.5">
        {subCategories.map((item: any) => (
          <Link href="/" className="block" key={item.id}>
            <span className="text-sm text-secondColor  hover:text-activeColor hover:border-b hover:border-activeColor leading-none">
              {item.name}
            </span>
          </Link>
        ))}
      </div>

      <div className=" p-2 w-full ">
        <button className="border border-activeColor w-full text-whiteColor bg-activeColor  rounded-lg py-1 text-center md:text-base sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300">
          Load More
        </button>
      </div>
    </div>
  );
};

export default CategoryDetailCard;
