"use client";

import Link from "next/link";
import React, { useState } from "react";
import Logo from "@/app/components/Logo";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const MobileLink = ({
  href,
  title,
  className = "",
  toggle,
}: {
  href: any;
  title: any;
  className: any;
  toggle: () => void ;
}) => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("");
  const handleClick = () =>{ 
    toggle();
    [router.push(href)]};
  return (
    <button
      onClick={handleClick} // Single onClick handler
      className={`${className} relative group`}
    >
      {" "}
      {title}
      <span
        className={`h-[1px] inline-block bg-black absolute left-0 -bottom-0.5 group-hover:w-full transform-[width] ease duration-300 ${
          currentPath === href ? "w-full" : "w-0"
        } dark:bg-white `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="bg-black h-24 w-full text-[20px] px-36 py-12 font-medium flex items-center justify-between relative">
      {/* logo */}
      <button
        className=" flex-col items-center justify-center hidden lg:flex "
        onClick={handleClick}
      >
        <span
          className={`bg-white black:bg-white transition-all duration-300 ease-out block h-0.5 w-7 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : " -translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-white black:bg-white transition-all duration-300 ease-out block h-0.5 w-7 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-white black:bg-white transition-all duration-300 ease-out block h-0.5 w-7 rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1" : " translate-y-0.5"
          }`}
        ></span>
      </button>
      {/* main navbar?? */}
      <div className="w-full flex justify-between items-center lg:hidden">
        <Logo />
        <nav className="mx-6">
          <Link
            href="/"
            className={`${
              pathname === "/" ? "text-blue-500" : "text-white"
            } font-bold text-xl mx-4`}
          >
            Home
          </Link>

          <Link
            href="/skills"
            className={`${
              pathname === "/skills" ? "text-blue-500" : "text-white"
            } font-bold text-xl  mx-4`}
          >
            Skills
          </Link>

          <Link
            href="/projects"
            className={`${
              pathname === "/projects" ? "text-blue-500" : "text-white"
            } font-bold text-xl mx-4`}
          >
            Projects
          </Link>

          <Link
            href="/about"
            className={`${
              pathname === "/about" ? "text-blue-500" : "text-white"
            } font-bold text-xl mx-4`}
          >
            About
          </Link>

          <Link
            href="/contact"
            className={`${
              pathname === "/contact" ? "text-blue-500" : "text-white"
            } font-bold text-xl mx-4`}
          >
            Contact
          </Link>
        </nav>
      </div>
      {/* mobile */}
     {
      isOpen?
      <motion.div 
       initial ={{scale:0 , opacity:0 , x:-'50%' , y:'50%'}}
       animate = {{scale :1 ,opacity:1}}
      className="min-w-[70vw] flex flex-col justify-between items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/90 black:bg-white/90  rounded-lg  backdrop-blur-md py-32">
      <Logo />
      <nav className="flex items-center flex-col justify-center">
        <MobileLink
          href="/"
          title="Home"
          className={`${
            pathname === "/" ? "text-blue-500" : "text-white"
          } font-bold text-xl mx-4`}toggle={handleClick}
        />

        <MobileLink
          href="/skills"
          title="Skills"
          className={`${
            pathname === "/" ? "text-blue-500" : "text-white"
          } font-bold text-xl mx-4`}toggle={handleClick}
        />

        <MobileLink
          href="/projects"
          title="Projects"
          className={`${
            pathname === "/" ? "text-blue-500" : "text-white"
          } font-bold text-xl mx-4`}toggle={handleClick}
        />
        <MobileLink
          href="/about"
          title="About"
          className={`${
            pathname === "/" ? "text-blue-500" : "text-white"
          } font-bold text-xl mx-4`}toggle={handleClick}
        />

        <MobileLink
          href="/contact"
          title="Contact"
          className={`${
            pathname === "/" ? "text-blue-500" : "text-white"
          } font-bold text-xl mx-4`}toggle={handleClick}
        />
      </nav>
    </motion.div>
      :null
     }
    </header>
  );
};
export default Navbar;
