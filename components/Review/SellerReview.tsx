import React from "react";
import SortBy from "./SortBy";
import FilterBy from "./FilterByStars";
import { MdOutlineClose } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import ProgressBar from "./ProgressBar";
import "react-circular-progressbar/dist/styles.css";
import { useListSellerReviewsQuery,  } from "@/apollograph/generated";
import ReviewDetailCard from "./ReviewDetailCard";
import SummarySellerReview from "./SummarySellerReview";
import FilterByStars from "./FilterByStars";
import AppliedReviewFilters from "./AppliedReviewFilters";
import { useSearchParams } from "next/navigation";


const SellerReview = ({sellerId}: {sellerId: number}) => {
  const searchParams = useSearchParams()
  const starsFilter = searchParams.get('stars')?.split(',')
  let filters = {}
  if (starsFilter && starsFilter.length > 0) filters = {...filters, stars: starsFilter}
  const { data, loading, error} = useListSellerReviewsQuery({
    variables: {
      userId: sellerId,
      filters: filters
    },
  });


  const reviews = data?.listSellerReviews.items;


  return (
    <section className="space-y-9 lg:px-2">
 
      <SummarySellerReview sellerId={sellerId} />
      <div className="flex flex-col justify-between md:flex-row items-start  md:gap-5 gap-3">
         <div className="flex gap-2.5 items-center flex-wrap ">
          {/* Applied filter */}
          <AppliedReviewFilters />
        </div>

        <div className="flex flex-wrap  items-center gap-2  ">
           <FilterByStars /> <SortBy />
        </div>
       
      </div>

      
        {loading && <p>Loading</p>}
        {!loading && (!reviews || reviews.length <=0 ) && <p>No reviews Yet</p> }
        {reviews && reviews!.map(review => (
          <div className="masonry-container"  key={review.id}>
          <ReviewDetailCard review={review} />
          </div>
        ))} 


      {/* <div className="space-y-3">
       
      </div> */}
    </section>
  );
};

export default SellerReview;
