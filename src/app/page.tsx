import {Hero} from "@/app/components/Hero";
import {Testimonials} from "./components/Testimonials";
// import { ScrollBasedVelocityDemo } from "./components/velocity";
import ImageReveal from "./components/ImageReveal";
// import { Vortex } from "./components/Vortex";
// import Navbar from "../Navbar";
import { Metadata } from "next";
import OchiAbout from "./components/OchiAbout";
import OchiEyes from "./components/OchiEyes";
import FAQ from "./components/FAQ";
// import Navbar from "./components/Navbar";


export const metadata: Metadata = {
  title: "Maaz Portfolio",
  description: "This is Home Page",
};

const page = () => {
  

  // const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
        {/* <Navbar /> */}
      <div className="pt-28"><Hero/></div>
      <Testimonials/>
{/* <TextRevealDemo/> */}
{/* 
<MotionDiv> <div className="p-8 flex font-neue py-6  text-[52px] w-[94vw] mx-auto flex-wrap  pb-[130px]">
      {Sentences.map((word, index) => {
        return (
          <span
            className="leading-[110%] pb-[5px] "
            key={index}
          >
            <MotionDiv >{word}</MotionDiv>
          </span>
        );
      })}
    </div>
</MotionDiv> */}
      <ImageReveal/>

{/* <div className='w-full min-h-screen text-white bg-zinc-900'> */}
  {/* <OchiMarquee/> */}
      <OchiAbout/>
      
{/* </div> */}

      <h1 className="text-2xl lg:text-6xl text-center font-semibold text-gray-800 bg-zinc-700 py-11 flex justify-center items-center">
  <span className="mr-4 text-[#ff3f3fde]">You Have Questions?</span>
  <span className="ml-4 text-[#ffffffde]">I Have Got Answers</span>
</h1>
      <OchiEyes/>

<FAQ/>
      {/* <PricingPlans/>  */}
    </>
  );
};
export default page;
