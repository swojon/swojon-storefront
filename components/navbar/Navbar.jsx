"use client";
import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { signOut, useSession } from "next-auth/react";
import { FaRegUserCircle } from "react-icons/fa";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

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
  const Links = [
    { name: "HOME", link: "/", id: 1 },
    { name: "SERVICE", link: "/", id: 2 },
    { name: "ABOUT", link: "/", id: 3 },
    { name: "CONTACT", link: "/", id: 4 },
  ];

  const { data: session } = useSession();

  useEffect(() => {}, [session]);

  const { loading, error, data } = useQuery(query, {
    skip: !session?.user,
  });

  return (
    <nav className=" w-full  nav-container border-b border-slate-300">
      <div className="nav-box flex justify-between items-center">
        <ul className=" w-2/6 flex gap-x-8 text-base">
          <li>
            <Link href="/pages/category">Category</Link>
          </li>
          <li>
            <Link href="/">Brands</Link>
          </li>
          <li>
            <Link href="/">New</Link>
          </li>
          <li>
            <Link href="/">Services</Link>
          </li>
        </ul>

        <div className="w-1/6 font-bold text-center app-name ">
          <Link href="/">zwapto</Link>
        </div>

        <div className="w-2/6 flex items-center	justify-end ">
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
              <button className="flex items-center  rounded-md gap-x-2">
                <FaRegUserCircle /> <span className="text-sm">Sign in</span>
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
