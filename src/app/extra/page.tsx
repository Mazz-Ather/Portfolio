import Link from "next/link";
import Image from "next/image";
import Projects from "../projects/page";
// ?
// Projects?
import AnimateText from "../components/AnimatedText";
import project1 from "/public/significo.jpg";

import project2 from "/public/product.jpg";

import project3 from "/public/movie3.jpg";

import project4 from "/public/iphone.jpg";

import visit1  from "/public/visit1.jpg"
import visit2 from "/public/visit2.jpg"
import visit3 from "/public/visit3.jpg"



export default function ProductList(){
    return(
        
        <div className="mt-12 flex gap-x-4 gap-y-16 justify-between lg:mx-9 flex-wrap lg:flex-wrap lg:bg-green-500">
<Link href={'/product/1'} className="w-full flex flex-col gap-4 sm:w-[44%] md:w-[30%] lg:w-[58%] xl:[12%]">
<div className="relative w-96 h-96">

  <Image src={project1} alt="product" fill sizes = '265vw' className="lg:h-[600px] lg:w-[600px] object-fill absolute rounded-md  z-10 hover:opacity-0 transition-opacity easy duration-500"/>
  <Image src={visit1} alt="product" fill sizes = '5vw' className="object-cover absolute rounded-md"/>
</div>
<div className="flex justify-between">
<h1 className="font-medium">Peaky's Cap</h1>
<p className="font-semibold">399$</p>
</div>
<div className="text-sm text-gray-400">peaky's cap is a cap that is made of the best quality</div>
<button className="mb-7 w-max bg-white text-black px-2 py-2 rounded-md font-medium cursor-pointer capitalize hover:bg-red-500 hover:text-white  hover:contrast-200 hover:shadow-md hover:shadow-red-500/50 transition-colors easy duration-300">add to cart</button>
</Link> 
<Link href={'/product/1'} className="w-full  flex flex-col gap-4 sm:w-[44%] md:w-[30%] lg:w-[22%]">
<div className="relative w-full h-80">

  <Image src={project2} alt="product" fill sizes = '25vw' className="object-cover absolute rounded-md  z-10 hover:opacity-0 transition-opacity easy duration-500"/>
  <Image src={visit2} alt="product" fill sizes = '25vw' className="object-cover absolute rounded-md"/>
</div>
<div className="flex justify-between">
<h1 className="font-medium">black coat</h1>
<p className="font-semibold">849$</p>
</div>
<div className="text-sm text-gray-400">black coat is a coat that is made of the best quality</div>
<button className="mb-7 w-max bg-white text-black px-2 py-2 rounded-md font-medium cursor-pointer capitalize hover:bg-red-500 hover:text-white  hover:contrast-200 hover:shadow-md hover:shadow-red-500/50 transition-colors easy duration-300">add to cart</button>
</Link> 
<Link href={'/product/1'} className="w-full  flex flex-col gap-4 sm:w-[44%] md:w-[30%] lg:w-[22%]">
<div className="relative w-full h-80">

  <Image src={project3} alt="product" fill sizes = '25vw' className="object-cover absolute rounded-md  z-10 hover:opacity-0 transition-opacity easy duration-500"/>
  <Image src={visit3} alt="product" fill sizes = '25vw' className="object-cover absolute rounded-md"/>
</div>
<div className="flex justify-between">
<h1 className="font-medium">Bugatti's watch</h1>
<p className="font-semibold"><span className="text-sm text-gray-400 line-through">$20000&nbsp;</span> 15999$ </p>
</div>
<div className="text-sm text-gray-400">most expensive watch in the world , made of the best quality</div>
<button className="mb-7 w-max bg-white text-black px-2 py-2 rounded-md font-medium cursor-pointer capitalize hover:bg-red-500 hover:text-white  hover:contrast-200 hover:shadow-md hover:shadow-red-500/50 transition-colors easy duration-300">add to cart</button>
</Link> 
<Link href={'/product/1'} className="w-full  flex flex-col gap-4 sm:w-[44%] md:w-[30%] lg:w-[22%]">
<div className="relative w-full h-80">

  <Image src={project4} alt="product" fill sizes = '25vw' className="object-cover absolute rounded-md  z-10 hover:opacity-0 transition-opacity easy duration-500"/>
  <Image src={visit1} alt="product" fill sizes = '25vw' className="object-cover absolute rounded-md"/>
</div>
<div className="flex justify-between">
<h1 className="font-medium">Nike's shoes</h1>
<p className="font-semibold">18999$</p>
</div>
<div className="text-sm text-gray-400">Nike's shoes are the best shoes in the world</div>
<button className="mb-7 w-max bg-white text-black px-2 py-2 rounded-md font-medium cursor-pointer capitalize hover:bg-red-500 hover:text-white  hover:contrast-200 hover:shadow-md hover:shadow-red-500/50 transition-colors easy duration-300">Visit</button>
</Link> 
        </div>
    )
}