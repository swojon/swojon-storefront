"use client";
import { useRouter, useSearchParams } from "next/navigation";
import FilterBar from "@/components/FilterBar/FilterBar";
import { MdKeyboardArrowRight } from "react-icons/md";
import ProductCard from "@/components/Products/ProductCard";
import SortDropDown from "@/components/SortDropDown/SortDropDown";
import Link from "next/link";
import { FiFilter } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { setFilterOpen } from "@/app/redux/filterSlice";
import { useListListingsQuery } from "@/apollograph/generated";
import ProductLoader from "@/components/Loader/ProductLoader";
import AppliedFilter from "@/components/FilterBar/AppliedFilter";
import NotMatched from "@/components/NotMatched/NotMatched";
import { setModalOpen } from "@/app/redux/modalSlice";

const ExploreDetail = ({ params }: { params: any }) => {
  const appliedFilter = [];
  const searchParams = useSearchParams();
  const conditionFilter = searchParams.get("condition")?.split(",");
  const brandFilter = searchParams.get("brand")?.split(",");
  const communityFilter = searchParams.get("community")?.split(",");
  const categoryFilter = searchParams.get("category")?.split(",");
  const orderBy = searchParams.get("sort") ?? "default";

  var filters = {};
  // if (conditionFilter && conditionFilter.length > 0 ) filters = {...filters, condition: conditionFilter}
  filters = { ...filters, status: "approved" };
  if (brandFilter && brandFilter.length > 0)
    filters = { ...filters, brandSlug: brandFilter };
  if (communityFilter && communityFilter.length > 0)
    filters = { ...filters, communitySlug: communityFilter };
  if (categoryFilter && categoryFilter.length > 0)
    filters = { ...filters, categorySlug: categoryFilter };

  console.log("Applying filter", filters);
  const { data, loading, error, fetchMore } = useListListingsQuery({
    variables: {
      filters: filters,
      orderBy: orderBy,
      limit: 36,
    },
  });
  const listings = data?.listListings?.items;
  console.log("Got Listings", listings);
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    fetchMore({
      variables: {
        filters: filters,
        orderBy: orderBy,
        limit: 36,
        // endingBefore: listings![listings!.length - 1]?.id,
        startingAfter: data?.listListings.afterCursor,
      },
      updateQuery: (prev: any, { fetchMoreResult }: any) => {
        if (!fetchMoreResult.listListings.items) return prev;

        // console.log("Fetch More Result", fetchMoreResult)
        return {
          listListings: {
            ...prev.listListings,
            items: [
              ...prev.listListings.items,
              ...fetchMoreResult.listListings.items,
            ],
            hasMore: fetchMoreResult.listListings.hasMore,
          },
        };
      },
    });
  };

  return (
    <section className="custom-container py-10">
      <div className="flex md:flex-row flex-col gap-2 md:items-center md:justify-between">
        <div className="flex items-center space-x-1 justify-center text-sm text-secondColor">
          <Link href="/" className="">
            Home
          </Link>
          <MdKeyboardArrowRight />
          <h6 className="">All Ads</h6>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-between sm:items-center pt-4  gap-3">
        {/* <h3 className="text-lg border text-primaryColor">All Ads</h3> */}
        <div className="flex  md:flex-row flex-col gap-3 md:items-center  md:w-[75%] w-full ">
          <AppliedFilter />
        </div>
        <div className=" flex justify-between items-center gap-3 ">
          <span
            onClick={() =>
              dispatch(
                setModalOpen({
                  title: "this is a modal",
                  body: "filterModal",
                })
              )
            }
            className="border border-gray-400 py-1.5 px-2 rounded-md  text-base flex justify-center items-center text-activeColor cursor-pointer"
          >
            <FiFilter />
          </span>
          <div className="lg:w-[200px] md:w-[130px]">
            <SortDropDown />
          </div>
        </div>
      </div>
      {/* <div className="flex justify-between items-center pt-4 pb-2">
        <div className="flex items-center  w-[75%]">
          <span className="text-2xl text-primaryColor font-lexed flex items-center gap-2 w-[36%]">
            <span>All Ads </span>
          </span>
          <AppliedFilter />
        </div>
        <div className=" flex justify-between items-center gap-3 ">
          <span
            onClick={() => dispatch(setFilterOpen())}
            className="border border-gray-400 py-1.5 px-2 rounded-md  text-base flex justify-center items-center text-activeColor  lg:hidden"
          >
            <FiFilter />
          </span>
          <div className="lg:w-[200px] md:w-[130px]">
            <SortDropDown />
          </div>
        </div>
      </div> */}
      <div className="flex  gap-3 pt-5">
        {/* <div className="w-[25%] lg:block hidden">
          <FilterBar />
        </div> */}
        <div className=" w-full">
          <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-2 w-full">
            {listings?.map((card) => (
              <ProductCard card={card} key={card.id} />
            ))}
            {loading && <ProductLoader />}
          </div>
          {data?.listListings.hasMore && (
            <div className="flex justify-center mt-7">
              <button
                onClick={handleLoadMore}
                className=" w-full py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Load More
              </button>
            </div>
          )}

          {!loading && (!listings || listings.length <= 0) && (
            <div className=" pt-16">
              <NotMatched title={"Sorry! We didn't Find Any Product"} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExploreDetail;
