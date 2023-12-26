import React from "react";

const ThumbnailLoader = () => {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="md:h-[577px] sm:h-[385px] w-full bg-gray-300 rounded-md"></div>
      <div className="w-full  flex items-center gap-4">
        <div className="w-[120px] h-[120px] bg-gray-300 rounded-md"></div>
        <div className="w-[120px] h-[120px] bg-gray-300 rounded-md"></div>
      </div>
    </div>
  );
};

export default ThumbnailLoader;
