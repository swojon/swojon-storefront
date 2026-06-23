import { useUpdateProfileMutation } from "@/apollograph/generated";
import { useFormik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { BiLoaderCircle } from "react-icons/bi";
import * as Yup from "yup";

const formSchema = Yup.object({
  name: Yup.string().min(4).max(50).required("Name is required")
})

const EditUserName = ({profile }: {profile: any; }) => {
  const [editBtn, setEditBtn] = useState("");
  const initialValues = {
    name: profile?.name
    };
  const [ updateProfile, {loading:updateLoading, error, data} ] = useUpdateProfileMutation()
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
        updateProfile({
          variables: {
            profileData: {
              name: values.name
            },
            profileId: profile.id
          },
          onCompleted: () => {
            toast.success("Name updated successfully")
          },
          onError: (e) => {
            toast.error(e.message)
          }
        });
      } 
   
  });
  return (
    <>
  
    {editBtn === "" && (
      <span className="text-base text-primaryColor font-lexed font-medium block">
        Full name
      </span>
    )}

    {editBtn === "username" ? (
      <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="name"
            className="block md:text-base text-sm font-medium text-primaryColor font-lexed capitalize"
          >
            Update full name
          </label>
          <div className="mt-3">
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="name"
              id="name"
              value={values.name}
              placeholder=""
              className="block w-full min-w-0 flex-1 py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-activeColor focus:ring-activeColor sm:text-sm bg-gray-50"
            />
          </div>
        </div>

        <div className="flex gap-3 items-center justify-end py-3 ">
          <button
            onClick={() => setEditBtn("")}
            className="  hover:border-b text-sm text-secondColor"
          >
            Cancel
          </button>

          <button  className="py-1 px-4 rounded-md border border-activeColor text-sm text-white bg-activeColor">
              {updateLoading   ? (
                    <BiLoaderCircle className=" text-xl animate-spin" />
                  ) : (
                    "Update"
                  )}
          </button>
        </div>
      </form>
    </div>
    ) : (
      <div className="flex flex-wrap justify-between items-center gap-2">
        <span className="text-lg text-secondColor font-lexed  block">
          {profile?.name}
        </span>
        <button
          onClick={() => setEditBtn("username")}
          className="text-lg relative text-primaryColor  whitespace-nowrap cursor-pointer"
        >
          Edit
          <span className="absolute left-0 px-1 bottom-0.5 h-[0.5px] w-full bg-primaryColor"></span>
        </button>
      </div>
    )}
   </>
  );
};

export default EditUserName;
