import {Hero} from "@/app/components/Hero";
import { Metadata } from "next";
import TextEffects from "./components/Home/Text/TextEffects";
import Services from "./components/Home/Services/Services";
import OchiAbout from "./components/Home/OchiAbout";
import OchiEyes from "./components/Home/OchiEyes";
import FAQ from "./components/Home/FAQ";

export const metadata: Metadata = {
  title: "Maaz Portfolio",
  description: "This is Home Page",
};

const page = () => {
  return (
    <>
        <Hero/>
     <div className="bg-black"> 

    <TextEffects/>
     </div>
      <h1 className="text-2xl lg:text-7xl text-center font-semibold text-gray-800 bg-black py-6  flex justify-center items-center">
  <span className="ml-4  text-[#ffffffde]">My Services</span>
</h1>
<Services/>
      <OchiAbout/>
    
      
      <h1 className="text-2xl lg:text-6xl text-center font-semibold text-gray-800 bg-zinc-700 py-11 flex justify-center items-center">
  <span className="mr-4 text-[#ff3f3fde]">You Have Questions?</span>
  <span className="ml-4 text-[#ffffffde]">I Have Got Answers</span>
</h1>
      <OchiEyes/>

<FAQ/>
    </>
  );
};
export default page;
