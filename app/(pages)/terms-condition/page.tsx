import { MdKeyboardArrowRight } from "react-icons/md";

const TermsAndCondition = () => {
  return (
    <section className=" py-10 ">
      <div className="lg:w-[65%] md:w-[80%] w-full  mx-auto">
        <div className="flex flex-col items-center space-y-3">
          <div className="flex items-center space-x-1  text-sm text-secondColor">
            <h6>Home</h6>
            <MdKeyboardArrowRight />
            <h6 className="text-primaryColor">Terms and Conditions</h6>
          </div>
          <h2 className="text-primaryColor font-lexed xl:text-3xl lg:text-2xl md:text-lg text-base font-medium">
            Terms and Conditions
          </h2>
          {/* <div className="text-center text-base text-secondColor">
            <p>Welcome to Swojon!</p>
            <p>
              By using our platform, you agree to these terms, crafted to ensure
              a fair and enjoyable experience for everyone.
            </p>
          </div> */}

          <div className="pt-8 text-secondColor space-y-8 custom-container">
            <div className="space-y-3">
              <h6 className=" text-primaryColor md:text-2xl text-xl font-lexed font-bold">
                Welcome to Swojon!
              </h6>
              <p className="md:text-lg text-base">
                By using our platform, you agree to these terms, crafted to
                ensure a fair and enjoyable experience for everyone.
              </p>
            </div>
            <div className="space-y-3">
              <h6 className="text-primaryColor md:text-2xl text-xl font-lexed font-bold">
                Using Swojon
              </h6>
              <p className="md:text-lg text-base">
                <span className="text-primaryColor font-semibold">
                  Age Requirement:
                </span>{" "}
                You need to be 4+ to use our platform
              </p>
              <p className="md:text-lg text-base">
                <span className="text-primaryColor font-semibold">
                  Account Responsibility:
                </span>{" "}
                Keep your login info safe; you’re responsible for your account's
                activity.
              </p>
              <p className="md:text-lg text-base">
                <span className="text-primaryColor font-semibold">
                  Respectful Conduct:
                </span>{" "}
                Treat others as you’d like to be treated. No offensive language
                or behavior.
              </p>
            </div>
            <div className="space-y-3">
              <h6 className="text-primaryColor md:text-2xl text-xl font-lexed font-bold">
                Buying and Selling
              </h6>
              <p className="md:text-lg text-base">
                <span className="text-primaryColor font-semibold">
                  Honest Listings:
                </span>{" "}
                Describe your items accurately.
              </p>
              <p className="md:text-lg text-base">
                <span className="text-primaryColor font-semibold">
                  Fair Play:
                </span>{" "}
                Honor your commitments as a buyer or seller.
              </p>
              <p className="md:text-lg text-base">
                <span className="text-primaryColor font-semibold">
                  Safe Transactions:
                </span>{" "}
                Follow our guidelines for payment and delivery to keep
                transactions secure.
              </p>
            </div>

            <div className="space-y-3">
              <h6 className="text-primaryColor md:text-2xl text-xl font-lexed font-bold">
                Content on Swojon
              </h6>
              <p className="md:text-lg text-base">
                <span className="text-primaryColor font-semibold">
                  Ownership:
                </span>{" "}
                What you post is yours – but make sure you have the right to
                share it.
              </p>
              <p className="md:text-lg text-base">
                <span className="text-primaryColor font-semibold">
                  No Infringement:
                </span>{" "}
                Don’t post anything that infringes on others' rights or is
                illegal.
              </p>
              <p className="md:text-lg text-base">
                <span className="text-primaryColor font-semibold">
                  Moderation:
                </span>{" "}
                We may review and remove content to keep Swojon safe and
                respectful.
              </p>
            </div>

            <div className="space-y-3">
              <h6 className="text-primaryColor md:text-2xl text-xl font-lexed font-bold">
                Liability
              </h6>
              <p className="md:text-lg text-base">
                <span className="text-primaryColor font-semibold">
                  Limited Liability:
                </span>{" "}
                We're here to provide a platform, but we can’t be held
                responsible for all interactions or transactions.
              </p>
              <p className="md:text-lg text-base">
                <span className="text-primaryColor font-semibold">
                  Dispute Resolution:
                </span>{" "}
                If there’s a disagreement, let’s try to resolve it amicably.
              </p>
            </div>

            <div className="space-y-3">
              <h6 className="text-primaryColor md:text-2xl text-xl font-lexed font-bold">
                Changes to These Terms
              </h6>

              <p className="md:text-lg text-base">
                <span className="text-primaryColor font-semibold">
                  Stay Updated:
                </span>{" "}
                We might change these terms occasionally. We’ll let you know
                when we do.
              </p>
            </div>

            <div className="space-y-3">
              <h6 className="text-primaryColor md:text-2xl text-xl font-lexed font-bold">
                Contact Us
              </h6>

              <p className="md:text-lg text-base">
                <span className="text-primaryColor font-semibold">
                  We’re Here to Help:
                </span>{" "}
                Questions or concerns? Reach out anytime
              </p>
            </div>

            <p className="md:text-lg text-base">
              Using Swojon means being part of a community that values trust,
              respect, and fairness. Let's make it a great experience for
              everyone!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndCondition;
