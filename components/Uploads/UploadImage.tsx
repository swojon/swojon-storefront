"use client";
import React, { useState } from "react";
import UploadArea from "./UploadArea";
import Image from "next/image";

const UploadImage = () => {
  const [imageCount, setImageCount] = useState<any>([]);
  const deleteImage = (index: any) => {
    setImageCount((prevImageCount: any) =>
      prevImageCount.filter((_, i) => i != index)
    );
  };

  console.log("images", imageCount);
  return (
    <section className="space-y-4">
      <h6 className="text-2xl text-primaryColor font-bold  leading-9">
        Hey! Let’s pick some best photos of your item{" "}
        <span className="text-red-500">*</span>
      </h6>
      <p className="text-base text-secondColor font-medium leading-6">
        Choosing clear and multiple pictures can help make your item look
        trusted and make the buyer feel more trusted
      </p>

      <div className="h-[441px] w-full">
        {imageCount.length > 0 ? (
          // <div className="flex items-center gap-5 w-full h-full">

          //   <div
          //     className={`w-full border  h-full  grid grid-cols-5 grid-rows-2  gap-5`}
          //   >
          //     {imageCount.map((item: any, index: any) => (
          //       <div
          //         key={index}
          //         className={`h-${
          //           index === 0 ? "[441px]" : "[210.5px]"
          //         } row-span-${index === 0 ? 2 : 1} col-span-${
          //           index === 0 && 3
          //         } rounded-2xl border relative`}
          //       >
          //         <Image
          //           src={item.url}
          //           width={900}
          //           height={900}
          //           className="w-full h-full rounded-2xl object-cover"
          //           alt="product"
          //         />
          //         <div className="absolute right-2 top-2 flex items-center gap-3">
          //           <div className="w-10 h-10 border border-gray-100 bg-white rounded-full flex items-center justify-center">
          //             <Image
          //               src="/assets/pen.png"
          //               alt="edit"
          //               width={100}
          //               height={100}
          //               className="w-4"
          //             />
          //           </div>
          //           <div
          //             onClick={() => deleteImage(index)}
          //             className="w-10 h-10 border border-gray-100 bg-white rounded-full flex items-center justify-center"
          //           >
          //             <Image
          //               src="/assets/delete.png"
          //               alt="edit"
          //               width={100}
          //               height={100}
          //               className="w-4"
          //             />
          //           </div>
          //         </div>
          //       </div>
          //     ))}

          //     <div
          //       className={` rounded-2xl border ${
          //         imageCount.length === 1
          //           ? "col-span-2 h-[441px]"
          //           : imageCount.length === 2
          //           ? "col-span-2 h-[210.5px]"
          //           : imageCount.length === 3
          //           ? "col-span-2 h-[210.5px]"
          //           : imageCount.length > 4
          //           ? "hidden"
          //           : ""
          //       }  `}
          //     >
          //       <UploadArea
          //         imageCount={imageCount}
          //         setImageCount={setImageCount}
          //       />
          //     </div>
          //   </div>
          // </div>

          <div className="grid grid-rows-2 grid-cols-5 gap-4 w-full h-full ">
            {imageCount.length === 1 ? (
              <>
                {imageCount.map((item: any, index: any) => (
                  <div
                    key={index}
                    className={`
                 col-span-3 row-span-2  rounded-2xl border relative`}
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
               row-span-${index === 0 ? 2 : 1} col-span-${index === 0 ? 3 : 2}
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
            ) : (
              <>
                {imageCount.map((item: any, index: any) => (
                  <div
                    key={index}
                    className={`
               row-span-${index === 0 ? 2 : 1} col-span-${index === 0 ? 3 : 1}
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
                  ? "col-span-2 h-[441px]"
                  : imageCount.length === 2
                  ? "col-span-2 h-[210.5px]"
                  : imageCount.length === 3
                  ? "col-span-2 h-[210.5px]"
                  : imageCount.length > 4
                  ? "hidden"
                  : ""
              }  `}
            >
              <UploadArea
                imageCount={imageCount}
                setImageCount={setImageCount}
              />
            </div>
          </div>
        ) : (
          <UploadArea imageCount={imageCount} setImageCount={setImageCount} />
        )}
      </div>
    </section>
  );
};

export default UploadImage;
