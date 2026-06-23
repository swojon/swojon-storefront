'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LuPackage, LuSearch } from 'react-icons/lu';


export default function TrackOrderSearch() {
  const router = useRouter();
  const [orderId, setOrderId] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId.trim()) return;

    setIsSearching(true);
    // Update URL to trigger OrderDisplay component
    router.push(`/track?orderId=${encodeURIComponent(orderId.toUpperCase())}`);
  };

  return (
    <div className="mt-10 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-blue-100 p-4">
              <LuPackage className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-slate-900">Track Your Order</h1>
          <p className="mt-2 text-slate-600">
            Enter your order ID to see the status and delivery details
          </p>
        </div>

        {/* Search Form */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
          <form onSubmit={handleSearch} className="space-y-5">
            <div>
              <label
                htmlFor="order-id"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Order ID
              </label>
              <input
                id="order-id"
                type="text"
                placeholder="e.g., X34Y5Z"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value.toUpperCase())}
                disabled={isSearching}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-activeColor focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </div>

            <button
              type="submit"
              disabled={isSearching || !orderId}
              className="w-full flex items-center justify-center gap-2 bg-activeColor hover:bg-activeColor disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-2.5 rounded-lg transition-colors"
            >
              {isSearching ? (
                <>
                  <div className="animate-spin">
                    <LuSearch className="h-4 w-4" />
                  </div>
                  Searching...
                </>
              ) : (
                <>
                  <LuSearch className="h-4 w-4" />
                  Track Order
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
