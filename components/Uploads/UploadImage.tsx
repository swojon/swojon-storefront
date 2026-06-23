"use client";
import React, { useEffect, useState } from "react";
import UploadArea from "./UploadArea";
import Image from "next/image";
import { uploadFile } from "@/lib/helpers/uploadFile";
import axios from "axios";
import crypto from "crypto";
import { ImSpinner6 } from "react-icons/im";

const generateSHA1 = (data: any) => {
  const hash = crypto.createHash("sha1");
  hash.update(data);
  return hash.digest("hex");
};

const generateSignature = (publicId: string, apiSecret: string) => {
  const timestamp = new Date().getTime();
  return `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;
};

const UploadImage = ({
  setFieldValue,
  values,
  errors,
  handleBlur,
  touched,
  uploadProgress,
  setUploadDone,
  setUploading,
  setUploadError,
  setUploadProgress,
  imageCount,
  setImageCount
}: {
  touched: any;
  setFieldValue: any;
  values: any;
  errors: any;
  handleBlur: any;
  uploadProgress: any;
  setUploadDone: any;
  setUploading: any;
  setUploadError: any;
  setUploadProgress: any;
  imageCount:any;
  setImageCount:any;
}) => {
  // const [imageCount, setImageCount] = useState<any>([]);
  const [uploadedUrls, setUploadedUrls] = useState<any>([]);
  // const deleteImage = (index: any) => {
  //   setImageCount((prevImageCount: any) =>
  //     prevImageCount.filter((_: any, i: any) => i != index)
  //   );
  // };

  useEffect(() => {
    // console.log("Settings images", imageCount);
    setFieldValue(
      "images",
      imageCount.map((iC: any) => iC.file)
    );
    const uploadImagesToCloudinary = async () => {
      try {
        let updatedImageCount = [];
        for (let i = uploadedUrls.length ; i < imageCount.length; i++) {
          //uploads only the new file uploaded. don't repeat
          // console.log("uploaded url", imageCount[i])
          if (imageCount[i].url.includes("res.cloudinary.com")){
            //it is already an url, no need to reupload
            updatedImageCount.push({
              ...imageCount[i],
              publicId: imageCount[i].url.split("/").pop().split(".")[0],
              publicUrl: imageCount[i].url
            })
          }else{
            const result = await uploadFile(
              imageCount[i].file,
              setUploadDone,
              setUploading,
              setUploadError,
              setUploadProgress
            );
  
            if (result) {
              const { url, publicId } = result;
              // Update the imageCount with additional data
              const updatedImage = {
                ...imageCount[i],
                publicId: publicId,
                publicUrl: url,
              };
              updatedImageCount.push(updatedImage);
            }
          }
         
        }
        // setImageCount(updatedImageCount);
        console.log("Uploaded Urls", updatedImageCount, uploadedUrls);
        setUploadedUrls([...uploadedUrls, ...updatedImageCount]);
      } catch (error) {
        console.log(error);
      }
    };

    if (imageCount.length > 0) {
      uploadImagesToCloudinary();
    }
  }, [imageCount, setFieldValue]);
  console.log("uploadedUrls", uploadedUrls);
 

  useEffect(() => {
    // console.log("Cloud images", uploadedUrls);
    setFieldValue(
      "mediaUrls",
      uploadedUrls.map((iC: any) => iC.publicUrl)
    );
  }, [uploadedUrls, setFieldValue]);

  console.log("loading", uploadedUrls);

  const deleteImageFromCloudinary = async (publicId: any) => {
    const cloudName = process.env.NEXT_PUBLIC_CLOUD_NAME;
    const timestamp = new Date().getTime();
    const apiKey = process.env.NEXT_PUBLIC_CLOUD_API_KEY;
    const apiSecret = process.env.NEXT_PUBLIC_CLOUD_API_SECRET;
    const signature = generateSHA1(generateSignature(publicId, apiSecret!));
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`;

    try {
      const response = await axios.post(url, {
        public_id: publicId,
        signature: signature,
        api_key: apiKey,
        timestamp: timestamp,
      });

      console.error(response);
      // console.log("successfully deleted");

      setUploadedUrls((prevUploadedUrls: any) =>
        prevUploadedUrls.filter((item: any) => item.publicId !== publicId)
      );
    } catch (error) {
      console.error(error);
    }
  };
  const handleDelete = (item: any) => {
    const matchedItem = uploadedUrls.find(
      (item2: any) => item2.url === item.url
    );
    if (matchedItem) {
      deleteImageFromCloudinary(matchedItem.publicId);
      setImageCount((image: any) =>
        image.filter((i: any) => i.url != item.url)
      );
    }
  };

  // console.log("images", imageCount);
  return (
    <section className="md:space-y-4 space-y-2">
      <h6 className="md:text-2xl text-lg text-primaryColor font-bold  leading-9">
        Hey! Let’s pick some best photos of your item{" "}
        <span className="text-red-500">*</span>
      </h6>

      {touched?.images && errors?.images ? (
        <p className="md:text-base text-sm text-red-500 font-medium leading-6">
          {errors?.images}
        </p>
      ) : (
        <p className="md:text-base text-sm text-secondColor font-medium leading-6">
          Choosing clear and multiple pictures can help make your item look
          trusted and make the buyer feel more trusted
        </p>
      )}

      <div className=" w-full">
        {imageCount.length > 0 ? (
          <div className="grid md:grid-rows-2 grid-rows-3 md:grid-cols-5 grid-cols-2 gap-4 w-full md:h-[441px] h-[500px] ">
            {imageCount.map((item: any, index: any) => (
              <div
                key={index}
                className={`${
                  index === 0
                    ? "md:col-span-3 col-span-2 row-span-2 "
                    : index === 1 && imageCount.length == 2
                    ? "row-span-1 md:col-span-2 col-span-1"
                    : "md:row-span-1 row-span-1 md:col-span-1 col-span-1"
                } rounded-2xl border relative`}
              >
                
                {uploadedUrls.some((item2: any) => item2.url === item.url) ? (
                  <>
                    <Image
                      src={item.url}
                      width={900}
                      height={900}
                      className="w-full h-full rounded-2xl object-cover"
                      alt={`product-${index}`}
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
                        onClick={() => handleDelete(item)}
                        className="w-10 h-10 border border-gray-100 bg-white rounded-full flex items-center justify-center cursor-pointer"
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
                    <div className="absolute right-2 bottom-2 ">
                      <div className="w-10 h-10  flex items-center justify-center">
                        <Image
                          src="/assets/verified.png"
                          alt="completeStatus"
                          width={100}
                          height={100}
                          className="w-7"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <Image
                      src={item.url}
                      width={900}
                      height={900}
                      className="w-full h-full rounded-2xl object-cover"
                      alt={`product-${index}`}
                    />
                    <div className="absolute right-0 top-0 w-full h-full  flex items-center justify-center bg-[#ffffffcf]">
                      <span className="text-primaryColor font-bold text-2xl animate-spin">
                        <ImSpinner6 />
                      </span>
                    </div>
                    <div className="absolute right-2 top-2 flex items-center gap-3">

                      <div
                        onClick={() => handleDelete(item)}
                        className="w-10 h-10 border border-gray-100 bg-white rounded-full flex items-center justify-center cursor-pointer"
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
                  </>
                )}
              </div>
            ))}

            <div
              className={`rounded-2xl border ${
                imageCount.length === 1
                  ? "col-span-2 row-span-2"
                  : imageCount.length === 2
                  ? "md:col-span-2 col-span-1 row-span-1"
                  : imageCount.length === 3
                  ? "col-span-2 row-span-1"
                  : imageCount.length > 4
                  ? "hidden"
                  : ""
              }`}
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
            <UploadArea
              imageCount={imageCount}
              setImageCount={setImageCount}
              handleBlur={handleBlur}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default UploadImage;
