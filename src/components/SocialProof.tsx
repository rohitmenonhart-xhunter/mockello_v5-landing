import React from "react";

const SocialProof = () => {
  return (
    <section className="py-8 sm:py-12 bg-gray-50" id="social-proof">
      <div className="section-container">
        <div className="text-center mb-8 sm:mb-12 opacity-0 animate-on-scroll">
          <p className="text-sm text-gray-600 uppercase tracking-wide mb-6">
            Trusted by businesses worldwide
          </p>
          
          {/* Stats section - realistic for startup */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-pulse-500 mb-2">25+</div>
              <div className="text-sm text-gray-600">AI-Powered Apps</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pulse-500 mb-2">99.9%</div>
              <div className="text-sm text-gray-600">Uptime SLA</div>
            </div>
          </div>
          
          {/* Customer logo carousel */}
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-60">
            <div className="text-xl font-bold text-gray-400">TechStart</div>
            <div className="text-xl font-bold text-gray-400">InnovaCorp</div>
            <div className="text-xl font-bold text-gray-400">FutureWorks</div>
            <div className="text-xl font-bold text-gray-400">ScaleUp</div>
            <div className="text-xl font-bold text-gray-400">NextGen</div>
            <div className="text-xl font-bold text-gray-400">AgileTeam</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof; 