'use client'
import Link from "next/link"
import { useEffect, useState } from 'react';

const Logo = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set a state indicating it's client-side rendering
  }, []);

  if (!isClient) {
    return null; // Return null until client-side rendering is initialized
  }

  return (
    <div>
   <div className="flex">
  {/* Top-left corner logo */}
  <div className="absolute mx-8 p-5 top-3 left-0 bg-gradient-to-r from-blue-800 contrast-200 to-teal-800 text-white flex items-center justify-center rounded-full w-16 h-16 shadow-lg transform hover:scale-110 hover:rotate-12 transition-all duration-300 ease-out">
    <Link
      href="/"
      className="flex items-center justify-center w-full h-full text-center font-extrabold text-2xl tracking-wider text-shadow-lg transition-all duration-300 ease-out"
    >
      MA
    </Link>
  </div>
</div>
</div>
  );
};

export default Logo;
