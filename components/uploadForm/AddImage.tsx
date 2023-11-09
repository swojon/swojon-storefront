import React from "react";
import { BsImageFill } from "react-icons/bs";
import PreviewImage from "./PreviewImage";

const AddImage = ({
  setFieldValue,
  name,
  values,
  uploading,
  uploadProgress
}: {
  setFieldValue: any,
  name: any,
  values: any,
  uploading: boolean,
  uploadProgress: any
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
    <section className=" w-full">
      {/* <div className="p-4 border border-activeColor text-activeColor flex flex-col items-center justify-center space-y-2 rounded-md">
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
        </div> */}

      <div className=" flex justify-center rounded-lg border border-dashed border-activeColor px-4 py-4 w-full bg-[#e7eafa]">
        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 text-activeColor"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
              clipRule="evenodd"
            />
          </svg>
          <div className="mt-2 flex justify-center text-sm leading-6 text-gray-600">
            <label
              htmlFor={name}
              className="relative cursor-pointer rounded-md  font-semibold text-activeColor focus-within:outline-none focus-within:ring-2  hover:text-indigo-500"
            >
              <span className="">Upload a file</span>
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
          <p className="text-xs leading-5 text-gray-600">
            or, drag photos here
          </p>
          <p className="text-xs leading-5 text-gray-400"> (Up to 05 photos)</p>
        </div>
      </div>
      <div className="flex gap-3 items-center pt-4 flex-wrap">
        {values.length > 0 &&
          values.map((file: any, index: any) => (
            <PreviewImage key={index} file={file} />
          ))}

      </div>
      
      {uploading && (
          <div className="self-end">
            <div className="relative pt-1 w-[150px]">
              <span className="text-xs font-semibold inline-block text-green-600">
                {uploadProgress}% Complete
              </span>

              <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-2 text-xs flex rounded bg-green-200">
                  <div
                    style={{ width: `${uploadProgress}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}
    </section>
  );
};

export default AddImage;
