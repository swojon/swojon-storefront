'use client';

import { useEffect } from 'react';

const PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;


const initFacebookPixel = () => {
  if (!window.fbq) {
    window.fbq = function () {
      window.fbq.callMethod
        ? window.fbq.callMethod(...arguments)
        : window.fbq.queue.push(arguments);
    };
    window.fbq.queue = [];
    window.fbq.version = '2.0';
    window.fbq.loaded = true;

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script);
  }

  if (!window.fbq.initialized) {
    window.fbq('init', PIXEL_ID);
    window.fbq.initialized = true; // Ensure initialization happens only once
  }
};

export const trackFacebookEvent = (eventName, options = {}) => {
  if (window.fbq) {
    window.fbq('track', eventName, options);
  }
};

export default function FacebookPixel() {
  useEffect(() => {
    initFacebookPixel();
    window.fbq('track', 'PageView'); // Track PageView only once after initialization
  }, []);

  return null; // No visual output
}