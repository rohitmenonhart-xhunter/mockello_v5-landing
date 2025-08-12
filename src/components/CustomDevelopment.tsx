import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Code2, Zap, Brain, Rocket, CheckCircle, ArrowRight } from "lucide-react";

const CustomDevelopment = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
              }, index * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Development",
      description: "Leverage cutting-edge AI to accelerate development cycles and create intelligent applications"
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Custom Solutions",
      description: "Tailor-made software solutions designed specifically for your business requirements"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Rapid Deployment",
      description: "Quick turnaround times with automated testing and deployment pipelines"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Scalable Architecture",
      description: "Future-proof solutions built to scale with your growing business needs"
    }
  ];

  const benefits = [
    "AI-assisted code generation and optimization",
    "Automated testing and quality assurance",
    "Real-time collaboration and project tracking",
    "Cloud-native architecture for maximum scalability",
    "Integration with existing MOCKELLO suite",
    "24/7 support and maintenance"
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-white"
      id="custom-development"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-pulse-gradient opacity-5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-gradient opacity-5 blur-3xl rounded-full"></div>
      
      <div className="relative z-10 section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-pulse-500/10 border border-pulse-500/20 fade-in-element opacity-0">
                <Code2 className="w-4 h-4 text-pulse-500 mr-2" />
                <span className="text-pulse-500 text-sm font-medium">Custom Development</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight fade-in-element opacity-0">
                AI-Enhanced
                <br />
                <span className="bg-gradient-to-r from-pulse-500 to-orange-500 bg-clip-text text-transparent">
                  Custom Software
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed fade-in-element opacity-0">
                Transform your unique business vision into reality with our AI-powered custom software development. 
                From concept to deployment, we build intelligent solutions that evolve with your needs.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 fade-in-element opacity-0">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-pulse-50 rounded-lg flex items-center justify-center text-pulse-500 border border-pulse-200">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="fade-in-element opacity-0">
              <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-pulse-500 to-orange-500 text-white font-semibold rounded-xl hover:from-pulse-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>

          {/* Right Content - Benefits List */}
          <div className="space-y-8">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 fade-in-element opacity-0">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mr-4 border border-green-200">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">What You Get</h3>
              </div>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "flex items-center space-x-3 opacity-0 translate-x-4 transition-all duration-500",
                      isVisible && "opacity-100 translate-x-0"
                    )}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 fade-in-element opacity-0">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">50%</div>
                <div className="text-sm text-gray-600">Faster Development</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Technology Stack */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <div className="text-center mb-12 fade-in-element opacity-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Powered by Modern Technology</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We use the latest AI tools and frameworks to deliver cutting-edge solutions
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 fade-in-element opacity-0">
            {['React', 'Node.js', 'Python', 'TensorFlow', 'Docker', 'AWS', 'MongoDB', 'GraphQL'].map((tech, index) => (
              <div 
                key={index} 
                className="px-4 py-2 bg-gray-50 rounded-lg text-gray-700 text-sm font-medium border border-gray-200 hover:bg-gray-100 transition-colors duration-200"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomDevelopment; 