import { GetCategoryDocument } from "@/apollograph/generated";

import request from "graphql-request";
import { Metadata } from "next";
import CategoryDetails from "@/components/CategoryCard/CategoryDetails";

export async function generateMetadata  ({ params }: { params: { categorySlug: string } }) :Promise<Metadata>{
  let post ;
  const categorySlug = params.categorySlug;
  try {
    post = await request({
      url : process.env.NEXT_PUBLIC_GRAPHQL_URL!,
      document: GetCategoryDocument,
      variables: {
        slug: categorySlug
      }
    })
  } catch (error) {
    return {
      title: "Sorry, we couldn't find this category.",
      description: "It may have been removed or is no longer available. Browse our other categories to find what you're looking for.",
    }
  }
  // @ts-ignore
  const category = post?.getCategory;
  console.log("category",category)
  const opengraph:Metadata = {
    title: `Explore ${category.name ?? "Category"} | Swojon official Store`,
    description: category.description,
    alternates: {
      canonical: `/categories/${category.slug}`,
    },
    openGraph: {
      title: `${category.name ?? "Category"} | Swojon official Store`,
      description: category.description, 
      images: category.banner
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.name ?? "Category"} | Swojon official Store`,
      description: category.description,
      images: category.banner,
    },
  }
  return opengraph
}

const CategoryDetailPage = ({params}:{params:{categorySlug:string}}) => {  
  return <CategoryDetails slug={params.categorySlug} />
}
export default CategoryDetailPage;
