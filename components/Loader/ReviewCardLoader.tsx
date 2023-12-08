import React from "react";

const ReviewCardLoader = () => {
  return (
    <>
      <div className=" space-y-2  rounded-md masonry-item animate-pulse">
        <div className="w-24 h-3 bg-gray-300 rounded-md "></div>

        <span className="flex items-center gap-2">
          <span className="w-10 h-2 bg-gray-300 rounded-md "></span> -{" "}
          <span className="w-14 h-2 bg-gray-300 rounded-md "></span>
        </span>

        <p className="w-full h-2 bg-gray-300 rounded-md "></p>
        <p className="w-full h-2 bg-gray-300 rounded-md "></p>
        <p className="w-1/2 h-2 bg-gray-300 rounded-md "></p>
      </div>
      <div className=" space-y-2  rounded-md masonry-item animate-pulse">
        <div className="w-24 h-3 bg-gray-300 rounded-md "></div>

        <span className="flex items-center gap-2">
          <span className="w-10 h-2 bg-gray-300 rounded-md "></span> -{" "}
          <span className="w-14 h-2 bg-gray-300 rounded-md "></span>
        </span>

        <p className="w-full h-2 bg-gray-300 rounded-md "></p>
        <p className="w-full h-2 bg-gray-300 rounded-md "></p>
        <p className="w-1/2 h-2 bg-gray-300 rounded-md "></p>
      </div>
    </>
  );
};

export default ReviewCardLoader;
