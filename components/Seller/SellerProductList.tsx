import { useListListingsQuery } from '@/apollograph/generated'
import React from 'react'
import ProductCard from '../Products/ProductCard'
import ProductLoader from '../Loader/ProductLoader'
import NotMatched from '../NotMatched/NotMatched'

function SellerProductList({sellerId}: {sellerId: any}) {
    const {data, error, loading } = useListListingsQuery({
        variables: {
            filters: {
                userIds: [sellerId],
                status : "approved"
            }
        },
        skip: !sellerId
    })
    const listings = data?.listListings.items
    console.log("Listing")
    if (!loading && listings?.length == 0){
        return <NotMatched 
        title={"It looks like this seller hasn’t listed any products yet."}
        subtitle={"Check back soon to see what they have to offer!"} 
        />
    }
    return (
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-2 w-full lg:pb-10 md:pb-6 pb-4">
            {loading && <ProductLoader />}
            {listings?.map((prod) => (
                <ProductCard product={prod} key={prod.id} />
            ))} 
        </div>
  )
}

export default SellerProductList