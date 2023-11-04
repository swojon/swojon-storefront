import Link from "next/link";
import { AiFillCheckCircle } from "react-icons/ai";

const SuccessModal = () => {
  return (
    <section className="  w-full h-full  space-y-3 lg:space-y-4 p-7">
      <div className="flex justify-center">
        <AiFillCheckCircle className="text-green-800 text-4xl" />
      </div>
      <div className="flex flex-col items-center ">
        <h6 className="text-xl font-lexed text-primaryColor">
          Thanks for uploading product!
        </h6>
        <p className="text-sm  text-secondColor text-center pt-3">
          Woohoo! Your payment was successful, and your order is complete. A
          receipt and download instructions are on their way to your inbox.
        </p>
        <Link
          href="/"
          className="px-4 py-2 text-sm bg-activeColor text-white rounded-md mt-5"
        >
          Go to Home
        </Link>
      </div>
    </section>
  );
};

export default SuccessModal;
