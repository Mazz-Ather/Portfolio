'use client'

import Image from "next/image"
import suitPic from "/public/my-pic.png";
import AnimateText from "../components/AnimatedText";
import Navbar from "../components/Navbar";
import Link from "next/link";


export default function Slide1(){
    return (
        <>
        <div>
            <Navbar/>
        </div>
        <div>
            <div className="flex flex-col md:flex-row h-auto w-full xxs:h-auto 2xl:mt-28 bg-[#091b2a] md:bg-black/80 lg:bg-black/90 xl:bg-black/95">
                <div className="h-[60%] flex flex-col justify-center items-center flex-1">
                
                    <AnimateText
            text="Crafting Vision Into Reality Through Code And Design."
            className="xxs:m-3 xs:text-5xl xs:font-semibold  xs:m-3 xs:w-47 xl:w-[50vw] lg:!text-5xl lg:mt-32 sm:!text-5xl md:text-6xl lg:w-[50vw] md:w-[85%]  lg:ml-16 md:mt-24 md:ml-11 sm:w-[75%] sm:mt-20 sm:ml-20  xs:mt-20 xl:text-7xl  xl:font-bold xl:mt-36 xl:-ml-8 xl:m-5 "
          />
           <p className="xxs:text-[19px] xxs:m-3 xxs:font-semibold md:w-[85%] xs:text-[20px] xs:m-3 xs:font-semibold text-white/80  sm:text-[22px] text-lg mt-9 xs:w-47 text-center md:text-[18px] md:ml-11  lg:text-[21px] lg:font-medium lg:text-center lg:w-[80%] lg:ml-20 xl:-ml-6 "> My passion for coding is fueled by a desire to create meaningful and impactful digital solutions, constantly pushing the boundaries of innovation and user experience!</p>
             <Link
              href="./resume.pdf"
              target="_blank"
              className="xxs:px-5 xxs:py-3 xxs:mt-2 flex items-center bg-gray-300 text-black p-3 text-lg rounded-lg font-semibold hover:bg-gray-600 hover:text-white sm:-ml-8 sm:mt-6 md:ml-9 lg:ml-20  xl:-ml-6 md:mt-2 md:mb-3"
              download={true}
            >
              Resume{" "}
             
            </Link>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-5">
                <div className="relative group">
  <Image
    src={suitPic}
    alt="suit"
    width={450}
    height={340}
    className="object-contain lg:hidden sm:w-[490px] sm:h-[460px] md:hidden xs:ml-2 sm:ml-14 xl:block xl:absolute xl:h-[500px] xl:w-[400px] xl:mt-4 xl:ml-9 xl:opacity-100 group-hover:opacity-0 transition-opacity duration-500 "
  />
  <video
    src="/myvideo2.mp4"
    width={550}
    height={540}
    className="hidden md:hidden lg:block lg:-ml-2 lg:h-[505px] lg:w-[590px] lg:mt-5 sm:hidden sm:w-[720px] sm:ml-20 sm:h-[450px] xl:mt-5 xl:h-[500px] xl:w-[500px] xl:opacity-0 group-hover:opacity-100 transition-opacity duration-500 "
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
                         className="hidden md:block md:w-[590px] md:h-[535px] md:-ml-2  lg:hidden md:mt-16"
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        />
                </div>

            </div>
        </div>
        </>
    )
}
