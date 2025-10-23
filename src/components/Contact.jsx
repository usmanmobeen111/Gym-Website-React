import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-dark text-light py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-3">
            Get in Touch
          </h2>
          <p className="text-gray-400 text-lg">
            Have questions? Want to start your fitness journey? Let’s talk.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-primary text-2xl" />
              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p className="text-gray-400">support@fitnessplanet.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-primary text-2xl" />
              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p className="text-gray-400">+1 (800) 456-7890</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-primary text-2xl" />
              <div>
                <h4 className="font-semibold text-lg">Location</h4>
                <p className="text-gray-400">
                  1234 Fitness Ave, New York, USA
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-[#2a2a2a] p-8 rounded-2xl shadow-lg border border-gray-700">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2 text-gray-300"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="w-full bg-dark border border-gray-600 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-primary transition-all duration-200"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2 text-gray-300"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                className="w-full bg-dark border border-gray-600 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-primary transition-all duration-200"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-2 text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Tell us how we can help..."
                className="w-full bg-dark border border-gray-600 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-primary transition-all duration-200"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-red-600 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
