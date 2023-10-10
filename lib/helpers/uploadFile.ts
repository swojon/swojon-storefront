import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";

export const uploadFile = async (
  file: any,
  setUploadDone: Dispatch<SetStateAction<boolean>>,
  setUploading: Dispatch<SetStateAction<boolean>>,
  setUploadError: Dispatch<SetStateAction<boolean>>,
  setUploadProgress: any
) => {
  console.log(setUploading, setUploadError);
  setUploading(true);
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "melz52ez");
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/ddu8yxsoo/image/upload",
      formData,
      {
        onUploadProgress: (progressEvent) => {
          // Calculate and update the progress percentage
          const progress = progressEvent.total ?  Math.round(
            (progressEvent.loaded / progressEvent.total!) * 100
          ): 0;
          setUploadProgress(progress);
        },
      }
    );
    const url = res.data.url;
    setUploadDone(true);
    setUploading(false);
    return url;
  } catch {
    setUploadError(true);
    setUploading(false);
  }
};
