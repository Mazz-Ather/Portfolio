import Link from "next/link";
import GradientTxt from "./GradientTxt";
import FadeUp from "@/app/components/FadeUp";
;

export default function ContactDetails() {
  const date = new Date().getFullYear();

  const navLinks = [
    {
      name: "About",
      path: "/about",
    },

    {
      name: "Skills",
      path: "/skills",
    },

    {
      name: "Projects",
      path: "/projects",
    },

    {
      name: "Contact",
      path: "/contact",
    },

    {
      name: "Resume",
      path: "/mycv2.pdf",
    },

    {
      name: "Facebook",
      path: "/",
    },

    {
      name: "Linkedin",
      path: "https://www.linkedin.com/in/mazz-ather",
    },

    {
      name: "Twitter",
      path: "/",
    },

    {
      name: "Github",
      path: "https://github.com/mazz-ather",
    },
  ];

  return (
    <section className="pt-[20px] xl:pt-[100px]">
      <FadeUp tag="div" className="mb-8">
        <h2 className="text-[36px] font-bold tracking-[0.5px] text-white md:text-[50px] xl:text-[54px]">
        Excited to bring your vision to life?
        </h2>
        <GradientTxt
          tagName="h4"
          txt="Lets connect and make it happen!."
          className="call sharedStyles cursor-pointer text-[30px] font-bold tracking-[0.5px] md:text-[50px] xl:text-[54px] "
        />
      </FadeUp>

      <div className="flex flex-col xl:flex-row xl:justify-between">
        <div>
         <Link href={'/'} className="text-secondary font-[rejoice-body] mb-2 lg:text-[1.6vw] md:text-[2vw] capitalize">
            Mazz Ather
              </Link>
          <p className="py-2 text-[#8a95ad]">Karaci, Pakistan</p>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#8a95ad"
              className="bi bi-envelope"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
            </svg>
            <Link
              href="mailto:mazzather@gmail.com"
              target="_blank"
              className="text-[17px] font-bold text-[#8a95ad]"
            >
              mazzather@gmail.com
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 xl:mt-0 xl:grid-cols-3 xl:gap-10">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.path}
              target={link.path.startsWith("http") ? "_blank" : "_self"}
              className="links sharedStyles  pb-4 text-white md:text-xl xl:border-none xl:pb-0 " 
            >
              {link.name} 
            </Link>
          ))}
        </div>
      </div>

      <p className="pb-10 pt-[100px] text-center text-[#8a95ad]">
        Copyright &copy; {date}{" "}
        <GradientTxt tagName="span" txt="<Mazz Ather/>." /> all rights reserved.
        Built using NextJS, Typescript, TailwindCSS, Framer motion.
      </p>
    </section>
  );
}