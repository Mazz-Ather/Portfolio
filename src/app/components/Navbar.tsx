// 'use client'
// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import "./navbar.css";
// import { useGSAP } from "@gsap/react";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const menuRef = useRef<HTMLDivElement>(null);
//   const linksRef = useRef<HTMLDivElement>(null);
// //   const socialLinksRef = useRef(null);
//   const menuToggleRef = useRef<HTMLDivElement>(null);

//   // Split text into spans for animation (this part remains the same)
//   useEffect(() => {
//     const splitTextIntoSpans = (selector:any) => {
//       const elements = document.querySelectorAll(selector);
//       elements.forEach((element) => {
//         let text = element.innerText;
//         let splitText = text
//           .split("")
//           .map((char:any) => `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`)
//           .join("");
//         element.innerHTML = splitText;
//       });
//     };

//     splitTextIntoSpans(".header h1");
//   }, []);

//   // Handle the menu toggle animation

//   useGSAP(() => {
//     if (!menuRef.current || !linksRef.current)
//       return;

//     if (isMenuOpen) {
//       // Open menu animations
//       gsap.to(menuRef.current, {
//         clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//         ease: "power3.out", // Using power3 easing
//         duration: 1.5,
//         onStart: () => {
//           if (menuRef.current) {
//             menuRef.current.style.pointerEvents = "all";
//           }
//         },
//       });

//       gsap.to(linksRef.current, {
//         y: 0,
//         opacity: 1,
//         stagger: 0.5,
//         delay: 0.85,
//         duration: 1,
//         ease: "power3.out",
//       });

//       // Ensure the social links animate as well
//       gsap.to(".socials .sub-col p", {
//         y: 0,
//         opacity: 1,
//         stagger: 0.1,
//         delay: 0.85, // Delay to sync with menu opening
//         duration: 1,
//         ease: "power3.out",
//       });

//       gsap.to(".video-wrapper", {
//         clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//         ease: "power3.out", // Using power3 easing
//         duration: 1.5,
//         delay: 0.5,
//       });

//       gsap.to(".header h1 span", {
//         rotateY: 0,
//         stagger: 0.05,
//         delay: 0.75,
//         duration: 1,
//         ease: "power4.out",
//       });

//       gsap.to(".header h1 span", {
//         y: 0,
//         scale: 1,
//         stagger: 0.05,
//         duration: 1.5,
//         ease: "power4.out",
//       });
//     } else {
//       // Close menu animations
//       gsap.to(menuRef.current, {
//         clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
//         ease: "power3.out", // Using power3 easing
//         duration: 1.5,
//         onComplete: () => {
//           if (menuRef.current) {
//             menuRef.current.style.pointerEvents = "none";
//             gsap.set(menuRef.current, {
//               clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
//             });
//           }

//           if (linksRef.current) {
//             gsap.set(linksRef.current, { y: 30, opacity: 0 });
//           }

//         //   if (socialLinksRef.current) {
//         //     gsap.set(socialLinksRef.current, { y: 30, opacity: 0 });
//         //   }

//           gsap.set(".video-wrapper", {
//             clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
//           });

//           gsap.set(".header h1 span", {
//             y: 500,
//             rotateY: 90,
//             scale: 0.75,
//           });
//         },
//       });
//     }
//   }, [isMenuOpen]);

//   // Toggle menu visibility
//   const handleMenuToggle = () => {
//     setIsMenuOpen(!isMenuOpen);
//     if (menuToggleRef.current) {
//       if (isMenuOpen) {
//         menuToggleRef.current.classList.remove("opened");
//         menuToggleRef.current.classList.add("closed");
//       } else {
//         menuToggleRef.current.classList.remove("closed");
//         menuToggleRef.current.classList.add("opened");
//       }
//     }
//   };

//   return (
//     <div className="z-[9999] !bg-black">
//       <div className="logo">
//         <a href="#">Avaro</a>
//       </div>

//       <div
//         className="menu-toggle closed"
//         ref={menuToggleRef}
//         onClick={handleMenuToggle}
//       >
//         <div className="menu-toggle-icon">
//           <div className="hamburger">
//             <div className="menu-bar" data-position="top"></div>
//             <div className="menu-bar" data-position="bottom"></div>
//           </div>
//         </div>
//         <div className="menu-copy">
//           <p>Menu</p>
//         </div>
//       </div>

//       <div className="menu bg-black" ref={menuRef}>
//         <div className="col col-1">
//           <div className="menu-logo">
//             <a href="#">Avaro</a>
//           </div>

//           <div className="links" ref={linksRef}>
//             <div className="link">
//               <a href="#">projects</a>
//             </div>
//             <div className="link">
//               <a href="#">expertise</a>
//             </div>
//             <div className="link">
//               <a href="#">agency</a>
//             </div>
//             <div className="link">
//               <a href="#">contact</a>
//             </div>
//           </div>

//           <div className="video-wrapper">
//             <video autoPlay muted loop src="3.mp4"></video>
//           </div>
//         </div>

//         <div className="col col-2" >
//           <div className="socials" >
//             <div className="sub-col" >
//               <p>avaro</p>
//               <p>Lorem ipsum dolor sit amet.</p>
//               <p>Lorem, ipsum.</p>
//               <p>Lorem.</p>
//               <br />
//               <p>lorem@gmail.com</p>
//               <p>ipsum@gmail.com</p>
//               {/* <p>avaro</p> */}
//               {/* <p>Lorem ipsum dolor sit amet.</p> */}
//             </div>
//             <div className="sub-col" >
//               <p>Lorem, ipsum.</p>
//               <p>Lorem</p>
//               <br />
//               <p>lorem@gmail.com</p>
//               <p>ipsum@gmail.com</p>
//             </div>
//           </div>
//           <div className="header">
//             <h1>
//               <span>avaro</span>
//             </h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;