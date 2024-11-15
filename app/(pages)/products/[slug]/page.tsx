import React from "react";
import { GetListingDocument } from "@/apollograph/generated";
import "@/components/Seller/Seller.css";
import { Metadata } from "next";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import {request} from 'graphql-request';


export async function generateMetadata  ({ params }: { params: { slug: string } }) :Promise<Metadata>{
  let post ;
  const productId =  parseInt(params.slug, 10) 
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
  // @ts-ignore
  const listing = post?.getListing;

  const opengraph:Metadata = {
    title: listing.title ?? "Not Found",
    description: listing.description ?? "The post not found",
    alternates: {
      canonical: `/products/${productId}`,
    },
    openGraph: {
      title: listing.title ?? "Not Found",
      description: listing.description ?? "The post not found",
      images: listing.media[0].url
    },
    twitter: {
      card: "summary_large_image",
      title: listing.title,
      description: listing.description,
      images: listing.media[0].url ,
    },  
  }
  return opengraph
}
const ProductDetailsPage = ({ params }: { params: { slug: string } }) => {
  const productId = parseInt(params.slug, 10);
  return (
    <ProductDetails productId={productId} />
  )
  
};

export default ProductDetailsPage;
