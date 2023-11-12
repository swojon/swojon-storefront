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
      <div className="border-b px-5 py-3.5">
        <h6 className="text-primaryColor text-2xl font-lexed font-medium">
          My Wishlists
        </h6>
      </div>
      <div className="grid grid-cols-4 gap-2 px-1 pt-8">
        {wishListItems?.map((item) => (
          <ProductCard card={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Wishlists;
