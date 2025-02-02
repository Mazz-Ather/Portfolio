import { motion } from "framer-motion"

export function FilterButtons({ categories, activeFilter, setFilter }:any) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category:any) => (
        <motion.button
          key={category}
          onClick={() => setFilter(category)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeFilter === category ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </div>
  )
}

