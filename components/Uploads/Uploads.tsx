import { MdKeyboardArrowRight } from "react-icons/md";
import CompleteStatusBar from "./CompleteStatusBar";
import UploadImage from "./UploadImage";
import Category from "./Category";
import ProductTitle from "./ProductTitle";
import Brand from "./Brand";
import Condition from "./Condition";
import { useEffect, useState } from "react";
import Price from "./Price";
import DealingMethod from "./DealingMethod";
import * as Yup from "yup";

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
  imageUrls: Yup.array().of(Yup.string().required()).notRequired(),
});

const Uploads = () => {
  const [stickyClass, setStickyClass] = useState("relative");

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
  return (
    <section className="space-y-5">
      <div className={`  `}>
        <div className="flex items-center space-x-1  text-sm text-secondColor custom-container">
          <h6>Home</h6>
          <MdKeyboardArrowRight />
          <h6 className="text-primaryColor">List product</h6>
        </div>

        <div
          className={` border-b bg-white transition ease-in-out delay-150 py-5  
          
          `}
        >
          <div className="flex lg:flex-row flex-col items-start gap-2 custom-container">
            <div className="flex-1 sm:w-[80%] w-[100%] xl:space-y-5 lg:space-y-4 space-y-3 ">
              <h5 className="text-2xl text-primaryColor font-lexed font-bold">
                List your Item
              </h5>

              <p className="text-base text-secondColor  font-medium">
                Listing an item is unbelievably easy in Swojon.
              </p>

              <div className=" w-full">
                <span className="text-base text-secondColor font-medium">
                  Let’s complete{" "}
                </span>
                <CompleteStatusBar bar={"35%"} />
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
          <Category />
          <ProductTitle />
          <Condition />
          <Price />
          <Brand />
          <DealingMethod />
        </form>
      </div>
    </section>
  );
};

export default Uploads;
