"use client";
import AnimateText from "../components/AnimatedText";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";
import project1 from "@/public/significo.jpg";

import project2 from "@/public/product.jpg";

import project3 from "@/public/movie3.jpg";

import project4 from "@/public/iphone.jpg";

import project5 from "@/public/cuberto.jpg";
const FeaturedProjects = ({
  type,
  summary,
  img,
  link,
}: {
  type: string;
  summary: string;
  img: any;
  link: string;
}) => {
  return (
    <article className="flex w-[80vw] -mr-[90px] rounded-2xl border-l-2 border-r-8 border-t-2 border-b-8  border-yellow-500 bg-black text-white/70">
      <Link
        href={link}
        target="-blank"
        className=" cursor-pointer rounded-full "
      >
        <Image
          src={img}
          alt={"title"}
          className="w-[40vw] h-[320px] object-cover contrast-125  "
        />
      </Link>

      <div
        className="flex flex-col items-center justify-between pl-6 w-3/5  
        "
      >
        <span className="text-red-700 contrast-200 font-bold text-[28px] p-7">
          {type}
        </span>
        <Link href={link} target="-blank"></Link>
        <p className="font-bold text-[17px] -mx-[155px] mb-9 mr-1 w-[380px]">
          {summary}
        </p>
        <div>
          {/* <Link href={github} target="-blank"><GithubIcon/></Link> */}
          <Link
            href={link}
            target="-blank"
            className="rounded p-3 -m-20 bottom-[212px] right-[610px] absolute  bg-gray-600 text-white font-semibold hover:bg-red-700 hover:contrast-125 hover:p-[13px]"
          >
            Visit Projects
          </Link>
        </div>
      </div>
    </article>
  );
};

const SmallProjects = ({
  title,
  type,
  img,
  link,
}: {
  title: any;
  type: any;
  img: any;
  link: any;
}) => {
  return (
    <article className="mb-16 px-11   h-[50vh] flex items-center justify-center rounded-2xl border border-solid border-white   bg-black relative">
      <Link
        href={link}
        target="_blank"
        className="w-full h-full cursor-pointer rounded-2xl"
      >
        <Image
          src={img}
          alt={title}
          className="w-[90vh] -mx-11 py-4 h-full object-fill brightness-100"
        />
      </Link>

      <div className="w-[37%]  flex flex-col items-center justify-between -mx-9 h-full">
        <span className="text-red-500 font-bold text-[22px]  contrast-200 mt-6 p-2">
          {type}
        </span>
        <Link href={link} target="_blank">
          <h2 className="font-bold mb-36 mx-1 text-4xl hover:underline underline-offset-2 bg-black text-white">
            {title}
          </h2>
        </Link>

        <div className="-mt-32 mb-9">
          <Link
            href={link}
            target="_blank"
            className="rounded  mr-20 py-2 px-7 bg-gray-600 text-white text-lg font-bold hover:bg-red-600 contrast-200"
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Navbar />

      <main className="flex flex-col items-center justify-between !bg-gray-400 h-fit -mt-4">
        <div>
          <AnimateText
            text="See my amazing creations!"
            className="mt-2 -mb-1 ml-12 !text-black contrast-200 !font-bold !text-7xl capitalize"
          />
          {/* ?main */}
          <div className="grid grid-col-12 gap-24 mt-6">
            <div className="col-span-12 !h-[10px]">
              <div className="!w-[45px] items-center justify-center object-fill p-7 mx-14 -mt-7 ">
                {/* feature 1  */}
                <h1 className="mx-[530px] mt-[90px] w-1/4 text-6xl font-bold absolute text-white">
                  Movie Hub
                </h1>
                <FeaturedProjects
                  summary="I built this movie website using HTML, CSS, and JavaScript, allowing users to browse and stream movies with a clean, responsive design."
                  img={project3}
                  link="https://movie-website-chi-peach.vercel.app/"
                  type="Featured Project"
                />
              </div>
            </div>
          </div>
          {/* small 1 */}
          <div className="grid grid-cols-12 gap-20  w-[1200px]">
            <div className="col-span-6  mt-96 mx-4">
              <SmallProjects
                title="Cuberto's Web Clone"
                img={project5}
                link="https://cuberto-eight.vercel.app/"
                type="Featured Project"
              />
            </div>
            {/* small 2 */}
            <div className="col-span-6 mt-96 mx-4">
              <SmallProjects
                title="Significo's Web Clone"
                img={project1}
                link="https://clone-website-significo.vercel.app/"
                type="Featured Project"
              />
            </div>
          </div>
          {/* ?emd side by side 2 divs */}

          {/* small 3 */}
          <div className="grid grid-cols-12 gap-20  w-[1200px]">
            <div className="col-span-6 mx-4">
              <SmallProjects
                title="P.Design Web Clone"
                img={project2}
                link="https://clone-website-significo-qzfo.vercel.app/"
                type="Featured Project"
              />
            </div>
            {/* small 4 */}
            <div className="col-span-6">
              <SmallProjects
                title="Apple's Clone Website"
                img={project4}
                link="https://apple-web-01.vercel.app/"
                type="Featured Project"
              />
            </div>
          </div>
          {/* ?emd side by side 2 divs */}
        </div>
      </main>
    </>
  );
};

export default Projects;
