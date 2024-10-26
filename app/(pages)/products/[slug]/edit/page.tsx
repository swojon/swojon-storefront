"use client";
import { useGetListingQuery } from '@/apollograph/generated';
import NotFound from '@/app/(pages)/404/page';
import BreadCrumbsLoader from '@/components/Loader/BreadCrumbsLoader';
import Uploads from '@/components/Uploads/Uploads'
import dynamic from 'next/dynamic';
import React from 'react'

const ProductEditPage = ({ params }: { params: { slug: string } }) => {
    const productId = parseInt(params.slug, 10);
    const { data, error, loading } = useGetListingQuery({
        variables: {
          id: productId,
        },
        skip: !productId,
      });
      const product = data?.getListing;
    
      if (!loading && !product ){
        return (
          <NotFound 
          title="Oops! We can’t seem to find that product" 
          subtitle="It might have been moved, or maybe the link is broken."
          cta={{
            text: "Explore Products",
            link: "/explore"
          }}/>
        )
      }
    if (loading){
        return <BreadCrumbsLoader />
    }
  return (
    <section className=" py-10 ">
        <Uploads product={product} />
    </section>
  )
}

export default ProductEditPage