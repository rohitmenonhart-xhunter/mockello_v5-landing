import React from "react";
import { ArrowRight, Zap, Brain, Shield } from "lucide-react";

const AllInOneSuite = () => {
  return (
    <section className="py-20 bg-white relative" id="all-in-one">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="opacity-0 animate-on-scroll">
              <div className="pulse-chip mb-6">
                <span>All-in-one suite</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Mockello One
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                The AI-powered operating system for business
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Run your entire business on Mockello with our unified cloud software, designed to help you break down silos between departments and increase organizational efficiency with AI at every step.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Brain className="w-6 h-6 text-pulse-500 mr-3" />
                  <span className="text-gray-700">AI assistant integrated across all applications</span>
                </div>
                <div className="flex items-center">
                  <Zap className="w-6 h-6 text-pulse-500 mr-3" />
                  <span className="text-gray-700">Automated workflows between all your business processes</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-pulse-500 mr-3" />
                  <span className="text-gray-700">Enterprise-grade security with privacy by design</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#try-mockello-one" 
                  className="flex items-center justify-center group bg-pulse-500 hover:bg-pulse-600 text-white font-medium py-4 px-8 rounded-full transition-all duration-300"
                >
                  Try Mockello One
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a 
                  href="#explore-apps" 
                  className="flex items-center justify-center group border-2 border-pulse-500 text-pulse-500 hover:bg-pulse-50 font-medium py-4 px-8 rounded-full transition-all duration-300"
                >
                  Explore All 25+ Apps
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
            
            <div className="opacity-0 animate-on-scroll">
              <div className="bg-gradient-to-br from-pulse-50 to-white p-8 rounded-3xl shadow-elegant">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "AI CRM", "Smart Mail", "Intelligent Books", "HR Plus", 
                    "Auto Payroll", "Project AI", "Sales Force", "Marketing Hub",
                    "Support Desk", "Analytics", "Custom Dev", "And 14+ More..."
                  ].map((app, index) => (
                    <div key={index} className="bg-white p-3 rounded-lg shadow-sm text-sm font-medium text-gray-700 text-center">
                      {app}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllInOneSuite; 