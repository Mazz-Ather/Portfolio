'use client'
import React from 'react'
import { useState } from "react";

function About() {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className='w-full p-20 rounded-tl-3xl rounded-tr-3xl bg-[#1d1e21] text-white'>
        <h1 className='font-["Neue_Montreal"] md:text-[4vw] text-base leading-[5vw] tracking-tight'>
          I build modern, responsive websites with Next.js, delivering SEO-friendly, high-performance solutions that are visually stunning and optimized for speed and user experience.
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-5 w-full mt-20 pt-10 border-t-[1px] border-[#0734d7]">
          <div className="w-full lg:w-1/2">
            <h1 className='text-4xl lg:text-6xl font-["Neue_Montreal"]'>My Approach:</h1>
            
            {showDetails && (
              <p className="mt-4 text-lg text-gray-400 leading-relaxed">
                I specialize in building modern, high-performance Next.js websites, including dynamic e-commerce platforms, engaging portfolios, and feature-rich applications. My expertise extends to implementing advanced functionality like theme toggles, state management with Redux, content management with Sanity.io, and creating SEO-friendly solutions that ensure maximum visibility. By focusing on seamless user experiences and leveraging cutting-edge tools, I craft websites that are not only visually appealing but also optimized for speed, scalability, and impactful results. With a commitment to delivering tailored solutions, I aim to help clients achieve their goals and stand out in a competitive digital landscape.
              </p>
            )}
            
            <button
              className='flex gap-8 items-center px-6 py-4 mt-7 bg-zinc-900 rounded-full text-white text-md font-medium uppercase'
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? "Show Less" : "Read More"}
              <div className="w-2 h-2 rounded-full bg-[#0734d7]"></div>
            </button>
          </div>
      
          <div className="w-full lg:w-1/2 h-[45vh] bg-[#B0C859] rounded-2xl mt-8 lg:mt-0">
            {/* <img className='w-auto h-[45vh] rounded-2xl' src={'/images/img151.jpg'} alt='my image' /> */}
            <video src='/videos/hero-2.mp4'
            autoPlay
            loop
            muted
            className='object-cover rounded-2xl'
            />
          </div>
        </div>
      </div>
      
    )
}

export default About