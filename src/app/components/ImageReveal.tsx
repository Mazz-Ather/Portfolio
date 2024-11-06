'use client';

import { motion, useSpring } from 'framer-motion';
import React, { useState, MouseEvent, useRef } from 'react';

interface ImageItem {
  img: string;
  label: string;
}

function ImageReveal() {
  const [img, setImg] = useState<{ src: string; alt: string; opacity: number }>({
    src: '',
    alt: '',
    opacity: 0,
  });

  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const list: ImageItem[] = [
    {
        img: '/html1.jpg', // HTML CSS Development
        label: 'HTML CSS Development',
      },
      {
        img: 'download.jpeg', // React.js Development
        label: 'React.js Development',
      },
      {
        img: 'next1.jpg', // Next.js Development
        label: 'Next.js Development',
      },
      {
        img: 'wordpress.jpg', // WordPress Development
        label: 'WordPress Development',
      },
      {
        img: 'webdesign1.jpg', //web Development
        label: 'Web Designing',
      },
  ];

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  const imagePos = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const { clientX, clientY } = e;
    const relativeX = clientX - containerRect.left;
    const relativeY = clientY - containerRect.top;

    imagePos.x.set(relativeX - imageRef.current.offsetWidth / 2);
    imagePos.y.set(relativeY - imageRef.current.offsetHeight / 2);
  };

  const handleImageInteraction = (item: ImageItem, opacity: number) => {
    setImg({ src: item.img, alt: item.label, opacity });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMove}
      className="bg-black relative w-full mx-auto py-16 p-4 gap-9"
    >
       <h2 className="text-6xl font-semibold text-[#3d70f2] text-center mb-8">
        Services I Offered
      </h2>

      {list.map((item) => (
        <div
          key={item.label}
          onMouseEnter={() => handleImageInteraction(item, 1)}
          onMouseMove={() => handleImageInteraction(item, 1)}
          onMouseLeave={() => handleImageInteraction(item, 0)}
          className="w-full py-5 cursor-pointer text-center flex justify-between text-white border-b border-white last:border-none"
        >
          <p className="text-5xl">{item.label}</p>
          <span>Portfolio</span>
        </div>
      ))}

      <motion.img
        ref={imageRef}
        src={img.src}
        alt={img.alt}
        className="w-[300px] h-[220px] rounded-lg object-cover absolute top-0 left-0 transition-opacity duration-200 ease-in-out pointer-events-none"
        style={{
          x: imagePos.x,
          y: imagePos.y,
          opacity: img.opacity,
        }}
      />
    </section>
  );
}

export default ImageReveal;
