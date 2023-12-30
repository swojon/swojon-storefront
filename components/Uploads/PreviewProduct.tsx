import Image from "next/image";
import React from "react";
import "@/components/ProductDetails/ProductDetail.css";
import { CiLocationOn } from "react-icons/ci";

const PreviewProduct = ({ values }: { values: any }) => {
  return (
    <div className="space-y-5">
      <h4 className="text-primaryColor text-2xl	font-bold lg:w-[50%] md:w-[70%] w-full">
        {values.title || "Product title"}
      </h4>

      <div className="flex flex-col md:flex-row md:gap-5 gap-2  ">
        <div className="xl:w-[64%] lg:w-[57%]  md:w-[50%] w-full h-full space-y-6 ">
          <section className="lg:h-[577px]  space-y-4">
            <div
              className={`${
                values.images?.length > 0
                  ? ""
                  : "flex justify-center items-center bg-gray-100 "
              } w-full slider1 rounded-md`}
            >
              <Image
                src={
                  values.images?.length > 0
                    ? values.images[0]?.url
                    : "/assets/no-pictures.png"
                }
                alt="images"
                width={800}
                height={700}
                className={` ${
                  values.images?.length > 0 ? "w-full h-full" : "w-24 m-auto "
                } object-cover rounded-md border border-gray-100`}
              />
            </div>
            <div className=" grid grid-cols-5 gap-4 slider2 ">
              {values.images.map((img: any, index: any) => (
                <Image
                  key={index}
                  src={img.url}
                  alt="images"
                  width={400}
                  height={400}
                  className="w-full slider2 object-cover rounded-md border border-gray-100"
                />
              ))}{" "}
            </div>
          </section>
        </div>
        <div className="xl:w-[36%] lg:w-[43%]  md:w-[50%] w-full   shadow-xl rounded-md">
          <section className="space-y-4 p-4 lg:min-h-[577px] border border-gray-50 rounded-md">
            <div className="space-y-4 border-b border-gray-100">
              <span className="text-base text-primaryColor font-medium">
                Category Information
              </span>

              <div className="flex   gap-3 items-center    pb-4">
                <div className=" h-[60px] w-[60px] rounded-full">
                  <Image
                    src="/user1.jpg"
                    width={400}
                    height={400}
                    alt="user"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <div className="  space-y-2">
                  <h6 className="lg:text-base text-sm font-lexed font-medium text-primaryColor">
                    Smartphones & Accessories
                  </h6>

                  <h6 className="lg:text-base text-sm font-lexed font-medium text-secondColor">
                    Electronics
                  </h6>
                </div>
              </div>
            </div>
            <div className="flex   gap-3 items-center justify-between ">
              <span className="lg:text-base text-sm font-lexed font-medium text-primaryColor">
                Item Information
              </span>
              <span className="lg:text-base text-sm font-lexed font-medium text-secondColor">
                Listed 2 days ago
              </span>
            </div>
            {values.price === 0 ? (
              <span className="lg:text-2xl text-lg font-lexed font-bold text-activeColor block">
                No price available
              </span>
            ) : (
              <span className="lg:text-2xl text-lg font-lexed font-bold text-activeColor block">
                {values.price} Tk
              </span>
            )}
            {/* <div className=" px-3 py-2 bg-[#F1F1F1] rounded-md">
              <span className="text-primaryColor text-sm font-medium ">
                2 Items available
              </span>
            </div> */}
            <div className="grid grid-cols-2 gap-x-4">
              <div className="px-3 py-5 flex flex-col justify-between border border-[#F1F1F1] rounded-md space-y-4 relative">
                <Image
                  src="/assets/starIcon.png"
                  width={80}
                  height={80}
                  className="w-[22px] h-[19.15px] mx-auto"
                  alt="icon"
                />
                <span className="block text-base font-bold text-primaryColor text-center">
                  {values?.condition || "Condition"}
                </span>
                <div className="absolute right-1 -top-3">
                  <Image
                    src="/assets/info.png"
                    width={80}
                    height={80}
                    className="w-[16px] h-[16px] "
                    alt="icon"
                  />
                </div>
              </div>

              <div className="px-3 py-5 flex flex-col justify-between border border-[#F1F1F1] rounded-md space-y-4">
                <Image
                  src="/assets/samsungIcon.png"
                  width={80}
                  height={80}
                  className="w-[65.5px] h-[10px] mx-auto"
                  alt="icon"
                />
                <span className="block text-base font-bold text-primaryColor text-center">
                  Samsung
                </span>
              </div>
            </div>

            {/* <div className="p-4  border border-[#F1F1F1] rounded-md space-y-4">
              <span className=" text-base font-medium text-secondColor text-center">
                Additional Details
              </span>

              <div className="flex gap-2 justify-between items-center">
                <div className="w-[75%]">
                  <p className=" truncate text-base font-bold text-primaryColor ">
                    Before making an offer, please See Oxygen,
                  </p>
                </div>
                <button className="text-activeColor font-medium">
                  See more
                </button>
              </div>
            </div> */}
            {/*==== for Courier Delivery==== */}
            {/* <div className="p-4  border border-[#F1F1F1] rounded-md space-y-4">
              <span className=" text-base font-medium text-secondColor text-center">
                Courier Delivery
              </span>

              <div className="flex gap-2 justify-between items-center">
                <h6 className=" truncate text-base font-bold text-primaryColor ">
                  150 Tk
                </h6>
              </div>

              <div className="border-b border-[#F1F1F1]" />

              <div className="flex gap-2 justify-between items-center">
                <div className="w-[75%]">
                  <p className=" truncate text-base font-medium text-primaryColor ">
                    User can request delivery options
                  </p>
                </div>
                <button className="text-activeColor font-medium">
                  See more
                </button>
              </div>
            </div> */}
            {/*==== for Meetup==== */}
            <div className="p-4  border border-[#F1F1F1] rounded-md space-y-4">
              <div className="flex justify-between items-center">
                <span className=" text-base font-medium text-secondColor text-center">
                  Meetup
                </span>
                <span className=" text-base font-medium text-secondColor text-center relative">
                  View in map
                  <span className="absolute left-0 bottom-0 h-[1px] w-full bg-gray-400"></span>
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <span className=" text-base font-bold text-primaryColor text-center">
                  <CiLocationOn />
                </span>
                <span className=" text-base font-bold text-primaryColor text-center relative">
                  Oxygen, Bayezid Bostami, Chittagong
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PreviewProduct;
