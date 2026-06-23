"use client"

import type React from "react"

import { useState } from "react"

export default function OrderSummary() {
  const [promoCode, setPromoCode] = useState("")
  const [isApplying, setIsApplying] = useState(false)

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault()
    setIsApplying(true)
    // Simulate API call
    setTimeout(() => {
      setIsApplying(false)
      setPromoCode("")
      // Here you would handle the actual promo code application
    }, 1000)
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-6">Order Summary</h2>

        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-gray-900 font-medium">$120.00</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Discount</span>
            <span className="text-green-600 font-medium">-$24.00</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Shipping</span>
            <span className="text-gray-900 font-medium">$8.95</span>
          </div>

          <div className="pt-4 mt-4 border-t border-gray-100">
            <div className="flex justify-between">
              <span className="text-gray-900 font-medium">Grand Total</span>
              <span className="text-gray-900 font-bold">$104.95</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <form onSubmit={handleApplyPromo} className="flex flex-col space-y-3">
            <label htmlFor="promo" className="text-sm font-medium text-gray-700">
              Promo Code
            </label>
            <div className="flex space-x-2">
              <input
                type="text"
                id="promo"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Enter code"
                className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <button
                type="submit"
                disabled={!promoCode || isApplying}
                className={`px-4 py-2 text-sm font-medium text-white rounded-md bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors ${
                  !promoCode || isApplying ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isApplying ? "Applying..." : "Apply"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
