import React from "react";
import { IoWarningOutline } from "react-icons/io5";
import { MdOutlinePhotoCamera } from "react-icons/md";

const Courier = ({setFieldValue, values}: {setFieldValue: any, values:any}) => {
  const handleFreeDeliveryCheck = (e:any) => {
    if (e.target.checked) setFieldValue("deliveryCharge", 0)
  }
 
  return (
    <div className="px-6 py-5 space-y-5 ">
      <h6 className="text-base font-bold font-lexed  text-primaryColor ">
        Delivery Charge
      </h6>

      <div>
        <div className="relative  rounded-md shadow-sm">
          <input
            type="text"
            name="price"
            id="price"
            value={values.deliveryCharge}
            className="block w-full rounded-md  border-[#F1F1F1] py-4 pl-4 pr-20 text-primaryColor font-medium ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-activeColor text-sm sm:leading-6"
            placeholder="1500"
          />
          <div className="absolute inset-y-0 right-0 flex items-center ">
            <label htmlFor="currency" className="sr-only">
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:outline-none focus:ring-1 focus:ring-activeColor text-sm"
            >
              <option>Bangladeshi Taka</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2 ">
        <div className="flex  items-center">
          <input
            id="isFreeDelivery"
            name="freeDelivery"
            type="checkbox"
            onChange={handleFreeDeliveryCheck}
            className="h-4 w-4  rounded border-primaryColor text-activeColor focus:ring-activeColor custom-checkedInput"
          />
        </div>
        <label
          htmlFor="comments"
          className="text-secondColor lg:text-sm md:text-xs text-[10px] font-medium"
        >
          I will offer free delivery
        </label>
      </div>

      <div className="border-b border-[#F1F1F1]"></div>

      <div className="space-y-4">
        <span className="text-base font-bold font-lexed  text-[#FA4119]">
          Reminders
        </span>

        <div className="flex items-center md:gap-0 gap-4">
          <div className="lg:w-[5%] md:w-[7%] w-[10%]">
            <MdOutlinePhotoCamera className="leading-0 text-3xl text-primaryColor " />
          </div>

          <span className="block font-medium text-primaryColor md:text-base text-sm lg:w-[95%] md:w-[93%] w-[90%]">
            Take a picture of delivery slip for proof
          </span>
        </div>
        <div className="flex items-center md:gap-0 gap-4">
          <div className=" lg:w-[5%] md:w-[7%] w-[10%]">
            <IoWarningOutline className="leading-0 text-3xl text-primaryColor " />
          </div>

          <span className="block font-medium text-primaryColor md:text-base text-sm lg:w-[95%] md:w-[93%] w-[90%]">
            Resolve conflict before you make the deal, swojon is not responsible
            for any unwanted situation
          </span>
        </div>
      </div>
    </div>
  );
};

export default Courier;