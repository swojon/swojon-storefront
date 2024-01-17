"use client";
import React, { useEffect, useState } from "react";
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
import { AiOutlineBackward } from "react-icons/ai";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const formSchema = Yup.object({
  username: Yup.string().min(5).required("Username is required"),
  password: Yup.string().min(5).max(30).required("Password is required"),
  email: Yup.string().email().required("Email is required"),
});

const SignUpPage = () => {
  const [isEmailPreferred, setIsEmailPreferred] = useState(false);
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
        window.location.replace("/login");
      }
    },
  });

  return (
    <div className=" bg-white lg:w-[50%] md:w-[75%] w-full max-h-screen overflow-auto">
      <div className="lg:px-24 md:px-16 flex flex-col items-center space-y-2">
        <Link href="/" className="">
          <Image
            src="/assets/swojon.svg"
            width={100}
            height={500}
            alt="logo"
            className="lg:w-[120px] md:w-20 w-16  "
          />
        </Link>

        <div className="space-y-1 py-3">
          <h2 className=" lg:text-2xl text-lg  font-bold text-primaryColor font-lexed text-center">
            Sign Up
          </h2>

          <p className="text-sm  text-secondColor pt-1">
            Welcome back! Please enter your details.
          </p>
        </div>
        {!isEmailPreferred && (
          <div className="space-y-2.5 w-full">
            <div className="flex items-center justify-center py-2 px-5 border gap-4 rounded-md w-full hover:border-activeColor cursor-pointer relative">
              <span className="absolute left-4">
                <FcGoogle className=" text-lg" />
              </span>
              <span className="lg:text-lg text-base text-secondColor font-bold">
                Continue with Google
              </span>
            </div>
            <div
              onClick={() => setIsEmailPreferred(true)}
              className="flex items-center justify-center py-2 px-5 border gap-4 rounded-md w-full hover:border-activeColor cursor-pointer relative"
            >
              <span className="absolute left-4">
                <FaRegEnvelope className=" text-activeColor text-lg" />
              </span>
              <span className="lg:text-lg text-base text-secondColor font-bold">
                Continue with Email
              </span>
            </div>

            {/* 
          <div className="flex items-center  py-2 px-5 border gap-4 rounded-md w-full hover:border-activeColor cursor-pointer">
            <span className="w-[30%] ">
              <FaFacebookSquare className="float-right  text-blue-600 text-lg" />
            </span>

            <span className="text-sm text-secondColor">
              Continue with Facebook
            </span>
          </div> */}

            <h6 className="text-center text-secondColor lg:text-sm md:text-xs text-[13px] pt-5">
              {" "}
              Already have an account?{" "}
              <Link href="/login">
                <span className="text-activeColor">Log In!</span>
              </Link>
            </h6>
          </div>
        )}
        {isEmailPreferred && <EmailSignUp />}

        {isEmailPreferred && (
          <button
            onClick={() => setIsEmailPreferred(false)}
            className="text-lg   text-secondColor text-center rounded-md font-lexed font-bold  bg-white flex justify-center cursor-pointer relative mx-auto"
          >
            Cancel{" "}
            <span className="absolute left-0 px-1 bottom-0.5 h-[0.5px] w-full bg-secondColor"></span>
          </button>
        )}

        {/* <div className="flex items-center gap-3 cursor-pointer pt-7">
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
        </div> */}
      </div>
    </div>
  );
};

export default SignUpPage;
