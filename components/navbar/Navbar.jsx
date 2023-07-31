"use client";
import React, { useState } from "react";
import "./Navbar.scss";
import { GrFormClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const Links = [
    { name: "HOME", link: "/", id: 1 },
    { name: "SERVICE", link: "/", id: 2 },
    { name: "ABOUT", link: "/", id: 3 },
    { name: "CONTACT", link: "/", id: 4 },
  ];

  return (
    <nav className=" w-full border nav-container">
      <div className="nav-box flex justify-between items-center">
        <ul className=" flex gap-x-8 text-base">
          <li>
            <Link href="/">Category</Link>
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

        <div className="font-bold  app-name ">
          <Link href="/">zwapto</Link>
        </div>

        <button className="flex items-center  rounded-md gap-x-3">
          <FaRegUserCircle /> <span>Sign in</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
