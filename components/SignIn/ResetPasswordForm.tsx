import { useCheckPasswordResetTokenQuery, useResetPasswordMutation } from '@/apollograph/generated'
import { useFormik } from 'formik';
import Link from 'next/link';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { BiLoaderCircle } from 'react-icons/bi';
import * as Yup from "yup";

const initialValues = {
    confirmPassword: "",
    password: ""
  };

const formSchema = Yup.object({
password: Yup.string()
    .min(8, "Password must be at least 8 characters long.")
    .matches(/[0-9]/, "Password must contain at least one number.")
    .matches(
    /[!@#$%^&*(),.?":{}|<>]/,
    "Password must contain at least one symbol."
    )
    .notOneOf(
    [Yup.ref("username"), Yup.ref("email")],
    "Password can't contain your name or email address."
    )
    .required("Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    });

function ResetPasswordForm({token}: {token:string}) {
      const [formUploading, setFormUploading] = useState(false);

    const {data, loading, error} = useCheckPasswordResetTokenQuery({
        variables: {
            token: token
        }
    })
    const [
        resetPassword,
        { data: resetData, loading: resetLoading, error: resetError },
      ] = useResetPasswordMutation();
    
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: formSchema,
    onSubmit: async (values, action) => {
      setFormUploading(true);
      console.log("Submitting the form with values");
      const res = resetPassword({
        variables: {
          resetData: {
            token: token,
            password: values.password
          },
        },
        onCompleted: () => {
          action.resetForm();
          // console.log("success")
          setFormUploading(false);
          toast.success(
            "Password reset successful"
          );
          window.location.replace("/login");
        },
        onError: () => {
             setFormUploading(false);
            toast.error("We failed to reset the password for you. Please try requesting a new token");
        },
      });
    },
  });

    return (
    <>
    {loading && <h6 className='text-base text-primaryColor text-center'>
        Checking if the token is still valid
        </h6>}
    {!loading && error && <h6 className='text-base text-primaryColor text-center'>
        It looks like the token is not valid anymore.
    </h6> }
    {!loading && data && <>
        <form
      onSubmit={handleSubmit}
      className="lg:space-y-5 md:space-y-3 space-y-2 mx-auto pt-5 w-full"
    >
     

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
            onBlur={handleBlur}
            className="block w-full rounded-md border border-gray-200 pr-10 text-primaryColor placeholder-[#717171] focus:border-activeColor focus:outline-none focus:ring-activeColor py-2.5 pl-2 md:text-lg text-base"
            placeholder="Create a password"
          />
        </div>
       
        {errors.password || touched.password ? (
          <div className={`pt-1 space-y-1 text-xs`}>
            <p
              className={
                values.password && values.password.length >= 8
                  ? "text-green-500"
                  : "text-gray-700"
              }
            >
              Password strength:{" "}
              {values.password && values.password.length >= 8
                ? "strong"
                : "weak"}
            </p>
            <p
              className={
                values.password && values.password.length >= 8
                  ? "text-green-500"
                  : "text-gray-700"
              }
            >
              At least 8 characters
            </p>
            {/* <p
              className={
                values.password &&
                !values.password.includes(values.username) &&
                !values.password.includes(values.email)
                  ? "text-green-500"
                  : "text-gray-700"
              }
            >
              Can't contain your name or email address
            </p> */}
            <p
              className={
                values.password && /\d/.test(values.password)
                  ? "text-green-500"
                  : "text-gray-700"
              }
            >
              Contains a number or symbol
            </p>
            <p
              className={
                values.password &&
                /[!@#$%^&*(),.?":{}|<>]/.test(values.password)
                  ? "text-green-500"
                  : "text-gray-700"
              }
            >
              Contains a symbol
            </p>
          </div>
        ) : null}

      </div>
      <div>
        <label
          htmlFor="confirmPassword"
          className="block lg:text-base md:text-sm text-xs font-medium text-primaryColor font-lexed"
        >
          Confirm Password
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            onChange={handleChange}
            onBlur={handleBlur}
            className="block w-full rounded-md border border-gray-200 pr-10 text-primaryColor placeholder-[#717171] focus:border-activeColor focus:outline-none focus:ring-activeColor  py-2.5 pl-2 md:text-lg text-base px-2 "
            placeholder="Reenter your password"
          />
        </div>
        {errors.confirmPassword && touched.confirmPassword ? (
          <p className="text-red-400	pt-1  text-xs">{errors.confirmPassword}</p>
        ) : null}
      </div>
      
      <button
        type="submit"
        className=" md:py-2 py-1.5 border border-activeColor bg-activeColor lg:text-lg text-base text-white w-full rounded font-lexed flex justify-center"
      >
        {formUploading ? (
          <BiLoaderCircle className=" text-xl animate-spin" />
        ) : (
          "Reset Password"
        )}
      </button>
    </form>
    </>}
    <div className='flex justify-center'>
    <Link href="/login">
        <button className="pt-8 text-lg  text-activeColor text-center rounded-md font-bold  bg-white  cursor-pointer relative mx-auto">
            Back to Log in
        </button>
        </Link>

    </div>
    </>
  )
}

export default ResetPasswordForm