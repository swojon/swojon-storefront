import React from "react";
import { TbCloudUp } from "react-icons/tb";

const UploadArea = () => {
  return (
    <div className="border-dashed border-2 border-activeColor h-full w-full rounded-2xl flex items-center justify-center">
      <div className="space-y-2 text-center flex flex-col items-center">
        <TbCloudUp className="text-activeColor text-3xl" />
        <span className="text-primaryColor font-lexed text-base">
          Upload or Drag photos
        </span>
        <p className="text-secondColor text-sm">
          You can upload up to 5 photos
        </p>
      </div>
    </div>
  );
};

export default UploadArea;
