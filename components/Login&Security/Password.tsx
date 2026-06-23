import { useUpdateUserMutation } from "@/apollograph/generated";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import { skip } from "node:test";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { BiLoaderCircle } from "react-icons/bi";
import * as Yup from "yup";

const formSchema = Yup.object({
  oldPassword: Yup.string().required(),
  newPassword: Yup.string()
  .min(8, "Password must be at least 8 characters long.")
  .matches(/[0-9]/, "Password must contain at least one number.")
  .matches(
    /[!@#$%^&*(),.?":{}|<>]/,
    "Password must contain at least one symbol."
  )
  .notOneOf(
    [Yup.ref("oldPassword"),],
    "new password can't contain previous password."
  )
  .required("New Password is required"),
  confirmNewPassword: Yup.string().equals([Yup.ref("newPassword")], "Password Must match").required()
})


const initialValues = {
  oldPassword : "",
  newPassword: "",
  confirmNewPassword: ""
}

const Password = ({ setEditBtn }: { setEditBtn: any }) => {
  const {data:session} = useSession();
  const [formUploading, setFormUploading] = useState(false);
  const [
    updatePassword,
    { data: updateData, loading: updateLoading, error: updateError },
  ] = useUpdateUserMutation();
  
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
      const res = updatePassword({
        variables: {
          userData: {
            oldPassword: values.oldPassword,
            password: values.newPassword
          },
          userId: session?.user?.id!
        },
        onCompleted: () => {
          action.resetForm();
          // console.log("success")
          setFormUploading(false);
          toast.success(
            "Password successfully updated."
          );
        },
        onError: () => {
          setFormUploading(false);
          if (updateError) {
            toast.error(updateError.message);
          }
        },
      });
    },
  });
  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label
            htmlFor="oldPassword"
            className="block sm:text-base text-sm font-medium text-secondColor font-lexed capitalize"
          >
            Current password
          </label>
          <div className="my-1">
            <input
              type="password"
              name="oldPassword"
              id="oldPassword"
              onChange={handleChange}
              placeholder=""
              className="block w-full min-w-0 flex-1 py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-activeColor focus:ring-activeColor sm:text-sm bg-gray-50"
            />
          </div>
          {errors.oldPassword && touched.oldPassword ? (
          <p className="text-red-400	pt-1  text-xs">{errors.oldPassword}</p>
        ) : null}
        </div>

        <div>
          <label
            htmlFor="newPassword"
            className="block sm:text-base text-sm font-medium text-secondColor font-lexed capitalize"
          >
            New password
          </label>
          <div className="mt-1">
            <input
              type="password"
              name="newPassword"
              id="newPassword"
              onChange={handleChange}
              className="block w-full min-w-0 flex-1 py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-activeColor focus:ring-activeColor sm:text-sm bg-gray-50"
            />
          </div>
          {errors.newPassword || touched.newPassword && (
          <div className={`pt-1 space-y-1 text-xs`}>
            <p
              className={
                values.newPassword && values.newPassword.length >= 8
                  ? "text-green-500"
                  : "text-gray-700"
              }
            >
              password strength:{" "}
              {values.newPassword && values.newPassword.length >= 8
                ? "strong"
                : "weak"}
            </p>
            <p
              className={
                values.newPassword && values.newPassword.length >= 8
                  ? "text-green-500"
                  : "text-gray-700"
              }
            >
              At least 8 characters
            </p>
            {/* <p
              className={
                values.newPassword &&
                !values.newPassword.includes(values.username) &&
                !values.newPassword.includes(values.email)
                  ? "text-green-500"
                  : "text-gray-700"
              }
            >
              Can't contain your name or email address
            </p> */}
            <p
              className={
                values.newPassword && /\d/.test(values.newPassword)
                  ? "text-green-500"
                  : "text-gray-700"
              }
            >
              Contains a number or symbol
            </p>
            <p
              className={
                values.newPassword &&
                /[!@#$%^&*(),.?":{}|<>]/.test(values.newPassword)
                  ? "text-green-500"
                  : "text-gray-700"
              }
            >
              Contains a symbol
            </p>
          </div>
        ) }
        </div>

        <div>
          <label
            htmlFor="confirmNewPassword"
            className="block sm:text-base text-sm font-medium text-secondColor font-lexed capitalize"
          >
            Confirm password
          </label>
          <div className="mt-1">
            <input
              type="password"
              name="confirmNewPassword"
              id="confirmNewPassword"
              onChange={handleChange}
              className="block w-full min-w-0 flex-1 py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-activeColor focus:ring-activeColor sm:text-sm bg-gray-50"
            />
          </div>
          {errors.confirmNewPassword && touched.confirmNewPassword ? (
          <p className="text-red-400	pt-1  text-xs">{errors.confirmNewPassword}</p>
        ) : null}
        </div>

        {updateError ? (
        <p className="text-red-400	pt-1  text-xs">{updateError.message}</p>
      ) : null}

        <div className="flex gap-4 items-center justify-end py-3 ">
          <button
            onClick={() => setEditBtn("")}
            className="text-sm text-secondColor"
          >
            Cancel
          </button>
          <button
        type="submit"
        className=" py-2 px-4 rounded-md border border-activeColor text-sm text-white bg-activeColor"
      >
        {formUploading ? (
          <BiLoaderCircle className=" text-xl animate-spin" />
        ) : (
          "Update Password"
        )}
      </button>
          
        </div>
      </form>
    </>
  );
};

export default Password;
