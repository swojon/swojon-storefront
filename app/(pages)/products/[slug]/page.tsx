import React from "react";
import { GetListingDocument, useGetListingQuery } from "@/apollograph/generated";
import "@/components/Seller/Seller.css";
import { Metadata } from "next";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import {request} from 'graphql-request';

export async function generateMetadata  ({ params }: { params: { slug: string } }) :Promise<Metadata>{
  let post ;
  const productId =  parseInt(params.slug, 10)
  console.log("url", process.env.NEXT_PUBLIC_GRAPHQL_URL)
  try {
    post = await request({
      url : process.env.NEXT_PUBLIC_GRAPHQL_URL!,
      document: GetListingDocument,
      variables: {
        id: productId
      }
    })
  } catch (error) {
    console.log(post)
  }
  console.log("Got post", post)
  return {
    // @ts-ignore
    title: post?.getListing?.title ?? "Not Found",
    // @ts-ignore
    description: post?.getListing?.description ?? "The post not found",
    alternates: {
      canonical: `/products/${productId}`,
      
    }
  }

}
const ProductDetailsPage = ({ params }: { params: { slug: string } }) => {
  const productId = parseInt(params.slug, 10);
  return (
    <ProductDetails productId={productId} />
  )
  
};

export default ProductDetailsPage;
