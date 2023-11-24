import React from "react";
import user from "@/public/userMale.png";
import { FaStar } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";
import { MdVerifiedUser } from "react-icons/md";
import Image from "next/image";
import { useListSellerReviewsQuery } from "@/apollograph/generated";
import { timeAgo } from "@/lib/helpers/timeAgo";


const SellerRating = ({sellerId} : {sellerId: any}) => {
  const {data, loading, error} = useListSellerReviewsQuery({
    variables: {
      userId: sellerId
    }
  })
  const reviews = data?.listSellerReviews.items

  return (
    <section>
      <h5 className="capitalize lg:text-2xl md:text-lg text-base font-lexed text-primaryColor font-medium">
        Rating & reviews
      </h5>
      <div className="flex space-x-1 items-center flex-wrap pt-3">
        <div className="flex items-center space-x-1">
          <FaStar className="text-[#FFB800]" />
          <span className="text-sm">0.00</span>
        </div>

        <div className="flex items-center space-x-1">
          <BsDot className="text-secondColor" />
          <span className="text-sm">No reviews Yet</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 py-5">
        {reviews?.map((rev) => (
          <div className="space-y-3" key={rev.id}>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full">
                <Image
                  src="/user1.jpg"
                  alt="icon"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div className="">
                <h6 className="font-lexed  text-base text-primaryColor">
                  {rev.reviewer.username ?? rev.reviewer.email}
                </h6>
                <p className="text-secondColor text-sm">{timeAgo(rev.dateCreated)}</p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <FaStar className="text-[#FFB800]" />
              <span className="text-sm">4.80</span>
            </div>
            <p className="text-sm text-secondColor">{rev.review}</p>
          </div>
        ))}
        {!loading && reviews?.length == 0 && <p>No reviews Yet.</p>}
      </div>

      {/* <button className="border border-activeColor text-activeColor  rounded-md py-1 text-center md:text-base  sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300 px-3">
        Show more
      </button> */}
    </section>
  );
};

export default SellerRating;
