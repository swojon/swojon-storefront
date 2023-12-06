import React from 'react'
import { FaStarHalfAlt } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';

function ReviewStars({avgRating}: {avgRating: number}) {
      // todo: add loading state
    let intAvgRating = 0,
    restRating = 5,
    haveFrac = false;
    
    if (avgRating > 0) {
        intAvgRating = Math.trunc(avgRating);
        haveFrac = !!(avgRating - intAvgRating);
        restRating = haveFrac ? 5 - intAvgRating - 1 : 5 - intAvgRating;
    }
        
    return (
        <>
        {Array(intAvgRating)
                    .fill({})
                    .map((d, i) => (
                    <FaStar className="text-yellow-400" key={i} />
                    ))}
                {haveFrac && <FaStarHalfAlt className="text-yellow-400" />}
                {Array(restRating)
                    .fill({})
                    .map((d, i) => (
                    <FaStar className="text-gray-400" key={i} />
                    ))}{" "}
        </>
    
    )
}

export default ReviewStars