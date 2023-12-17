"use client";
import React, { useEffect } from "react";
import signin from "@/public/assets/signin.svg";
import Image from "next/image";
import Link from "next/link";
import { setCookie } from "cookies-next";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useSignupMutation } from "@/apollograph/generated";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare, FaRegEnvelope } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import EmailSignUp from "@/components/SignUp/EmailSignUp";

const formSchema = Yup.object({
  username: Yup.string().min(5).required("Username is required"),
  password: Yup.string().min(5).max(30).required("Password is required"),
  email: Yup.string().email().required("Email is required"),
});

const SignUpPage = () => {
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
    <div className=" bg-white lg:w-[50%] md:w-[75%] w-full ">
      <div className="lg:px-24 md:px-16 flex flex-col items-center space-y-6">
        <Link href="/" className="">
          <Image
            src="/assets/swojon.svg"
            width={100}
            height={500}
            alt="logo"
            className="lg:w-[90px] md:w-20 w-16  "
          />
        </Link>

        <div className="text-center space-y-1">
          <h2 className=" lg:text-2xl md:text-lg text-base text-primaryColor font-semibold font-lexed">
            Sign Up
          </h2>
          <p className=" md:text-sm text-[10px] text-secondColor pt-1">
            Welcome back! Please enter your details.
          </p>
        </div>

        <div className="space-y-2.5 w-full">
          <div className="flex items-center py-2 px-5 border gap-4 rounded-md w-full hover:border-activeColor cursor-pointer">
            <span className="w-[30%]">
              <FcGoogle className="float-right text-lg" />
            </span>
            <span className="text-sm text-secondColor">
              Continue with Google
            </span>
          </div>

          <div className="flex items-center  py-2 px-5 border gap-4 rounded-md w-full hover:border-activeColor cursor-pointer">
            <span className="w-[30%] ">
              <FaFacebookSquare className="float-right  text-blue-600 text-lg" />
            </span>

            <span className="text-sm text-secondColor">
              Continue with Facebook
            </span>
          </div>

          <div className="flex items-center  py-2 px-5 border gap-4 rounded-md w-full hover:border-activeColor cursor-pointer">
            <span className="w-[30%]">
              <FaRegEnvelope className="float-right text-activeColor text-lg" />
            </span>
            <span className="text-sm text-secondColor">
              Continue with Email
            </span>
          </div>

          <div className="flex items-center justify-between py-2 px-2  rounded-md w-full">
            <span className="lg:text-sm md:text-xs text-[10px] text-secondColor">
              Log in
            </span>

            <div className="flex items-center space-x-2 ">
              <div className="flex h-5 items-center">
                <input
                  id="comments"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  className="md:h-4 h-2.5 md:w-4 w-2.5 rounded border-gray-300 text-activeColor focus:ring-activeColor custom-checkedInput"
                />
              </div>
              <label
                htmlFor="comments"
                className="text-secondColor lg:text-sm md:text-xs text-[10px]"
              >
                Accept Terms & Conditions
              </label>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 cursor-pointer pt-7">
          <Link href="">
            <span className="text-xs capitalize text-activeColor">
              privacy policy
            </span>
          </Link>

          <BsDot className="text-secondColor" />

          <Link href="">
            <span className="text-xs capitalize text-activeColor">
              terms & condition
            </span>
          </Link>

          <BsDot className="text-secondColor" />

          <Link href="">
            <span className="text-xs capitalize text-activeColor">help</span>
          </Link>
        </div>
        {/* <EmailSignUp /> */}
      </div>
    </div>
  );
};

export default SignUpPage;
