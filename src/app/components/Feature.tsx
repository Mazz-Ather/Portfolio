'use client'
import Link from "next/link";
import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef<HTMLDivElement>(null);

  interface MousePosition {
    clientX: number;
    clientY: number;
  }

  interface BoundingRect {
    left: number;
    top: number;
    width: number;
    height: number;
  }

  const handleMouseMove = (event: MousePosition): void => {
    if (!itemRef.current) return;

    const { left, top, width, height }: BoundingRect = 
      itemRef.current.getBoundingClientRect();

    const relativeX: number = (event.clientX - left) / width;
    const relativeY: number = (event.clientY - top) / height;

    const tiltX: number = (relativeY - 0.5) * 5;
    const tiltY: number = (relativeX - 0.5) * -5;

    const newTransform: string = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }: { src: string; title: React.ReactNode; description?: string; isComingSoon?: boolean }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef<HTMLDivElement>(null);

  interface MouseEvent {
    clientX: number;
    clientY: number;
  }

  interface CursorPosition {
    x: number;
    y: number;
  }

  const handleMouseMove = (event: MouseEvent): void => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    } as CursorPosition);
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-[450px] text-white/80 font-[600px] text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-2 relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20 text-white " />
            <Link href={''} className="relative z-20 text-white">Click Here  !</Link>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => (
<section className="bg-black pb-2">
  <div className="container mx-auto px-3 md:px-10">
    <div className="px-5 py-32">
      <p className="font-circular-web text-2xl text-blue-50">
        Elevate Your Digital Projects with a Next.js Expert
      </p>
      <p className="max-w-5xl font-circular-web text-lg text-white opacity-50">
        As a passionate and skilled developer, I specialize in creating high-performance websites using Next.js, React, and other modern web technologies. With experience in building dynamic, SEO-friendly, and responsive web applications, I deliver solutions tailored to meet your specific needs. Whether it is crafting engaging user interfaces, optimizing for speed and scalability, or implementing complex features, my goal is to ensure your online presence stands out. I am dedicated to pushing the boundaries of web development and helping you achieve your vision with innovative, seamless solutions. Let&apos;s collaborate and bring your ideas to life with cutting-edge technology and exceptional user experiences.
      </p>
    </div>

    <BentoTilt className="border-2 relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
      <div onClick={() => window.open("https://ecommerce-hackathon-mu.vercel.app", "_blank")} className="cursor-pointer h-full w-full">
        <BentoCard
          src="videos/1n1.mp4"
          title={
            <>
              <b className="text-5xl text-white/90">Ecommerce Furniture Website </b>
            </>
          }
          description="I built this dynamic website using Next.js, featuring Add to Cart functionality, image zoom, and an AI-powered chatbot for user interaction. The site includes hover effects, a detailed blog section, and fully dynamic pages, combining modern design with advanced features for an exceptional user experience."
          isComingSoon
        />
      </div>
    </BentoTilt>

    {/* Card Grid */}
    <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
      {/* Card 1 */}
      <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
        <div onClick={() => window.open("https://exclusive-ecommerce-bice.vercel.app/", "_blank")} className="cursor-pointer h-full w-full">
          <BentoCard
            src="videos/1exclusive.mp4"
            title={
              <>
                <b className="text-5xl text-white/90">Exclusive Ecommerce Website</b>
              </>
            }
            description="I built this dynamic website using Next.js, combining modern design with advanced features for an exceptional user experience."
            isComingSoon
          />
        </div>
      </BentoTilt>

      {/* Card 2 */}
      <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
        <div onClick={() => window.open("https://bicycle-ecommerce-nu.vercel.app/", "_blank")} className="cursor-pointer h-full w-full">
          <BentoCard
            src="videos/1cycle.mp4"
            title={
              <>
                <b className="text-5xl text-white/90">Bicycle Ecommerce Website</b>
              </>
            }
            description="Bicycle Ecommerce website using HTML and CSS."
            isComingSoon
          />
        </div>
      </BentoTilt>

      {/* Card 3 */}
      <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
        <div onClick={() => window.open("https://resume-builder-two-kappa.vercel.app/", "_blank")} className="cursor-pointer h-full w-full">
          <BentoCard
            src="videos/m4.mp4"
            title={
              <>
                <b className="text-5xl text-white/90">Resume Builder</b>
              </>
            }
            description="Resume builder using HTML, CSS, and JS."
            isComingSoon
          />
        </div>
      </BentoTilt>

      {/* Card 4 */}
      <BentoTilt className="bento-tilt_2">
        <div onClick={() => window.open("https://one-piece-scrolling.vercel.app/", "_blank")} className="cursor-pointer h-full w-full">
          <BentoCard
            src="videos/1ol.mp4"
            title={
              <>
                <b className="text-5xl text-white/90">Anime Scrolling Animation</b>
              </>
            }
            description="One Piece Anime Web Scrolling Effect."
            isComingSoon
          />
        </div>
      </BentoTilt>

      {/* Card 5 */}
      <BentoTilt className="bento-tilt_2">
        <BentoCard
          src="videos/1thomas.mp4"
          title={
            <>
              <b className="text-5xl text-white/90">Animated Personal Portfolio</b>
            </>
          }
          description="My Personal Portfolio Website using HTML, CSS, and JS."
        />
      </BentoTilt>
    </div>

    {/* Second Grid */}
    <div className="grid h-[700px] w-full grid-cols-2 grid-rows-2 gap-7 mt-8 -mb-80">
      {/* Card 6 */}
      <BentoTilt className="bento-tilt_2">
        <div onClick={() => window.open("https://clone-website-significo.vercel.app/", "_blank")} className="cursor-pointer h-full w-full">
          <BentoCard
            src="videos/h1.mp4"
            title={
              <>
                <b className="text-5xl text-black/90">Significo Health Care Web</b>
              </>
            }
            description="Mini Clone of Significo Website."
            isComingSoon
          />
        </div>
      </BentoTilt>

      {/* Card 7 */}
      <BentoTilt className="bento-tilt_2">
        <div className="flex size-full flex-col justify-between bg-[#0734d7] p-5">
          <h1 className="bento-title special-font text-white text-5xl">
            M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
          </h1>
          <TiLocationArrow className="m-5 scale-[5] self-end" />
        </div>
      </BentoTilt>
    </div>
  </div>
</section>

);

export default Features;
