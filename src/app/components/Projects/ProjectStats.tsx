import { motion } from "framer-motion"

export function ProjectStats({ projects }:any) {
  const totalProjects = projects.length
  const featuredProjects = projects.filter((p:any) => p.featured).length
  const totalAwards = projects.reduce((acc:any, p:any) => acc + (p.awards?.length || 0), 0)

  const stats = [
    { label: "Total Projects", value: totalProjects },
    { label: "Featured Projects", value: featuredProjects },
    { label: "Awards Received", value: totalAwards },
    { label: "Active Projects", value: projects.filter((p:any) => p.status === "active").length },
  ]

  return (
    <section className="bg-gray-800 py-20 mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="text-5xl font-bold text-blue-500"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5, times: [0, 0.5, 1], loop: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
              >
                {stat.value}
              </motion.div>
              <div className="mt-2 text-xl text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

