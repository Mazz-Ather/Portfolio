import Link from "next/link";
import Image from "next/image";
import pintrest from "@/public/my-pic.png";
import AnimateText from "./AnimatedText";
import downloadIcon from "@/public/download.svg";
import Navbar from "@/app/components/Navbar";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <Navbar />
      <div className="h-[500px] flex items-center justify-center -mb-0 w-full bg-black xl:p-20 lg:p-12 md:p-8 sm:p-2">
        {/* Image */}
        <Image
          className="lg:w-[80%] md:w-[60%] sm:w-[50%] object-contain mx-14 mb-8"
          src={pintrest}
          alt="Pinterest logo"
          width={390}
          height={390}
        />

        {/* Main Text */}
        <div className="mt-2 mx-auto flex flex-col items-center text-center ">
          <AnimateText
            text="Crafting Vision Into Reality Through Code And Design."
            className="!text-6xl lg:!text-4xl md:!text-3xl sm:!text-2xl"
          />
          <p className="text-xl text-white/80 w-[80%] mt-4">
            My passion for coding is fueled by a desire to create meaningful and
            impactful digital solutions.
          </p>

          {/* Button */}
          <div className="flex items-center justify-center mt-10">
            <Link
              href="./resume.pdf"
              target="_blank"
              className="flex items-center bg-gray-300 text-black p-3 text-lg rounded-lg font-semibold hover:bg-gray-600 hover:text-white"
              download={true}
            >
              Resume{" "}
              <Image
                src={downloadIcon}
                className="ml-2"
                height={24}
                width={24}
                alt="download icon"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
