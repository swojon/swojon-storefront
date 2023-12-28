import { MdKeyboardArrowRight } from "react-icons/md";
import CompleteStatusBar from "./CompleteStatusBar";
import UploadImage from "./UploadImage";
import Category from "./Category";
import ProductTitle from "./ProductTitle";
import Brand from "./Brand";
import Condition from "./Condition";
import { useEffect, useMemo, useState } from "react";
import Price from "./Price";
import DealingMethod from "./DealingMethod";
import * as Yup from "yup";
import { useFormik } from "formik";
import { slugify } from "@/lib/helpers/slugify";
import "./Upload.css";

const formSchema = Yup.object({
  title: Yup.string().min(2).required("Title is required"),
  brandId: Yup.number().positive().notRequired(),
  categoryId: Yup.number().positive().notRequired(),
  description: Yup.string().min(5).required("Description is required"),
  locationId: Yup.number().positive().required(),
  price: Yup.number().positive().integer().required("Min price needed"),
  condition: Yup.string().required("Item condition is required"),
  dealingMethod: Yup.string().required("Dealing Method is required"),
  deliveryCharge: Yup.number().positive().notRequired(),
  meetupLocations: Yup.array(
    Yup.object({
        city : Yup.string().notRequired(),
        country : Yup.string().notRequired(),
        displayName : Yup.string().notRequired(),
        lat : Yup.string().notRequired(),
        locality : Yup.string().notRequired(),
        lon : Yup.string().notRequired(),
        placeId : Yup.string().notRequired(),
        postCode : Yup.string().notRequired(),
        state : Yup.string().notRequired(),
        stateDistrict : Yup.string().notRequired(),
    })
  ).notRequired(), 
  images: Yup.mixed()
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
  imageUrls: Yup.array().of(Yup.string().required()).notRequired(),

});

const Uploads = ({ product }: { product: null | any }) => {
  const [stickyClass, setStickyClass] = useState("relative");
  const [progress, setProgress] = useState(0);

  const initialValues = useMemo(() => {
    return {
      title: product ? product.title : "",
      description: product ? product.description : "",
      images: product ? product.images : [],
      condition: product ? product.condition : "used",
      slug: product ? product.slug : "",
      // parentCategoryId: product?.parentCategory?.id,
      brandId: product ? product.brand.id : null,
      categoryId: product ? product.category.id : null,
      locationId: product ? product.location.id : null,
      price: product ? product.price : 0,
      quantity: product ? product.quantity : 1,
      dealingMethod: product ? product.dealingMethod : "",
      deliveryCharge: product ? product.deliveryCharge : 0,
      meetupLocations: product ? product.meetupLocations : []
    };
  }, []);
  // const initialValues = {

  // };
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 300
        ? setStickyClass("fixed top-0 left-0 z-50 w-full right-0  shadow-lg ")
        : setStickyClass("relative");
    }
  };

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
      console.log("Form submitted with values", values);
    },
  });

  useEffect(() => {
    const completedFields = Object.values(values).filter(
      (value) => !!value && value !== 0 && value !== 1
    ).length;
    const totalFields = Object.keys(initialValues).length;
    const newProgress = Math.round((completedFields / totalFields) * 100);

    setProgress(newProgress);
  }, [values, initialValues]);

  console.log("values", values);
  console.log("progress", progress);
  const handleTitleChange = (event: any) => {
    const inputValue = event.currentTarget.value;
    setFieldValue("slug", slugify(inputValue));
  };

  return (
    <section className="space-y-5">
      <div className={` `}>
        <div className="flex items-center space-x-1  text-sm text-secondColor custom-container">
          <h6>Home</h6>
          <MdKeyboardArrowRight />
          <h6 className="text-primaryColor">List product</h6>
        </div>

        <div
          className={` border-b bg-white transition ease-in-out delay-150 py-5  
          ${stickyClass} 
          `}
        >
          <div className="flex lg:flex-row flex-col items-start gap-2 custom-container">
            <div className="flex-1 sm:w-[80%] w-[100%] xl:space-y-4 lg:space-y-4 space-y-3 ">
              <h5 className="text-2xl text-primaryColor font-lexed font-bold">
                List your Item
              </h5>

              <p className="text-base text-secondColor  font-medium">
                Listing an item is unbelievably easy in Swojon.
              </p>

              <div className=" w-full">
                {progress === 0 ? (
                  <span className="text-base text-secondColor font-medium">
                    Let’s complete{" "}
                  </span>
                ) : (
                  <span className="text-base text-secondColor font-medium">
                    {progress}% complete
                  </span>
                )}

                <CompleteStatusBar bar={progress} />
              </div>
            </div>

            <div className="flex-1 flex items-center justify-end gap-4 ">
              <button className="py-2 w-24 rounded-md bg-secondColor text-white text-sm hover:shadow-lg">
                Cancel
              </button>
              <button className="py-2 w-24 rounded-md bg-activeColor text-white text-sm hover:shadow-lg">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" custom-container   ">
        <form className="md:space-y-5 space-y-3">
          <UploadImage />
          <Category setFieldValue={setFieldValue} values={values} />
          <div
            className={`${
              values.categoryId && !errors.categoryId
                ? "opacity-100 "
                : "opacity-50 pointer-events-none"
            }`}
          >
            <ProductTitle
              handleChange={handleChange}
              values={values}
              // handleChangeWithProgress={handleChangeWithProgress}
            />
          </div>
          <div
            className={`${
              values.title && !errors.title
                ? "opacity-100 "
                : "opacity-50 pointer-events-none"
            }`}
          >
            <Condition setFieldValue={setFieldValue} values={values} />
          </div>

          <div
            className={`${
              values.condition && !errors.condition
                ? "opacity-100 "
                : "opacity-50 pointer-events-none"
            }`}
          >
            <Price
              setFieldValue={setFieldValue}
              values={values}
              handleChange={handleChange}
            />
          </div>

          <div
            className={`${
              values.price && !errors.price
                ? "opacity-100 "
                : "opacity-50 pointer-events-none"
            }`}
          >
            <Brand
              setFieldValue={setFieldValue}
              values={values}
              handleChange={handleChange}
            />
          </div>

          <div
            className={`${
              values.brandId && !errors.brandId
                ? "opacity-100 "
                : "opacity-50 pointer-events-none"
            }`}
          >
            <DealingMethod
              setFieldValue={setFieldValue}
              values={values}
              handleChange={handleChange}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Uploads;
