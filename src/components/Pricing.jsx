import React from "react";
import { pricingPlans } from "../data/pricingData";

const Pricing = () => {
  return (
    <section id="pricing" className="bg-dark text-light py-20" >
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">
          Choose Your <span className="text-primary">Plan</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Whether you're just starting your fitness journey or already a pro, we have a plan designed to fit your lifestyle and goals.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-dark border border-[color-border] rounded-2xl p-8 flex flex-col items-center shadow-[shadow-card] transition-all duration-300 hover:-translate-y-2 w-[70vw] md:w-full mx-auto
              hover:shadow-[0_0_20px_rgba(229,9,20,0.3)]
              ${plan.highlight ? "border-[color-primary] shadow-[0_0_25px_rgba(229,9,20,0.5)]" : ""}
              `}
            >
              {plan.highlight && (
                <span className="absolute top-[-12px] bg-primary text-white text-sm font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              
              <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-primary text-4xl font-bold mb-2">{plan.price}</p>
              <p className="text-gray-400 mb-6">{plan.duration}</p>

              <ul className="text-gray-300 text-left space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-primary text-lg">✔</span> {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300
                ${
                  plan.highlight
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-transparent border border-gray-600 hover:border-primary hover:text-primary"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
