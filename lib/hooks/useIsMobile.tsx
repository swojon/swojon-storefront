import { useEffect, useState, useCallback } from "react";

const MOBILE_BREAKPOINT = 768;

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(() => 
    typeof window !== 'undefined' ? window.innerWidth <= MOBILE_BREAKPOINT : false
  );

  const handleWindowSizeChange = useCallback(() => {
    setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
  }, []);

  useEffect(() => {
    // Skip effect on SSR
    if (typeof window === 'undefined') return;

    // Throttle the resize event
    let timeoutId: ReturnType<typeof setTimeout>;
    
    const throttledHandler = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleWindowSizeChange, 150);
    };

    window.addEventListener('resize', throttledHandler);
    
    return () => {
      window.removeEventListener('resize', throttledHandler);
      clearTimeout(timeoutId);
    };
  }, [handleWindowSizeChange]);

  return isMobile;
};

export default useIsMobile;