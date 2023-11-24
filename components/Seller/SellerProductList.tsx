import { useListListingsQuery } from '@/apollograph/generated'
import React from 'react'
import ProductCard from '../Products/ProductCard'

function SellerProductList({sellerId}: {sellerId: any}) {
    const {data, error, loading } = useListListingsQuery({
        variables: {
            filters: {
                userIds: [sellerId]
            }
        },
        skip: !sellerId
    })
    const listings = data?.listListings.items
    console.log("Listing")
    return (
        <>
            {listings?.map((card) => (
                <ProductCard card={card} key={card.id} />
            ))} 
            {!loading && listings?.length == 0 && <p>No Products </p>}
        </>
  )
}

export default SellerProductList