"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";
import project1 from "/public/significo.jpg";
import project2 from "/public/product.jpg";
import project3 from "/public/movie3.jpg";
import project4 from "/public/iphone.jpg";
import project5 from "/public/cuberto.jpg";
import AnimateText from "../components/AnimatedText";
const Projects = () => {
  return (
    <>
      <div className="!bg-gray-900 contrast-125 !text-white">
        <Navbar />
      </div>
      <section className="bg-gray-900 text-gray-100 contrast-125">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 md:mt-52 sm:mt-60 xs:mt-60 lg:mt-0">
      <AnimateText
            text="See , My Latest Projects"

            className="xxs:m-3 z-10 mx-auto !contrast-125 xs:text-5xl xs:font-semibold  xs:m-3  lg:!text-7xl   sm:!text-5xl md:text-6xl  lg:ml-16  md:ml-11 xs:w-full  sm:ml-20  xl:text-8xl   xl:font-bold  xl:-ml-8 xl:m-5 "
          />
          <Link
            rel=""
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-800 border-4 border-blue-500 contrast-200 p-1"
          >
            <Image
              src={project3}
              alt=""
              className="object-cover contrast-50 w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline hover:underline-offset-8 mt-16">
                Movie Website
              </h3>
              <span className="text-sm dark:text-gray-600 capitalize">
                February 19, 2021
              </span>
              <p className="capitalize">
                I made this website by using HTML, CSS, and JavaScript, and
                this website is fully responsive and it is a fully functional
                website.
              </p>
            </div>
          </Link>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              rel="https://clone-website-significo.vercel.app/"
              href="https://clone-website-significo.vercel.app/"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-800 border-4 border-blue-500 contrast-200"
            >
              <Image
                src={project1}
                alt="project2"
                className="object-cover contrast-50 w-full rounded h-44 dark:bg-gray-500"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  Signifo&apos;s Website
                </h3>
                <span className="text-xs dark:text-gray-600 capitalize">
                  January 21, 2024
                </span>
                <p>
                  This is a website made by me using HTML, CSS, and JavaScript,
                  this website is made for Signifo&apos;s company, I made this
                  website for them to showcase their products.
                </p>
              </div>
            </Link>
            <Link
              rel="https://clone-website-significo-qzfo.vercel.app/"
              href="https://clone-website-significo-qzfo.vercel.app/"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-800 border-4 border-blue-500 contrast-200"
            >
              <Image
                src={project2}
                alt="project3"
                className="object-cover w-full contrast-50 rounded h-44 dark:bg-gray-500"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  Product Designer Website
                </h3>
                <span className="text-xs dark:text-gray-600 capitalize">
                  March 22, 2024
                </span>
                <p>
                  This is a website made by me using HTML, CSS, and JavaScript.
                </p>
              </div>
            </Link>
            <Link
              rel=""
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-800 border-4 border-blue-500 contrast-200"
            >
              <Image
                src={project4}
                alt="project4"
                className="object-cover contrast-50 w-full rounded h-44 dark:bg-gray-500"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  Apple Website Clone
                </h3>
                <span className="text-xs dark:text-gray-600">
                  April 23, 2021
                </span>
                <p>
                  This is a website made by me using HTML, CSS, and JavaScript,
                  fully responsive and fully functional website.
                </p>
              </div>
            </Link>
            <Link
              rel=""
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-800 border-4 border-blue-500 contrast-200 hidden sm:block"
            >
              <Image
                src={project5}
                alt="project5"
                className="object-cover contrast-50 w-full rounded h-44 dark:bg-gray-500"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  Cuberto&apos;s Clone
                </h3>
                <span className="text-xs dark:text-gray-600">
                  January 24, 2021
                </span>
                <p>
                  This is a website made by me using HTML, CSS, and JavaScript,
                  fully responsive and fully functional website.
                </p>
              </div>
            </Link>
            <button
              type="button"
              className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600"
            >
              More posts coming soon...
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
