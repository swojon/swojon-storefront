"use client";
import { useGetListingQuery } from '@/apollograph/generated';
import BreadCrumbsLoader from '@/components/Loader/BreadCrumbsLoader';
import NotFound from '@/components/NotMatched/NotFound';
import Uploads from '@/components/Uploads/Uploads'
import { useSession } from 'next-auth/react';
import React from 'react'

const ProductEditPage = ({ params }: { params: { slug: string } }) => {
    const productId = parseInt(params.slug, 10);
    const {data:session, status} = useSession();

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
    <>
    {product?.user?.id !== session?.user?.id ? <NotFound 
      title="Oops! You don't have permission to do the operation" 
      cta={{
        text: "View My products",
        link: "/profile/my-ads"
      }}/> :  
    <section className=" py-10 ">
        <Uploads product={product} />
    </section>
  }
  </>
    
  )
}

export default ProductEditPage