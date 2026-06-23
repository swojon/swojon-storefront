import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";

const NotificationContent = ({}) => {
  return (
    <>
      <div className="flex justify-between items-start gap-3 border-b pb-2">
        <div className="w-80% flex items-start gap-3">
          <div className="md:w-6 md:h-6 w-4 h-4 rounded-full ">
            <Image
              src="/user1.jpg"
              alt="user"
              width={300}
              height={300}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="text-xs space-y-1.5">
            <p>n.content </p>

            {/* <div className="w-full py-1 px-2 border md:text-sm text-xs truncate rounded-md text-primaryColor">
                    this is great
                  </div> */}
            <span className="italic text-gray-400  block">1 min</span>
          </div>
        </div>
        <GoDotFill className="text-activeColor" />
      </div>
    </>
  );
};

export default NotificationContent;
