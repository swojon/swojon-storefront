"use client"

import { useState } from "react"

const statusConfig = {
  pending: { color: "bg-yellow-100 text-yellow-800", label: "Pending" },
  confirmed: { color: "bg-blue-100 text-blue-800", label: "Confirmed" },
  shipped: { color: "bg-purple-100 text-purple-800", label: "Shipped" },
  delivered: { color: "bg-green-100 text-green-800", label: "Delivered" },
  cancelled: { color: "bg-red-100 text-red-800", label: "Cancelled" },
}

export function OrderCard({ order }: {order: any}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isAddressExpanded, setIsAddressExpanded] = useState(false)

  const handleTrackOrder = () => {
    if (order.trackingUrl) {
      window.open(order.trackingUrl, "_blank")
    }
  }

  const handleReorder = () => {
    // Handle reorder functionality
    console.log("Reordering:", order.id)
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Header Section */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Order #{order.id}</h3>
              <p className="text-sm text-gray-500">Placed on {new Date(order.createdAt).toLocaleDateString()}</p>
            </div>
            {/* @ts-ignore  next-line*/}
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusConfig[order.status].color}`}
            >
            {/* @ts-ignore  next-line*/}
              {statusConfig[order.status].label}
            </span>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-gray-900">৳{order.finalAmount.toFixed(2)}</p>
            <p className="text-sm text-gray-500">{order.items.length} item(s)</p>
          </div>
        </div>
      </div>

      {/* Tracking Section */}
      {order.trackingNumber && (
        <div className="p-6 bg-gray-50 border-b border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-gray-900">Tracking Number</p>
              <p className="text-sm text-gray-600 font-mono">{order.trackingNumber}</p>
              {order.trackingStatus && <p className="text-sm text-gray-500 mt-1">Status: {order.trackingStatus}</p>}
              {/* {order.estimatedDelivery && (
                <p className="text-sm text-gray-500">Est. delivery: {order.estimatedDelivery}</p>
              )} */}
            </div>
            {order.trackingUrl && (
              <button
                onClick={handleTrackOrder}
                className="inline-flex items-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors"
              >
                Track Package
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Items Section */}
      <div className="p-6">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between w-full text-left"
        >
          <h4 className="text-sm font-medium text-gray-900">Order Items ({order.items.length})</h4>
          <svg
            className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Items Preview (when collapsed) */}
        {!isExpanded && (
          <div className="mt-3 flex -space-x-2">
            {order.items.slice(0, 3).map((item:any, index:number) => (
              <div key={item.id} className="relative">
                <img
                src={item.variant.media ? item.variant.media[0].url : item.listing.media ? item.listing.media[0].url :  "/placeholder.svg"}

                  alt={item.listing.title}
                  className="h-10 w-10 rounded-full border-2 border-white object-cover"
                />
              </div>
            ))}
            {order.items.length > 3 && (
              <div className="flex items-center justify-center h-10 w-10 rounded-full border-2 border-white bg-gray-100 text-xs font-medium text-gray-500">
                +{order.items.length - 3}
              </div>
            )}
          </div>
        )}

        {/* Expanded Items List */}
        {isExpanded && (
          <div className="mt-4 space-y-4">
            {order.items.map((item:any) => (
              <div key={item.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <img
                  src={item.variant.media ? item.variant.media[0].url : item.listing.media ? item.listing.media[0].url :  "/placeholder.svg"}
                  alt={item.listing.title}
                  className="h-16 w-16 rounded-lg object-cover border border-gray-200"
                />
                <div className="flex-1 min-w-0">
                  <h5 className="text-sm font-medium text-gray-900 truncate">{item.name}</h5>
                  {/* {item.variant && <p className="text-xs text-gray-500">{item.variant.}</p>} */}
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">৳{(item.variant.salePrice * item.quantity).toFixed(2)}</p>
                  <p className="text-xs text-gray-500">৳{item.variant.salePrice.toFixed(2)} each</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Shipping Address Section */}
      <div className="px-6 pb-4">
        <button
          onClick={() => setIsAddressExpanded(!isAddressExpanded)}
          className="flex items-center justify-between w-full text-left"
        >
          <h4 className="text-sm font-medium text-gray-900">Shipping Address</h4>
          <svg
            className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
              isAddressExpanded ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isAddressExpanded && (
          <div className="mt-3 p-3 bg-gray-50 rounded-lg text-sm text-gray-600">
            <p className="font-medium text-gray-900">{order.shippingAddress.name}</p>
            <p>{order.shippingAddress.address}</p>
            <p>
              {order.shippingAddress.district}, {order.shippingAddress.policeStation}
            </p>
            <p>Phone: {order.shippingAddress.phoneNumber}</p>
          </div>
        )}
      </div>

      {/* Actions Section */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 rounded-b-lg">
        {/* <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleReorder}
            className="flex-1 sm:flex-none px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors"
          >
            Reorder
          </button>
          {order.status === "delivered" && (
            <button className="flex-1 sm:flex-none px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors">
              Write Review
            </button>
          )}
          {(order.status === "pending" || order.status === "confirmed") && (
            <button className="flex-1 sm:flex-none px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition-colors">
              Cancel Order
            </button>
          )}
          <button className="flex-1 sm:flex-none px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors">
            View Details
          </button>
        </div> */}
      </div>
    </div>
  )
}
