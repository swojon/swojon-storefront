"use client";
import Brand from "./Brand";
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

const formSchema = Yup.object({
  name: Yup.string().min(2).required("Name is required"),
  description: Yup.string().min(5).required("Description is required"),
  price: Yup.number().positive().integer().required("Min price needed"),
  contact: Yup.number()
    .min(11)
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .required("Provide your contact number"),
  slug: Yup.string(),
  condition: Yup.object().required("Condition is required"),
  brand: Yup.object().required("Brand is required"),
  genuine: Yup.object().required("Genuine is required"),
  model: Yup.object().required("Model is required"),
  banner: Yup.mixed()
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
});

const UploadForm = () => {
  const initialValues = {
    name: "",
    description: "",
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
  };
  const dispatch = useDispatch();

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
      const formData = new FormData();

      try {
        for (let i = 0; i < values.banner.length; i++) {
          formData.append("file", values.banner[i]);
          formData.append("upload_preset", "melz52ez");
          const res = await axios.post(
            "https://api.cloudinary.com/v1_1/ddu8yxsoo/image/upload",
            formData
          );
          console.log(`Image heloo ${i + 1} url: ${res.data.url}`);
        }
      } catch (error) {
        console.log(error);
      }

      console.log("values after submitting", values);
    },
  });
  // console.log(values, "values");
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
              values={values.location}
              setFieldValue={setFieldValue}
            />
          </div>
          <div className="w-[120px]">
            <CategoryDropDown />
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
            <div>
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
            </div>

            <div>
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
            </div>

            <div>
              <label
                htmlFor="brand"
                className="block text-base font-medium text-primaryColor font-lexed"
              >
                Brand
              </label>
              <div className="mt-2">
                <Brand values={values.brand} setFieldValue={setFieldValue} />
                {errors.brand && touched.brand ? (
                  <p className="text-red-400	pt-1  text-xs">{errors.brand}</p>
                ) : null}
              </div>
            </div>

            <div>
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
            </div>

            <div>
              <label
                htmlFor="features"
                className="block text-base font-medium text-primaryColor font-lexed"
              >
                Features
              </label>
              <div className="mt-2">
                <Features />
              </div>
            </div>

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
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  onChange={handleChange}
                  className="block w-full min-w-0 flex-1 py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-activeColor focus:ring-activeColor sm:text-sm bg-white"
                />
                {errors.name && touched.name ? (
                  <p className="text-red-400	pt-1  text-xs">{errors.name}</p>
                ) : null}
              </div>
            </div>

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
            </div>

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
