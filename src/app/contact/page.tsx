
  import Index from "../components/Index"
import { Metadata } from "next";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "This is Conatct Page",
  // other metadata
};

const contactPage =()=>{
  return<>
  <div className="!bg-gradient-to-r from-[#121723] to-[#141a2a] !text-white">

  <Navbar/>
  </div>
  <Index/>
  {/* <NewsLatterBox/> */}
  </>
}

export default contactPage

