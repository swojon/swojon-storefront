"use client"

import { useListOrdersQuery } from "@/apollograph/generated"
import { OrderCard } from "@/components/Order/OrderCard"
import OrderLoader from "@/components/Order/OrderLoader";




export default function MyOrdersPage() {
  const {data, error, loading} = useListOrdersQuery();
  const orders = data?.listOrders.items;

  if (loading) {
    return <OrderLoader/>
  }
  return (
   
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">My Orders</h1>
          <p className="text-gray-600 mt-1">Track and manage your orders</p>
        </div>

        <div className="space-y-6">
          {orders?.length! > 0 ? orders?.map((order) => (
            <OrderCard key={order.id} order={order} />
          )) : (
          <div className="text-center py-12">
            <div className="mx-auto h-24 w-24 text-gray-400">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">No orders yet</h3>
            <p className="mt-2 text-gray-500">Start shopping to see your orders here.</p>
            <button className="mt-4 px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors">
              Start Shopping
            </button>
          </div>
        )}
        </div>

       
      </div>

  )
}
