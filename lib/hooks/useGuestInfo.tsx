"use client";

import { useEffect, useState, useCallback } from "react";

const STORAGE_KEY = "guest_info";

export type GuestInfo = {
  name: string;
  phoneNumber: string;
  address: string;
  district: string;
  policeStation: string;
};

type UseGuestInfoReturn = {
  guestInfo: GuestInfo | null;
  isReady: boolean;
  saveGuestInfo: (info: GuestInfo) => void;
  clearGuestInfo: () => void;
};

export function useGuestInfo(): UseGuestInfoReturn {
  const [guestInfo, setGuestInfo] = useState<GuestInfo | null>(null);
  const [isReady, setIsReady] = useState(false);

  // Load from localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setGuestInfo(JSON.parse(stored));
      }
    } catch (error) {
      console.error("Failed to load guest info:", error);
    } finally {
      setIsReady(true);
    }
  }, []);

  // Save info
  const saveGuestInfo = useCallback((info: GuestInfo) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(info));
      setGuestInfo(info);
    } catch (error) {
      console.error("Failed to save guest info:", error);
    }
  }, []);

  // Clear info
  const clearGuestInfo = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      setGuestInfo(null);
    } catch (error) {
      console.error("Failed to clear guest info:", error);
    }
  }, []);

  return {
    guestInfo,
    isReady,
    saveGuestInfo,
    clearGuestInfo,
  };
}