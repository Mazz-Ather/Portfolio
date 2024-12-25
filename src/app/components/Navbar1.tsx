"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import GradientTxt from "./GradientTxt";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isNavClicked, setIsNavClicked] = useState(false);
  const pathname = usePathname();

  return (
    <header className="relative h-0 md:h-6">
      <div className="container mx-w-[1300px]  mx-auto  pt-5 lg:px-1">
        <nav>
          <div className="flex items-center justify-between pb-3">
            <Link
              href="/"
              className="text-[15px] font-medium italic sm:text-base md:text-[24px] lg:font-bold pt-2"
            >
              {"< Mazz"}
              <GradientTxt tagName="span" txt=" Ather />." />
            </Link>
            <svg
              onClick={() => setIsNavClicked(!isNavClicked)}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-list size-6 cursor-pointer md:size-8 lg:hidden"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
            {/* nav menu desktop */}
            <div className="hidden gap-6 font-medium lg:flex xl:gap-8">
              <Link
                href="/"
                className="my-5 transition-opacity duration-75 hover:opacity-50"
              >
               Home
              </Link>
              <Link
                href="/about"
                className="my-5 transition-opacity duration-75 hover:opacity-50"
              >
                About
              </Link>
              <Link
                href="/projects"
                className={`my-5 transition-opacity duration-75 ${pathname.includes("/projects") ? "opacity-50" : "hover:opacity-50"}`}
              >
                Projects
              </Link>
              <Link
                href="/skills"
                className={`my-5 transition-opacity duration-75 ${pathname.includes("/articles") ? "opacity-50" : "hover:opacity-50"}`}
              >
             Skills
              </Link>
              <Link
                href="/contact"
                className={`my-5 flex items-center gap-3 transition-opacity duration-75 ${pathname === "/contact" ? "opacity-50" : "hover:opacity-50"}`}
              >
                <span>Contact</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* nav menu */}

          <motion.div
            initial={{
              height: 0,
              zIndex: "-5",
              padding: 0,
            }}
            animate={{
              height: isNavClicked ? "auto" : 0,
              zIndex: isNavClicked ? "500" : "-5",
              padding: isNavClicked ? "20px" : 0,
            }}
            transition={{ duration: 0.5 }}
            className="absolute left-0 top-14 text-lg w-full overflow-hidden bg-black text-white p-5 shadow-lg lg:hidden"
          >
            <div className="container mx-auto flex flex-col px-5 font-medium">
            <Link
                href="/"
                className="my-5 transition-opacity duration-75 hover:opacity-50"
                onClick={() => setIsNavClicked(false)}
              >
                Home
              </Link>
                <Link
                href="/about"
                className="my-5 transition-opacity duration-75 hover:opacity-50"
                onClick={() => setIsNavClicked(false)}
              >
                About
              </Link>
              <Link
                href="/skills"
                className="my-5 transition-opacity duration-75 hover:opacity-50"
                onClick={() => setIsNavClicked(false)}
              >
                Skills
              </Link>
              <Link
                href="/projects"
                className={`my-5 transition-opacity duration-75 ${pathname.includes("projects") ? "opacity-50" : "hover:opacity-50"}`}
                onClick={() => setIsNavClicked(false)}
              >
                Projects
              </Link>
             
              <Link
                href="/contact"
                className={`my-5 flex items-center gap-2 transition-opacity duration-75 ${pathname === "/contact" ? "opacity-50" : "hover:opacity-50"}`}
                onClick={() => setIsNavClicked(false)}
              >
                <span>Contact</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>
        </nav>
      </div>
    </header>
  );
}