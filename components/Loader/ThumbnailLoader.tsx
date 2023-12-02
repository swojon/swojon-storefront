import React from "react";

const ThumbnailLoader = () => {
  return (
    <div className="flex md:gap-4 gap-2 lg:h-[600px] md:h-[400px] sm:h-[350px] h-[280px] animate-pulse">
      <div className="w-[18%] h-full space-y-4">
        <div className="w-full h-[20%] bg-gray-300 rounded-md"></div>
        <div className="w-full h-[20%] bg-gray-300 rounded-md"></div>
      </div>
      <div className="w-[82%] h-full bg-gray-300 rounded-md"></div>
    </div>
  );
};

export default ThumbnailLoader;
