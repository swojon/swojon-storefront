"use client"
import { useGetUserByIdQuery } from "@/apollograph/generated";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const authState = useSelector((state: any ) => state.auth)
  const {data, loading, error} = useGetUserByIdQuery({
    variables: {
      userId: authState.user.id
    },
    skip: !authState.user.id
  })
  const user = data?.getUserById;
  return (
    <section className="">
      <div className="border-b lg:px-5 md:px-3 px-2 lg:py-3.5 md:py-2.5 py-2">
        <h6 className="text-primaryColor lg:text-2xl md:text-lg text-base  font-lexed font-medium">
          Personal information
        </h6>
      </div>
      <div className="px-5 py-8 space-y-3">
        <div className="flex md:flex-raw flex-col md:justify-center lg:items-start md:items-center gap-3">
          <div className="flex flex-col lg:items-start items-center ">
            <div className="w-24 h-24 rounded-full border">
              <Image
                src="/userMale.png"
                alt="user"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-primaryColor font-lexed lg:text-lg text-base  block pt-4">
              {`${user?.profile?.firstName} ${user?.profile?.lastName} `}
            </span>
            <span className="text-secondColor  lg:text-base text-sm block">
              {authState.user.email}
            </span>
          </div>
          <button className=" md:px-3 px-2 md:py-2 py-1 md:text-sm text-xs bg-activeColor text-white font-lexed rounded-md">
            Edit Information
          </button>
        </div>

        <form className="lg:w-2/3 w-full grid md:grid-cols-2 grid-cols-1 gap-4 pt-4">
          <div>
            <label
              htmlFor="country"
              className="block md:text-base text-sm font-medium text-primaryColor font-lexed"
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
              className="block md:text-base text-sm font-medium text-primaryColor font-lexed"
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
              className="block md:text-base text-sm font-medium text-primaryColor font-lexed"
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
              className="block md:text-base text-sm font-medium text-primaryColor font-lexed"
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
              className="block md:text-base text-sm font-medium text-primaryColor font-lexed"
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
              className="block md:text-base text-sm font-medium text-primaryColor font-lexed"
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
