"use client";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useEffect, useRef, useState  } from "react";
import * as Yup from "yup";
import { ErrorMessage, useFormik } from "formik";
import "./Upload.css";
import { useCreateListingMutation, useUpdateListingMutation } from "@/apollograph/generated";
import { useDispatch } from "react-redux";
import { setModalOpen } from "@/app/redux/modalSlice";
import toast from "react-hot-toast";
import { BiLoaderCircle } from "react-icons/bi";
import dynamic from "next/dynamic";
import { Listing } from "@/gql/graphql";
import Brand from "./Brand";
import Category from "./Category";
import CompleteStatusBar from "./CompleteStatusBar";
import Condition from "./Condition";
import DealingMethod from "./DealingMethod";
import PreviewProduct from "./PreviewProduct";
import Price from "./Price";
import ProductTitle from "./ProductTitle";
import UploadImage from "./UploadImage";
import { useSession } from "next-auth/react";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import { client } from "@/lib/graphql";
import { useApolloClient } from "@apollo/client";

// const DynamicCompleteStatusBar = dynamic(()=> import("./CompleteStatusBar"), {ssr: false});
// const DynamicUploadImage = dynamic(()=> import("./UploadImage"), {ssr: false});
// const DynamicCategory = dynamic(()=> import("./Category"), {ssr: false});
// const DynamicProductTitle = dynamic(()=> import("./ProductTitle"), {ssr: false});
// const DynamicBrand = dynamic(()=> import("./Brand"), {ssr: false});
// const DynamicCondition = dynamic(()=> import("./Condition"), {ssr: false});
// const DynamicPrice = dynamic(()=> import("./Price"), {ssr: false});
// const DynamicDealingMethod = dynamic(()=> import("./DealingMethod"), {ssr: false});
// const DynamicPreviewProduct = dynamic(()=> import("./PreviewProduct"), {ssr: false});


const formSchema = Yup.object({
  title: Yup.string().min(2).required("Title is required"),
  brandId: Yup.number().positive().notRequired(),
  categoryId: Yup.number().positive().notRequired(),
  description: Yup.string().min(5, "Description must be at least 5 characters"),
  // locationId: Yup.number().positive().required(),
  price: Yup.number().integer().required("Min price needed").test("PRICE_TEST", "Price can't be negative", (price) => price >= 0),
  condition: Yup.string().required("Item condition is required"),
  dealingMethod: Yup.string().required("Dealing Method is required"),
  courierDetails: Yup.string().notRequired(),
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
  images: Yup.array()
    .of(
      Yup.mixed()
        .nullable()
        // .test(
        //   "FILE_SIZE",
        //   "Too big!!",
        //   (file: any) => {
        //     console.log("File and type of file", file, typeof file);
        //     if (typeof file === "string") return true;
        //     return file ? file && file.size < 20 * 1024 * 1024 : true;
        //   } //20MB
        // )
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
                  "images/svg+xml",
                ].includes(file.type)
            : true;
        })
    )
    .min(1, "Please upload at least one image to proceed"),
  mediaUrls: Yup.array().of(Yup.string().required()).required("MediaURls not loaded, If you uploaded an image, please remove and retry that again."),
});

const Uploads = ({ product }: { product: null | any }) => {
  const [stickyClass, setStickyClass] = useState("relative");
  const [progress, setProgress] = useState(0);
  const formRef = useRef<any>(null);
  const router = useRouter()
  const dispatch = useDispatch();
  const {data:session, status} = useSession();
  const client = useApolloClient();

  const titleStatus = useRef("")

  const [uploading, setUploading] = useState(false);
  const [uploadDone, setUploadDone] = useState(false);
  const [uploadError, setUploadError] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [previewBtn, setPreviewBtn] = useState<any>(null);
  const [imageCount, setImageCount] = useState<any>([]);
  const isUpdate = !!product; //mode of the component
  const [createListing, { error: createError, loading: createLoading, data: createData }] = useCreateListingMutation();
  const [updateListing, {error:updateError, loading:updateLoading, data:updateData}] = useUpdateListingMutation();

  const [formUploading, setFormUploading] = useState(false);
  console.log("session", session?.user)
  const initialValues = {
    title: product ? product.title : "",
    description: product ? product.description : "",
    images: [],
    condition: product ? product.condition : "",
    // slug: product ? product.slug : "",
    // parentCategoryId: product?.parentCategory?.id,
    brandId: product ? product?.brand?.id : null,
    categoryId: product ? product?.category?.id : null,
    // locationId: product ? product.location.id : null,
    price: product ? product?.price : null,
    quantity: product ? product?.quantity : 1,
    dealingMethod: product ? product?.dealingMethod : "",
    courierDetails: product ? product.courierDetails : "",
    meetupLocations: product ? product?.meetupLocations.map(({__typename, ...rest}:any) => rest ) : [],
    mediaUrls: product ? product.media : [],
  };

  const editableFields = [
    "title",
    "description",
    "images",
    "condition",
    // "brandId",
    "categoryId",
    "price",
    "dealingMethod"
  ];

  useEffect(() => {
    if (status === "authenticated") {
      //  console.log("resetting apollo store")
        client.resetStore(); // Clear cache and reinitialize
    }
  }, [status, client]);

  //to always keep post button up.
  useEffect(() => {
    console.log("auth", status, session)
    if (typeof window === "undefined") {
    } else {
      const handleStickyPanel = () => {
        if (typeof window === "undefined") {
        } else {
          // alert(`${document.body.scrollTop} ${window.scrollY}`)
          let windowHeight = !!document.body.scrollTop
            ? document.body.scrollTop
            : window.scrollY;
          windowHeight > 300
            ? setStickyClass(
                "fixed top-0 left-0 z-[10000] w-full right-0 shadow-lg"
              )
            : setStickyClass("relative");
        }
      };
      // Attach the scroll event listener
      window.addEventListener("scroll", handleStickyPanel, { passive: true });

      // Attach the touchmove event listener for iOS
      window.addEventListener("touchmove", handleStickyPanel, {
        passive: true,
      });

      return () => {
        window.removeEventListener("scroll", handleStickyPanel);
        window.removeEventListener("touchmove", handleStickyPanel);
      };
    }
  }, []);
  // end UseEffect

  console.log("initialValues", initialValues)
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
    // validateOnChange: false,
    // validateOnBlur: false,

    onSubmit: async (values, action) => {
      setFormUploading(true);
      console.log("submitting the form with values", values);
      let { images, ...listingData } = values;
      listingData = {
        ...listingData,
        mediaUrls: values.mediaUrls,
      };
      if (!product){
        //create mode
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
  
          },
          onError: () => {
            setFormUploading(false);
            console.log("Failed to create listing", createError);
            toast.error("Failed to create listing");
          },
        });
      }else{
        updateListing({
          variables: {
            listingId: product.id,
            listingData: {
              title: listingData.title,
              price: listingData.price,
              description: listingData.description,
              categoryId: listingData.categoryId,
              brandId: listingData.brandId,
              mediaUrls: listingData.mediaUrls,
              meetupLocations: listingData.meetupLocations,
              condition : listingData.condition,
              courierDetails: listingData.courierDetails
              //@todo here
            }
          },
          onCompleted: () => {
            setFormUploading(false);
            toast.success("Product updated successfully");
            action.resetForm();
            titleStatus.current = "Post uploaded successfully"
            dispatch(
              setModalOpen({
                title: "this is a modal",
                body: "product-create-success",
              })
            );
  
          },
          onError: () => {
            setFormUploading(false);
            titleStatus.current = "Failed to update listing"
            toast.error("Failed to update listing");
          },
        })
      }
      
      // setUploadProgress(null);
    },
  });

  async function getFileFromCloudinaryUrl(cloudinaryUrl:string, fileName:string) {
    try {
      // Fetch the file from Cloudinary URL
      const response = await fetch(cloudinaryUrl.replace("http://", "https://"));
      const blob = await response.blob();
      
      // Create a File object from the blob
      // You may need to adjust the file type based on your needs
      const file = new File([blob], fileName, { 
        type: blob.type 
      });
      
      return {
        name: fileName,
        url: cloudinaryUrl,
        file: file
      };
    } catch (error) {
      console.error('Error converting Cloudinary URL to File:', error);
      throw error;
    }
  }
  

  useEffect( ()=> {
    const initializeFiles = async () => {
      const filePromises = product.media.map(({ url }: {url: string}) => 
         getFileFromCloudinaryUrl(url, url.split("/").pop()!)
      );
      const loadedFiles = await Promise.all(filePromises);
      setImageCount(loadedFiles);
    };
    
    if (product?.media){
      console.log(product.mediaUrls)
      initializeFiles();

    }
  }, [product])

  //progress bar effect
  useEffect(() => {
    const completedFields = Object.entries(values).filter(([key, value]) => {
      if (!editableFields.includes(key)) return false;
      // console.log("value", value.isArray)

      if (Array.isArray(value) && value.length === 0) return false;
      
      if (!!value ) return true;

      return false;
    }).length;
    const totalFields = editableFields.length;
    // console.log("total Fields", totalFields)
    const newProgress = Math.round((completedFields / totalFields) * 100);

    setProgress(newProgress);
  }, [values]);
  // end progress bar
  
  const handleTitleChange = (event: any) => {
    const inputValue = event.currentTarget.value;
    // setFieldValue("slug", slugify(inputValue));
  };

  const handlePostButtonClick = () => {
    console.log("I am clicked")
    if (errors) {
      console.log("errors", errors)
      titleStatus.current = "Please fill up all the necessary fields."
      setTimeout(() => {titleStatus.current = ""}, 30 * 1000)
    }
    handleSubmit();
  };
  console.log("values", values)
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
            <h6 className="">{isUpdate ? "Update Product" : "List product"}</h6>
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
                  {isUpdate ? "Update Your Product Details" : "List your Item"}
                </h5>

                <p className="text-base text-secondColor  font-medium">
                  {isUpdate ? "Updating your product will make it pending approval again. This helps us ensure all listings meet our quality standards."
                   : "Listing an item is unbelievably easy in Swojon."}
                </p>
              </div>

              <div className="flex-1 flex items-center justify-end gap-4 ">
                <button onClick={() => router.back()} className="py-2 w-24 rounded-md bg-secondColor text-white text-sm hover:shadow-lg">
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
                {}
                {/* {uploading && (
                  <h6 className="text-base text-secondColor font-medium block">
                    Image Uploading...
                  </h6>
                  )} */}
                  <h6 className="text-base text-secondColor font-medium block">
                    { progress === 0 ? "Let's Complete" : `${progress}% complete`  }
                    </h6>
              
                <CompleteStatusBar bar={progress} />
              </div>

              {/* <button
                onClick={() => setPreviewBtn("preview")}
                className="py-2 w-24 border border-secondColor rounded-md bg- text-secondColor  text-sm hover:shadow-lg"
              >
                Preview
              </button> */}
            </div>
          </div>
        )}
      </div>

      <div className=" custom-container">
        
          <form
            className="md:space-y-5 space-y-3"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <UploadImage
              setFieldValue={setFieldValue}
              values={values}
              errors={errors}
              touched={touched}
              handleBlur={handleBlur}
              uploadProgress={uploadProgress}
              setUploadDone={setUploadDone}
              setUploading={setUploading}
              setUploadError={setUploadError}
              setUploadProgress={setUploadProgress}
              imageCount={imageCount}
              setImageCount={setImageCount}
            />
            <Category
              setFieldValue={setFieldValue}
              values={values}
              errors={errors}
              touched={touched}
              handleBlur={handleBlur}
              initialCategory={product?.category ?? null}
            />
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
                errors={errors}
                touched={touched}
                handleBlur={handleBlur}
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
              <Condition
                setFieldValue={setFieldValue}
                values={values}
                errors={errors}
                touched={touched}
                handleBlur={handleBlur}
              />
            </div>

            <div
              className={`${
                values.title && !errors.title
                  ? "opacity-100 "
                  : "opacity-50 pointer-events-none"
              }`}
            >
              <Price
                setFieldValue={setFieldValue}
                values={values}
                handleChange={handleChange}
                errors={errors}
                touched={touched}
                handleBlur={handleBlur}
              />
            </div>

            <div
              className={`${
                values.price >= 0 && !errors.price
                  ? "opacity-100 "
                  : "opacity-50 pointer-events-none"
              }`}
            >
              <Brand
                setFieldValue={setFieldValue}
                values={values}
                handleChange={handleChange}
                errors={errors}
                touched={touched}
                initialBrand={product?.brand ?? null}
                handleBlur={handleBlur}
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
                errors={errors}
                touched={touched}
                handleBlur={handleBlur}
              />
            </div>
          </form>
        
      </div>
    </section>
  );
};

export default Uploads;
