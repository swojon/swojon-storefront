import FollowerLists from "@/components/FollowerLists/FollowerLists";
import ProductLists from "@/components/ProductLists/ProductLists";
import { MdKeyboardArrowRight } from "react-icons/md";

const Wishlists = () => {
  return (
    <main className="">
      <div className="border-b px-5 py-3.5">
        <h6 className="text-activeColor text-2xl font-lexed font-medium">
          Personal information
        </h6>
      </div>
      <div className="grid grid-cols-2 gap-5 px-5 pt-8">
        <FollowerLists />
        <ProductLists />
      </div>
    </main>
  );
};

export default Wishlists;
