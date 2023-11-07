import Image from "next/image";
import React, { useState } from "react";

const PreviewImage = ({ file }: { file: any }) => {
  const [preview, setPreview] = useState<any>(null);

  if (typeof file !== "string") {
    // console.log("I am here");
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result);
    };
  }
  return (
    <div className="relative w-[140px] h-[150px] py-1 px-2 shadow-xl bg-activeColor    rounded ">
      <div className="relative w-full h-full">
        {" "}
        <Image
          src={preview ? preview : file}
          alt=""
          width="100"
          height="100"
          className="border object-cover w-[100%] h-[80%] overflow-hidden rounded mx-auto mt-2"
        />
        {/* {uploadProgress === 100 && (
          <div className="absolute w-full h-full top-0 left-0 bg-[#7272728e]"></div>
        )} */}
      </div>
    </div>
  );
};

export default PreviewImage;
