"use client";
import React, { useEffect, useState } from "react";
import UploadArea from "./UploadArea";
import Image from "next/image";

const UploadImage = ({setFieldValue, values, errors, handleBlur, touched}: {touched: any, setFieldValue: any, values:any, errors:any, handleBlur: any}) => {
  const [imageCount, setImageCount] = useState<any>([]);
  const deleteImage = (index: any) => {
    setImageCount((prevImageCount: any) =>
      prevImageCount.filter((_: any, i: any) => i != index)
    );
  };

  useEffect(() => {
    console.log("Settings images", imageCount)
    setFieldValue("images", imageCount.map((iC:any) => iC.file))
  }, [imageCount, setFieldValue])

  console.log("images", imageCount);
  return (
    <section className="md:space-y-4 space-y-2">
      <h6 className="md:text-2xl text-lg text-primaryColor font-bold  leading-9">
        Hey! Let’s pick some best photos of your item{" "}
        <span className="text-red-500">*</span>
      </h6>
      
      {(touched?.images && errors?.images) ? 
        <p className="md:text-base text-sm text-red-500 font-medium leading-6">
          {errors?.images}
        </p> : 
        <p className="md:text-base text-sm text-secondColor font-medium leading-6">
          Choosing clear and multiple pictures can help make your item look
          trusted and make the buyer feel more trusted
        </p>
      }

      <div className=" w-full">
        {imageCount.length > 0 ? (
          <div className="grid md:grid-rows-2 grid-rows-3 md:grid-cols-5 grid-cols-2 gap-4 w-full md:h-[441px] h-[500px] ">
            {imageCount.length === 1 ? (
              <>
                {imageCount.map((item: any, index: any) => (
                  <div
                    key={index}
                    className={`
                 md:col-span-3 col-span-2 row-span-2  rounded-2xl border relative`}
                  >
                    <Image
                      src={item.url}
                      width={900}
                      height={900}
                      className="w-full  h-full rounded-2xl object-cover"
                      alt="product"
                    />
                    <div className="absolute right-2 top-2 flex items-center gap-3">
                      <div className="w-10 h-10 border border-gray-100 bg-white rounded-full flex items-center justify-center">
                        <Image
                          src="/assets/pen.png"
                          alt="edit"
                          width={100}
                          height={100}
                          className="w-4"
                        />
                      </div>
                      <div
                        onClick={() => deleteImage(index)}
                        className="w-10 h-10 border border-gray-100 bg-white rounded-full flex items-center justify-center"
                      >
                        <Image
                          src="/assets/delete.png"
                          alt="edit"
                          width={100}
                          height={100}
                          className="w-4"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : imageCount.length === 2 ? (
              <>
                {imageCount.map((item: any, index: any) => (
                  <div
                    key={index}
                    className={`
               row-span-${index === 0 ? 2 : 1} md:col-span-${
                      index === 0 ? 3 : 2
                    } col-span-${index === 0 ? 2 : 1}
                rounded-2xl border relative`}
                  >
                    <Image
                      src={item.url}
                      width={900}
                      height={900}
                      className="w-full  h-full rounded-2xl object-cover"
                      alt="product"
                    />
                    <div className="absolute right-2 top-2 flex items-center gap-3">
                      <div className="w-10 h-10 border border-gray-100 bg-white rounded-full flex items-center justify-center">
                        <Image
                          src="/assets/pen.png"
                          alt="edit"
                          width={100}
                          height={100}
                          className="w-4"
                        />
                      </div>
                      <div
                        onClick={() => deleteImage(index)}
                        className="w-10 h-10 border border-gray-100 bg-white rounded-full flex items-center justify-center"
                      >
                        <Image
                          src="/assets/delete.png"
                          alt="edit"
                          width={100}
                          height={100}
                          className="w-4"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) :  (
              <>
                {imageCount.map((item: any, index: any) => (
                  <div
                    key={index}
                    className={`
               md:row-span-${index === 0 ? 2 : 1} row-span-${
                      index === 0 ? 2 : 1
                    } md:col-span-${index === 0 ? 3 : 1} col-span-${
                      index === 0 ? 2 : 1
                    }
                  rounded-2xl border relative`}
                  >
                    <Image
                      src={item.url}
                      width={900}
                      height={900}
                      className="w-full  h-full rounded-2xl object-cover"
                      alt="product"
                    />
                    <div className="absolute right-2 top-2 flex items-center gap-3">
                      <div className="w-10 h-10 border border-gray-100 bg-white rounded-full flex items-center justify-center">
                        <Image
                          src="/assets/pen.png"
                          alt="edit"
                          width={100}
                          height={100}
                          className="w-4"
                        />
                      </div>
                      <div
                        onClick={() => deleteImage(index)}
                        className="w-10 h-10 border border-gray-100 bg-white rounded-full flex items-center justify-center"
                      >
                        <Image
                          src="/assets/delete.png"
                          alt="edit"
                          width={100}
                          height={100}
                          className="w-4"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}

            <div
              className={` rounded-2xl border ${
                imageCount.length === 1
                  ? "col-span-2 row-span-2"
                  : imageCount.length === 2
                  ? "md:col-span-2 col-span-1 row-span-1"
                  : imageCount.length === 3
                  ? "col-span-2 row-span-1"
                  : imageCount.length > 4
                  ? "hidden"
                  : ""
              }  `}
            >
              <UploadArea
              
                imageCount={imageCount}
                setImageCount={setImageCount}
                handleBlur={handleBlur}
              
              />
            </div>
          </div>
        ) : (
          <div className="w-full md:h-[441px] h-[350px]">
            <UploadArea  imageCount={imageCount} setImageCount={setImageCount} handleBlur={handleBlur} />
          </div>
        )}
      </div>
    </section>
  );
};

export default UploadImage;
