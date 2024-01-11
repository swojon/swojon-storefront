"use client";
import { useListListingsQuery } from "@/apollograph/generated";
import { useSelector } from "react-redux";
import ProductCard from "@/components/Products/ProductCard";
import ProductLoader from "@/components/Loader/ProductLoader";

const ProductLists = () => {
  const authState = useSelector((state: any) => state.auth);
  const { data, error, loading } = useListListingsQuery({
    variables: {
      filters: {
        userIds: [authState.user.id],
        status: "approved",
      },
    },
    skip: !authState.user.id,
  });
  const myProducts = data?.listListings.items;

  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4 px-5 pt-10">
      {" "}
      {loading && <ProductLoader />}
      {myProducts &&
        myProducts?.map((product) => (
          <ProductCard card={product} key={product.id} />
        ))}
    </div>
  );
};

export default ProductLists;
