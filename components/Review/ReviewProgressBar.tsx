import React from 'react'
import ProgressBar from './ProgressBar';

function ReviewProgressBar({count, total}: {count: number, total: number}) {
    const getPercentage = (count: number, total: number) => {
        console.log("count", count, "total", total);
        if (!count || !total) return 0;
        return Math.trunc((count / total) * 100);
      };
    
  return (
    <>
        <div className='w-[70%] '>
        <ProgressBar
            bar={`${getPercentage(count, total)}%`}
        />
        </div>

        <div className="w-[12%] flex justify-end mx-auto ">
        <small className="text-xs   whitespace-nowrap ">{`${getPercentage(count, total)}%`}</small>
        </div>
    </>
  )
}

export default ReviewProgressBar