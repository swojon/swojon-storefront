"use client";
import React, { useRef, useState } from "react";
import {
  getCroppedImg
} from "@/components/CropImage/cropImage";
import Cropper from "react-easy-crop";
import Slider from "@material-ui/core/Slider";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setModalClose } from "@/app/redux/modalSlice";

import axios from "axios";
import toast from "react-hot-toast";
import { GetUserByIdDocument, useUpdateProfileMutation } from "@/apollograph/generated";
import { BiLoaderCircle } from "react-icons/bi";
import { uploadFile } from "@/lib/helpers/uploadFile";



const UploadAvatarModal = ({ props }: { props: any }) => {
  const inputRef = useRef<any>();
  const authState = useSelector((state: any) => state.auth)
  const triggerFileSelectPopup = () => inputRef.current.click();
  const [showBox, setShowBox] = useState<any>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [crop, setCrop] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [rotation, setRotation] = useState<number>(0);
  const [zoom, setZoom] = useState<number>(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null); // Adjust the type accordingly
  const [croppedImage, setCroppedImage] = useState<any>(null);
  const [updateProfile, {data, loading, error}] = useUpdateProfileMutation()
  const [formUploading, setFormUploading] = useState(false)
  const onCropComplete = (croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleUpload = async ( ) => {
      setFormUploading(true)
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotation
      );
      console.log("cropped image", croppedImage)
      const imageUrl = await uploadFile(croppedImage, () => {}, () => {}, () => {}, () => {});
      if (!imageUrl) {
        toast.error("Error getting the image url. Please try again later.")
        return
      }
      updateProfile({
        variables: {
          profileData: {
            avatar: imageUrl.url
          },
          profileId: authState.user.id
        },
        onCompleted: ()  => {
          setFormUploading(false)
          toast.success("Successfully updated avatar")
          dispatch(setModalClose(true))
        },
        onError: () => {
          setFormUploading(false)
          toast.error("Error updating avatar")
        },
        refetchQueries: [GetUserByIdDocument]
      })

  }
  // const showCroppedImage = useCallback(async () => {
  //   console.log("callback run")
  //   try {
  //     if (!imageSrc || !croppedAreaPixels) {
  //       console.error("Image source or cropped area pixels are missing.");
  //       return;
  //     }

  //     const croppedImage = await getCroppedImg(
  //       imageSrc,
  //       croppedAreaPixels,
  //       rotation
  //     );
  //     console.log("donee", { croppedImage });
  //     setCroppedImage(croppedImage);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }, [imageSrc, croppedAreaPixels, rotation]);

  const onClose = () => {
    setCroppedImage(null);
  };

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await readFile(file);

      // try {

      //   const orientation = await getOrientation(file);
      //   const rotation = ORIENTATION_TO_ANGLE[orientation];
      //   if (rotation) {
      //     imageDataUrl = await getRotatedImage(imageDataUrl, rotation);
      //   }
      // } catch (e) {
      //   console.warn("failed to detect the orientation");
      // }

      setImageSrc(imageDataUrl);
    }
    setShowBox("select");
  };

  const uploadCroppedImageToCloudinary = async (croppedImage: File) => {
    try {
      const formData = new FormData();
      formData.append("file", croppedImage);
      formData.append("upload_preset", "melz52ez");

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/ddu8yxsoo/image/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Handle the Cloudinary API response
      console.log("Cloudinary Response:", response.data);

      // If needed, you can extract the URL of the uploaded image
      const imageUrl = response.data.secure_url;
      console.log("Uploaded Image URL:", imageUrl);
      return imageUrl
      // Perform additional actions as needed
    } catch (error) {
      console.error("Error uploading cropped image to Cloudinary:", error);
      // Handle the error
      return null;
    }
  };

  const dispatch = useDispatch();

  return (
    <div
      className={` md:w-[45%] sm:w-[55%] w-[90%] bg-white h-full rounded-md mx-auto space-y-3 lg:space-y-4  px-7 relative ${
        showBox === "CropImage" || !showBox
          ? "lg:w-[30%] py-6"
          : " lg:w-[50%] py-9"
      }`}
    >
      <button
        className="rounded-full bg-activeColor p-1  text-white absolute right-4 top-3 "
        onClick={() => dispatch(setModalClose(true))}
      >
        <MdClose />
      </button>

      <input
      className="border-dashed border-2 border-activeColor h-full w-full rounded-2xl flex items-center justify-center cursor-pointer p-1"

type="file"
        accept="image/*"
        ref={inputRef}
        onChange={onFileChange}
        // className="sr-only"
      />
      {showBox === "select" && (
        <>
          <div className=" lg:h-[67dvh] md:h-[45dvh] h-[25dvh] relative">
            <Cropper
              image={imageSrc!}
              crop={crop}
              rotation={rotation}
              zoom={zoom}
              aspect={4 / 3}
              onCropChange={setCrop}
              onRotationChange={setRotation}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </div>

          <div className="sm:flex items-center justify-between pt-1 rounded-b-md">
            <div className="slider sm:w-[50%] w-full">
              <Slider
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(e, zoom: any) => setZoom(zoom)}
              />
            </div>
            <div className="flex items-center gap-3">
              <button
                className="py-1.5 px-2 text-sm border border-activeColor rounded-md text-activeColor bg-white"
                onClick={triggerFileSelectPopup}
              >
                Change
              </button>
              <button
                className="py-1.5 px-4 text-sm border border-activeColor rounded-md text-white bg-activeColor"
                onClick={async () => {
                  // showCroppedImage();
                  // setShowBox("CropImage");
                  await handleUpload()
                }}
              >
               {formUploading ?  <BiLoaderCircle className=" text-xl animate-spin" /> : 
                "Upload"}
              </button>
            </div>
          </div>
        </>
      )}
       {/* { showBox === "CropImage" ? (
        <div className="pt-2 space-y-6">
          {croppedImage && (
            <Image
              className="w-full h-full border rounded-md"
              src={croppedImage}
              alt="cropped"
              width={400}
              height={400}
            />
          )}

          <button
            className="py-1.5 px-2 md:text-base text-sm border border-activeColor rounded-md text-white bg-activeColor w-full font-bold"
            onClick={() => uploadCroppedImageToCloudinary(croppedImage)}
          >
            Upload
          </button>
        </div>
      ) : (
        <div className="flex flex-col justify-center">
          <button
            className="w-24 h-24 border rounded-full mx-auto"
            onClick={triggerFileSelectPopup}
          >
            <Image
              src="/assets/uploadImage.png"
              alt="upload image"
              width={600}
              height={400}
              className="w-16 m-auto"
            />
          </button>
          <span className="text-center text-base font-medium text-primaryColor pt-3">
            Upload New Image
          </span>
        </div>
      )} */}
    </div>
  );
};

function readFile(file: any): any {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
}

export default UploadAvatarModal;
