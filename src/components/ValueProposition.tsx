import React from "react";

const ValueProposition = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-pulse-500 to-pulse-600 text-white" id="value-prop">
      <div className="section-container">
        <div className="text-center max-w-4xl mx-auto opacity-0 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            The Operating System for Business
          </h2>
          <p className="text-xl sm:text-2xl mb-8 text-white/90">
            Run your entire business on Mockello with AI-unified cloud software, designed to break down silos and multiply your team's impact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3">AI-First</h3>
              <p className="text-white/80">Every app powered by intelligence that learns from your business</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3">Unified</h3>
              <p className="text-white/80">One platform, one login, unlimited possibilities</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3">Scalable</h3>
              <p className="text-white/80">From startup to enterprise, grow without switching</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition; 