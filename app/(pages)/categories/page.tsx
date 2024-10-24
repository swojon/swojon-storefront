"use client";
import { useListCategoriesQuery } from "@/apollograph/generated";
import CategoryCard2 from "@/components/CategoryCard/CategoryCard2";
import { MdKeyboardArrowRight } from "react-icons/md";
import CategoryCardLoader from "@/components/Loader/CategoryCardLoader";


const Categories = () => {
  const { data, loading, error, fetchMore, networkStatus } =
    useListCategoriesQuery({
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
          data?.listCategories.items[data.listCategories.items.length - 1].id,
      },
      updateQuery: (prev: any, { fetchMoreResult }: any) => {
        if (!fetchMoreResult.listCategories.items) return prev;
        return {
          listCategories: {
            items: [
              ...prev.listCategories.items,
              ...fetchMoreResult.listCategories.items,
            ],
            hasMore: fetchMoreResult.listCategories.hasMore,
            count: fetchMoreResult.listCategories.count,
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
          <h1 className="text-base">Categories</h1>
        </div>
        <h5 className="text-3xl  font-medium text-primaryColor">
          Browse All Category
        </h5>
      </div>
      {loading && (
        <div className="w-full pt-10">
          <CategoryCardLoader />
        </div>
      )}
      <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-5 pt-10">
        {data &&
          data?.listCategories.items.map((category) => (
            <CategoryCard2 item={category} key={category.id} />
          ))}
      </div>
      {data?.listCategories.hasMore && (
        <div className="flex items-center justify-center mt-2">
          <button onClick={loadMore} className="border border-activeColor text-activeColor  rounded-md p-1 text-center md:text-base  sm:text-sm text-xs hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 duration-300">Load More</button>
        </div>
      )}
    </main>
  );
};

export default Categories;
