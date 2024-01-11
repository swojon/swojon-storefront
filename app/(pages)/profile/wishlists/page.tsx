"use client";
import { useListFavoriteListingQuery } from "@/apollograph/generated";
import FollowerLists from "@/components/FollowerLists/FollowerLists";
import ProductLoader from "@/components/Loader/ProductLoader";
import ProductLists from "@/components/ProductLists/ProductLists";
import ProductCard from "@/components/Products/ProductCard";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useSelector } from "react-redux";
import { HiArrowLeft } from "react-icons/hi2";
import useIsMobile from "@/lib/hooks/useIsMobile";
import NotFound from "../../not-found/page";
import Link from "next/link";

const Wishlists = () => {
  const authState = useSelector((state: any) => state.auth);
  console.log("authState", authState);
  const { data, error, loading } = useListFavoriteListingQuery({
    variables: {
      userId: authState?.user?.id,
    },
  });
  const wishListItems = data?.listFavoriteListing.items;
  const isMobile = useIsMobile();
  console.log("wish", wishListItems);
  return (
    <section>
      <div className="relative">
        {isMobile && (
          <Link
            href={"/profile"}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 border border-secondColor  rounded-md  cursor-pointer"
          >
            <HiArrowLeft className="text-primaryColor" />
          </Link>
        )}{" "}
        <h6 className="text-primaryColor text-center md:text-left lg:text-2xl md:text-lg text-base font-lexed font-bold ">
          My Favorites
        </h6>
      </div>
      {/* {!!wishListItems || wishListItems?.length == 0(<NotFound />)} */}
      <div>
        {loading ? (
          <div className=" pt-8 grid lg:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-2">
            <ProductLoader />
          </div>
        ) : (
          <div
            className={`${
              wishListItems
                ? " grid lg:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-2"
                : " w-full"
            }   pt-8`}
          >
            {wishListItems ? (
              <>
                {wishListItems?.map((item) => (
                  <ProductCard card={item} key={item.id} />
                ))}
              </>
            ) : (
              <>
                <NotFound />
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Wishlists;
