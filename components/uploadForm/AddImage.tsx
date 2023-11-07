import React from "react";
import { BsImageFill } from "react-icons/bs";
import PreviewImage from "./PreviewImage";

const AddImage = ({
  setFieldValue,
  name,
  values,
}: {
  setFieldValue: any;
  name: any;
  values: any;
}) => {
  const handleFileChange = (e: any) => {
    const files = e.currentTarget.files;
    const newImages = [...values];

    for (let i = 0; i < files.length; i++) {
      newImages.push(files[i]);
    }

    setFieldValue("banner", newImages);
  };
  return (
    <section className="pt-3">
      <div className="flex items-end gap-3">
        {values.length > 0 &&
          values.map((file: any, index: any) => (
            <PreviewImage key={index} file={file} />
          ))}

        <div className="p-4 border border-activeColor text-activeColor flex flex-col items-center justify-center space-y-2 rounded-md">
          <BsImageFill className="text-lg" />
          <label
            htmlFor={name}
            className="relative cursor-pointer rounded-md bg-white font-semibold text-activeColor focus-within:outline-none  hover:text-indigo-500"
          >
            <span className="block font-lexed text-xs">Upload a file</span>
            <input
              id={name}
              name={name}
              type="file"
              className="sr-only"
              multiple
              onChange={handleFileChange}
            />
          </label>
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
