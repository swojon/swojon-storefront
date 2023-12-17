import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { setCookie } from "cookies-next";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useSignupMutation } from "@/apollograph/generated";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { BsDot } from "react-icons/bs";

const formSchema = Yup.object({
  username: Yup.string().min(5).required("Username is required"),
  password: Yup.string().min(5).max(30).required("Password is required"),
  email: Yup.string().email().required("Email is required"),
});

const EmailSignUp = () => {
  useEffect(() => {
    setCookie("host", window.location.origin);
  }, []);
  const [
    signup,
    { data: signupData, loading: signupLoading, error: signupError },
  ] = useSignupMutation();
  const initialValues = {
    username: "",
    password: "",
    email: "",
  };

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
      console.log("Submitting the form with values");
      const res = signup({
        variables: {
          userData: {
            email: values.email,
            password: values.password,
            username: values.username,
          },
        },
      });
      if (signupError) {
        toast.error("we have trouble signing you up. Please try again");
      }
      if (signupData) {
        action.resetForm();
        // console.log("success")
        toast.success(
          "Sign Up successfull. Please login to your account to continue"
        );
        window.location.replace("/signin");
      }
    },
  });
  return (
   
      <form className="lg:space-y-5 md:space-y-3 space-y-2 mx-auto pt-5 w-full">
        <div>
          <label
            htmlFor="name"
            className="block lg:text-base md:text-sm text-xs font-medium text-primaryColor font-lexed"
          >
            Username
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleChange}
              className="block w-full rounded-md border border-gray-200 pr-10 text-primaryColor placeholder-[#717171] focus:border-activeColor focus:outline-none focus:ring-activeColor  lg:p-2.5 md:p-2 py-1 px-2 sm:text-sm text-xs"
              placeholder="Enter a username"
            />
          </div>
          {errors.username && touched.username ? (
            <p className="text-red-400	pt-1  text-xs">{errors.username}</p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block lg:text-base md:text-sm text-xs font-medium text-primaryColor font-lexed"
          >
            Email
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              className="block w-full rounded-md border border-gray-200 pr-10 text-primaryColor placeholder-[#717171] focus:border-activeColor focus:outline-none focus:ring-activeColor lg:p-2.5 md:p-2 py-1 px-2 sm:text-sm text-xs"
              placeholder="Enter your email"
            />
          </div>
          {errors.email && touched.email ? (
            <p className="text-red-400	pt-1  text-xs">{errors.email}</p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="password"
            className="block lg:text-base md:text-sm text-xs font-medium text-primaryColor font-lexed"
          >
            Password
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              className="block w-full rounded-md border border-gray-200 pr-10 text-primaryColor placeholder-[#717171] focus:border-activeColor focus:outline-none focus:ring-activeColor lg:p-2.5 md:p-2 py-1 px-2 sm:text-sm text-xs"
              placeholder="Create a password"
            />
          </div>
          {errors.password && touched.password ? (
            <p className="text-red-400	pt-1  text-xs">{errors.password}</p>
          ) : null}
        </div>
        {signupError ? (
          <p className="text-red-400	pt-1  text-xs">{signupError.message}</p>
        ) : null}
        <button
          type="submit"
          className=" md:py-2 py-1.5 border border-activeColor bg-activeColor lg:text-sm md:text-xs text-[12px] text-white w-full rounded font-lexed"
        >
          Sign up
        </button>
      </form>


  );
};

export default EmailSignUp;
