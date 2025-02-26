import React from "react";
import { LANDING_STEPS } from "../constants/steps";

export const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet your AI Agent in 3 Simple Steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {LANDING_STEPS.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="w-10 h-10 mb-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-semibold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < LANDING_STEPS.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-8 h-0.5 bg-gray-200 transform translate-x-full" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
