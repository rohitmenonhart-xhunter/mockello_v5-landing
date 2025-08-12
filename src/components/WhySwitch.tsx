import React from "react";
import { Check, X } from "lucide-react";

const WhySwitch = () => {
  const comparisons = [
    {
      feature: "AI Integration",
      traditional: "Add-on or none",
      mockello: "Built-in across all apps"
    },
    {
      feature: "Custom Development",
      traditional: "Not available",
      mockello: "Included with AI assistance"
    },
    {
      feature: "Data Ownership",
      traditional: "Limited control",
      mockello: "Full ownership & control"
    },
    {
      feature: "Unified Experience",
      traditional: "Fragmented interface",
      mockello: "Single, cohesive platform"
    },
    {
      feature: "Pricing Model",
      traditional: "Complex tiers",
      mockello: "Transparent, flat rates"
    },
    {
      feature: "Local Support",
      traditional: "Global generic",
      mockello: "India-focused expertise"
    }
  ];

  return (
    <section className="py-20 bg-white" id="why-switch">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 opacity-0 animate-on-scroll">
            <div className="pulse-chip mx-auto mb-6">
              <span>Comparison</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Why switch to Mockello?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              See how our AI-first approach compares to traditional business software suites.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-elegant overflow-hidden opacity-0 animate-on-scroll">
            <div className="grid grid-cols-3 bg-gray-50 p-6">
              <div></div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-600">Traditional Suites</h3>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-pulse-500">Mockello</h3>
              </div>
            </div>
            
            {comparisons.map((comparison, index) => (
              <div key={index} className="grid grid-cols-3 p-6 border-b border-gray-100 last:border-b-0">
                <div className="flex items-center">
                  <span className="font-medium text-gray-900">{comparison.feature}</span>
                </div>
                <div className="text-center flex items-center justify-center">
                  <span className="text-gray-600">{comparison.traditional}</span>
                </div>
                <div className="text-center flex items-center justify-center">
                  <span className="text-pulse-500 font-medium">{comparison.mockello}</span>
                  <Check className="w-5 h-5 text-green-500 ml-2" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 opacity-0 animate-on-scroll">
            <div className="bg-gradient-to-r from-pulse-500 to-pulse-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">The AI Advantage</h3>
              <p className="text-xl mb-6">
                While others bolt on AI as an afterthought, we built it into the foundation of every application.
              </p>
              <a 
                href="#get-started" 
                className="inline-flex items-center bg-white text-pulse-500 font-semibold py-3 px-8 rounded-full hover:bg-gray-50 transition-colors duration-300"
              >
                Experience the Difference
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySwitch; 