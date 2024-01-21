"use client";
import React, { useRef, useState } from "react";
import { generateDownload } from "@/components/CropImage/cropImage";
import Cropper from "react-easy-crop";
import Slider from "@material-ui/core/Slider";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setModalClose } from "@/app/redux/modalSlice";
import Image from "next/image";

const UploadAvatarModal = () => {
  const inputRef = useRef<any>();

  const triggerFileSelectPopup = () => inputRef.current.click();
  const [image, setImage] = useState<any>(null);
  const [croppedArea, setCroppedArea] = useState<any>(null);
  const [crop, setCrop] = useState<any>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const onCropComplete = (
    croppedAreaPercentage: any,
    croppedAreaPixels: any
  ) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onSelectFile = (event: any) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener("load", () => {
        setImage(reader.result);
      });
    }
  };

  const onDownload = () => {
    generateDownload(image, croppedArea);
  };
  const dispatch = useDispatch();

  return (
    <div
      className={` md:w-[45%] sm:w-[55%] w-[90%] bg-white h-full rounded-md mx-auto space-y-3 lg:space-y-4  px-7 relative ${
        image ? "lg:w-[50%] py-9" : "lg:w-[30%] py-6"
      }`}
    >
      <button
        className="rounded-full bg-activeColor p-1  text-white absolute right-4 top-3 "
        onClick={() => dispatch(setModalClose(true))}
      >
        <MdClose />
      </button>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={onSelectFile}
        className="sr-only"
      />
      {image ? (
        <>
          <div className=" lg:h-[67dvh] md:h-[45dvh] h-[25dvh] relative">
            <Cropper
              image={image}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
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
              <button className="py-1.5 px-4 text-sm border border-activeColor rounded-md text-white bg-activeColor">
                Save
              </button>
            </div>
          </div>
        </>
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
      )}
    </div>
  );
};

export default UploadAvatarModal;
