import React from "react";
import { trainers } from "../data/trainersData";

const Trainers = () => {
  return (
    <section id="trainers" className="bg-dark text-light py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          Meet Our <span className="text-primary">Trainers</span>
        </h1>
        <p className="text-gray-400 mb-12">
          Our team of certified professionals are here to push, guide, and inspire you every rep of the way.
        </p>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="relative group bg-[#1b1b1b] rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(229,9,20,0.3)] transition-all duration-300 w-[80vw] mx-auto md:w-full"
            >
              {/* Trainer Image */}
              <div className="relative">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-80 object-cover brightness-90 group-hover:brightness-75 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h2 className="text-2xl font-semibold text-white">
                  {trainer.name}
                </h2>
                <p className="text-primary  text-lg font-semibold mb-2">{trainer.role}</p>
                <p className="text-gray-300 text-sm italic mb-2">
                  “{trainer.quote}”
                </p>
              </div>

              {/* Hover Details */}
              <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-center px-6">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {trainer.name}
                </h3>
                <p className="text-light text-sm mb-1">{trainer.role}</p>
                <p className="text-gray-400 text-sm mb-2">
                  {trainer.experience}
                </p>
                <p className="text-gray-300 text-sm">{trainer.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
