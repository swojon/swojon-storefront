"use client";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Disclosure } from "@headlessui/react";
import {
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import Image from "next/image";

const faqs = [
  {
    id: 1,
    question: "What is Swojon?",
    answer:
      "Swojon is an online marketplace where you can easily buy and sell your personal items. It's a community driven marketplace that connects people through unique finds and opportunities.",
  },
  {
    id: 2,
    question: "How do I start selling on Swojon?",
    answer:
      "Getting started is simple! Create an account, snap detailed picture of the item you want to sell, make a title for the product, add a description, set your price, provide meetup location and you're all set to reach thousands of potential buyers.",
  },
  {
    id: 24,
    question: "Is it safe to buy and sell on Swojon?",
    answer:
      "Absolutely! Your safety is our top priority. We've built robust trust and security features to ensure every transaction is secure and transparent. You can check seller/buyer profile and reviews to proceed any deals.",
  },
  {
    id: 27,
    question: "Are there any fees for using Swojon?",
    answer:
      ": Listing items on Swojon is free. We want to make buying and selling accessible to everyone. For certain premium features, there might be a small fee, but basic buying and selling incur no charges.",
  },
  {
    id: 28,
    question: "How does Swojon handle disputes?",
    answer:
      "We have a dedicated support team to handle disputes and ensure fair resolutions. We encourage clear communication and honesty among our users and are here to help when needed.",
  },
  {
    id: 278,
    question: "Can I return an item I purchased on Swojon?",
    answer:
      "The return policy depends on each seller. We encourage sellers to specify their return policy in their listings. Always check the listing details or contact the seller directly for more information.",
  },
];

const FAQ = () => {
  return (
    <section className=" py-10 ">
      <div className="lg:w-[65%] md:w-[75%] w-[95%] mx-auto">
        <div className="flex flex-col items-center space-y-3">
          <div className="flex items-center space-x-1  text-sm text-secondColor">
            <h6>Home</h6>
            <MdKeyboardArrowRight />
            <h6 className="text-primaryColor">FAQ</h6>
          </div>
          <h2 className="text-primaryColor font-lexed  lg:text-4xl md:text-2xl text-xl font-bold">
            FAQs
          </h2>
          <div className="text-center text-base text-secondColor">
            <span className="sm:block">
              Need something cleared up? Here are our most
            </span>
            <span>frequently asked questions.</span>
          </div>

          <div className="relative w-[250px]">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center  ">
              <MagnifyingGlassIcon
                className="h-7 w-7  p-1.5  text-primaryColor mr-1 "
                aria-hidden="true"
              />
            </div>
            <input
              id="search"
              name="search"
              className="block w-full rounded-md border border-gray-300 bg-white py-2 pr-3 pl-9 leading-5 placeholder-[#C0C0C0] focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-activeColor sm:text-sm"
              placeholder="Search"
              type="search"
            />
          </div>
        </div>
        <div className="">
          <div className="mx-auto max-w-7xl px-6 py-12  lg:px-8">
            <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
              <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                {faqs.map((faq) => (
                  <Disclosure as="div" key={faq.question} className="pt-6">
                    {({ open }) => (
                      <>
                        <dt>
                          <Disclosure.Button className="flex w-full items-start justify-between text-left text-primaryColor">
                            <span className="md:text-xl text-lg font-bold leading-7">
                              {faq.question}
                            </span>
                            <span className="ml-6 flex h-7 items-center">
                              {open ? (
                                <AiOutlineMinusCircle className="text-lg " />
                              ) : (
                                <AiOutlinePlusCircle className="text-lg " />
                              )}
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-2 md:pr-12">
                          <p className="md:text-lg text-base leading-7 text-secondColor">
                            {faq.answer}
                          </p>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 bg-[#F9F9F9] p-8 flex flex-col items-center">
        <div className="relative flex pb-5">
          <div className="w-8 h-8 border-2 border-white rounded-full z-0 ">
            <Image
              src="/profile.jpg"
              width={200}
              height={200}
              alt="member"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="relative w-8 h-8 border-2 border-white rounded-full -left-2 -top-0.5">
            {" "}
            <Image
              src="/user1.jpg"
              width={200}
              height={200}
              alt="member"
              className="w-full h-full object-cover rounded-full z-20"
            />
          </div>
          <div className="w-8 h-8 border-2 border-white rounded-full  relative -left-4 ">
            <Image
              src="/profile.jpg"
              width={200}
              height={200}
              alt="member"
              className="w-full h-full object-cover rounded-full z-10"
            />
          </div>
        </div>

        <span className="block text-primaryColor font-lexed text-sm">
          Still have questions?
        </span>
        <span className="block text-secondColor text-sm">
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </span>
        <button className="bg-activeColor px-3 py-2 text-sm text-white rounded-md mt-5">
          Get in touch
        </button>
      </div>
    </section>
  );
};

export default FAQ;
