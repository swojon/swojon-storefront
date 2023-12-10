import { GetListingDocument } from "@/apollograph/generated";
import request from "graphql-request";
import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'

export async function Image({ params }: { params: { slug: string } }){
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

    return new ImageResponse(
        (
            <div tw="relative flex items-center justify-center">
                {/* @ts-ignore */}
                <img src={post?.getListing?.media[0].url} alt="" />
                <div tw="absolute flex bg-black opacity-50 inset-0" />
                <div tw="absolute flex items-center top-2 w-full">
                {/* @ts-ignore */}
                    <p tw="text-white text-4xl flex font-bold m-5">{post?.getListing?.title}</p>
                {/* @ts-ignore */}
                    
                    <p tw="text-indigo text-xl flex font-bold m-5">{post?.getListing?.user.email}</p>
                </div>
            </div>
        ),
    size
    )

}
