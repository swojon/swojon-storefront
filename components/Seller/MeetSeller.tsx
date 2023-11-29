import Image from "next/image";
import Link from "next/link";
import React from "react";
import user from "@/public/userMale.png";
import { BsDot } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";

const MeetSeller = ({ seller }: { seller: any }) => {
  return (
    <section className="pb-2">
      <h6 className="xl:text-lg lg:text-base md:text-base text-sm font-lexed text-primaryColor">
        Meet the Seller
      </h6>
      <div className="flex flex-col md:flex-row gap-2 md:items-start md:justify-between pt-2">
        <div className="flex gap-5 items-center">
          <Link href={`/seller/${seller?.id}`}>
            <div className="lg:h-24 lg:w-24 md:h-16 md:w-16 rounded-full">
              <Image
                src={user}
                width={400}
                height={400}
                alt="user"
                className="w-full h-full object-cover"
              />
            </div>
          </Link>

          <div className="py-3  space-y-2">
            <h6 className="lg:text-base text-sm font-lexed font-medium text-primaryColor">
              {seller?.username}
            </h6>

            <div className="flex space-x-1 items-center">
              <div className="flex items-center space-x-1">
                <FaStar className="text-[#FFB800]" />
                <span className="text-sm">4.80</span>
              </div>

              <div className="flex items-center space-x-1">
                <BsDot className="text-secondColor" />
                <span className="text-sm">33 reviews</span>
              </div>
            </div>

            {/* <div className=" flex items-start gap-4">
              <div className=" flex gap-2">
                <div className=" text-sm">
                  <h6 className="text-secondColor">Call Now :</h6>
                </div>
                <div className=" text-sm text-activeColor">
                  <h6 className="">01712345678</h6>
                  <h6 className="">01712345678</h6>
                </div>
              </div>
              <div className=" flex gap-2">
                <div className=" text-sm ">
                  <h6 className="text-secondColor">Email :</h6>
                </div>
                <div className=" text-sm text-activeColor">
                  <h6 className="">{seller?.email}</h6>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <button className="lg:px-3 lg:py-2 py-1 px-1.5 lg:text-sm text-xs bg-secondColor rounded-md text-white">
          View Profile
        </button>
      </div>
    </section>
  );
};

export default MeetSeller;
