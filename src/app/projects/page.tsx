"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";
import project1 from "/public/significo.jpg";

import project2 from "/public/product.jpg";

import project3 from "/public/movie3.jpg";

import project4 from "/public/iphone.jpg";

import project5 from "/public/cuberto.jpg";

const Projects = () => {
  return (
    <>
      <Navbar />

      
      <section className="bg-gray-900 text-gray-100 contrast-125">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 ">
		<Link rel="" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50 border border-t-4 border-r-8 border-b-8 border-l-4 border-yellow-500  p-1 ">
			<Image src={project3} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline hover:underline-offset-8 mt-16">Movie Website</h3>
				<span className="text-sm dark:text-gray-600 capitalize">February 19, 2021</span>
				<p className="capitalize">I made this Website By using HTML CSS  and JavaScript , and this  website is fully responsive and it is a fully functional website .  </p>

			</div>
		</Link>
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<Link rel="https://clone-website-significo.vercel.app/" href="https://clone-website-significo.vercel.app/" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<Image src={project1} alt="project2" className="object-cover w-full rounded h-44 dark:bg-gray-500"  />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Signifo's  Website</h3>

					<span className="text-xs dark:text-gray-600 capitalize">January 21, 2024</span>
					<p>This  is a website made by me using HTML CSS and JavaScript , this  website is made for Signifo's company , i  made this website for them to show case their products .</p>




				</div>
			</Link>
			<Link rel="https://clone-website-significo-qzfo.vercel.app/" href="https://clone-website-significo-qzfo.vercel.app/" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<Image src={project2} alt="project3"  className="object-cover w-full rounded h-44 dark:bg-gray-500"  />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Product Designer Website</h3>
					<span className="text-xs dark:text-gray-600 capitalize">March 22, 2024</span>
					<p>This  is a website made by me using HTML CSS and JavaScript .</p>
				</div>
			</Link>
			<Link rel="" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<Image src={project4 } alt="project4" className="object-cover w-full rounded h-44 dark:bg-gray-500" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Apple Wesbite Clone</h3>
					<span className="text-xs dark:text-gray-600">April 23, 2021</span>
					<p>This  is a website made by me using HTML CSS and JavaScript , fully  responsive and fully functional website .</p>

				</div>
			</Link>
			<Link rel="" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
				<Image src={project5} alt="project5" className="object-cover w-full rounded h-44 dark:bg-gray-500"  />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Cuberto's Clone</h3>
					<span className="text-xs dark:text-gray-600">January 24, 2021</span>
					<p>This  is a website made by me using HTML CSS and JavaScript , fully  responsive and fully functional website .</p>
				</div>
			</Link>
			<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600">more posts coming soon...</button>
		</div>
	</div>
</section>
    </>
  );
};

export default Projects;
