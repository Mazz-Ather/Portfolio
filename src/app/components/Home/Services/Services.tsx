"use client";

import { useRef, useState } from "react";
import Project from "./Project";
import ProjectModal from "./ProjectModal";

  {/* const list: ImageItem[] = [
    {
      img: '/html1.jpg',
      label: 'HTML CSS Development',
    },
    {
      img: 'download.jpeg',
      label: 'React.js Development',
    },
    {
      img: 'next1.jpg',
      label: 'Next.js Development',
    },
    {
      img: 'sanity2.jpg',
      label: 'Sanity.io Development',
    },{
      img: 'ecommerce.webp',
      label: 'Ecommerce Web Development',
    },
  ]; */}
export const projects = [
  {
    title: "Html CSS Development",

    src: "/html1.jpg",

    color: "#8C8C8C",
  },

  {
    title: "React.js Development",

    src: "download.jpeg",

    color: "#8C8C8C",
  },

  {
    title: "Next.js Development",

    src: "next1.jpg",

    color: "#8C8C8C",
  },

  {
    title: "Sanity.io Development",

    src: "sanity2.jpg",

    color: "#8C8C8C",
  }, {
    title: "Ecommerce Development",

    src: "ecommerce.webp",

    color: "#8C8C8C",
  },
];

const Services = () => {
  const [currentProject, setCurrentProject] = useState({
    active: false,
    index: 0,
  });

  const mainRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative h-auto py-11 flex items-center bg-black justify-center"
      ref={mainRef}
    >
      <div className="flex text-white  flex-col w-[80%] mx-auto">
        {projects.map((project, index) => (
          <Project
            key={index}
            setCurrentProject={setCurrentProject}
            title={project.title}
            color={project.color}
            src={project.src}
            index={index}
          />
        ))}
      </div>
      <ProjectModal
        projects={projects}
        active={currentProject.active}
        index={currentProject.index}
        mainRef={mainRef}
      />
    </div>
  );
};

export default Services;
