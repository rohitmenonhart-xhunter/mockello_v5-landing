import React from "react";
import { Brain, Zap, TrendingUp } from "lucide-react";

const AIBlock = () => {
  return (
    <section className="py-16 sm:py-20 bg-white" id="ai-block">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 opacity-0 animate-on-scroll">
            <div className="pulse-chip mx-auto mb-6">
              <span>AI Block</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Let AI tackle your busy-work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Free your time for true innovation. Recommendations, predictions, automations—everywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gray-50 opacity-0 animate-on-scroll">
              <div className="w-16 h-16 bg-pulse-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-pulse-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Recommendations</h3>
              <p className="text-gray-600">
                AI analyzes your workflows and suggests optimizations to boost productivity.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gray-50 opacity-0 animate-on-scroll">
              <div className="w-16 h-16 bg-pulse-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-pulse-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Predictive Insights</h3>
              <p className="text-gray-600">
                Anticipate trends and make data-driven decisions with AI-powered forecasting.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gray-50 opacity-0 animate-on-scroll">
              <div className="w-16 h-16 bg-pulse-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-pulse-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant Automation</h3>
              <p className="text-gray-600">
                Set up complex automations with simple commands. AI handles the heavy lifting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBlock; 