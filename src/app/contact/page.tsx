
  import Index from "../components/Index"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "This is Conatct Page",
  // other metadata
};

const contactPage =()=>{
  return<>
  <Index/>
  {/* <NewsLatterBox/> */}
  </>
}

export default contactPage

