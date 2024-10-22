'use client'

import Image from "next/image"
import suitPic from "/public/myimg3.jpg";
import AnimateText from "../components/AnimatedText";
import Navbar from "../components/Navbar";



export default function Slide1(){
    return (
        <>
        <div className="bg-black/90">
            <Navbar/>
        </div>
        <div>
            <div className="flex flex-col md:flex-row h-auto w-full xxs:h-auto 2xl:mt-28 bg-black/30">
                <div className="flex flex-col sm:flex-row sm:gap-5 2xl:bg-red-500">
                <div className="relative group">
  <Image
    src={suitPic}
    alt="suit"
    width={590}
    height={540}
    className="object-contain sm:w-[490px] sm:h-[460px] xs:ml-2 sm:ml-14 xl:absolute xl:h-[600px] xl:w-[500px] xl:mt-20 xl:ml-9 mt-24"
  />
</div>
            </div>
                <div className="h-[60%] flex flex-col justify-center items-center flex-1 text-black">
                
                    <AnimateText
          text="Passion drives my vision!"
            className="xxs:m-3 xs:text-5xl xs:font-semibold  xs:m-3 xs:w-47 xl:w-[50vw] lg:!text-5xl lg:mt-11 sm:!text-5xl md:text-6xl lg:w-[50vw] md:w-[70%]  lg:ml-16 md:mt-24 md:ml-11 sm:w-[75%] sm:mt-20 sm:ml-20  xs:mt-20 xl:text-7xl  xl:font-bold xl:mt-36 xl:-ml-8 xl:m-5 !text-black !contrast-200"
          />
          <h2 className="text-3xl font-bold -ml-36 mt-4 text-black/90">BIOGRAPHY</h2>
           <p className="xxs:text-[19px] xxs:m-3 xxs:font-semibold xs:text-[20px] xs:m-3 xs:font-semibold text-black/70  sm:text-[22px] text-lg mt-9 xs:w-47 text-center md:text-[18px] md:-ml-24 md:w-[68%] lg:text-[21px] lg:font-medium lg:text-center lg:w-[80%] lg:ml-20 xl:-ml-6 border-b-[6px] xl:w-max p-3 border-t-[6px] border-[#040404] mx-5"style={{ clipPath: 'polygon(3% 4%, 96% 0%, 96% 96%, 0% 100%)' }}>  Hi, I'm Maaz, a front-end developer with a passion for creating
                beautiful and user-friendly websites. I'm always seeking  innovative ways to bring my clients' visions to life.</p> 
                
                <p className="xxs:text-[19px] xxs:m-3 xxs:font-semibold xs:text-[20px] xs:m-3 xs:font-semibold text-black/70  sm:text-[22px] text-lg mt-9 xs:w-47 text-center md:text-[18px] md:-ml-24 md:w-[68%] lg:text-[21px] lg:font-medium lg:text-center lg:w-[80%] lg:ml-20 xl:-ml-6 border-b-[6px] xl:w-max p-3 border-t-[6px] border-[#000000] mx-5"style={{ clipPath: 'polygon(2% 4%, 96% 0%, 101% 98%, 0% 100%)' }}> With expertise in HTML, CSS, JavaScript, TypeScript, React.js,
                Next.js, and Tailwind CSS, I've successfully developed a variety
                of projects, including an Amazon clone, which demonstrates my
                ability to innovate and execute.
              </p>

              <p className="xxs:text-[19px] xxs:m-3 xxs:font-semibold xs:text-[20px] xs:m-3 xs:font-semibold text-black/70  sm:text-[22px] text-lg mt-9 xs:w-47 text-center md:text-[18px] md:-ml-24 md:w-[68%] lg:text-[21px] lg:font-medium lg:text-center lg:w-[80%] lg:ml-20 xl:-ml-6 border-b-[6px] xl:w-max p-3 border-t-[6px] border-[#000000] mx-5"style={{ clipPath: 'polygon(2% 4%, 98% 0%, 97% 97%, 0% 100%)' }}> &nbsp; I approach each project with a dedication to design excellence
                and a user-centered mindset, ensuring a seamless experience for
                users while achieving my client's goals.
              </p>

                </div>

            </div>
        </div>
        </>
    )
}
