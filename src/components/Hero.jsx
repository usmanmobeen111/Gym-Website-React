import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-cover bg-center md:bg-top flex items-center justify-center"
      style={{ backgroundImage: "url('/hero.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-light mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Transform Your <span className="text-primary">Body</span>,  
          <br className="hidden md:block" />
          Elevate Your <span className="text-primary">Mind</span>
        </motion.h1>

        <motion.p
          className="text-gray-50 text-lg md:text-xl max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Join FitnessPlanet and redefine your strength, discipline, and confidence.  
          Your transformation starts here.
        </motion.p>

        <motion.a
          href="#pricing"
          className="inline-block bg-primary text-light font-semibold px-8 py-3 rounded-full 
                     hover:bg-primary/95 transition-all duration-300 shadow-md hover:shadow-red-600/40"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
        >
          Get Started
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
