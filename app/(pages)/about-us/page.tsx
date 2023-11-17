import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import about from "@/public/assets/about1.svg";
import about2 from "@/public/assets/about2.svg";
import about3 from "@/public/assets/about3.svg";
import Image from "next/image";
import icon1 from "@/public/assets/aboutIcon.png";
import icon2 from "@/public/assets/aboutIcon2.png";
import icon3 from "@/public/assets/aboutIcon3.png";
import icon4 from "@/public/assets/aboutIcon4.png";
import { AiFillCheckCircle } from "react-icons/ai";

const data = [
  {
    id: 188,
    title: "Account Settings",
    desc: "Adjust settings, manage notifications, learn about name change and more",
    icon: icon1,
  },
  {
    id: 148,
    title: "Login and Password",
    desc: "Meet the seller in person and check the item before you make a payment. Where available, use",
    icon: icon2,
  },
  {
    id: 718,
    title: "Privacy and Policy",
    desc: "Adjust settings, manage notifications, learn about name change and more",
    icon: icon3,
  },
  {
    id: 187,
    title: "FAQ",
    desc: "Adjust settings, manage notifications, learn about name change and more",
    icon: icon4,
  },
];

const AboutUs = () => {
  return (
    <section className=" py-10">
      <div className="flex items-center space-x-1  text-sm text-secondColor custom-container">
        <h6>Home</h6>
        <MdKeyboardArrowRight />
        <h6 className="text-primaryColor">About us</h6>
      </div>
      <div className="my-10 grid grid-cols-2 gap-6 custom-container">
        <div className=" lg:h-[400px] md:h-[300px] sm:h-[250px] h-[250px]  w-full">
          <Image src={about} alt="" className="m-auto w-full" />
        </div>
        <div className=" flex flex-col justify-center space-y-3 px-3 items-start">
          <h2 className="text-3xl text-primaryColor font-lexed font-medium">
            Welcome to Swajon
          </h2>
          <p className="text-sm text-secondColor ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate id est laborum.
          </p>
          <p className="text-sm text-secondColor">
            Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta
            et Ut placerat legendos interpre.Donec vitae sapien ut libero
            venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis
            commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut
            ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate id
            est laborum.
          </p>
          <button className="px-3 py-2 text-white bg-activeColor text-sm  rounded-md mt-4">
            See More Products
          </button>
        </div>
      </div>

      <div className="bg-[#F9F9F9] py-16 custom-container">
        <div className="flex flex-col items-center space-y-3 pb-6">
          <h5 className="text-2xl text-primaryColor font-lexed font-medium">
            What we provides
          </h5>
          <p className="text-sm text-secondColor text-center">
            Need something cleared up? Here are our most <br /> frequently asked
            questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-3">
          {data.map((item) => (
            <div
              className="lg:space-y-3 md:space-y-2 space-y-1 border rounded-md p-4 bg-white"
              key={item.id}
            >
              <Image
                src={item.icon}
                alt="icon"
                className="w-10 h-10 object-cover rounded-full"
              />
              <h6 className="lg:text-lg text-base font-medium font-lexed text-primaryColor">
                {item.title}
              </h6>
              <p className="lg:text-sm text-xs text-secondColor ">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="my-16 grid grid-cols-2 gap-6 custom-container">
        <div className=" flex flex-col justify-center  px-3 items-start">
          <h5 className="text-2xl text-primaryColor font-lexed font-medium">
            Sell your products with us
          </h5>
          <p className="text-sm text-secondColor py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>

          <div className="space-y-2">
            <div className="flex space-x-2 items-center">
              <AiFillCheckCircle className="text-yellow-500" />
              <span className="text-sm text-primaryColor font-lexed">
                Various analysis options.
              </span>
            </div>
            <div className="flex space-x-2 items-center">
              <AiFillCheckCircle className="text-yellow-500" />
              <span className="text-sm text-primaryColor font-lexed">
                Page Load (time, size, number of requests).
              </span>
            </div>
            <div className="flex space-x-2 items-center">
              <AiFillCheckCircle className="text-yellow-500" />
              <span className="text-sm text-primaryColor font-lexed">
                Big data analysis
              </span>
            </div>
            <div className="flex space-x-2 items-center">
              <AiFillCheckCircle className="text-yellow-500" />
              <span className="text-sm text-primaryColor font-lexed">
                Various analysis options.
              </span>
            </div>
          </div>

          <button className="px-3 py-2 text-white bg-activeColor text-sm  rounded-md mt-4">
            Sell your products
          </button>
        </div>
        <div className=" lg:h-[400px] md:h-[300px] sm:h-[250px] h-[250px] w-full">
          <Image src={about2} alt="" className="m-auto h-full " />
        </div>
      </div>

      <div className="bg-[#F9F9F9] py-16 grid grid-cols-2 gap-6 custom-container">
        <div className=" lg:h-[400px] md:h-[300px] sm:h-[250px] h-[250px]  w-full">
          <Image src={about3} alt="" className="m-auto h-full" />
        </div>
        <div className=" flex flex-col justify-center  px-3 items-start">
          <h5 className="text-2xl text-primaryColor font-lexed font-medium">
            Buy your products
          </h5>
          <p className="text-sm text-secondColor py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>

          <div className="space-y-2">
            <div className="flex space-x-2 items-center">
              <AiFillCheckCircle className="text-yellow-500" />
              <span className="text-sm text-primaryColor font-lexed">
                Various analysis options.
              </span>
            </div>
            <div className="flex space-x-2 items-center">
              <AiFillCheckCircle className="text-yellow-500" />
              <span className="text-sm text-primaryColor font-lexed">
                Page Load (time, size, number of requests).
              </span>
            </div>
            <div className="flex space-x-2 items-center">
              <AiFillCheckCircle className="text-yellow-500" />
              <span className="text-sm text-primaryColor font-lexed">
                Big data analysis
              </span>
            </div>
            <div className="flex space-x-2 items-center">
              <AiFillCheckCircle className="text-yellow-500" />
              <span className="text-sm text-primaryColor font-lexed">
                Various analysis options.
              </span>
            </div>
          </div>

          <button className="px-3 py-2 text-white bg-activeColor text-sm  rounded-md mt-4">
            Sell your products
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
