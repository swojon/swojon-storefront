import React from "react";
import { BsDot } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";

const ProductInfo = () => {
  return (
    <section className="space-y-3">
      <div className="w-2/3  space-y-2">
        <div className="flex justify-between items-center">
          <h5 className="text-2xl font-lexed text-primaryColor font-medium">
            Partex Personal Bed
          </h5>
          <h5 className="text-2xl font-lexed text-activeColor font-medium">
            TK 1,230.00
          </h5>
        </div>

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

        <div className="flex space-x-1 items-center">
          <HiLocationMarker className="text-activeColor" />
          <span className="text-sm">Halishohor, Chattagram</span>
        </div>

        <div className="flex space-x-2 items-center text-sm">
          <span className=" text-secondColor">Condition:</span>
          <span className=" text-primaryColor">Used</span>
        </div>

        <div className="flex space-x-2 items-center text-sm">
          <span className=" text-secondColor">Product Type:</span>
          <span className=" text-primaryColor">Furniture</span>
        </div>
      </div>

      <div className="border-b pb-5">
        <h5 className="text-2xl text-primaryColor font-lexed font-medium pb-4">
          Description
        </h5>
        <p className="text-secondColor pb-2 text-base">
          A hotel is a commercial establishment that provides lodging, meals,
          and other services to guests, travelers, and tourists. Hotels can
          range from small family-run businesses to large international chains.
          Most hotels list a variety services, such as room service, laundry,
          and concierge. Some hotels also offer meeting and conference
          facilities, fitness centers, spas.
        </p>
        <p className="text-secondColor pb-2 text-base">
          A hotel is a commercial establishment that provides lodging, meals,
          and other services to guests, travelers, and tourists. Hotels can
          range from small family-run businesses to large international chains.
          Most hotels list a variety services, such as room service, laundry,
          and concierge. Some hotels also offer meeting and conference
          facilities, fitness centers, spas.
        </p>
        <p className="text-secondColor pb-2 text-base">
          A hotel is a commercial establishment that provides lodging, meals,
          and other services to guests, travelers, and tourists. Hotels can
          range from small family-run businesses to large international chains.
          Most hotels list a variety services, such as room service, laundry,
          and concierge. Some hotels also offer meeting and conference
          facilities, fitness centers, spas.
        </p>
      </div>
    </section>
  );
};

export default ProductInfo;
