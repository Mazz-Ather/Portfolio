import { motion } from "framer-motion"

export function Testimonial() {
  return (
    <section className="bg-gray-800 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold text-white mb-8">What People Are Saying</h2>
          <blockquote className="text-xl text-gray-300 italic mb-8">
            "The projects showcased here demonstrate an exceptional blend of creativity and technical prowess. Each one
            pushes the boundaries of what's possible in web development."
          </blockquote>
          <div className="flex items-center justify-center">
            <img className="h-12 w-12 rounded-full mr-4" src="/images/d6.jpg" alt="Jane Doe" />
            <div className="text-left">
              <div className="text-white font-semibold">Jane Doe</div>
              <div className="text-gray-400">CEO, Tech Innovators Inc.</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

