"use client";
import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { signOut, useSession } from "next-auth/react";
import { FaRegUserCircle } from "react-icons/fa";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    <nav className=" w-full  nav-container border-b border-slate-300 sticky h-[70px] top-0 flex  items-center">
      <div className="nav-box flex justify-between items-center  w-full">
        <ul className=" w-2/6 flex gap-x-8 text-base">
          {Links.map((link) => (
            <li
              key={link.id}
              className={location == `${link.link}` && "text-[#CC0000]"}
            >
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>

        <div className="w-1/6 font-bold text-center text-[#cc0000] text-[40px] font-black	">
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
