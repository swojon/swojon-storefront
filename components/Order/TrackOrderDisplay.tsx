'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LuAlertCircle, LuCheckCircle, LuClock, LuCopy, LuLoader2, LuMapPin, LuPackage } from 'react-icons/lu';
import { GetOrderQueryResult, useGetOrderQuery } from '@/apollograph/generated';
import OrderSummary from './OrderSummary';
import { CANCELLED } from 'dns';


const statusColors: Record<
  string,
  { bg: string; text: string; dot: string }
> = {
  PENDING: { bg: 'bg-yellow-50', text: 'text-yellow-700', dot: 'bg-yellow-500' },
  PROCESSING: {
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    dot: 'bg-blue-500',
  },
  PACKED: {
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    dot: 'bg-blue-500',
  },
  SHIPPED: {
    bg: 'bg-purple-50',
    text: 'text-purple-700',
    dot: 'bg-purple-500',
  },
  DELIVERED: {
    bg: 'bg-green-50',
    text: 'text-green-700',
    dot: 'bg-green-500',
  },
  CANCELLED: {
    bg: 'bg-red-50',
    text: 'text-red-700',
    dot: 'bg-red-500',
  },
};


interface OrderDisplayProps {
  orderId: string;
}

export default function TrackOrderDisplay({ orderId }: OrderDisplayProps) {
  const router = useRouter();
  const [order, setOrder] = useState<any | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [copied, setCopied] = useState(false);

  
  // Execute the query
  const {data, loading, error} = useGetOrderQuery({
    variables: { orderId },
    onCompleted(data) {
      if (data && data.getOrder) {
        setOrder(data.getOrder);
        setNotFound(false);
      } else {
        setOrder(null);
        setNotFound(true);
      }
    },
  });

  const shareLink = `${typeof window !== 'undefined' ? window.location.origin : ''}/track?orderId=${orderId}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <LuLoader2 className="h-8 w-8 text-blue-600 animate-spin" />
          </div>
          <p className="text-slate-600 font-medium">Fetching your order...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => router.push('/track')}
            className="mb-8 text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
          >
            ← Back to Search
          </button>

          <div className="rounded-lg border border-red-200 bg-red-50 p-6">
            <div className="flex items-start gap-4">
              <LuAlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-red-900">Order Not Found</h3>
                <p className="text-red-700 text-sm mt-1">
                  We couldn&apos;t find an order with ID <strong>{orderId}</strong>. Please check the order ID and try again.
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => router.push('/track')}
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-colors"
          >
            Search Another Order
          </button>
        </div>
      </div>
    );
  }

  if (!order) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => router.push('/track')}
          className="mb-6 text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
        >
          ← Back to Search
        </button>

        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-blue-100 p-4">
              <LuPackage className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-slate-900">Order #{order.orderId}</h1>
        </div>

        {/* Status Card */}
        <div
          className={`mb-8 p-6 sm:p-8 border-2 rounded-lg ${statusColors[order.status]?.bg}`}
        >
          <div className="flex items-start gap-4">
            <div
              className={`h-8 w-8 rounded-full ${statusColors[order.status]?.dot} flex items-center justify-center flex-shrink-0`}
            >
              {order.status === 'delivered' && (
                <LuCheckCircle className="h-5 w-5 text-white" />
              )}
            </div>
            <div className="flex-1">
              <span
                className={`inline-block px-3 py-1 rounded-full border border-current ${statusColors[order.status].text} bg-transparent text-sm font-semibold`}
              >
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </span>
              
            </div>
          </div>
        </div>

        {/* Order Details Grid */}
        <div className="grid gap-4 sm:grid-cols-2 mb-8">
          {/* Order ID */}
          <div className="p-4 sm:p-6 rounded-lg border border-gray-200 bg-white">
            <p className="text-sm font-medium text-slate-600 mb-1">Courier Information</p>
            <p className="text-lg font-semibold text-slate-900">
              {order.carrier ? order.carrier : 'N/A'}
              {order.trackingNumber ? ` - ${order.trackingNumber}` : ''}
            </p>
          </div>

          {/* Tracking Number */}
          {order.trackingNumber && (
            <div className="p-4 sm:p-6 rounded-lg border border-gray-200 bg-white">
              <p className="text-sm font-medium text-slate-600 mb-1">
                Tracking Number
              </p>
              <p className="text-lg font-semibold text-slate-900 font-mono">
                {order.trackingNumber}
              </p>
            </div>
          )}

          {/* Estimated Delivery */}
          <div className="p-4 sm:p-6 rounded-lg border border-gray-200 bg-white">
            <div className="flex items-center gap-3">
              <LuMapPin className="h-5 w-5 text-blue-600 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-slate-600">
                  Ship To
                </p>
                <p className="text-sm font-semibold text-slate-900">
                  {order.shippingAddress.name} <br/>
                  {order.shippingAddress.address} <br/>
                  {order.shippingAddress.phoneNumber}
                </p>
              </div>
            </div>
          </div>

         
        </div>

        {/* Order Items */}
        <div className="p-6 sm:p-8 rounded-lg border border-gray-200 bg-white mb-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            Order Items
          </h3>
          <div className="space-y-3">
            {order.items.map((item:any, index:any) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-b-0"
              >
                <div>
                  <p className="font-medium text-slate-900">{item.listing?.title}</p>
                  <p className="text-sm text-slate-600">Qty: {item.quantity}</p>
                </div>
                <p className="font-semibold text-slate-900">
                  ৳{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
            {/* shipping address */}
            <div
                className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-b-0"
              >
                <div>
                  <p className="font-medium text-slate-900">Delivery Charge</p>
                </div>
                <p className="font-semibold text-slate-900">
                  ৳{order.shipping.toFixed(2)}
                </p>
              </div>
              {/* order Final amount */}
            <div
                className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-b-0"
              >
                <div>
                  <p className="font-medium text-slate-900">Total Amount</p>
                </div>
                <p className="font-semibold text-slate-900">
                  ৳{order.finalAmount.toFixed(2)}
                </p>
              </div>

          </div>
          
        </div>

        {/* Share Link */}
        <div className="p-4 sm:p-6 bg-green-50 rounded-lg border border-green-200 mb-8">
          <p className="text-sm font-medium text-green-900 mb-3">Share Tracking Link</p>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={shareLink}
              readOnly
              className="flex-1 px-3 py-2 border border-green-200 rounded-lg bg-white text-sm text-slate-700 focus:outline-none"
            />
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
            >
              <LuCopy className="h-4 w-4" />
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>

        {/* Search Another Order */}
        <button
          onClick={() => router.push('/track')}
          className="w-full border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold py-2.5 rounded-lg transition-colors"
        >
          Search Another Order
        </button>
      </div>
    </div>
  );
}
