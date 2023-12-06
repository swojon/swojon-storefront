import React from 'react'
import ReviewStars from './ReviewStars'

function ReviewDetailCardSingleColumn({rating}: {rating:any}) {
  return (
    <div className="py-3  space-y-2  rounded-md">

      <div className="flex gap-1 items-center text-sm ">
       <ReviewStars avgRating={rating.rating} />
      </div>

      <span className="block text-sm text-secondColor">
        Kay - {rating.dateCreated}{" "}
      </span>

      <p className="text-base text-secondColor ">
        {rating.review}
      </p>
    </div>


  )
}

export default ReviewDetailCardSingleColumn