"use client";

import { useEffect, useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

const GUEST_KEY = "guest_id";

type UseGuestIdReturn = {
  guestId: string | null;
  isReady: boolean;
  resetGuestId: () => void;
};

export function useGuestId(): UseGuestIdReturn {
  const [guestId, setGuestId] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);

  // Helper to set cookie
  const setCookie = (id: string) => {
    document.cookie = `${GUEST_KEY}=${id}; path=/; max-age=31536000`; // 1 year
  };

  // Initialize guest ID
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      let existingGuestId = localStorage.getItem(GUEST_KEY);

      if (!existingGuestId) {
        existingGuestId = uuidv4();
        localStorage.setItem(GUEST_KEY, existingGuestId);
      }

      setGuestId(existingGuestId);
      setCookie(existingGuestId);
    } catch (error) {
      console.error("Guest ID initialization failed:", error);
    } finally {
      setIsReady(true);
    }
  }, []);

  // Optional: reset guest (useful after login/logout flows)
  const resetGuestId = useCallback(() => {
    try {
      const newGuestId = uuidv4();
      localStorage.setItem(GUEST_KEY, newGuestId);
      setCookie(newGuestId);
      setGuestId(newGuestId);
    } catch (error) {
      console.error("Failed to reset guest ID:", error);
    }
  }, []);

  return {
    guestId,
    isReady,
    resetGuestId,
  };
}