"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export function Hero() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Mazz",
    link: "/gomoonbeam.com",
    thumbnail:
      "/images/img3.jpg",
  },
  {
    title: "Nextjs Developer",
    link: "/cursor.so",
    thumbnail:
      "/images/img10.jpg",
  },
  {
    title: "React Developer",
    link: "/userogue.com",
    thumbnail:
      "/images/img5.png",
  },

  {
    title: "Html Developer",
    link: "/editorially.org",
    thumbnail:
      "/images/img6.jpg",
  },
  {
    title: "Tailwind css Developer",
    link: "/editrix.ai",
    thumbnail:
      "/images/img15.jpg",
  },
  {
    title: "Ecommerce Developer",
    link: "/app.pixelperfect.quest",
    thumbnail:
      "/myimg5.jpg",
  },

  {
    title: "Sanity Developer",
    link: "/algochurn.com",
    thumbnail:
      "/myimg4.jpg",
  },
  {
    title: "web Developer",
    link: "/ui.aceternity.com",
    thumbnail:
      "/images/img1.png",
  },
  {
    title: "frontend Developer",
    link: "/smartbridgetech.com",
    thumbnail:
      "/myimg5.jpg",
  },
  {
    title: "Developer",
    link: "/renderwork.studio",
    thumbnail:
      "/myimg2.jpg",
  },

  {
    title: "Creme Digital",
    link: "/cremedigital.com",
    thumbnail:
      "/myimg5.jpg",
  },
  // {
  //   title: "Golden Bells Academy",
  //   link: "/goldenbellsacademy.com",
  //   thumbnail:
  //     "/myimg5.jpg",
  // },
  // {
  //   title: "Invoker Labs",
  //   link: "/invoker.lol",
  //   thumbnail:
  //     "/myimg5.jpg",
  // },
  // {
  //   title: "E Free Invoice",
  //   link: "/efreeinvoice.com",
  //   thumbnail:
  //     "/myimg5.jpg",
  // },
];
