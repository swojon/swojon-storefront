import Image from "next/image";
import React from "react";

const Followers = () => {
  return (
    <section className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      <div className="space-y-3 p-4 border border-gray-100 shadow-md bg-white rounded-md">
        <div className="w-20 h-20 rounded-full">
          <Image
            src="/user1.jpg"
            alt="user"
            width={300}
            height={300}
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <h6 className="text-lg capitalize text-primaryColor font-lexed font-medium">
          Test user
        </h6>

        <div className="flex items-center gap-2 ">
          <button className="border border-activeColor text-activeColor  rounded-lg py-1 text-center sm:text-xs text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300 px-3">
            Follow me
          </button>
          <button className="border border-activeColor  text-activeColor   rounded-lg py-1 text-center  sm:text-xs text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300 px-3">
            See Details
          </button>
        </div>
      </div>

      <div className="space-y-3 p-4 border border-gray-100 shadow-md bg-white rounded-md">
        <div className="w-20 h-20 rounded-full">
          <Image
            src="/user1.jpg"
            alt="user"
            width={300}
            height={300}
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <h6 className="text-lg capitalize text-primaryColor font-lexed font-medium">
          {" "}
          Test user
        </h6>

        <div className="flex items-center gap-2 ">
          <button className="border border-activeColor text-activeColor  rounded-lg py-1 text-center sm:text-xs text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300 px-3">
            Follow me
          </button>
          <button className="border border-activeColor  text-activeColor   rounded-lg py-1 text-center  sm:text-xs text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300 px-3">
            See Details
          </button>
        </div>
      </div>

      <div className="space-y-3 p-4 border border-gray-100 shadow-md bg-white rounded-md">
        <div className="w-20 h-20 rounded-full">
          <Image
            src="/user1.jpg"
            alt="user"
            width={300}
            height={300}
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <h6 className="text-lg capitalize text-primaryColor font-lexed font-medium">
          {" "}
          Test user
        </h6>

        <div className="flex items-center gap-2 ">
          <button className="border border-activeColor text-activeColor  rounded-lg py-1 text-center sm:text-xs text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300 px-3">
            Follow me
          </button>
          <button className="border border-activeColor  text-activeColor   rounded-lg py-1 text-center  sm:text-xs text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300 px-3">
            See Details
          </button>
        </div>
      </div>

      <div className="space-y-3 p-4 border border-gray-100 shadow-md bg-white rounded-md">
        <div className="w-20 h-20 rounded-full">
          <Image
            src="/user1.jpg"
            alt="user"
            width={300}
            height={300}
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <h6 className="text-lg capitalize text-primaryColor font-lexed font-medium">
          {" "}
          Test user
        </h6>

        <div className="flex items-center gap-2 ">
          <button className="border border-activeColor text-activeColor  rounded-lg py-1 text-center sm:text-xs text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300 px-3">
            Follow me
          </button>
          <button className="border border-activeColor  text-activeColor   rounded-lg py-1 text-center  sm:text-xs text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300 px-3">
            See Details
          </button>
        </div>
      </div>
    </section>
  );
};

export default Followers;
