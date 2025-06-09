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
    return {
      title: "Sorry, we couldn't find this listing.",
      description: "It may have been removed or is no longer available. Browse our other listings to find what you're looking for.",
    }
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
      images: listing.media.length > 0 ? listing.media[0].url : null
    },
    twitter: {
      card: "summary_large_image",
      title: listing.title,
      description: listing.description,
      images: listing.media.length > 0 ? listing.media[0].url : null,
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
