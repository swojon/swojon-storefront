import React, { useRef, useState } from "react";
import { TbCloudUp } from "react-icons/tb";

const UploadArea = ({
  imageCount,
  setImageCount,
}: {
  imageCount: any;
  setImageCount: any;
}) => {
  const inputRef = useRef<any>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleImageInput = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event: any) => {
    const files = event.target.files;
    if (files.length === 0 || imageCount.length >= 5) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!imageCount.some((e: any) => e.name == files[i].name)) {
        setImageCount((prevImageCount: any) => [
          ...prevImageCount,
          { name: files[i].name, url: URL.createObjectURL(files[i]) },
        ]);
      }
    }
  };

  const onDragOver = (event: any) => {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = "copy";
  };
  const onDragLeave = (event: any) => {
    event.preventDefault();
    setIsDragging(false);
  };
  const onDrop = (event: any) => {
    event.preventDefault();
    setIsDragging(false);

    const files = event.dataTransfer.files;

    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!imageCount.some((e: any) => e.name == files[i].name)) {
        setImageCount((prevImageCount: any) => [
          ...prevImageCount,
          { name: files[i].name, url: URL.createObjectURL(files[i]) },
        ]);
      }
    }
  };

  return (
    <div
      className="border-dashed border-2 border-activeColor h-full w-full rounded-2xl flex items-center justify-center cursor-pointer p-1"
      onClick={handleImageInput}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <div className="space-y-2 text-center flex flex-col items-center">
        {isDragging ? (
          <span className="text-primaryColor font-lexed text-base">
            Drop Images here
          </span>
        ) : (
          <>
            <TbCloudUp className="text-activeColor text-3xl" />
            <span className="text-primaryColor font-lexed md:text-base text-sm">
              Upload or Drag photos
            </span>
            <p className="text-secondColor md:text-sm sm:text-xs text-[10px]">
              You can upload up to 5 photos
            </p>
          </>
        )}
      </div>
      <input
        type="file"
        ref={inputRef}
        multiple
        onChange={handleImageChange}
        className="hidden"
      />
    </div>
  );
};

export default UploadArea;
