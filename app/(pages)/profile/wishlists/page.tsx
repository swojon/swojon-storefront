"use client";
import { useListFavoriteListingQuery } from "@/apollograph/generated";
import ProductLoader from "@/components/Loader/ProductLoader";
import ProductCard from "@/components/Products/ProductCard";
import { useSelector } from "react-redux";
import { HiArrowLeft } from "react-icons/hi2";
import useIsMobile from "@/lib/hooks/useIsMobile";
import Link from "next/link";
import NotMatched from "@/components/NotMatched/NotMatched";
import { useSession } from "next-auth/react";

const Wishlists = () => {
  const {data: session} = useSession();
  const { data, error, loading } = useListFavoriteListingQuery({
    variables: {
      userId: session?.user?.id!
    },
    skip: !session?.user?.id
  });
  const wishListItems = data?.listFavoriteListing.items;
  const isMobile = useIsMobile();
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
      <div className="w-full pt-8 grid lg:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-2">
            {wishListItems?.map((card) => (
              <ProductCard product={card} key={card.id} />
            ))}
            {loading && <ProductLoader />}
          </div>
          {/* {data?.listFavoriteListing.hasMore && 
          <div className="flex justify-center mt-7">
            <button onClick={handleLoadMore} className=" w-full py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              Load More
            </button>
          </div>
          } */}

          {!loading && (!wishListItems || wishListItems.length <= 0) && (
            <div className=" pt-16">
              <NotMatched title={"It looks like you haven’t favorited any products yet."}
              subtitle={"Browse through and save your favorites!"}
              cta={{
                text: "Explore products",
                link : "/explore"
              }} />
              
            </div>
          )}

    </section>
  );
};

export default Wishlists;
