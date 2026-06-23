"use client";
import { useResetRequestMutation } from "@/apollograph/generated";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { BiLoaderCircle } from "react-icons/bi";
import * as Yup from "yup";

const formSchema = Yup.object({
  email: Yup.string().email().required("Email is required"),
});

const ForgotPassword = () => {
  const router = useRouter()
  // const [passwordProcess, setPasswordProcess] = useState("enter");
  const initialValues = {
    email : ""
  }

  const [ resetPassword, {loading, error, data}] = useResetRequestMutation()

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: formSchema,
    onSubmit: async (values, action) => {
      // console.log("Submitting the form with values");
      const res = resetPassword({
        variables: {
          email: values.email,
        },
        onCompleted: () => {
          router.push("/forgot-password/sent")
        },
        onError: () => {
          toast.error("Looks Like there is no user associated with the provided email.")
          // action.resetForm()
          router.push("/forgot-password/sent")

        }
      });
    },
  });
  return (
    <div className=" bg-white lg:w-[50%] md:w-[75%] w-full">
      <div className="lg:px-24 md:px-16 flex flex-col items-center w-full">
        <Link href="/">
          <Image
            src="/assets/swojon.svg"
            width={100}
            height={500}
            alt="logo"
            className="lg:w-[120px] md:w-20 w-16  "
          />
        </Link>
         <div className="space-y-2 pt-4 w-full ">
            <h4 className="text-3xl font-bold text-primaryColor text-center">
              Enter your email to <br /> reset password
            </h4>
            <form onSubmit={handleSubmit} className="lg:space-y-4 md:space-y-3 space-y-2  pt-3 w-full">
              <div className="relative mt-1 rounded-md shadow-sm">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={values.email}
                  className="block w-full rounded-md border border-gray-200 pr-10 text-primaryColor placeholder-[#717171] focus:border-activeColor focus:outline-none focus:ring-activeColor  py-2.5 px-4 md:text-lg text-base "
                  placeholder="Enter your email"
                  onChange={handleChange}
                />
              </div>
              <button
                className={`py-2.5  border border-activeColor text-lg   text-white w-full rounded-md font-lexed font-bold flex justify-center ${
                  (values.email && !errors.email)
                    ? "bg-activeColor border border-activeColor cursor-pointer"
                    : "cursor-default bg-gray-200 border border-gray-200"
                }`}
                disabled={!values.email && !!errors.email}
              > 
                {loading ? 
                    < BiLoaderCircle className=" text-xl animate-spin" />
                  : "Reset Password" 
                }
              </button>
            </form>
            <Link href={"/login"}  className="text-lg   text-secondColor text-center rounded-md font-lexed font-bold  bg-white flex justify-center cursor-pointer relative mx-auto">
              Cancel
              {/* <span className="absolute left-0 px-1 bottom-0.5 h-[0.5px] w-full bg-secondColor"></span> */}
            </Link>
          </div>
        {/* <CheckCode /> */}
        {/* <VerifyCode /> */}
        {/* <SetNewPassword /> */}
      </div>
    </div>
  );
};

export default ForgotPassword;
