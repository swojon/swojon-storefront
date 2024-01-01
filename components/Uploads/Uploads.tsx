import { MdKeyboardArrowRight } from "react-icons/md";
import CompleteStatusBar from "./CompleteStatusBar";
import UploadImage from "./UploadImage";
import Category from "./Category";
import ProductTitle from "./ProductTitle";
import Brand from "./Brand";
import Condition from "./Condition";
import { useEffect, useMemo, useRef, useState } from "react";
import Price from "./Price";
import DealingMethod from "./DealingMethod";
import * as Yup from "yup";
import { useFormik } from "formik";
import { slugify } from "@/lib/helpers/slugify";
import "./Upload.css";
import { uploadFile } from "@/lib/helpers/uploadFile";
import { useCreateListingMutation } from "@/apollograph/generated";
import PreviewImage from "../uploadForm/PreviewImage";
import PreviewProduct from "./PreviewProduct";
import { useDispatch } from "react-redux";
import { setModalOpen } from "@/app/redux/modalSlice";
import toast from "react-hot-toast";
import { BiLoaderCircle } from "react-icons/bi";

const formSchema = Yup.object({
  title: Yup.string().min(2).required("Title is required"),
  brandId: Yup.number().positive().notRequired(),
  categoryId: Yup.number().positive().notRequired(),
  description: Yup.string().min(5).required("Description is required"),
  // locationId: Yup.number().positive().required(),
  price: Yup.number().positive().integer().required("Min price needed"),
  condition: Yup.string().required("Item condition is required"),
  dealingMethod: Yup.string().required("Dealing Method is required"),
  deliveryCharge: Yup.number().notRequired(),
  meetupLocations: Yup.array(
    Yup.object({
      city: Yup.string().notRequired(),
      country: Yup.string().notRequired(),
      displayName: Yup.string().notRequired(),
      lat: Yup.string().notRequired(),
      locality: Yup.string().notRequired(),
      lon: Yup.string().notRequired(),
      placeId: Yup.string().notRequired(),
      postCode: Yup.string().notRequired(),
      state: Yup.string().notRequired(),
      stateDistrict: Yup.string().notRequired(),
    })
  ).notRequired(),
  images: Yup.array().of(
    Yup.mixed()
      .nullable()
      .test(
        "FILE_SIZE",
        "Too big!!",
        (file: any) => {
          console.log("File and type of file", file, typeof file);
          if (typeof file === "string") return true;
          return file ? file && file.size < 20 * 1024 * 1024 : true;
        } //20MB
      )
      .test("FILE_TYPE", "INVALID", (file: any) => {
        console.log("file", file, file.type);
        if (typeof file === "string") return true;
        return file
          ? file &&
              [
                "image/png",
                "image/jpeg",
                "image/jpg",
                "images/webp",
                "images/svg",
              ].includes(file.type)
          : true;
      })
  ),
  mediaUrls: Yup.array().of(Yup.string().required()).notRequired(),
});

const Uploads = ({ product }: { product: null | any }) => {
  const [stickyClass, setStickyClass] = useState("relative");
  const [progress, setProgress] = useState(0);
  const formRef = useRef<any>(null);

  const initialValues = {
    title: product ? product.title : "",
    description: product ? product.description : "",
    images: product ? product.images : [],
    condition: product ? product.condition : "used",
    slug: product ? product.slug : "",
    // parentCategoryId: product?.parentCategory?.id,
    brandId: product ? product.brand.id : null,
    categoryId: product ? product.category.id : null,
    // locationId: product ? product.location.id : null,
    price: product ? product.price : null,
    quantity: product ? product.quantity : 1,
    dealingMethod: product ? product.dealingMethod : "meetup",
    // deliveryCharge: product ? product.deliveryCharge : 0,
    meetupLocations: product ? product.meetupLocations : [],
    mediaUrls: product ? product.media : [],
  };

  const editableFields = [
    "title",
    "description",
    "images",
    "condition",
    "brandId",
    "categoryId",
    "price",
    "dealingMethod",
    "meetupLocations",
  ];

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
  const [uploading, setUploading] = useState(false);
  const [uploadDone, setUploadDone] = useState(false);
  const [uploadError, setUploadError] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [previewBtn, setPreviewBtn] = useState<any>(null);
  const [
    createListing,
    { error: createError, loading: createLoading, data: createData },
  ] = useCreateListingMutation();
  const [formUploading, setFormUploading] = useState(false);

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
      setFormUploading(true);
      console.log("submitting the  form with values");
      try {
        for (let i = 0; i < values.images.length; i++) {
          const url = await uploadFile(
            values.images[i],
            setUploadDone,
            setUploading,
            setUploadError,
            setUploadProgress
          );

          // console.log(`Image heloo ${i + 1} url: ${url}`);
          // @ts-ignore:next-line
          values.mediaUrls.push(url);
        }
      } catch (error) {
        console.log(error);
      }
      let { images, ...listingData } = values;
      listingData = {
        ...listingData,
        mediaUrls: values.mediaUrls,
      };

      createListing({
        variables: {
          listingData: listingData,
        },
        onCompleted: () => {
          setFormUploading(false);
          toast.success("Product created successfully");
          action.resetForm();
          dispatch(
            setModalOpen({
              title: "this is a modal",
              body: "product-create-success",
            })
          );
          console.log("Success in creating product");
        }, 
        onError: () => {
          setFormUploading(false);
          console.log("Failed to create listing", createError);
          toast.error("Failed to Create Category, Please Try again.");
        }
      });
      // setUploadProgress(null);

    },
  });
  console.log(errors);
  useEffect(() => {
    const completedFields = Object.entries(values).filter(([key, value]) => {
      if (!editableFields.includes(key)) return false;
      // console.log("value", value.isArray)

      if (Array.isArray(value) && value.length === 0) return false;

      if (!!value) return true;

      return false;
    }).length;
    const totalFields = editableFields.length;
    // console.log("total Fields", totalFields)
    const newProgress = Math.round((completedFields / totalFields) * 100);

    setProgress(newProgress);
  }, [values]);

  const handleTitleChange = (event: any) => {
    const inputValue = event.currentTarget.value;
    // setFieldValue("slug", slugify(inputValue));
  };

  const handlePostButtonClick = () => {
    handleSubmit();
  };
  const dispatch = useDispatch();
  return (
    <section className="space-y-5">
      <div className={` ${previewBtn === "preview" && "border-b pb-5"}`}>
        <div
          className={`flex items-center  gap-1 custom-container ${
            previewBtn === "preview" ? "justify-between" : "justify-start"
          }`}
        >
        <div className="flex items-center space-x-1  text-sm   font-medium text-primaryColor">
            <h6>Home</h6>
            <MdKeyboardArrowRight />
            <h6 className="">List product</h6>
            {previewBtn === "preview" && (
              <>
                <MdKeyboardArrowRight />
                <h6 className="text-activeColor ">List product</h6>
              </>
            )}
          </div>

          {previewBtn === "preview" && (
            <div className="flex items-center gap-4">
              <button
                onClick={() => setPreviewBtn(null)}
                className="py-2 w-24 rounded-md bg-secondColor text-white text-sm hover:shadow-lg"
              >
                Edit
              </button>
              <button
                type="button"
                // onClick={handlePostButtonClick}
                onClick={() =>
                  dispatch(
                    setModalOpen({
                      title: "this is a modal",
                      body: "product-create-success",
                    })
                  )
                }
                className="a py-2 w-24 rounded-md bg-activeColor text-white text-sm hover:shadow-lg"
              >
                Confirm
              </button>
            </div>
          )}
        </div>

        {previewBtn !== "preview" && (
          <div
            className={`xl:space-y-5 lg:space-y-4 space-y-3  border-b bg-white transition ease-in-out delay-150 py-5  
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
              </div>

              <div className="flex-1 flex items-center justify-end gap-4 ">
                <button className="py-2 w-24 rounded-md bg-secondColor text-white text-sm hover:shadow-lg">
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handlePostButtonClick}
                  className="a py-2 w-24 rounded-md bg-activeColor text-white text-sm hover:shadow-lg flex justify-center"
                >
                  {createLoading || formUploading ? (
                    <BiLoaderCircle className=" text-xl animate-spin" />
                  ) : (
                    "Post"
                  )}
                </button>
              </div>
            </div>

            <div className="flex md:flex-row flex-col md:items-center justify-between gap-2 custom-container">
              <div className=" md:w-[50%] w-full">
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

              <button
                onClick={() => setPreviewBtn("preview")}
                className="py-2 w-24 border border-secondColor rounded-md bg- text-secondColor  text-sm hover:shadow-lg"
              >
                Preview
              </button>
            </div>
          </div>
        )}
      </div>

      <div className=" custom-container">
        {previewBtn === "preview" ? (
          <PreviewProduct values={values} />
        ) : (
          <form
            className="md:space-y-5 space-y-3"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <UploadImage setFieldValue={setFieldValue} values={values} />
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
                values.price && !errors.price
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
        )}
      </div>
    </section>
  );
};

export default Uploads;
