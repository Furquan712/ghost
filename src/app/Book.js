"use client";

import { useEffect, useRef } from 'react';
import $ from 'jquery'; // Import the npm-installed jQuery

export default function Book({ children, options }) {
  const bookRef = useRef(null);

  useEffect(() => {
    // Initialize turn.js if available on the target element.
    if (bookRef.current && typeof $(bookRef.current).turn === 'function') {
      $(bookRef.current).turn(options);
    } else {
      console.warn("turn.js is not available. Check that the script is loaded.");
    }
    
    // Optional cleanup if you need to destroy turn.js instance on unmount.
    return () => {
      if (bookRef.current && typeof $(bookRef.current).turn === 'function') {
        $(bookRef.current).turn('destroy');
      }
    };
  }, [options]);

  return (
    <div ref={bookRef} className="book">
      {children}
    </div>
  );
}
