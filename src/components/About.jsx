import React from 'react'
import { FaUser, FaDumbbell, FaClock, FaMedal } from 'react-icons/fa6'
import { motion } from 'framer-motion'

const About = () => {
  const stats = [
    { icon: <FaUser className="text-3xl text-primary" />, label: "10+ Certified Trainers" },
    { icon: <FaDumbbell className="text-3xl text-primary" />, label: "500+ Active Members" },
    { icon: <FaClock className="text-3xl text-primary" />, label: "Open 24/7" },
    { icon: <FaMedal className="text-3xl text-primary" />, label: "100% Personalized Programs" },
  ]

  // Motion variants for reusability
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  }

  return (
    <section
      id="about"
      className="min-h-screen bg-dark text-light py-20 px-8 flex flex-col items-center justify-center"
    >
      {/* Heading */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-10"
      >
        About <span className="text-primary">FitnessPlanet</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl text-center text-lg md:text-xl text-light/90 leading-relaxed mb-16"
      >
        At <span className="text-primary font-semibold">FitnessPlanet</span>, we believe fitness isn’t just about lifting weights — it’s about
        building resilience, focus, and self-mastery. Our trainers combine science-backed techniques
        with years of experience to help you become the best version of yourself. Whether you’re a beginner
        or an athlete, our programs are designed to challenge, transform, and empower you.
      </motion.p>

      {/* Quick Stats */}
      <motion.div
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 }
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center"
      >
        {stats.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="flex flex-col items-center justify-center p-6 bg-dark border-2 w-[60vw] md:w-full mx-auto border-primary/20 
                       rounded-xl shadow-lg shadow-black/30 transition-all duration-300"
          >
            {item.icon}
            <p className="mt-4 text-lg font-semibold text-light">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default About
