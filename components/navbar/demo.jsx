"use client";
import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

const Demo = () => {
  const [open, setOpen] = useState(false);
  const Links = [
    { name: "HOME", link: "/", id: 1 },
    { name: "SERVICE", link: "/", id: 2 },
    { name: "ABOUT", link: "/", id: 3 },
    { name: "CONTACT", link: "/", id: 4 },
  ];
  return (
    <nav className=" w-full border ">
      <div className="md:flex items-center justify-between  py-4 md:px-10 px-7">
        <div className=" cursor-pointer flex items-center gap-1">
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute  bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-12" : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li className="md:ml-8 md:my-0 my-7 font-semibold" key={link.id}>
                <a
                  href={link.link}
                  className="text-gray-800 hover:text-blue-400 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-8 cursor-pointer md:hidden w-7 h-7"
          >
            {open ? <GrFormClose /> : <GiHamburgerMenu />}
          </div>
        </div>

        <div>zwapto</div>

        <button className="btn   md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Demo;
