import { GetCategoryDocument, GetCollectionDocument, GetListingDocument } from "@/apollograph/generated";

import request from "graphql-request";
import { Metadata } from "next";
import CollectionDetails from "@/components/CollectionCard/CollectionDetails";

export async function generateMetadata  ({ params }: { params: { collectionSlug: string } }) :Promise<Metadata>{
  let post ;
  console.log("params",params)
  const collectionSlug = params.collectionSlug;
  console.log("categorySlug",collectionSlug)
  try {
    post = await request({
      url : process.env.NEXT_PUBLIC_GRAPHQL_URL!,
      document: GetCollectionDocument,
      variables: {
        slug: collectionSlug
      }
    })
  } catch (error) {
    console.log("Error fetching category",error)
    return {
      title: "Curated Collections for Kids & Moms",
      description: "Explore curated picks for your loved ones — from babywear to mom care. Swojon brings heartfelt collections, quality products & fast, on-time delivery.",
    }
  }
  // @ts-ignore
  const collection = post?.getCollection;
  console.log("category",collection)
  const opengraph:Metadata = {
    title: `Explore ${collection.name ?? "Collection"} | Swojon official Store`,
    description: collection.description,
    alternates: {
      canonical: `/collections/${collection.slug}`,
    },
    openGraph: {
      title: `${collection.name ?? "Category"} | Swojon official Store`,
      description: collection.description,
      images: collection.banner
    },
    twitter: {
      card: "summary_large_image",
      title: `${collection.name ?? "Category"} | Swojon official Store`,
      description: collection.description,
      images: collection.banner,
    },
  }
  return opengraph
}

const CategoryDetailPage = ({params}:{params:{collectionSlug:string}}) => {  
  return <CollectionDetails slug={params.collectionSlug} />
}
export default CategoryDetailPage;
