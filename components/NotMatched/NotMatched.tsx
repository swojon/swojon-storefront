import Image from "next/image";
import Link from "next/link";

const NotMatched = ({ title }: { title: any }) => {
  return (
    <section className="flex flex-col justify-center items-center custom-container ">
      <Image
        src="/assets/notfound.svg"
        className="w-full h-[200px]"
        width={700}
        height={900}
        alt="not-found"
      />
      <h2 className="mt-7 text-lg text-primaryColor font-lexed  leading-none capitalize">
        {title}
      </h2>
      <p className="pt-1.5 py-3 text-sm text-secondColor ">
        we didn`t find anything
      </p>
      <Link
        href="/"
        className="py-2 px-3 bg-activeColor text-white text-sm font-lexed rounded-md"
      >
        Bak to Home page
      </Link>
    </section>
  );
};

export default NotMatched;
