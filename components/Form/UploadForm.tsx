"use client";
import LocationDropDown from "./LocationDropDown";

const UploadForm = () => {
  return (
    <section className="mt-8 border rounded-md xl:p-10 lg:p-8 md:p-6 sm:p-3 p-2 bg-[#f9f9f9]">
      <div className="flex ">
        <div className="flex-1">
          <h3 className="text-2xl font-lexed font-medium text-primaryColor">
            Please give us your product information
          </h3>
        </div>
        <div className="flex-1 flex justify-end">
          <div className="w-[150px]">
            <LocationDropDown />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadForm;
