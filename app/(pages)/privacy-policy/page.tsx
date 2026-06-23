import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const PrivacyPolicy = () => {
  return (
    <section className=" py-10 ">
      <div className="lg:w-[65%] md:w-[80%] w-full  mx-auto">
        <div className="flex flex-col items-center space-y-3">
          <div className="flex items-center space-x-1  text-sm text-secondColor">
            <h6>Home</h6>
            <MdKeyboardArrowRight />
            <h6 className="text-primaryColor">Privacy Policy</h6>
          </div>
          <h2 className="text-primaryColor font-lexed  lg:text-4xl md:text-2xl text-xl font-bold">
            Privacy Policy
          </h2>
          <div className="text-center text-base text-secondColor">
            <p>
              Your privacy is important to us at Swojon. We respect your privacy
              regarding any
            </p>
            <p>information we may collect from you across our website.</p>
          </div>

          <div className="pt-8 text-secondColor space-y-8 custom-container">
            <div className="space-y-3">
              <h6 className=" text-primaryColor md:text-2xl text-xl font-lexed font-bold">
                Your Privacy, Our Priority
              </h6>
              <p className="md:text-lg text-base">
                At Swojon, we understand that your privacy is crucial. This
                policy outlines how we handle your information with care and
                respect.
              </p>
            </div>
            <div className="space-y-3">
              <h6 className="text-primaryColor md:text-2xl text-xl font-lexed font-bold">
                What information do we collect?
              </h6>
              <p className="md:text-lg text-base">
                <span className="text-primaryColor font-semibold">
                  Personal Details:
                </span>{" "}
                Your name, contact information, and other essentials to enhance
                your Swojon experience.
              </p>
              <p className="md:text-lg text-base">
                <span className="text-primaryColor font-semibold">
                  Usage Data:
                </span>{" "}
                How you interact with our site and app, helping us make your
                experience better.
              </p>
              <p className="md:text-lg text-base">
                <span className="text-primaryColor font-semibold">
                  Usage Data:
                </span>{" "}
                How you interact with our site and app, helping us make your
                experience better.
              </p>
            </div>
            <div className="space-y-3">
              <h6 className="text-primaryColor md:text-2xl text-xl font-lexed font-bold">
                How Do We Use Your Information?
              </h6>
              <p className="md:text-lg text-base">
                <span className="text-primaryColor font-semibold">
                  To Serve You:
                </span>{" "}
                To manage your account, process transactions, and provide
                customer support.
              </p>
              <p className="md:text-lg text-base">
                <span className="text-primaryColor font-semibold">
                  To Improve Swojon:
                </span>{" "}
                We analyze usage to enhance our platform and introduce features
                that matter to you.
              </p>
              <p className="md:text-lg text-base">
                <span className="text-primaryColor font-semibold">
                  To Communicate:
                </span>{" "}
                We&apos;ll keep you updated with important notices and exciting
                offers.
              </p>
            </div>

            <div className="space-y-3">
              <h6 className="text-primaryColor md:text-2xl text-xl font-lexed font-bold">
                Do We Share Your Information?
              </h6>
              <p className="md:text-lg text-base">
                <span className="text-primaryColor font-semibold">
                  No Unnecessary Sharing:
                </span>{" "}
                We only share your information with trusted partners when
                absolutely needed, like for payment processing or legal
                requirements.
              </p>
              <p className="md:text-lg text-base">
                <span className="text-primaryColor font-semibold">
                  No Selling Data:
                </span>{" "}
                Your personal information is not for sale.
              </p>
            </div>

            <div className="space-y-3">
              <h6 className="text-primaryColor md:text-2xl text-xl font-lexed font-bold">
                Your Choices and Rights
              </h6>
              <p className="md:text-lg text-base">
                <span className="text-primaryColor font-semibold">
                  Access and Control:
                </span>{" "}
                You can view, edit, or delete your personal information at any
                time.
              </p>
              <p className="md:text-lg text-base">
                <span className="text-primaryColor font-semibold">
                  Opt Out:
                </span>{" "}
                Not interested in our updates or marketing messages? You can opt
                out anytime.
              </p>
            </div>

            <div className="space-y-3">
              <h6 className="text-primaryColor md:text-2xl text-xl font-lexed font-bold">
                Security: Our Commitment
              </h6>

              <p className="md:text-lg text-base">
                We use robust security measures to protect your information
                because your trust is everything to us.
              </p>

              <h6 className="md:text-lg text-base text-primaryColor font-semibold">
                Updates to This Policy
              </h6>
              <p className="md:text-lg text-base">
                You can view, edit, or delete your personal information at any
                time.
              </p>

              <h6 className="md:text-lg text-base text-primaryColor font-semibold">
                Questions?
              </h6>
              <p className="md:text-lg text-base">
                If you have any concerns or questions about your privacy, our
                team is always here to help. Reach out anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
