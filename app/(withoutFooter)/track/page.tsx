'use client';

import TrackOrderDisplay from '@/components/Order/TrackOrderDisplay';
import TrackOrderSearch from '@/components/Order/TrackOrderSearch';
import { useSearchParams } from 'next/navigation';

export default function TrackOrderPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');

  // If orderId exists in URL, show OrderDisplay component
  // Otherwise, show OrderSearch component
  return orderId ? (
    <TrackOrderDisplay orderId={orderId} />
  ) : (
    <TrackOrderSearch />
  );
}
