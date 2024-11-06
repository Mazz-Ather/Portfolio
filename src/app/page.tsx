import Hero from "@/app/components/Hero";
import Testimonials  from "./components/Testimonials";
// import { ScrollBasedVelocityDemo } from "./components/velocity";
import ImageReveal from "./components/ImageReveal";
// import { Vortex } from "./components/Vortex";
import Navbar from "./components/Navbar";
import PricingPlans from "./components/PricingPlans";
// import Skills from "./skills/page";

const page = ()=>
{
  return(
    <>
    <div className="!bg-black text-white">

    <Navbar/>
    </div>
<Hero/>

{/* <Skills/> */}
<Testimonials/>

{/* <ScrollBasedVelocityDemo/> */}

<ImageReveal/>
<PricingPlans/>
    </>
  )
}
export default page;