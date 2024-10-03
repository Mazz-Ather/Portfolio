'use client'

import AnimateText from "../components/AnimatedText";
import Image from "next/image";
// import Img from "@/public/bgAbout.jpg";
import Navbar from "../components/Navbar";
import Img from '@/public/schoolpic.jpg'
import Footer from "../components/Footer";


const about = () => {
  return (
    <>
      <div className= "relative">
      <Navbar/>
      </div>

      <div className="bg-black relative">
      <AnimateText
        text="Passion drives my vision!"
        className="font-bold text-[75px] text-pretty -left-52 !text-white absolute top-1
         w-[80vw] z-10"
        />
      <main className="flex w-[80vw] h-[90vh] items-center justify-center relative z-20">
        
        <div className="w-1/2 relative z-30 p-10 -left-[300px]">
          <div className="font-semibold col-span-3 flex flex-col items-start">
            <h2 className="text-white text-2xl mt-1 mx-[600px] font-bold uppercase py-2">
              Biography
            </h2>
            <p className="text-white font-bold capitalize text-lg mx-[600px] w-[43vw]">
              Hi, I'm Maaz, a front-end developer with a passion for creating
              beautiful and user-friendly websites. I'm always seeking innovative ways to bring my clients' visions to life.
            </p>
            <p className="my-5 font-bold capitalize text-white text-lg mx-[600px] w-[43vw]">
              With expertise in HTML, CSS, JavaScript, TypeScript, React.js,
              Next.js, and Tailwind CSS, I've successfully developed a variety
              of projects, including an Amazon clone, which demonstrates my
              ability to innovate and execute.
            </p>
            <p className="capitalize !text-white text-lg mx-[600px] w-[43vw] ">
              I approach each project with a dedication to design excellence and
              a user-centered mindset, ensuring a seamless experience for users
              while achieving my client's goals.
            </p>
          </div>
        </div>
      </main>
      <div className="absolute inset-0 m-16 mt-[98px]
 ">
        <Image
          src={Img}
          alt="Background image"
          className="object-center w-[500px] h-[500px] brightness-0.1 contrast-125"
          />
      </div>
    </div>
          </>
  );
}
export default about