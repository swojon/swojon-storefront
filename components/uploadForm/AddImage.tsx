import React from "react";
import { BsImageFill } from "react-icons/bs";

const AddImage = () => {
  return (
    <section className="pt-3">
      <div className="flex items-center gap-3">
        <div className="p-4 border border-activeColor text-activeColor flex flex-col items-center justify-center space-y-2 rounded-md">
          <BsImageFill className="text-lg" />
          <span className="block font-lexed text-xs">Upload photo</span>
        </div>
        <div className="p-4 border border-secondColor text-secondColor flex flex-col items-center justify-center space-y-2 rounded-md">
          <BsImageFill className="text-lg" />
          <span className="block font-lexed text-xs">Upload photo</span>
        </div>
        <div className="p-4 border border-secondColor text-secondColor flex flex-col items-center justify-center space-y-2 rounded-md">
          <BsImageFill className="text-lg" />
          <span className="block font-lexed text-xs">Upload photo</span>
        </div>
        <div className="p-4 border border-secondColor text-secondColor flex flex-col items-center justify-center space-y-2 rounded-md">
          <BsImageFill className="text-lg" />
          <span className="block font-lexed text-xs">Upload photo</span>
        </div>
        <div className="p-4 border border-secondColor text-secondColor flex flex-col items-center justify-center space-y-2 rounded-md">
          <BsImageFill className="text-lg" />
          <span className="block font-lexed text-xs">Upload photo</span>
        </div>
      </div>
      <span className="text-xs text-secondColor">
        Upload at least one image{" "}
      </span>
    </section>
  );
};

export default AddImage;
