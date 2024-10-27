"use client";
import { useListListingsQuery } from "@/apollograph/generated";
import ProductLoader from "@/components/Loader/ProductLoader";
import NotMatched from "@/components/NotMatched/NotMatched";
import ProductCard from "@/components/Products/ProductCard";
import { useSession } from "next-auth/react";

const ProductLists = () => {
  const {data: session} = useSession();
  const { data, error, loading } = useListListingsQuery({
    variables: {
      filters: {
        userIds: [session?.user?.id!],
      },
    },
    skip: !session?.user?.id,
  });
  const myProducts = data?.listListings.items;

  return (
    <>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 pt-5">
        {loading && <ProductLoader />}
        {myProducts &&
          myProducts?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>

      {!loading && (!myProducts || myProducts.length <= 0) && (
        <div className=" pt-16">
          <NotMatched 
          title={"Oops! It looks like you haven’t added any products to our website yet"} 
          cta={{
            text: "list new product", 
            link : "/upload-product"
          }}
          />
        </div>
      )}
    </>
  );
};

export default ProductLists;
