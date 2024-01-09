"use client";
import { useListFavoriteListingQuery } from "@/apollograph/generated";
import FollowerLists from "@/components/FollowerLists/FollowerLists";
import ProductLoader from "@/components/Loader/ProductLoader";
import ProductLists from "@/components/ProductLists/ProductLists";
import ProductCard from "@/components/Products/ProductCard";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useSelector } from "react-redux";

const Wishlists = () => {
  const authState = useSelector((state: any) => state.auth);
  console.log("authState", authState);
  const { data, error, loading } = useListFavoriteListingQuery({
    variables: {
      userId: authState?.user?.id,
    },
  });
  const wishListItems = data?.listFavoriteListing.items;
  console.log("wish", wishListItems);
  return (
    <section>
      <div className=" ">
        <h6 className="text-primaryColor lg:text-2xl md:text-lg text-base  font-lexed font-medium">
          My Wishlists
        </h6>
      </div>
      <div className="grid  lg:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-2  pt-8">
        {loading && <ProductLoader />}
        {wishListItems?.map((item) => (
          <ProductCard card={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Wishlists;
