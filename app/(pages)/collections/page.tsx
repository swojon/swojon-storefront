"use client";
import { useListCollectionsQuery } from "@/apollograph/generated";
import CollectionCard from "@/components/CollectionCard/CollectionCard";
import { MdKeyboardArrowRight } from "react-icons/md";
import CategoryCardLoader from "@/components/Loader/CategoryCardLoader";


const Collections = () => {
  const { data, loading, error, fetchMore, networkStatus } =
    useListCollectionsQuery({
      variables: {
        limit: 100,
      },
      notifyOnNetworkStatusChange: true,
      nextFetchPolicy: "cache-first",
    });

  const loadMore = () => {
    fetchMore({
      variables: {
        limit: 100,
        startingAfter:
          data?.listCollections.items[data.listCollections.items.length - 1].id,
      },
      updateQuery: (prev: any, { fetchMoreResult }: any) => {
        if (!fetchMoreResult.listCollections.items) return prev;
        return {
          listCollections: {
            items: [
              ...prev.listCollections.items,
              ...fetchMoreResult.listCollections.items,
            ],
            hasMore: fetchMoreResult.listCollections.hasMore,
            count: fetchMoreResult.listCollections.count,
          },
        };
      },
    });
  };

  return (
    <main className="custom-container relative">
      <div className="mt-10 text-center font-lexed space-y-3">
        <div className="flex items-center space-x-1 justify-center text-secondColor">
          <h1 className="text-base">Home</h1>
          <MdKeyboardArrowRight />
          <h1 className="text-base">Collections</h1>
        </div>
        <h5 className="text-3xl  font-medium text-primaryColor">
          Browse All Collections
        </h5>
      </div>
      {loading && (
        <div className="w-full pt-10">
          <CategoryCardLoader />
        </div>
      )}
      <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-5 pt-10">
        {data &&
          data?.listCollections.items.map((category) => (
            <CollectionCard item={category} key={category.id} />
          ))}
      </div>
      {/* {data?.listCollections.hasMore && (
        <div className="flex items-center justify-center mt-2">
          <button onClick={loadMore} className="border border-activeColor text-activeColor  rounded-md p-1 text-center md:text-base  sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300">Load More</button>
        </div>
      )} */}
    </main>
  );
};

export default Collections;
