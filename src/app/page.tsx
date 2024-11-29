import Hero from "@/app/components/Hero";
import Testimonials  from "./components/Testimonials";
// import { ScrollBasedVelocityDemo } from "./components/velocity";
import ImageReveal from "./components/ImageReveal";
// import { Vortex } from "./components/Vortex";
// import Navbar from "../Navbar";
import PricingPlans from "./components/PricingPlans";
// import Skills from "./skills/page";

import { Metadata } from "next";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Maaz Portfolio",
  description: "This is Home Page",
  // other metadata
};

const page = ()=>
{
  return(
    <>
    <div className="!bg-black text-white">

    <Navbar/>
    </div>
<div className="pt-28">

<Hero/>
</div>

{/* <Skills/> */}
<Testimonials/>

{/* <ScrollBasedVelocityDemo/> */}

<ImageReveal/>
<PricingPlans/>
    </>
  )
}
export default page;