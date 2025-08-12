
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  return (
    <ScrollStackItem itemClassName="bg-gradient-to-br from-white to-gray-50 border border-gray-100">
      <div className="flex flex-col h-full">
        <div className="rounded-full bg-pulse-50 w-16 h-16 flex items-center justify-center text-pulse-500 mb-6">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
        <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
      </div>
    </ScrollStackItem>
  );
};

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
              }, index * 100);
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
  
  return (
    <section className="py-12 sm:py-16 md:py-20 pb-0 relative bg-gray-50" id="features" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span>Featured Apps</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
            25+ AI-Powered Business Applications
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element">
            Complete business software suite with AI at the core. From CRM to custom development - we've got you covered.
          </p>
        </div>
        
        <div className="w-full max-w-4xl mx-auto">
          <ScrollStack 
            className="min-h-screen"
            onStackComplete={() => console.log('Stack animation completed')}
            itemStackDistance={40}
            itemScale={0.04}
            stackPosition="10%"
          >
            <FeatureCard
              icon={<span className="text-3xl">🤝</span>}
              title="AI-Powered CRM"
              description="Comprehensive CRM platform with intelligent lead scoring, automated follow-ups, and predictive analytics that learns from your customer interactions."
              index={0}
            />
            <FeatureCard
              icon={<span className="text-3xl">📧</span>}
              title="Smart Email Suite"
              description="Enterprise email with AI-powered spam detection, smart scheduling, automated responses, and intelligent email categorization."
              index={1}
            />
            <FeatureCard
              icon={<span className="text-3xl">📊</span>}
              title="Intelligent Accounting"
              description="AI-driven books management with automated categorization, fraud detection, tax optimization, and predictive financial insights."
              index={2}
            />
            <FeatureCard
              icon={<span className="text-3xl">👥</span>}
              title="Smart HR & People"
              description="AI-enhanced HR platform with intelligent hiring, automated workflows, predictive analytics, and employee engagement insights."
              index={3}
            />
            <FeatureCard
              icon={<span className="text-3xl">💰</span>}
              title="Automated Payroll"
              description="Intelligent payroll processing with compliance automation, AI-powered error detection, and seamless integration with HR systems."
              index={4}
            />
            <FeatureCard
              icon={<span className="text-3xl">⚙️</span>}
              title="Custom Development"
              description="AI-assisted custom software development and automation solutions tailored to your business needs with rapid deployment."
              index={5}
            />
          </ScrollStack>
        </div>
      </div>
    </section>
  );
};

export default Features;
