"use client";
import { useFormik } from "formik";
import CategoryDropDown from "./CategoryDropDown";
import Condition from "./Condition";
import Genuine from "./Genuine";
import LocationDropDown from "./LocationDropDown";
import Features from "./Features";
import Model from "./Model";
import Descriptions from "./Descriptions";
import Price from "./Price";
import AddImage from "./AddImage";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setModalOpen } from "@/app/redux/modalSlice";
import * as Yup from "yup";
import axios from "axios";
import { uploadFile } from "@/lib/helpers/uploadFile";
import { useState } from "react";
import BrandDropdown from "./BrandDropdown";
import { useSession } from "next-auth/react";
import { useCreateListingMutation } from "@/apollograph/generated";

const formSchema = Yup.object({
  title: Yup.string().min(2).required("Title is required"),
  brandId: Yup.number().positive().notRequired(),
  categoryId: Yup.number().positive().notRequired(),
  description: Yup.string().min(5).required("Description is required"),
  locationId: Yup.number().positive().required(),
  price: Yup.number().positive().integer().required("Min price needed"),
  
  // name: Yup.string().min(2).required("Name is required"),
  // contact: Yup.number()
  //   .min(11)
  //   .typeError("That doesn't look like a phone number")
  //   .positive("A phone number can't start with a minus")
  //   .integer("A phone number can't include a decimal point")
  //   .required("Provide your contact number"),
  // slug: Yup.string(),
  // condition: Yup.object().required("Condition is required"),
  // brand: Yup.object().required("Brand is required"),
  // genuine: Yup.object().required("Genuine is required"),
  // model: Yup.object().required("Model is required"),
  banners: Yup.mixed()
    .nullable()
    .test(
      "FILE_SIZE",
      "Too big!!",
      (file: any) => {
        if (typeof file === "string") return true;
        return file ? file && file.size < 10 * 1024 * 1024 : true;
      } //10MB
    )
    .test("FILE_TYPE", "INVALID", (file: any) => {
      if (typeof file === "string") return true;
      return file
        ? file && ["image/png", "image/jpeg", "image/jpg"].includes(file.type)
        : true;
    }),
    imageUrls: Yup.array().of(Yup.string().required()).notRequired()
});

const UploadForm = () => {
  // const {data:session} = useSession()

  const initialValues = {
    title: "",
    brandId: null,
    locationId: null,
    categoryId: null,
    description: "",
    images: [],
    banner: [],
    slug: "",
    condition: "",
    genuine: "",
    brand: "",
    model: "",
    features: "",
    price: "",
    contact: "",
    location: "",
    category: "",
    imageUrls: [],
  };
  const dispatch = useDispatch();
  const [createListing, {error:createError, data: createData}]  = useCreateListingMutation()
  const [uploading, setUploading] = useState(false)
  const [uploadDone, setUploadDone] = useState(false)
  const [uploadError, setUploadError] = useState(false)
  const [uploadProgress, setUploadProgress]  = useState(0)
  const {
    values,
    errors,
    touched,
    handleBlur,
    isSubmitting,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: formSchema,
    onSubmit: async (values, action) => {
      console.log("submitting the  form with values")
 

      try {
        for (let i = 0; i < values.banner.length; i++) {
          const url = await uploadFile(values.banner[i],
                 setUploadDone, setUploading, setUploadError, setUploadProgress )

          console.log(`Image heloo ${i + 1} url: ${url}`);
          // @ts-ignore:next-line
          values.imageUrls.push(url)
        }
      } catch (error) {
        console.log(error);
      }

      let listingData: any = {
        title: values.title,
        description: values.description,
        price: values.price,
        mediaUrls: values.imageUrls,
        locationId: values.locationId,
        categoryId: values.categoryId,
        brandId: values.brandId
      }

      createListing({
        variables: {
          listingData: listingData
        },
      });
      // setUploadProgress(null);

      if (createError)
        console.log("Failed to create listing", createError)
        // .error("Failed to Create Category, Please Try again.");
      if (createData) {
        // toast.success("Category Created Successfully");
        action.resetForm();
        console.log("Success in creating product")
      }
      console.log("values after submitting", values);
    },
  });
  console.log(values, "values");
  console.log(errors, "ërrors")
  return (
    <section className="mt-8 border rounded-md xl:p-16 lg:p-10 md:p-6 sm:p-3 p-2 bg-[#f9f9f9]">
      <div className="flex ">
        <div className="flex-1">
          <h3 className="text-2xl font-lexed font-medium text-primaryColor">
            Please give us your product information
          </h3>
        </div>
        <div className="flex-1 flex justify-end items-center  gap-3">
          <div className="w-[120px]">
            <LocationDropDown
              values={values.locationId}
              setFieldValue={setFieldValue}
            />
          </div>
          <div className="w-[120px]">
            <CategoryDropDown 
              values={values.categoryId}
              setFieldValue={setFieldValue}
              />
          </div>
          <button
            onClick={() =>
              dispatch(
                setModalOpen({
                  title: "this is a modal",
                  body: "success",
                })
              )
            }
            className="px-2.5 py-2 bg-activeColor text-white text-sm rounded-md"
          >
            Modify Search
          </button>
        </div>
      </div>

      <div className="pt-8">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            {/* <div>
              <label
                htmlFor="country"
                className="block text-base font-medium text-primaryColor font-lexed"
              >
                Condition
              </label>
              <div className="mt-2">
                <Condition
                  values={values.condition}
                  setFieldValue={setFieldValue}
                />
                {errors.condition && touched.condition ? (
                  <p className="text-red-400	pt-1  text-xs">
                    {errors.condition}
                  </p>
                ) : null}
              </div>
            </div> */}

            {/* <div>
              <label
                htmlFor="genuine"
                className="block text-base font-medium text-primaryColor font-lexed"
              >
                Genuine
              </label>
              <div className="mt-2">
                <Genuine
                  values={values.genuine}
                  setFieldValue={setFieldValue}
                />
                {errors.genuine && touched.genuine ? (
                  <p className="text-red-400	pt-1  text-xs">{errors.genuine}</p>
                ) : null}
              </div>
            </div> */}

            <div>
              <label
                htmlFor="brand"
                className="block text-base font-medium text-primaryColor font-lexed"
              >
                Brand
              </label>
              <div className="mt-2">
                <BrandDropdown values={values.brandId} setFieldValue={setFieldValue} />
                {errors.brand && touched.brand ? (
                  <p className="text-red-400	pt-1  text-xs">{errors.brand}</p>
                ) : null}
              </div>
            </div>

            {/* <div>
              <label
                htmlFor="model"
                className="block text-base font-medium text-primaryColor font-lexed"
              >
                Model
              </label>
              <div className="mt-2">
                <Model values={values.model} setFieldValue={setFieldValue} />
                {errors.model && touched.model ? (
                  <p className="text-red-400	pt-1  text-xs">{errors.model}</p>
                ) : null}
              </div>
            </div> */}

            {/* <div>
              <label
                htmlFor="features"
                className="block text-base font-medium text-primaryColor font-lexed"
              >
                Features
              </label>
              <div className="mt-2">
                <Features />
              </div>
            </div> */}

            <div>
              <label
                htmlFor="descriptions"
                className="block text-base font-medium text-primaryColor font-lexed"
              >
                Description
              </label>
              <div className="mt-2">
                <Descriptions values={values} onChange={handleChange} />

                {errors.description && touched.description ? (
                  <p className="text-red-400	pt-1 text-xs">
                    {errors.description}
                  </p>
                ) : null}
              </div>
            </div>

            <div>
              <label
                htmlFor="price"
                className="block text-base font-medium text-primaryColor font-lexed"
              >
                Price
              </label>
              <div className="mt-2">
                <Price values={values} onChange={handleChange} />

                {errors.price && touched.price ? (
                  <p className="text-red-400	pt-1  text-xs">{errors.price}</p>
                ) : null}
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="country"
              className="block text-base font-medium text-primaryColor font-lexed"
            >
              Add your image
              <span className="text-secondColor text-xs ps-1">(Maximum 5)</span>
            </label>
            <div className="mt-2">
              <AddImage
                setFieldValue={setFieldValue}
                name="banner"
                values={values.banner}
                uploading={uploading}
                uploadProgress={uploadProgress}
              />
            </div>
          </div>

          <div className="border-t pt-8 space-y-6 ">
            <h5 className="text-2xl font-lexed font-medium text-primaryColor">
              Your details
            </h5>

            <div className="w-[50%]">
              <label
                htmlFor="name"
                className="block text-base font-medium text-primaryColor font-lexed"
              >
                Your Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="John Doe"
                  onChange={handleChange}
                  className="block w-full min-w-0 flex-1 py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-activeColor focus:ring-activeColor sm:text-sm bg-white"
                />
                {errors.title && touched.title ? (
                  <p className="text-red-400	pt-1  text-xs">{errors.title}</p>
                ) : null}
              </div>
            </div>
{/* 
            <div className="w-[50%]">
              <label
                htmlFor="contact"
                className="block text-base font-medium text-primaryColor font-lexed"
              >
                Phone Number
              </label>
              <div className="mt-2 space-y-2">
                <input
                  type="tel"
                  name="contact"
                  id="contact"
                  placeholder="0147..."
                  onChange={handleChange}
                  className="block w-full min-w-0 flex-1 py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-activeColor focus:ring-activeColor sm:text-sm bg-white"
                />
                {errors.contact && touched.contact ? (
                  <p className="text-red-400	pt-1  text-xs">{errors.contact}</p>
                ) : null}
                <div className="flex items-center space-x-2 pt-4">
                  <input
                    id=""
                    name="comments"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-activeColor focus:ring-activeColor custom-checkedInput"
                  />
                  <span className="text-xs text-primaryColor ">
                    I’ve read and accept the{" "}
                    <Link
                      href="/terms-condition"
                      className="text-activeColor font-lexed "
                    >
                      Terms and Conditions
                    </Link>
                  </span>
                </div>
              </div>
            </div> */}

            <div className="pt-5 flex justify-center">
              <button
                type="submit"
                className="px-3 py-2 bg-activeColor text-white text-sm rounded-md"
              >
                Post your product
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UploadForm;
