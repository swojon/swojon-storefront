"use client";
import Image from "next/image";
import icon1 from "@/public/assets/heartIcon.png";
import time from "@/public/assets/time.png";
import user from "@/public/user1.jpg";
import Link from "next/link";

const ProductLists = () => {
  return (
    <section>
      <div className="border-b px-5 py-3.5">
        <h6 className="text-activeColor text-2xl font-lexed font-medium">
          My Product Lists
        </h6>
      </div>

      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4 px-5 pt-10">
        <div className="  rounded-md bg-whiteColor border border-[#EFEFEF] p-2.5 hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300">
          <div className="lg:h-[180px] md:h-[170px] h-[130px] relative overflow-hidden rounded-tl-md  rounded-tr-md">
            <Image
              src="/assets/pro3.png"
              width={500}
              height={500}
              alt="product banner"
              className="h-full w-full object-cover rounded-tl-md  rounded-tr-md hover:scale-110 transition ease-in-out delay-150 duration-300 "
            />

            <div className="absolute right-0 top-0 m-3 w-7 h-7 flex justify-center items-center border border-[#EFEFEF] rounded-full bg-whiteColor hover:scale-105 transition ease-in-out delay-150 duration-300">
              <Image src={icon1} alt="heart icon" />
            </div>
          </div>

          <div className="md:pt-3 pt-1 flex flex-row  justify-between items-center font-lexed ">
            <div>
              <h6 className="md:text-lg text-base font-semibold text-primaryColor capitalize">
                Sofa
              </h6>
            </div>
            <span className="text-activeColor md:text-base text-sm">
              TK, 7000
            </span>
          </div>

          <div className="flex items-center  text-secondColor">
            <Image src={time} alt="time icon" />
            <span className="text-xs font-lexed ps-1">10 mnt ago</span>
          </div>

          <div className="flex items-center md:space-x-2 space-x-1 md:py-4 py-2">
            <div className="w-7 h-7 rounded-full">
              <Image
                src={user}
                alt="user"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="text-xs text-secondColor ">Ad by</span>
            <span className="text-primaryColor md:text-base text-xs font-medium">
              Ibrahim K. Sakib
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button className="border border-activeColor text-whiteColor bg-activeColor  rounded-md py-1 text-center md:text-base sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300">
              Offer Price
            </button>
            <button className="border border-activeColor text-activeColor  rounded-md py-1 text-center md:text-base  sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300">
              Chat Now
            </button>
          </div>
        </div>
        <div className="  rounded-md bg-whiteColor border border-[#EFEFEF] p-2.5 hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300">
          <div className="lg:h-[180px] md:h-[170px] h-[130px] relative overflow-hidden rounded-tl-md  rounded-tr-md">
            <Image
              src="/assets/pro3.png"
              width={500}
              height={500}
              alt="product banner"
              className="h-full w-full object-cover rounded-tl-md  rounded-tr-md hover:scale-110 transition ease-in-out delay-150 duration-300 "
            />

            <div className="absolute right-0 top-0 m-3 w-7 h-7 flex justify-center items-center border border-[#EFEFEF] rounded-full bg-whiteColor hover:scale-105 transition ease-in-out delay-150 duration-300">
              <Image src={icon1} alt="heart icon" />
            </div>
          </div>

          <div className="md:pt-3 pt-1 flex flex-row  justify-between items-center font-lexed ">
            <div>
              <h6 className="md:text-lg text-base font-semibold text-primaryColor capitalize">
                Sofa
              </h6>
            </div>
            <span className="text-activeColor md:text-base text-sm">
              TK, 7000
            </span>
          </div>

          <div className="flex items-center  text-secondColor">
            <Image src={time} alt="time icon" />
            <span className="text-xs font-lexed ps-1">10 mnt ago</span>
          </div>

          <div className="flex items-center md:space-x-2 space-x-1 md:py-4 py-2">
            <div className="w-7 h-7 rounded-full">
              <Image
                src={user}
                alt="user"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="text-xs text-secondColor ">Ad by</span>
            <span className="text-primaryColor md:text-base text-xs font-medium">
              Ibrahim K. Sakib
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button className="border border-activeColor text-whiteColor bg-activeColor  rounded-md py-1 text-center md:text-base sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300">
              Offer Price
            </button>
            <button className="border border-activeColor text-activeColor  rounded-md py-1 text-center md:text-base  sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300">
              Chat Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductLists;
