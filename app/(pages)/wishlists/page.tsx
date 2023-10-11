import FollowerLists from "@/components/FollowerLists/FollowerLists";
import ProductLists from "@/components/ProductLists/ProductLists";
import { MdKeyboardArrowRight } from "react-icons/md";

const Wishlists = () => {
  return (
    <main className="custom-container py-10 space-y-5">
      <div className="flex items-center space-x-1 justify-center text-sm text-secondColor">
        <h6 className="">Home</h6>
        <MdKeyboardArrowRight />
        <h6 className="">WishLists</h6>
      </div>
      <h2 className="lg:text-3xl md:text-lg text-base font-lexed font-medium text-primaryColor ">
        Your Wishlists
      </h2>
      <div className="grid grid-cols-2 gap-5 ">
        <FollowerLists />
        <ProductLists />
      </div>
    </main>
  );
};

export default Wishlists;
