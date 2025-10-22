import React from "react";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-dark)] text-[var(--color-whiteish)] py-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo / Name */}
        <h2 className="text-2xl font-bold text-[var(--color-primary)]">
          Fitness<span className="text-[var(--color-whiteish)]">Planet</span>
        </h2>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
          <li><a href="#home" className="hover:text-[var(--color-primary)] transition">Home</a></li>
          <li><a href="#about" className="hover:text-[var(--color-primary)] transition">About</a></li>
          <li><a href="#trainers" className="hover:text-[var(--color-primary)] transition">Trainers</a></li>
          <li><a href="#pricing" className="hover:text-[var(--color-primary)] transition">Pricing</a></li>
          <li><a href="#contact" className="hover:text-[var(--color-primary)] transition">Contact</a></li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-5 justify-center text-2xl">
          <a
            href="https://facebook.com/usmanmobeen111"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[var(--color-primary)] transition-transform transform hover:scale-110"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com/usmanmobeen111"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[var(--color-primary)] transition-transform transform hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/usmanmobeen111"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[var(--color-primary)] transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()} <span className="text-[var(--color-primary)]">FitnessPlanet</span>.  
          Built by <span className="font-semibold text-white">Code Weaver</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
