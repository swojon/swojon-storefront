import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <section className="">
      <div className="border-b px-5 py-3.5">
        <h6 className="text-activeColor text-2xl font-lexed font-medium">
          Personal information
        </h6>
      </div>
      <div className="px-5 py-8 space-y-3">
        <div className="flex justify-between items-start">
          <div className=" ">
            <div className="w-24 h-24 rounded-full border">
              <Image
                src="/userMale.png"
                alt="user"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-primaryColor font-lexed text-lg block pt-4">
              Ibrahim K. Sakib
            </span>
            <span className="text-secondColor  text-base block">
              example@gmail.com
            </span>
          </div>
          <button className="p-3 bg-activeColor text-white font-lexed text-sm rounded-md">
            Edit Information
          </button>
        </div>

        <form className="w-2/3 grid grid-cols-2 gap-4 pt-4">
          <div>
            <label
              htmlFor="country"
              className="block text-base font-medium text-primaryColor font-lexed"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name=""
                id=""
                placeholder="John Doe"
                className="block w-full min-w-0 flex-1 py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-activeColor focus:ring-activeColor sm:text-sm bg-gray-50"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="country"
              className="block text-base font-medium text-primaryColor font-lexed"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                type="email"
                name=""
                id=""
                placeholder="example123@gmail.com"
                className="block w-full min-w-0 flex-1 py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-activeColor focus:ring-activeColor sm:text-sm bg-gray-50"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="country"
              className="block text-base font-medium text-primaryColor font-lexed"
            >
              Contact Number
            </label>
            <div className="mt-2">
              <input
                type="tel"
                name=""
                id=""
                placeholder=""
                className="block w-full min-w-0 flex-1 py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-activeColor focus:ring-activeColor sm:text-sm bg-gray-50"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="country"
              className="block text-base font-medium text-primaryColor font-lexed"
            >
              Address
            </label>
            <div className="mt-2">
              <input
                type="text"
                name=""
                id=""
                placeholder=""
                className="block w-full min-w-0 flex-1 py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-activeColor focus:ring-activeColor sm:text-sm bg-gray-50"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="country"
              className="block text-base font-medium text-primaryColor font-lexed"
            >
              State
            </label>
            <div className="mt-2">
              <input
                type="text"
                name=""
                id=""
                placeholder=""
                className="block w-full min-w-0 flex-1 py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-activeColor focus:ring-activeColor sm:text-sm bg-gray-50"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="country"
              className="block text-base font-medium text-primaryColor font-lexed"
            >
              Country
            </label>
            <div className="mt-2">
              <input
                type="text"
                name=""
                id=""
                placeholder=""
                className="block w-full min-w-0 flex-1 py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-activeColor focus:ring-activeColor sm:text-sm bg-gray-50"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Profile;
