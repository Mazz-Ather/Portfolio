'use client';

import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';
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
      img: '/html1.jpg',
      label: 'HTML CSS Development',
    },
    {
      img: 'download.jpeg',
      label: 'React.js Development',
    },
    {
      img: 'next1.jpg',
      label: 'Next.js Development',
    },
    {
      img: 'sanity2.jpg',
      label: 'Sanity.io Development',
    },{
      img: 'ecommerce.webp',
      label: 'Ecommerce Web Development',
    },
  ];

  // Enhanced spring configuration for smoother movement
  const spring = {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
    restSpeed: 0.001,
  };

  // Add rotation for subtle hover effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [5, -5]);
  const rotateY = useTransform(mouseX, [-100, 100], [-5, 5]);

  const imagePos = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
    scale: useSpring(1, spring),
  };

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const { clientX, clientY } = e;
    const relativeX = clientX - containerRect.left;
    const relativeY = clientY - containerRect.top;

    mouseX.set(relativeX - containerRect.width / 2);
    mouseY.set(relativeY - containerRect.height / 2);

    imagePos.x.set(relativeX - imageRef.current.offsetWidth / 2);
    imagePos.y.set(relativeY - imageRef.current.offsetHeight / 2);
    imagePos.scale.set(1.05);
  };

  const handleImageInteraction = (item: ImageItem, opacity: number) => {
    setImg({ src: item.img, alt: item.label, opacity });
    if (opacity === 0) {
      imagePos.scale.set(1);
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMove}
      className="bg-black relative w-full mx-auto py-16 p-4 gap-9 overflow-hidden"
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
        </div>
      ))}

      <motion.img
        ref={imageRef}
        src={img.src}
        alt={img.alt}
        className="w-[300px] h-[220px] rounded-lg object-cover absolute top-0 left-0 pointer-events-none"
        style={{
          x: imagePos.x,
          y: imagePos.y,
          scale: imagePos.scale,
          rotateX: rotateX,
          rotateY: rotateY,
          opacity: img.opacity,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: img.opacity }}
        transition={{ duration: 0.3 }}
      />
    </section>
  );
}

export default ImageReveal;
