import React from "react";
import { LANDING_FEATURES } from "../constants/features";

export const Features = () => {
  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powerful Features for Content Creators
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform your videos into multiple content formats with our
            AI-powered tools
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {LANDING_FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 mb-4 rounded-lg bg-blue-50 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
