import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { FiExternalLink, FiGithub, FiAward } from "react-icons/fi"

export function ProjectCard({ project }:any) {
  const [isHovered, setIsHovered] = useState(false)

  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 20 },
    hover: {
      scale: 1.03,
      boxShadow: "110 1150px 1130px rgba(0,0,0,1)",
      transition: { duration: 0.3 },
    },
  }

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  }

  const overlayVariants = {
    hover: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  }

  const titleVariants = {
    hover: {
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  }

  return (
    <motion.div
      className="bg-gray-950 rounded-lg overflow-hidden shadow-lg h-full flex flex-col relative group"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden" style={{ paddingTop: "66.66%" }}>
        <motion.div>
          <Image
            src={project.imageUrl || "/placeholder.svg"}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 w-full h-full"
          />
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          variants={overlayVariants}
        />
      </div>
      <motion.div className="absolute bottom-0 left-0 right-0 p-6 text-transparent" variants={titleVariants}>
        <h2 className="md:text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h2>
        <p className="text-sm text-gray-100 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.description}
        </p>
        <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ProjectButton href={project.projectUrl} icon={<FiExternalLink />}>
            View Project
          </ProjectButton>
          {/* <ProjectButton href={project.githubUrl} icon={<FiGithub />}>
            GitHub
          </ProjectButton> */}
        </div>
      </motion.div>
      {project.featured && (
        <div className="absolute top-0 left-0 bg-yellow-500 text-black font-bold py-1 px-3 rounded-br-lg">Featured</div>
      )}
      {project.awards && (
        <motion.div
          className="absolute top-2 right-2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FiAward className="text-yellow-500 text-2xl md:text-3xl" />
        </motion.div>
      )}
    </motion.div>
  )
}

function ProjectButton({ href, icon, children }:any) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-flex items-center px-4 py-2 border border-blue-500 text-sm font-medium rounded-md text-white overflow-hidden group"
    >
      <span className="relative z-10 flex items-center transition-colors duration-300 ease-in-out group-hover:text-white">
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </span>
      <span className="absolute bottom-0 left-1/2 w-0 h-0 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-[200%] group-hover:h-[200%] -translate-x-1/2 -z-1 rounded-full"></span>
    </Link>
  )
}

