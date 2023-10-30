"use client";
import Brand from "./Brand";
import CategoryDropDown from "./CategoryDropDown";
import Condition from "./Condition";
import Genuine from "./Genuine";
import LocationDropDown from "./LocationDropDown";
import Features from "./Features";
import Model from "./Model";
import Descriptions from "./Descriptions";
import Price from "./Price";
import AddImage from "./AddImage";
import Link from "next/link";

const UploadForm = () => {
  return (
    <section className="mt-8 border rounded-md xl:p-16 lg:p-10 md:p-6 sm:p-3 p-2 bg-[#f9f9f9]">
      <div className="flex ">
        <div className="flex-1">
          <h3 className="text-2xl font-lexed font-medium text-primaryColor">
            Please give us your product information
          </h3>
        </div>
        <div className="flex-1 flex justify-end items-center  gap-3">
          <div className="w-[120px]">
            <LocationDropDown />
          </div>
          <div className="w-[120px]">
            <CategoryDropDown />
          </div>
          <button className="px-2.5 py-2 bg-activeColor text-white text-sm rounded-md">
            Modify Search
          </button>
        </div>
      </div>

      <div className="pt-8">
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="country"
                className="block text-base font-medium text-primaryColor font-lexed"
              >
                Condition
              </label>
              <div className="mt-2">
                <Condition />
              </div>
            </div>

            <div>
              <label
                htmlFor="country"
                className="block text-base font-medium text-primaryColor font-lexed"
              >
                Genuine
              </label>
              <div className="mt-2">
                <Genuine />
              </div>
            </div>

            <div>
              <label
                htmlFor="country"
                className="block text-base font-medium text-primaryColor font-lexed"
              >
                Brand
              </label>
              <div className="mt-2">
                <Brand />
              </div>
            </div>

            <div>
              <label
                htmlFor="country"
                className="block text-base font-medium text-primaryColor font-lexed"
              >
                Model
              </label>
              <div className="mt-2">
                <Model />
              </div>
            </div>

            <div>
              <label
                htmlFor="country"
                className="block text-base font-medium text-primaryColor font-lexed"
              >
                Features
              </label>
              <div className="mt-2">
                <Features />
              </div>
            </div>

            <div>
              <label
                htmlFor="country"
                className="block text-base font-medium text-primaryColor font-lexed"
              >
                Description
              </label>
              <div className="mt-2">
                <Descriptions />
              </div>
            </div>

            <div>
              <label
                htmlFor="country"
                className="block text-base font-medium text-primaryColor font-lexed"
              >
                Price
              </label>
              <div className="mt-2">
                <Price />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="country"
              className="block text-base font-medium text-primaryColor font-lexed"
            >
              Add your image
              <span className="text-secondColor text-xs ps-1">(Maximum 5)</span>
            </label>
            <div className="mt-2">
              <AddImage />
            </div>
          </div>

          <div className="border-t pt-8 space-y-6 ">
            <h5 className="text-2xl font-lexed font-medium text-primaryColor">
              Your details
            </h5>

            <div className="w-[50%]">
              <label
                htmlFor=""
                className="block text-base font-medium text-primaryColor font-lexed"
              >
                Your Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="John Doe"
                  className="block w-full min-w-0 flex-1 py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-activeColor focus:ring-activeColor sm:text-sm bg-white"
                />
              </div>
            </div>

            <div className="w-[50%]">
              <label
                htmlFor=""
                className="block text-base font-medium text-primaryColor font-lexed"
              >
                Phone Number
              </label>
              <div className="mt-2 space-y-2">
                <input
                  type="tel"
                  name=""
                  id=""
                  placeholder="0147..."
                  className="block w-full min-w-0 flex-1 py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-activeColor focus:ring-activeColor sm:text-sm bg-white"
                />
                <div className="flex items-center space-x-2">
                  <input
                    id=""
                    name="comments"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-activeColor focus:ring-activeColor custom-checkedInput"
                  />
                  <span className="text-xs text-primaryColor ">
                    I’ve read and accept the{" "}
                    <Link href="/" className="text-activeColor font-lexed ">
                      Terms and Conditions
                    </Link>
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-5 flex justify-center">
              <button className="px-3 py-2 bg-activeColor text-white text-sm rounded-md">
                Post your product
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UploadForm;
