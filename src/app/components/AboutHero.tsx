'use client';
import Image from 'next/image';
import React, { useRef } from 'react';
import { TimelineContent } from '@/components/ui/framer-timeline';
import GitHubButton from './GithubButton';

function TimelineAnimation() {
  const aboutRef = useRef(null);
  const heroRef = useRef(null);
  return (
    <div className=''>
    <section
      className="grid sm:grid-cols-2 gap-10 h-auto sm:h-[650px] pt  text-white px-8 md:px-20  "
      ref={heroRef}
    >
      <TimelineContent animationNum={0} timelineRef={heroRef}>
        <Image
          src="/myimg3.jpg"
          height={1000}
          width={1000}
          className="w-full h-[250px] sm:h-[570px] object-cover rounded-md"
          alt=""
        />
      </TimelineContent>
      <div className="space-y-9">
        <TimelineContent animationNum={1} timelineRef={heroRef}>
          <h1 className="text-3xl sm:text-5xl leading-[110%] text-white">
            Why should you hire me as your Next.js developer?
          </h1>
        </TimelineContent>
        <TimelineContent animationNum={2} timelineRef={heroRef}>
          <p className="text-lg sm:text-xl leading-[130%] text-white/50">
            I bring a unique blend of technical expertise and a passion for
            crafting exceptional web applications, ensuring that your project is
            not only completed on time but also exceeds your expectations in terms
            of performance and user experience. <br />
            My dedication to continuous learning and my proven track record of
            delivering high-quality clones of popular websites demonstrate my
            commitment to excellence and my ability to quickly adapt to new
            technologies, ensuring that your business stays ahead of the curve. 😁
          </p>
        </TimelineContent>
        <GitHubButton link="https://github.com/Mazz-Ather" platform="GitHub" />
      </div>
    </section>
  
    <section ref={aboutRef} className="text-white/60 grid sm:grid-cols-2 gap-10 pb-10 px-8  md:px-20 py-20">
      <div className="space-y-9">
        <TimelineContent animationNum={1} timelineRef={aboutRef}>
          <h1 className="text-3xl sm:text-5xl text-white">
            How do I ensure client satisfaction?
          </h1>
        </TimelineContent>
        <TimelineContent animationNum={2} timelineRef={aboutRef}>
          <p className="text-lg sm:text-xl leading-[130%] text-white">
            I prioritize open communication and collaboration, ensuring I fully
            understand my clients visions before transforming them into reality.
            My commitment to quality and attention to detail have consistently
            resulted in satisfied clients who appreciate the innovation I bring to
            each project. <br />
            My approach focuses on crafting seamless user experiences while
            leveraging the latest technologies. I view each project as an
            opportunity to innovate, and I take pride in delivering results that
            not only meet but exceed expectations, helping clients stand out in a
            competitive digital landscape. 😍
          </p>
        </TimelineContent>
        <TimelineContent animationNum={3} timelineRef={aboutRef}>
          <GitHubButton link="https://pk.linkedin.com/in/maaz-ather-a8252b291?trk=people-guest_people_search-card" platform="LinkedIn" />
        </TimelineContent>
      </div>
      <TimelineContent animationNum={0} timelineRef={aboutRef}>
        <Image
          src="/myimg4.jpg"
          className="w-full h-[250px] sm:h-[550px] object-cover rounded-md hidden md:flex"
          alt=""
          height={1650}
          width={1700}
        />
      </TimelineContent>
    </section>
  </div>
  
  );
}

export default TimelineAnimation;
