import { useUpdateUserMutation } from "@/apollograph/generated";
import { useFormik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { BiLoaderCircle } from "react-icons/bi";
import * as Yup from "yup";

const blacklistedWords = ["facebook", "amazon", "google", "admin", "support"];
const formSchema = Yup.object({
  username: Yup.string()
  .min(5, 'Username must be at least 5 characters long.')
  .matches(/^[a-zA-Z0-9]*$/, 'Username should not contain special characters.')
  .test('no-blacklisted-words', 'Username contains a blacklisted word.', (value) => {
      if (!value) return true; // Skip if empty
      return !blacklistedWords.some(word => value.toLowerCase().includes(word));
  })
})

const EditUserUsername = ({user }: {user: any;  }) => {
  const [editBtn, setEditBtn] = useState("");

  const initialValues = {
    username: user?.username
    };
  const [ updateUser, {loading:updateLoading, error, data} ] = useUpdateUserMutation()
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
        updateUser({
          variables: {
            userData: {
              username: values.username
            },
            userId: user.id
          },
          onCompleted: () => {
            toast.success("Username updated successfully")
          },
          onError: (e) => {
            console.log(e);
            toast.error(e.message)
          }
        });
      } 
   
  });
  return (
    <>
  {editBtn === "" && (
    <span className="text-base text-primaryColor font-lexed font-medium block">
      Username
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
           Update username
         </label>
         <div className="mt-3">
           <input
             onChange={handleChange}
             onBlur={handleBlur}
             type="text"
             name="username"
             id="name"
             value={values.username}
             placeholder="JohnDoe"
             className="block w-full min-w-0 flex-1 py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-activeColor focus:ring-activeColor sm:text-sm bg-gray-50"
           />
         </div>
       </div>
       {errors.username && 
        <div className="mt-1">
          <p className="text-red-400">{errors.username.toString()}</p>
        </div>
        } 
       <div className="flex gap-3 items-center justify-end py-3 ">
         <button
          type="submit"
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
        {user?.username}
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

export default EditUserUsername;
