"use client";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Disclosure } from "@headlessui/react";
import {
  MagnifyingGlassIcon,
  MinusSmallIcon,
  PlusSmallIcon,
} from "@heroicons/react/24/outline";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import Image from "next/image";

const faqs = [
  {
    id: 1,
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 2,
    question: "Can I change my plan later?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 24,
    question: "What is your cancellation policy?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 27,
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 28,
    question: "How does billing work?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 278,
    question: "How do I change my account email?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
];

const FAQ = () => {
  return (
    <section className=" py-10 ">
      <div className="w-[65%] mx-auto">
        <div className="flex flex-col items-center space-y-3">
          <div className="flex items-center space-x-1  text-sm text-secondColor">
            <h6>Home</h6>
            <MdKeyboardArrowRight />
            <h6 className="text-primaryColor">FAQ</h6>
          </div>
          <h2 className="text-primaryColor font-lexed xl:text-3xl lg:text-2xl md:text-lg text-base font-medium">
            FAQs
          </h2>
          <div className="text-center text-base text-secondColor">
            <p>Need something cleared up? Here are our most</p>
            <p>frequently asked questions.</p>
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
          <div className="mx-auto max-w-7xl px-6 py-16  lg:px-8">
            <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
              <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                {faqs.map((faq) => (
                  <Disclosure as="div" key={faq.question} className="pt-6">
                    {({ open }) => (
                      <>
                        <dt>
                          <Disclosure.Button className="flex w-full items-start justify-between text-left text-primayColor">
                            <span className="text-base font-semibold leading-7">
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
                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                          <p className="text-base leading-7 text-secondColor">
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
