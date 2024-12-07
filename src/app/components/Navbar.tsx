"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
// import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import Logo from "./Logo";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

   // submenu handler
const [openIndex, setOpenIndex] = useState<number>(-1);  // Specify type of openIndex as number

const handleSubmenu = (index: number) => {  // Change type of index to number
  if (openIndex === index) { 
    setOpenIndex(-1);
  } else {
    setOpenIndex(index);
  }
};

  const usePathName = usePathname();

  return (
    <>
    <header
  className={`header left-0 top-0 z-40 text-[17px] flex w-full items-center py-5   ${
    sticky
      ? "fixed z-[9999]  bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
      : "bg-transparent"
  }`}
>

        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
              >
               <Logo/>
              </Link>
            </div>
            <div className="flex w-full items-center ml-[360px] justify-between px-4">
              <div>
              <button
  onClick={navbarToggleHandler}
  id="navbarToggler"
  aria-label="Mobile Menu"
  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 ml-20 lg:hidden !-white"
>
  <span
    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300  ${
      navbarOpen ? " top-[7px] rotate-45" : " "
    } bg-white`} // Set background to white
  />
  <span
    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300  ${
      navbarOpen ? "opacity-0 " : " "
    } bg-white`} // Set background to white
  />
  <span
    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300  ${
      navbarOpen ? " top-[-8px] -rotate-45" : " "
    } bg-white`} // Set background to white
  />
</button>

                <nav
  id="navbarCollapse"
  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-black px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-gray-900 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
    navbarOpen
      ? "visibility top-full opacity-100"
      : "invisible top-[120%] opacity-80"
  }`}
>

                  <ul className="block lg:flex lg:space-x-12 !opacity-100">
                  {menuData.map((menuItem, index) => (
  <li key={index} className="group relative">
    {menuItem.path ? (
      <Link
        href={menuItem.path}
        className={`flex py-2 -base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
          usePathName === menuItem.path || (menuItem.path === "/" && usePathName === "/")
            ? "-primary dark:-white opacity-100"  // Ensure full opacity when active
            : "-dark hover:-blue-500 dark:-white/70 dark:hover:text-white opacity-70"  // Fade out inactive links
        }`}
      >
        {menuItem.title}
      </Link>
    ) : (
      <>
        <p
          onClick={() => handleSubmenu(index)}
          className="flex cursor-pointer items-center justify-between py-2 -base -dark group-hover:-primary dark:-white/70 dark:group-hover:-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
        >
          {menuItem.title}
          <span className="pl-3">
            <svg width="25" height="24" viewBox="0 0 25 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </p>
        <div
          className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100  lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
            openIndex === index ? "block" : "hidden"
          }`}
        >
          {menuItem.path && (
            <Link
              href={menuItem.path || "/"} // Add a fallback '/' or ''
              className={`flex py-2 -base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                usePathName === menuItem.path || (menuItem.path === "/" && usePathName === "/")
                  ? "-primary dark:-white"
                  : "-dark hover:-primary dark:-white/70 dark:hover:-white"
              }`}
            >
              {menuItem.title}
            </Link>
          )}
        </div>
      </>
    )}
  </li>
))}


                  </ul>
                </nav>
              </div >
              <div className="flex relative items-center justify-end lg:pr-0 ">
                <Link
                  href="/signin"
                  className="hidden px-7 py-3 md:px-5  md:-ml-9 lg:mr-6 xl:mr-1  -base font-medium -dark hover:opacity-70 dark:-white md:hiddden xl:block"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="ease-in-up  shadow-btn hover:shadow-btn-hover lg:-mr-36  xl:mr-2
                  hidden rounded-sm bg-primary px-8 py-3 font-medium text-white transition duration-300 hover:bg-opacity-90 md:hiddden xl:block md:px-9 lg:px-6 xl:px-9"
>
                  Sign Up
                </Link>
                <div>
                  {/* <ThemeToggler /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
