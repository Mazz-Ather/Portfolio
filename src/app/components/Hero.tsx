// 'use client'

import Image from "next/image"
import suitPic from "/public/my-pic.png";
import AnimateText from "../components/AnimatedText";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { ScrollBasedVelocityDemo } from "./velocity";
import { Vortex } from "./Vortex";
import ButtonHover11 from "../components/Button";

export default function Slide1(){
    return (
        <>
        {/* <div>
            <Navbar/>
        </div> */}
        <div>
            <div className="flex flex-col  md:flex-row h-min w-full xxs:h-auto 2xl:mt-28 bg-[#091b2a] md:bg-black lg:bg-black xl:bg-black">
                <div className="h-[60%] flex flex-col justify-center items-center flex-1">
                
                    <AnimateText
            text="Hello , I'm Mazz Ather"

            className="xxs:m-3 z-10  xs:text-5xl xs:font-semibold  xs:m-3 xs:w-47 xl:w-[50vw] lg:!text-7xl  lg:mt-44 sm:!text-5xl md:text-6xl lg:w-[60vw] lg:px-5 md:w-[85%]  lg:ml-16 md:mt-24 md:ml-11 sm:w-[75%] sm:mt-20 sm:ml-20  xs:mt-20 xl:text-8xl   xl:font-bold xl:mt-36 xl:-ml-8 xl:m-5 "
          />
           <p className="xxs:text-[19px] xxs:m-3 xxs:font-semibold md:w-[85%] xs:text-[20px] xs:m-3 xs:font-semibold text-white/80  sm:text-[22px] text-lg mt-9 xs:w-47 text-center md:text-[18px] md:ml-11  lg:text-[21px] lg:font-medium lg:text-center lg:w-[80%] lg:ml-20 xl:-ml-6 "> My passion for coding is fueled by a desire to create <br />meaningful and impactful digital solutions, constantly pushing <br /> the boundaries of innovation and user experience!</p>
             <Link
              href="./resume.pdf"
              target="_blank"
              className=""
              download={true}
            >
            <ButtonHover11/>
            </Link>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-5">
                <div className="relative group">
  <Image
    src={suitPic}
    alt="suit"
    width={500}
    height={340}
    className="object-contain lg:hidden sm:w-[490px] sm:h-[460px] md:hidden xs:ml-2 sm:ml-14 xl:block  xl:absolute z-10 xl:h-[600px] xl:w-[500px] xl:-mt-9 xl:-ml-9 xl:opacity-100 "
  />
  <video
    src="/myvideo2.mp4"
    width={550}
    height={540}
    className="hidden md:hidden lg:block z-10  lg:z-10  lg:-ml-2 lg:h-[545px] lg:w-[600px] lg:mt-5 sm:hidden sm:w-[720px] sm:ml-20 sm:h-[450px] xl:mt-5 xl:h-[500px] xl:w-[500px] xl:opacity-0 "
    autoPlay
    loop
    muted
    playsInline
  />
</div>

                    <video 
                        src="myvideo2.mp4"  
                        width={550} 
                        height={540} 
                         className="hidden md:block z-10 lg:z-10  md:w-[590px] md:h-[535px] md:-ml-2  lg:hidden md:mt-16"
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        />
                </div>
                <Vortex/>

            </div>
        </div>
        </>
    )
}
