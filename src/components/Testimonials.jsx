import React from "react";
import { FaStar } from "react-icons/fa";
import { testimonials } from "../data/testimonialsData";

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-dark text-light py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl font-bold text-light mb-4">
          What Our <span className="text-primary">Members</span> Say
        </h2>
        <p className="text-gray-400 mb-12 text-lg">
          Every transformation has a story. Here’s what our community says about their journey with <span className="text-primary font-semibold">FitnessPlanet</span>.
        </p>

        {/* Testimonials Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-dark border border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-[0_0_25px_rgba(239,68,68,0.4)] transition-all duration-300 flex flex-col items-center w-[70vw] md:w-full mx-auto text-center"
            >
              {/* Image */}
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full border-2 border-primary object-cover mb-4"
              />

              {/* Name & Role */}
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <p className="text-sm text-gray-400 mb-4">{t.role}</p>

              {/* Feedback */}
              <p className="text-gray-300 text-sm italic leading-relaxed mb-4">
                “{t.feedback}”
              </p>

              {/* Rating */}
              <div className="flex justify-center gap-1 mt-auto">
                {[...Array(t.rating)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-primary w-5 h-5"
                  />
                ))}
                {[...Array(5 - t.rating)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-gray-600 w-5 h-5"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
