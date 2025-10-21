import React from "react";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center md:bg-top flex items-center justify-center"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* Overlay for dimming the background */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-light mb-4">
          Transform Your <span className="text-primary">Body</span>,  
          <br className="hidden md:block" />
          Elevate Your <span className="text-primary">Mind</span>
        </h1>
        <p className="text-[#b3b3b3] text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Join FitnessPlanet and redefine your strength, discipline, and
          confidence. Your transformation starts here.
        </p>
        <a
          href="#pricing"
          className="inline-block bg-primary text-light font-semibold px-8 py-3 rounded-full 
                     hover:bg-primary/95] transition-all duration-300 shadow-md hover:shadow-red-600/40"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
