"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const TextEffect = () => {
  const reviewContainer = useRef(null);
  const [reviewVisible, setreviewVisible] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    // Initial resize check
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const AnimationHandler = () => {
      gsap.fromTo(
        ".text-reveal",
        {
          opacity: 1,
          y: 50,
        },
        {
          opacity: 1,
          duration: 0.2,
          y: 0,
          ease: "ease.in",
        }
      );
    };
    const scrollTrigger = ScrollTrigger.create({
      trigger: reviewContainer.current,
      start: "top 20%",
      end: "top 10%",
      onEnter: () => {
        setreviewVisible(true);
        AnimationHandler();
        scrollTrigger.kill();
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  // Full text
  const fullText =
    "Next.js websites are fast, SEO-friendly that enhance user experience and drive growth.";

  // Short text for small screens
  const shortText =
    "Next.js websites are fast, SEO-friendly that enhance user experience and drive growth";

  const splitText = (screenWidth <= 768 ? shortText : fullText).split(" ");

  return (
    <>
      <div
        className={`reviews bg-black lg:px-16 md:px-10 py-0 pt-5 md:py-16  lg:py-20 px-2 -mt-48 md:-mt-11 bg- w-full h-[40vh] lg:h-[85vh] ${
          reviewVisible ? "visible" : "invisible"
        } w-full h-auto`}
        ref={reviewContainer}
      >
        <div>
          <div className="overflow-hidden">
            <h3 className="text-white text-reveal font-[rejoice-body] lg:text-[1.5vw] md:text-[2.2vw] text-sm lg:leading-6 capitalize">
              Elevate Your Business with a Stunning, <br /> Custom-Built Website
            </h3>
          </div>
        </div>

        <div className="border-white/60 border-t mt-5 pt-8 h-auto">
          <div
            style={{ lineHeight: 1.05 }}
            className="text-white  py-9  relative overflow-hidden lg:text-[4.3vw] md:text-[4.7vw]  font-light text-left"
          >
            {" "}
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {splitText.map((item, i) => {
              return (
                <div
                  style={{ lineHeight: 0.6 }}
                  className="inline-block overflow-hidden"
                  key={i}
                >
                  <span className="block lg:h-20 h-auto text-reveal lg:mr-4 mr-2 py-2 md:py-11 overflow-y-hidden">
                    {item}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TextEffect;
