'use client';

import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Don't render anything on the server
  if (!mounted) return null;

  // Don't render if animation is complete
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-white text-center">
        <div className="text-2xl mb-4">!!!!</div>
        <div className="animate-pulse">LOADING...</div>
      </div>
    </div>
  );
}
