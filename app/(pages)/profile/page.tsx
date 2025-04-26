"use client";
import { useGetUserByIdOrUsernameQuery } from "@/apollograph/generated";
import { setModalOpen } from "@/app/redux/modalSlice";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import defaultAvatar from "@/public/assets/avatar.svg";
import useIsMobile from "@/lib/hooks/useIsMobile";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi2";
import ProfileLoader from "@/components/Loader/ProfileLoader";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";

const DynamicEditUserName = dynamic(
  () => import("@/components/Profile/EditUserName"),
  { ssr: false }
);
const DynamicEditUserUsername = dynamic(
  () => import("@/components/Profile/EditUserUsername"),
  { ssr: false }
);

const Profile = () => {
  // const authState = useSelector((state: any) => state.auth);
  const { data: session } = useSession();

  const { data, loading, error } = useGetUserByIdOrUsernameQuery({
    variables: {
      usernameOrId: String(session?.user?.id!),
    },
    skip: !session?.user?.id,
  });
  const user = data?.getUserByIdOrUsername;

  const dispatch = useDispatch();
  const isMobile = useIsMobile();

  return (
    <section className="text-primaryColor">
      {loading ? (
        <ProfileLoader />
      ) : (
        <>
          <div className="relative">
            {isMobile && (
              <Link
                href={"/profile"}
                className="absolute left-0 top-1/2 -translate-y-1/2 p-2 border border-secondColor  rounded-md  cursor-pointer"
              >
                <HiArrowLeft className="text-primaryColor" />
              </Link>
            )}
            <h6 className="text-primaryColor text-center md:text-left lg:text-2xl md:text-lg text-base font-lexed font-bold ">
              Personal Information
            </h6>
          </div>
          <div className=" space-y-3">
            <div className="flex md:flex-raw flex-col md:justify-center lg:items-start md:items-center gap-3">
              <div className="flex flex-col lg:items-start items-center ">
                {/* <span className="text-primaryColor font-lexed lg:text-lg text-base  block pt-4">
              {`${user?.profile?.firstName} ${user?.profile?.lastName} `}
            </span>
            <span className="text-secondColor  lg:text-base text-sm block">
              {authState.user.email}
            </span> */}
              </div>
              {/* <button className=" md:px-3 px-2 md:py-2 py-1 md:text-sm text-xs bg-activeColor text-white font-lexed rounded-md">
            Edit Information
          </button> */}
            </div>

            <div className="lg:w-[53%] w-full py-5  rounded-md space-y-5">
              <div className="">
                <div className="flex items-center gap-3">
                  <div className="md:w-24 md:h-24 w-16 rounded-full border">
                    <Image
                      src={user?.profile?.avatar ?? defaultAvatar}
                      alt="user"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <button
                    className="py-1.5 px-3 text-sm border border-activeColor rounded-md text-white bg-activeColor"
                    onClick={() =>
                      dispatch(
                        setModalOpen({
                          title: "this is a modal",
                          body: "uploadImageModal",
                        })
                      )
                    }
                  >
                    change image
                  </button>
                  {/* <button className="py-1.5 px-3 text-sm border border-activeColor text-primaryColor rounded-md">
                    remove
                  </button> */}
                </div>

                <span className="lg:text-3xl md:text-2xl text-lg text-primaryColor font-lexed font-bold block capitalize mt-4">
                  {user?.username ?? user?.profile?.name}
                </span>

                <span className=" md:text-base text-sm text-secondColor block ">
                  Swojon member since{" "}
                  {new Date(user?.createdAt).toLocaleString("en-us", {
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>

              <div className="pb-2 border-b border-gray-200 space-y-2">
                <DynamicEditUserUsername user={user} />
              </div>

              <div className="pb-2 border-b border-gray-200 space-y-2">
                <DynamicEditUserName profile={user?.profile} />
              </div>

              <div className="pb-2 border-b border-gray-200 space-y-2">
                <span className="text-base text-primaryColor font-lexed font-medium block">
                  Email address
                </span>
                <div className="flex flex-wrap justify-between items-center gap-2">
                  <span className="text-lg text-secondColor font-lexed  block">
                    {user?.email}
                  </span>
                  {/* <button
                    onClick={() =>
                      dispatch(
                        setModalOpen({
                          title: "this is a modal",
                          body: "editEmail",
                        })
                      )
                    }
                    className="text-lg relative text-primaryColor  whitespace-nowrap cursor-pointer"
                  >
                    Edit
                    <span className="absolute left-0 px-1 bottom-0.5 h-[0.5px] w-full bg-primaryColor"></span>
                  </button> */}
                </div>
              </div>
              {/* 
              <div className="pb-2 border-b border-gray-200 space-y-2">
                <span className="text-base text-primaryColor font-lexed font-medium block">
                  Phone number
                </span>
                <div className="flex flex-wrap justify-between items-center gap-2">
                  <span className="text-lg text-secondColor font-lexed  block">
                    {user?.profile?.phoneNumber || "No Number Added"}
                  </span>
                  <button
                    onClick={() =>
                      dispatch(
                        setModalOpen({
                          title: "this is a modal",
                          body: "VerifyCode",
                        })
                      )
                    }
                    className="text-lg relative text-primaryColor  whitespace-nowrap cursor-pointer"
                  >
                    Add
                    <span className="absolute left-0 px-1 bottom-0.5 h-[0.5px] w-full bg-primaryColor"></span>
                  </button>
                </div>
              </div> */}

              {/* <div className="pb-2 border-b border-gray-200 space-y-2">
                {editBtn === "" && (
                  <span className="text-base text-primaryColor font-lexed font-medium block">
                    Password
                  </span>
                )}

                {editBtn === "password" ? (
                  <EditPassword setEditBtn={setEditBtn} />
                ) : (
                  <div className="flex flex-wrap justify-between items-center gap-2">
                    <span className="text-lg text-secondColor font-lexed  block">
                      ••••••••
                    </span>
                    <small
                      onClick={() => setEditBtn("password")}
                      className="text-lg relative text-primaryColor  whitespace-nowrap cursor-pointer"
                    >
                      Reset My Password
                      <span className="absolute left-0 px-1 bottom-0.5 h-[0.5px] w-full bg-primaryColor"></span>
                    </small>
                  </div>
                )}
              </div> */}
            </div>

            {/* <form className="lg:w-2/3 w-full grid md:grid-cols-2 grid-cols-1 gap-4 pt-4">
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
        </form> */}
          </div>
        </>
      )}
    </section>
  );
};

export default Profile;
