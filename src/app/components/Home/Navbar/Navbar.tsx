"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";

const Navbar = () => {
  const menuContainer = useRef(null);
  const menuContainerMobile = useRef(null);
  const videoScale = useRef(null);
  const menuItemsText = useRef<(HTMLAnchorElement | null)[]>([]);
  const menuItemsTextMobile = useRef<(HTMLAnchorElement | null)[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenuHandler = () => {
    setMenuOpen((open) => !open);
  };
  const menuItems = [
    { name: "home", route: "/" },
    { name: "About me", route: "/about" },
    { name: "my recent projects", route: "/projects" },
    // { name: "skills", route: "/skills" },
    { name: "contact us", route: "/contact" }
  ];

interface MenuItem {
    current: HTMLAnchorElement | null;
}

interface MenuRefs {
    current: HTMLDivElement | null;
}

interface VideoRef {
    current: HTMLDivElement | null;
}

interface AnimateMenuProps {
    isOpen: boolean;
}

const animateMenu = (isOpen: boolean) => {
  if (isOpen) {
    // Opening animations
    gsap.from(menuContainer.current, {
      height: 0,
      duration: 1.2,
      ease: "power",
    });
    gsap.from(menuContainerMobile.current, {
      height: 0,
      duration: 1.2,
      ease: "power",
    });
    gsap.from(videoScale.current, {
      scale: 0,
      opacity: 0,
      duration: 1,
      ease: "power1",
    });
    gsap.from(
      menuItemsText.current.filter((element) => element !== null), // Ensure no null refs
      {
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.2,
        ease: "back",
      }
    );
    gsap.from(
      menuItemsTextMobile.current.filter((element) => element !== null), // Ensure no null refs
      {
        opacity: 0,
        delay: 0.7,
        duration: 2,
        stagger: 0.3,
        ease: "ease",
      }
    );
  } else {
    // Closing animations
    gsap.to(
      menuItemsText.current.filter((element) => element !== null), // Animate text first
      {
        opacity: 0,
        y: 100,
        duration: 0.8,
        stagger: 0.1,
        ease: "back",
      }
    );
    gsap.to(videoScale.current, {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      ease: "power1",
    });
    gsap.to(menuContainer.current, {
      height: 0,
      duration: 1,
      ease: "power",
    });
    gsap.to(menuContainerMobile.current, {
      height: 0,
      duration: 1,
      ease: "power",
    });
  }
};


  useEffect(() => {
    animateMenu(menuOpen);
  }, [menuOpen]);

  return (
    <>
      <nav className=" lg:px-24 lg:py-10 px-6 py-8 bg-transparent absolute inset-0 z-10 max-w-[1920px] mx-auto ">
        <div className=" flex justify-between items-center ">
          <div className="logo">
            <Link href={'/'} className="text-[#4c6ad4]  contrast-200  lg:text-[1.6vw] md:text-[3vw] md:p-2 text-2xl font-lemon capitalize">
            Mazz Ather
            </Link> 
          </div>
          <div className="menu-btn">
            <a
              onClick={openMenuHandler}
              className="centro text-muted hover:text-secondary lg:text-[1.5vw] md:text-[3vw] md:p-2 text-xl font-[rejoice-body] capitalize cursor-pointer text-black"
            >
             {menuOpen ? "close" : "menu"}
            </a>
          </div>
        </div>
      </nav>

      {/* menu code  */}
      {menuOpen && (
        <div
          ref={menuContainer}
          className="menu px-24 pt-11 overflow-y-hidden lg:block md:block sm:hidden !bg-gradient-to-br from-black via-gray-950 to-black text-white
 z-[999] w-full lg:h-auto absolute  top-0 py-11 left-0 "
        >
          <div className="flex justify-between items-start">
            <div>
              <Link href={'/'} className="text-secondary font-[rejoice-body] mb-2 lg:text-[1.6vw] md:text-[2vw] capitalize hidden md:block">
            Mazz Ather
              </Link>
              <div
                className="lg:w-[400px] hidden md:block lg:h-[250px] md:w-[300px] md:h-[200px] object-cover"
                ref={videoScale}
              >
                <video
                  loop
                  muted
                  autoPlay
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/all.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="flex justify-between items-center mt-3">
                <h6 className=" text-contrast font-[rejoice-body] mb-2 lg:text-[1.2vw] md:text-[2vw] capitalize hidden md:block">
                  my Websites
                </h6>
                <h6 className="hidden md:block text-contrast font-[rejoice-body] mb-2 lg:text-[1.2vw] md:text-[2vw] capitalize">
                  -1:18
                </h6>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex justify-center flex-col items-start overflow-y-hidden">
                <div className="back color-1 overflow-y-hidden">
                  <div className="row columns ">
                    <ul className="menu expanded SMN_effect-31">
                      <li className="overflow-y-hidden h-auto">
                        {menuItems.map((item, index) => (
                          <Link
                            data-hover={item.name}
                            key={index}
                            href={item.route}
                            className="text-tertiary menu-text font-[rejoice-body] text-[3.3vw]  capitalize  "
                            ref={(element) => {
                              menuItemsText.current[index] = element;
                            }}
                          >
                            <span>{item.name}</span>
                          </Link>
                        ))}
                      </li>
                    </ul>
                  </div>
                </div>
                <Link href={'/contact'}
  className="bg-transparent border border-[#F7E7CE] px-3 mt-4 ml-0 lg:ml-6 py-3 rounded-sm text-tertiary font-[rejoice-body] lg:text-[16px] md:text-[1.5vw] capitalize hover:bg-[#0734d7] hover:text-white transition-all duration-300 ease-in-out">
  contact us now!
</Link>

              </div>
              <div className="close">
                <a
                  onClick={openMenuHandler}
                  className=" centro text-muted hover:text-secondary font-[rejoice-body]  lg:text-[1.6vw] md:text-[2.2vw] capitalize cursor-pointer"
                >
                  close
                </a>
              </div>
            </div>
          </div>

          {/* <div className="w-[90vw] px-2 h-fit">
  <div className="w-[90vw] !px-0">
    <UnderLine marginBottom="1vw" marginTop="1vw" />
  </div>
</div> */}

                 
          <div className="pt-3  mt-8 border-t border-tertiary flex justify-between items-center ">
            <div className=" mt-4">
              <h6 className="text-muted font-analogy font-semibold lg:text-[1.5vw] md:text-[2vw] capitalize">
                start today to make your website faster
              </h6>
            </div>
            <div className=" flex justify-center items-center gap-6 mt-4">
              {/* <h6 className=" text-muted font-[rejoice-body] lg:text-[1.4vw] md:text-[2vw] capitalize">
                x
              </h6> */}
              <Link href={'https://github.com/mazz-ather'} className=" text-muted font-[rejoice-body] lg:text-[1.4vw] md:text-[2vw] capitalize">
               Github
              </Link>
              <Link href={'https://www.linkedin.com/in/mazz-ather'} className=" text-muted font-[rejoice-body]  lg:text-[1.4vw] md:text-[2vw] capitalize">
                linkedin
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* {mobile navbar code} */}
      <div className="mobile__navbar lg:hidden md:hidden">
        {menuOpen && (
          <div
            ref={menuContainerMobile}
            className="menu px-4 py-6 overflow-y-hidden bg-gradient-to-br from-black via-gray-900 to-black text-white
 cursor-pointer w-full h-full absolute z-20 top-0 left-0 flex justify-between items-start flex-col"
          >
            <div className="mobile__header w-full flex justify-between items-center overflow-y-hidden">
              <div className="logo text-2xl text-secondary">
                <Link href={'/'}>
                Mazz Ather
                </Link>
                </div>
              <div
                onClick={openMenuHandler}
                className="close__icon border border-muted flex justify-center  font-light items-center rounded-full w-14 text-3xl text-center h-14  text-background"
              >
                &times;
              </div>
            </div>
            <div className="mobile__links w-full flex justify-start items-start flex-col overflow-y-hidden ">
              {menuItems.map((item, index) => (
                <Link
                  data-hover={item.name}
                  key={index}
                  href={item.route}
                  className="text-tertiary menu-text font-[rejoice-body] lg:text-[3.3vw] p-1 text-5xl capitalize "
                  ref={(element) => {
                    menuItemsTextMobile.current[index] = element;
                  }}
                >
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
            <div className="social-links w-full flex justify-start items-start flex-col overflow-y-hidden">
              {/* <li className="text-muted  font-[rejoice-body] lg:text-[1.2vw] text-xl capitalize list-none decoration-none cursor">
                x
              </li> */}
              <Link href={'https://github.com/mazz-ather'} className="text-muted font-[rejoice-body] lg:text-[1.2vw] text-xl capitalize list-none decoration-none">
                Github
              </Link>{""}
              <Link href={'https://www.linkedin.com/in/mazz-ather'} className="text-muted font-[rejoice-body] lg:text-[1.2vw] text-xl capitalize list-none decoration-none">
                linkedin
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
