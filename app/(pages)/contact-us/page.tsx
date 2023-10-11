import Image from "next/image";
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

      <div className="pt-10 grid grid-cols-2 gap-3">
        <div className="w-full h-[550px] rounded-md">
          <Image
            src="/assets/contactUs.png"
            alt="contact banner"
            width={400}
            height={900}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="border"></div>
      </div>
    </section>
  );
};

export default ContactUs;
