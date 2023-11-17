"use client";
import { useListFavoriteListingQuery } from "@/apollograph/generated";
import FollowerLists from "@/components/FollowerLists/FollowerLists";
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
      <div className="border-b lg:px-5 md:px-3 px-2 lg:py-3.5 md:py-2.5 py-2">
        <h6 className="text-primaryColor lg:text-2xl md:text-lg text-base  font-lexed font-medium">
          My Wishlists
        </h6>
      </div>
      <div className="grid  lg:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-2 lg:px-5 md:px-2.5 px-1.5  pt-8">
        {wishListItems?.map((item) => (
          <ProductCard card={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Wishlists;
