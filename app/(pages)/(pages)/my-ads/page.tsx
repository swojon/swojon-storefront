"use client";
import Image from "next/image";
import icon1 from "@/public/assets/heartIcon.png";
import time from "@/public/assets/time.png";
import user from "@/public/user1.jpg";
import Link from "next/link";
import { useListListingsQuery } from "@/apollograph/generated";
import { useSelector } from "react-redux";
import ProductCard from "@/components/Products/ProductCard";

const ProductLists = () => {
  const authState = useSelector((state: any ) => state.auth)
  const {data, error, loading} = useListListingsQuery({
    variables: {
      filters: {
        userIds : [authState.user.id]
      },
    },
    skip: !authState.user.id  
  })
  const myProducts = data?.listListings.items;

  return (
    <section>
      <div className="border-b px-5 py-3.5">
        <h6 className="text-primaryColor text-2xl font-lexed font-medium">
          My Product Lists
        </h6>
      </div>

      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4 px-5 pt-10">
        {myProducts && myProducts?.map((product) => (
          <ProductCard card={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductLists;
