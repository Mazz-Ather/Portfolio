"use client";

import Link from "next/link";
import React, { useState } from "react";
import Logo from "@/app/components/Logo";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface MobileLinkProps {
  href: string;
  title: string;
  className?: string;
  toggle: () => void;
}

const MobileLink: React.FC<MobileLinkProps> = ({
  href,
  title,
  className = "",
  toggle,
}) => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState<string>("");

  const handleClick = () => {
    toggle();
    router.push(href);
    setCurrentPath(href);
  };

  return (
    <button
      onClick={handleClick}
      className={`${className} relative group`}
    >
      {title}
      <span
        className={`h-[1px] inline-block absolute left-0 -bottom-0.5 group-hover:w-full transform-[width] ease duration-300 ${
          currentPath === href ? "w-full" : "w-0"
        } dark:bg-white`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="bg-black h-24 w-full text-[20px] px-36 py-12 font-medium flex items-center justify-between relative">
      {/* Hamburger */}
      <button
        className="flex-col items-center justify-center md:hidden block -ml-20"
        onClick={handleClick}
      >
        <span
          className={`bg-white transition-all duration-300 ease-out block h-0.5 w-7 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-white transition-all duration-300 ease-out block h-0.5 w-7 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-white transition-all duration-300 ease-out block h-0.5 w-7 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      {/* Main Navbar */}
      <div className="w-full flex justify-between items-center hidden md:block lg:block">
        <Logo />
        <nav className="mx-6">
          {["Home", "Skills", "Projects", "About", "Contact"].map((item) => (
            <Link
            key={item}
            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className={`${
              pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`) ? "text-blue-500" : "text-white"
            } font-bold text-xl mx-4`}
          >
              {item}
            </Link>
          ))}
        </nav>
      </div>
      {/* Mobile */}
      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="min-w-[70vw] flex flex-col justify-center items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/90 rounded-lg backdrop-blur-md py-32"
        >
          <Logo />
          <nav className="flex items-center flex-col justify-center">
      {["Home", "Skills", "Projects", "About", "Contact"].map((item) => (
        <MobileLink
          key={item}
          href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
          title={item}
          className={`${
            pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`) ? "text-blue-500" : "text-white"
          } font-bold text-xl mx-4`}
          toggle={handleClick}
        />

            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
