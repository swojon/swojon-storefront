"use client";
import { ListSellerReviewsDocument, SummaryUserReviewDocument, useCreateSellerReviewMutation } from "@/apollograph/generated";
import { setModalClose } from "@/app/redux/modalSlice";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaRegStar } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

const review = [
  { id: 1, rating: 1, comment: "Poor" },
  { id: 2, rating: 2, comment: "Could’ve been better" },
  { id: 3, rating: 3, comment: "OK" },
  { id: 4, rating: 4, comment: "Good" },
  { id: 5, rating: 5, comment: "Great" },
];

const formSchema = Yup.object({
  rating: Yup.number().min(1).max(5).required("Rating is required"),
  review: Yup.string().min(3).notRequired(),

})

const WriteReviewModal = ({props}: {props:any}) => {
  const {data:session, status} = useSession();

  const initialValues = {
    rating: 1,
    review: "",
    sellerId: props.sellerIdOrUsername ?? null,
    reviewerId: session?.user?.id ?? null,
    listingId: props.listingId ?? null
  };
  console.log(props.sellerIdOrUsername,  "Seller Id From modal props")
 
  const dispatch = useDispatch();
  const [hoverStar, setHoverStar] = useState<any>(null);
  const [clickedStar, setClickedStar] = useState<any>(null);
  const handleStarHover = (star: any) => {
    // console.log("category hovered", category);
    setHoverStar(star);
  };
  const handleMouseLeave = () => {
    setHoverStar(null);
  };
  const [
    createSellerReview,
    { loading: createLoading, error: createError, data: createData },
  ] = useCreateSellerReviewMutation();

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
        createSellerReview({
          variables: {
            reviewData: {
              rating: values.rating,
              review: values.review,
              sellerIdOrUsername: props.sellerIdOrUsername ?? null,
              reviewerId: session?.user?.id!,
              listingId: props.listingid ?? null
            }
          },
          refetchQueries: [ListSellerReviewsDocument, SummaryUserReviewDocument],
          
        });
        if (createError) toast.error("Create Failed, Please Try again.");
        if (createData) toast.success("Review Recorded Successfully");
        dispatch(setModalClose(true)); //on update we won't close the modal
        action.resetForm()
      } 
   
  });

  const getStarColor = (starId: any) => {
    if (clickedStar) {
      return starId <= parseInt(clickedStar.rating)
        ? "text-yellow-500 border-yellow-500"
        : "text-gray-400 border-gray-400";
    } else if (hoverStar) {
      return starId <= parseInt(hoverStar.rating)
        ? "text-yellow-500 border-yellow-500"
        : "text-gray-400 border-gray-400";
    }
    return "text-gray-400 border-gray-400";
  }; 
  
  console.log("values", values)

  return (
    
    <section className="w-full bg-white h-full rounded-md mx-auto space-y-3 lg:space-y-4 p-5  relative">
      
      <button
        className="absolute rounded-full bg-activeColor p-1 border right-2 top-2  text-white"
        onClick={() => dispatch(setModalClose(true))}
      >
        <MdClose />
      </button>
      <h6 className="text-2xl text-primaryColor font-lexed font-medium">
        Write a review
      </h6>
      <div className="space-y-3 md:space-y-4 lg:space-y-5">
        <div className="flex items-center gap-3">
          {review.map((star) => (
            <span
              key={star.id}
              onClick={() => {setClickedStar(star); setFieldValue('rating',  star.rating)}}
              onMouseEnter={() => handleStarHover(star)}
              onMouseLeave={handleMouseLeave}
              className={`border  rounded-md p-1 cursor-pointer ${getStarColor(
                star.id
              )}`}
            >
              <FaRegStar className="text-lg " />
            </span>
          ))}
          {hoverStar ? (
            <span className="text-base text-primaryColor">
              {hoverStar?.comment}
            </span>
          ) : (
            <span className="text-base text-primaryColor">
              {clickedStar?.comment}
            </span>
          )}
        </div>

        <textarea
          rows={7}
          name="review"
          id="review"
          onChange={handleChange}
          className="block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:outline-none focus:border-activeColor focus:ring-activeColor sm:text-sm text-xs"
          defaultValue={""}
        />
        <div className="flex justify-center items-center">
          <button className="text-center py-2 px-4 text-sm text-white bg-activeColor rounded-md hover:shadow-lg" onClick={() => handleSubmit()}>
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default WriteReviewModal;
