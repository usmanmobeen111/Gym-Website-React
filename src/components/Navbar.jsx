import React, { useState } from "react";
import { GiWeightLiftingUp } from "react-icons/gi";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Trainers", href: "#trainers" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-dark/50 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-5 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-primary text-2xl font-bold">
          <GiWeightLiftingUp className="text-primary text-3xl" />
          <span className="text-light font-semibold tracking-wide">
            FitnessPlanet
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-light font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative group transition-all duration-300"
              >
                {link.name}
                <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-light text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-dark transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-2/3" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-3 text-light">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="relative group block px-3 py-2 transition-all duration-300"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
