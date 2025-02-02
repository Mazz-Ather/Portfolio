"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ProjectCard } from "@/app/components/Projects/ProjectCard"
import { FilterButtons } from "@/app/components/Projects/FilterButton"
import { ProjectStats } from "@/app/components/Projects/ProjectStats"
import { Testimonial } from "@/app/components/Projects/Testimonials"

// Define the Project type
type Project = {
  id: number
  title: string
  description: string
  imageUrl: string
  projectUrl: string
  githubUrl?: string
  category?: string
  size?: "small" | "medium" | "large"
  featured?: boolean
  awards?: string[]
}

// Sample project data
const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Furniture",
    description:
      "I developed an e-commerce platform for a furniture hackathon that uses Redux for state management, dynamic Sanity integration for content, and smooth hover effects for an engaging user experience.",
    imageUrl: "/images/p13.png",
    projectUrl: "https://ecommerce-hackathon-mu.vercel.app/",
    // githubUrl: "https://github.com/example/ecommerce",
    category: "Ecommerce",
    size: "large",
    featured: true,
    // awards: ["Best UI/UX Design 2023"],
  },
  {
    id: 2,
    title: "Ochi Awwwards Clone",
    description:
      "I developed an Awwwards clone inspired by ochi.design to showcase my skills in modern web development and UI/UX design. The project features interactive animations, smooth transitions, and a responsive layout that mirrors the clean, award-winning aesthetics of the original site. This clone allowed me to experiment with advanced techniques, resulting in a visually engaging and high-performance website.",
    imageUrl: "/images/p2.png",
    projectUrl: "https://ochi-awards.vercel.app/",
    // githubUrl: "https://github.com/example/taskmanager",
    category: "Awwwards",
    featured: true,
    size: "medium",
    awards: ["Top Productivity App 2022"],
  },
  {
    id: 3,
    title: "Ecommerce Landing ",
    description:
      "An interactive Single page ecommerce wesbite.",
    imageUrl: "/images/p15.png",
    projectUrl: "https://exclusive-ecommerce-bice.vercel.app/",
    // githubUrl: "https://github.com/example/weather",
    category: "Ecommerce",
    size: "small",
  },
  {
    id: 4,
    title: "Dev Landing Page",
    description: "Single page awwwards clone.",
    imageUrl: "/images/p18.png",
    projectUrl: "https://dev-landing-awwards.vercel.app/",
    // githubUrl: "https://github.com/example/aichatbot",
    category: "Awwwards",
    size: "large",
    featured: true,
  },
  {
    id: 5,
    title: "Ecommerce Bicyle",
    description: "Mini one page ecomerce bicycle landing page",
    imageUrl: "/images/p5.png",
    projectUrl: "https://bicycle-ecommerce-nu.vercel.app/",
    // githubUrl: "https://github.com/example/cryptodash",
    category: "Ecommerce",
    size: "medium",
  },
  {
    id: 6,
    title: "Rejoice Awwwards Clone",
    description:
      "I developed **Rejoice**, a meticulously crafted clone of an Awwwards-winning website, designed to replicate its stunning aesthetics, smooth interactions, and high-performance experience.",
    imageUrl: "/images/p16.png",
    projectUrl: "https://rejoice-awwwards.vercel.app/",
    // githubUrl: "https://github.com/example/argallery",
    category: "Awwwards",
    size: "small",
    featured: true,
    awards: ["Most Innovative App 2023"],
  }, {
    // ?
    id: 7,
    title: "Awwwards Zentry Clone",
    description:
      "I developed a clone of Zentry that replicates its modern design and interactive functionality. This project features responsive layouts, smooth animations, and a dynamic user interface, showcasing my skills in modern web technologies and design replication.",
    imageUrl: "/images/p6.png",
   
    projectUrl: "https://get-social-agency.vercel.app/",
    // githubUrl: "https://github.com/example/argallery",
    category: "Awwwards",
    size: "small",
    awards: ["Most Innovative App 2023"],
  },{
    id: 8,
    title: "Signifo Awwwards Clone",
    description:
      "made awwards clone of Significo website.", 
    imageUrl: "/images/p21.png",
    projectUrl: "https://significo-eosin.vercel.app/",
    // githubUrl: "https://github.com/example/argallery",
    category: "Awwwards",
    size: "medium",
    awards: ["Most Innovative App 2023"],
  },
]

export default function Projects() {
  const [filter, setFilter] = useState("All")
  const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))]

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <div className="min-h-screen bg-gradient-to-br py-11  from-black via-gray-900 to-black text-white">
      <header className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          className="text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          My Projects
        </motion.h1>
        <motion.p
          className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Explore a collection of innovative solutions and cutting-edge technologies.
        </motion.p>
      </header>

      <ProjectStats projects={projects} />

      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <FilterButtons categories={categories} activeFilter={filter} setFilter={setFilter} />

        <div className="grid grid-cols-12 gap-6 mt-12">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`
                  ${index % 5 === 0 ? "col-span-8" : "col-span-4"}
                  ${index % 5 === 4 ? "col-span-12" : ""}
                `}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <Testimonial />
    </div>
  )
}

