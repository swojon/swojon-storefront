import Image from "next/image";
import React from "react";

const NoResultFound = () => {
  return (
    <div className="px-6 py-4 flex flex-col  justify-center items-center space-y-3">
      <Image
        src="/assets/Emoji.png"
        alt="emoticon"
        width={400}
        height={400}
        className="w-10"
      />
      <span className="text-sm text-primaryColor text-center block">
        No result found
      </span>
    </div>
  );
};

export default NoResultFound;
