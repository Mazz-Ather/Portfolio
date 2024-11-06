'use client';
import Image from 'next/image';
import React, { useRef } from 'react';
import { Github, Link } from 'lucide-react';
import { TimelineContent } from '@/components/ui/framer-timeline';

function TimelineAnimation() {
  const aboutRef = useRef(null);
  const heroRef = useRef(null);
  return (
    <>
      <section
        className='sm:grid grid-cols-2 gap-10 h-[650px] pt-10 px-4 bg-black text-white'
        ref={heroRef}
      >
        <TimelineContent animationNum={0} timelineRef={heroRef}>
          <Image
            src='/myimg3.jpg'
            height={1000}
            width={1000}
            className='w-full h-[570px]  object-cover rounded-md '
            alt=''
          />
        </TimelineContent>
        <div className='space-y-2'>
          {' '}
          <TimelineContent animationNum={1} timelineRef={heroRef}>
            <h1 className='text-5xl leading-[110%]'>
            Why should you hire me as your Next.js developer?

            </h1>
          </TimelineContent>
          <TimelineContent animationNum={2} timelineRef={heroRef}>
            <p className='text-xl leading-[130%] text-white/50'>
            I bring a unique blend of technical expertise and a passion for crafting exceptional web applications, ensuring that your project is not only completed on time but also exceeds your expectations in terms of performance and user experience. <br />
My dedication to continuous learning and my proven track record of delivering high-quality clones of popular websites demonstrate my commitment to excellence and my ability to quickly adapt to new technologies, ensuring that your business stays ahead of the curve. 😁
            </p>
          </TimelineContent>
          <TimelineContent animationNum={3} timelineRef={heroRef}>
            <Link 
              className='flex gap-2 w-fit bg-gray-800 rounded-md p-2'
              href='https://github.com/Mazz-Ather'
              target='_blank'
            >
              <Github />
              Start it Now
            </Link>
          </TimelineContent>
        </div>
      </section>
      <section ref={aboutRef} className='bg-black text-white/60 sm:grid grid-cols-2 gap-10 pb-10 px-4'>
        <div className='space-y-2'>
          {' '}
          <TimelineContent animationNum={1} timelineRef={aboutRef}>
            <h1 className='text-5xl  text-white'> How do i ensure client satisfaction ?</h1>
          </TimelineContent>
          <TimelineContent animationNum={2} timelineRef={aboutRef}>
            <p className='text-xl leading-[130%]'>
           
I prioritize open communication and collaboration, ensuring I fully understand my clients &apos; visions before transforming them into reality. My commitment to quality and attention to detail have consistently resulted in satisfied clients who appreciate the innovation I bring to each project. <br />
My approach focuses on crafting seamless user experiences while leveraging the latest technologies. I view each project as an opportunity to innovate, and I take pride in delivering results that not only meet but exceed expectations, helping clients stand out in a competitive digital landscape.😍
            </p>
          </TimelineContent>
          <TimelineContent animationNum={3} timelineRef={aboutRef}>
            <Link
              className='flex gap-2 items-center w-fit bg-gray-800 rounded-md p-2'
              href='https://x.com/Mazz-Ather'
              target='_blank'
            >
              
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="39" height="30" viewBox="0 0 48 48">
<path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
</svg>


              Follow
            </Link>
          </TimelineContent>
        </div>
        <TimelineContent animationNum={0} timelineRef={aboutRef}>
          <Image
            src='/myimg4.jpg'
            className='w-full h-[550px]  object-cover rounded-md '
            alt=''
            height={1650}
            width={1700}
          />
        </TimelineContent>
      </section>
    </>
  );
}

export default TimelineAnimation;
