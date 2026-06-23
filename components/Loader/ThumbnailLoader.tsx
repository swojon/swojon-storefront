import React from "react";

const ThumbnailLoader = () => {
  return (
    <div className="w-full animate-pulse">

      {/* ===== DESKTOP LOADER ===== */}
      <div className="hidden lg:flex gap-4 h-[600px]">

        {/* Left thumbnails */}
        <div className="w-[110px] h-full flex flex-col gap-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-full h-[90px] bg-gray-300 rounded-lg"
            />
          ))}
        </div>

        {/* Main image */}
        <div className="flex-1 h-full bg-gray-300 rounded-lg" />
      </div>

      {/* ===== MOBILE LOADER ===== */}
      <div className="lg:hidden space-y-4">

        {/* Main image */}
        <div className="w-full aspect-square bg-gray-300 rounded-lg" />

        {/* Thumbnails */}
        <div className="flex gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="w-[80px] h-[80px] bg-gray-300 rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThumbnailLoader;
