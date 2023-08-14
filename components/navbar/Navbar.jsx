"use client";
import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { FaRegUserCircle } from "react-icons/fa";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineBars, AiOutlineHeart } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import profile from "../../public/profile.jpg";
import MegaMenu from "../MegaMenu/MegaMenu";

const query = gql`
  query GetUsers {
    getUsers {
      id
      email
    }
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = usePathname();

  const Links = [
    { name: "Category", link: "/pages/category", id: 1 },
    { name: "Brands", link: "/pages/brands", id: 2 },
    { name: "New", link: "/pages/new", id: 3 },
    { name: "Services", link: "/pages/services", id: 4 },
  ];

  const { data: session } = useSession();

  useEffect(() => {}, [session]);

  const { loading, error, data } = useQuery(query, {
    skip: !session?.user,
  });

  return (
    <div className="relative">
      <nav className=" w-full relative nav-container  bg-white border-slate-300  h-[60px] top-0 flex  items-center transition ease-in-out delay-150">
        <div className="nav-box flex justify-between items-center  w-full">
          <div className="hidden lg:block  w-3/6">
            <ul className=" flex gap-x-8 text-base h-full">
              {Links.map((link) => (
                <li
                  key={link.id}
                  className={
                    location == `${link.link}` ? "text-[#CC0000] " : "py-4"
                  }
                >
                  <Link href={link.link}>{link.name}</Link>
                </li>
              ))}
              <li className="all-category py-4">
                <Link href="/">All category</Link>
                {/* mega menu */}
                <div className="absolute left-0  w-full megamenu-container ">
                  <div className="bg-white">
                    <div className="custom-container">
                      <MegaMenu />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="w-1/6 font-bold  text-[#cc0000] text-[25px] lg:text-[40px]	">
            <Link href="/">zwapto</Link>
          </div>

          <div className="w-2/6 flex items-center	justify-end gap-x-3">
            <Link href="/" className="hidden lg:block">
              <div className="text-[#cc0000] text-2xl ">
                <AiOutlineHeart />
              </div>
            </Link>
            {session?.user ? (
              <div className="flex items-center	">
                <h5 className="text-sm pr-3"> {session?.user?.email}</h5>

                <button
                  className="flex items-center  rounded-md gap-x-2"
                  onClick={() => signOut()}
                >
                  <FaRegUserCircle /> <span className="text-sm">Sign out</span>
                </button>
              </div>
            ) : (
              <Link href="/auth/signin">
                <button className="flex items-center  rounded-md gap-x-2 border border-[#cc0000] hover:shadow-md text-[#cc0000] hover:shadow-red-500/20 transition ease-in-out delay-150 md:px-[15px] md:py-[5px] px-[8px] py-[5px]">
                  <FaRegUserCircle />
                  <span className="text-xs text-[#000000] md:text-sm ">
                    Sign in
                  </span>
                </button>
              </Link>
            )}

            {/* <!-- Dropdown menu --> */}
            <div className="w-[40px] h-[40px] border border-[#cc0000] rounded-full">
              <Image
                src={profile}
                alt="profile"
                className="rounded-full w-full h-full object-cover object-center	"
              />
            </div>

            <Link href="/" className="hidden lg:block">
              <button className="flex items-center bg-[#cc0000] border border-[#cc0000] rounded-md gap-x-2  text-white  transition ease-in-out delay-150  hover:shadow-md hover:shadow-red-500/20 ">
                <span className="text-sm ">Sell</span>
              </button>
            </Link>

            <div
              className="lg:hidden block text-[#cc0000] text-xl rounded-md pl-2"
              onClick={() => setOpen(!open)}
            >
              {open ? <GrClose /> : <AiOutlineBars />}
            </div>
          </div>
        </div>

        {/* toggle menu */}

        {open ? (
          <div className="absolute top-[71px] w-full left-0 lg:hidden  transition ease-in-out delay-150">
            <div className="bg-white px-[4vw] py-3  border-b transition ease-in-out delay-150">
              <ul className=" gap-y-9 text-base pb-4">
                {Links.map((link) => (
                  <li
                    key={link.id}
                    className={location == `${link.link}` && "text-[#CC0000]"}
                  >
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>

              <div className="flex gap-x-2">
                <Link href="/">
                  <button className="flex items-center bg-[#cc0000] border border-[#cc0000] rounded-md gap-x-2  text-white  transition ease-in-out delay-150  hover:shadow-md hover:shadow-red-500/40 px-[20px] py-[7px]">
                    <span className="text-sm ">Sell</span>
                  </button>
                </Link>

                <button
                  className="flex items-center  border border-[#cc0000] rounded-md gap-x-2  text-black  transition ease-in-out delay-150  hover:shadow-md hover:shadow-red-500/40 px-[15px] py-[7px]"
                  onClick={() => signOut()}
                >
                  <FiLogOut /> <span className="text-sm">Sign out</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </nav>
    </div>
  );
};

export default Navbar;
