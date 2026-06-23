import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const data = [
  {
    id: 4559,
    icon: "/contactIcon.png",
    title: "Chat to sales",
    desc: "Speak to our friendly team.",
    phone: "support@swajon.com",
  },
  {
    id: 4558,
    icon: "/contactIcon2.png",
    title: "Chat to support",
    desc: "We’re here to help.",
    phone: "455100000",
  },
  {
    id: 4557,
    icon: "/contactIcon3.png",
    title: "Visit us",
    desc: "Visit our office HQ.",
    phone: "Chattagram, Bangladesh",
  },
  {
    id: 4554,
    icon: "/contactIcon4.png",
    title: "Call us",
    desc: "Sat-Wed from 8am to 5pm.",
    phone: "Mon-Fri from 8am to 5pm.",
  },
];

const ContactUs = () => {
  return (
    <section className="custom-container py-10 space-y-5">
      <div className="flex items-center space-x-1  text-sm text-secondColor">
        <h6>Home</h6>
        <MdKeyboardArrowRight />
        <h6 className="text-primaryColor">Contact Us</h6>
      </div>

      <div>
        <h2 className="text-base md:text-lg lg:text-2xl xl:text-3xl text-primaryColor font-lexed">
          We’d love to hear from you
        </h2>
        <p className="text-base text-secondColor pt-2">
          Our friendly team is always here to chat.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 ">
        {data.map((item) => (
          <div key={item.id} className="space-y-3 bg-[#FFF5F6] rounded-md p-4">
            <div className="w-10 h-10 p-2 rounded-md flex items-center justify-center bg-activeColor">
              <Image
                src={item.icon}
                width={50}
                height={50}
                alt="icon"
                className=""
              />
            </div>
            <div>
              <h5 className="text-lg text-primaryColor font-lexed">
                {item.title}
              </h5>
              <small className="text-sm text-secondColor ">{item.desc}</small>
            </div>

            <h6 className="text-activeColor text-sm">{item.phone}</h6>
          </div>
        ))}
      </div>

      <div className="pt-10 grid lg:grid-cols-2 grid-cols-1 gap-3">
        <div className="w-full h-[550px] rounded-md hidden lg:block">
          <Image
            src="/assets/contactUs.png"
            alt="contact banner"
            width={400}
            height={900}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className=" flex flex-col justify-center">
          <form className="space-y-4  lg:mx-auto">
            <div>
              <h2 className=" lg:text-2xl md:text-lg  text-base font-semibold font-lexed">
                Get in Touch
              </h2>
              <p className="md:text-base sm:text-sm text-xs text-secondColor">
                Our friendly team would love to hear from you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block md:text-base text-sm font-medium text-primaryColor font-lexed"
                >
                  First Name
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="block w-full rounded-md border border-[#717171] pr-10 text-primaryColor placeholder-[#717171] focus:border-activeColor focus:outline-none focus:ring-activeColor text-sm p-2.5"
                    placeholder="First Name"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block md:text-base text-sm font-medium text-primaryColor font-lexed"
                >
                  Last Name
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="block w-full rounded-md border border-[#717171] pr-10 text-primaryColor placeholder-[#717171] focus:border-activeColor focus:outline-none focus:ring-activeColor text-sm p-2.5"
                    placeholder="Last Name"
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block md:text-base text-sm font-medium text-primaryColor font-lexed"
              >
                Email
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border border-[#717171] pr-10 text-primaryColor placeholder-[#717171] focus:border-activeColor focus:outline-none focus:ring-activeColor text-sm p-2.5"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone-number"
                className="block md:text-base text-sm font-medium text-primaryColor font-lexed"
              >
                Phone Number
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    className="h-full rounded-md border-transparent bg-transparent py-0 px-3 border-r text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                  >
                    <option>BD</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                </div>
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  className="block w-full rounded-md border border-[#717171]  pl-20 text-primaryColor placeholder-[#717171] focus:border-activeColor focus:outline-none focus:ring-activeColor text-sm p-2.5"
                  placeholder="+1 (555) 987-6543"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="comment"
                className="block md:text-base text-sm font-medium text-primaryColor font-lexed"
              >
                Add your comment
              </label>
              <div className="mt-1">
                <textarea
                  rows={3}
                  name="comment"
                  id="comment"
                  className="block w-full rounded-md border border-[#717171] pr-10 text-primaryColor placeholder-[#717171] focus:border-activeColor focus:outline-none focus:ring-activeColor text-sm p-2.5"
                  defaultValue={""}
                />
              </div>
            </div>

            <div className="flex  items-center ">
              <div className="flex space-x-2 items-center">
                <div className="flex h-5 items-center">
                  <input
                    id="comments"
                    aria-describedby="comments-description"
                    name="comments"
                    type="checkbox"
                    className="h-4 w-4 rounded border border-gray-300 text-activeColor focus:ring-activeColor"
                  />
                </div>
                <label
                  htmlFor="comments"
                  className="text-secondColor md:text-sm text-xs"
                >
                  You agree to our friendly
                </label>
              </div>

              <Link
                href="/"
                className="md:text-sm text-xs text-activeColor pl-2  "
              >
                privacy policy
              </Link>
            </div>

            <button
              type="submit"
              className="py-3 border border-activeColor bg-activeColor text-sm text-white w-full rounded font-lexed"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
