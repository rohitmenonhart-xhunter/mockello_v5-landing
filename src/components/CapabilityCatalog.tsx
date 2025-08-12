import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { 
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Clock,
  Award,
  Users,
  Globe,
  Smartphone,
  Brain,
  Cloud,
  BarChart3,
  Settings,
  HeadphonesIcon,
  Code2,
  Palette,
  Share2,
  ArrowLeft
} from "lucide-react";

interface CapabilityCatalogProps {
  onBackClick?: () => void;
}

const CapabilityCatalog = ({ onBackClick }: CapabilityCatalogProps) => {
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
              }, index * 50);
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

  const whyChooseUsFeatures = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "One-Stop Tech Partner",
      description: "All services under one roof"
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "AI-Powered",
      description: "We automate where others still manual"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Free Updates & Patches",
      description: "Always secure, always optimized"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Scalable Solutions",
      description: "Built for today, ready for tomorrow"
    }
  ];

  const services = [
    {
      title: "Software Development Services",
      description: "Robust, scalable, and secure software tailored to your business needs, covering every stage from concept to deployment.",
      icon: <Code2 className="w-5 h-5" />,
      items: [
        "Custom Software Development",
        "Enterprise Software Solutions", 
        "SaaS Platforms",
        "Cloud-Native Applications",
        "API Development & Integration (REST, GraphQL, SOAP)",
        "CRM & ERP Systems",
        "AI/ML-Integrated Applications",
        "Blockchain Solutions (Smart Contracts, dApps)",
        "Microservices Architecture",
        "CI/CD Pipeline Setup & DevOps Automation",
        "Security Audits & Penetration Testing",
        "Quality Assurance & Maintenance"
      ]
    },
    {
      title: "Web Development Services", 
      description: "High-performance, responsive, and visually stunning websites that deliver results.",
      icon: <Globe className="w-5 h-5" />,
      items: [
        "HTML5, CSS3, JavaScript, TypeScript",
        "React.js, Vue.js, Angular",
        "Progressive Web Apps (PWA)",
        "Node.js, Django, Flask, Laravel, Spring Boot",
        "RESTful & GraphQL APIs",
        "Database Integration (PostgreSQL, MySQL, MongoDB, Redis)",
        "MERN, MEAN, JAMstack, LAMP Stacks",
        "Headless CMS (Strapi, Contentful, Sanity)",
        "Shopify, WooCommerce, Magento, BigCommerce",
        "Payment Gateway Integration",
        "24/7 Monitoring & Security Updates"
      ]
    },
    {
      title: "App Development",
      description: "Native, cross-platform, and hybrid mobile applications to reach your audience everywhere.",
      icon: <Smartphone className="w-5 h-5" />,
      items: [
        "iOS App Development (Swift, Objective-C)",
        "Android App Development (Kotlin, Java)", 
        "Cross-Platform Apps (Flutter, React Native)",
        "Wearable App Development (WatchOS, WearOS)",
        "IoT App Development",
        "AR/VR Mobile Applications",
        "App Store Optimization (ASO)"
      ]
    },
    {
      title: "UI/UX & Creative Design",
      description: "Design team ensuring your brand looks stunning, engaging, and user-friendly.",
      icon: <Palette className="w-5 h-5" />,
      items: [
        "UI Design (Web, Mobile, Desktop)",
        "UX Research & Prototyping", 
        "Wireframing & Interactive Mockups",
        "Logo Design & Brand Identity Kits",
        "Motion Graphics & Animations",
        "Graphic Design (Banners, Posters, Infographics)",
        "Iconography & Custom Illustrations"
      ]
    },
    {
      title: "AI & Automation Solutions",
      description: "Leverage AI agents to simplify, automate, and optimize your operations.",
      icon: <Brain className="w-5 h-5" />,
      items: [
        "AI Chatbots & Virtual Assistants",
        "AI-Based Content Generation",
        "Predictive Analytics & Recommendation Engines", 
        "Image Recognition & Computer Vision",
        "Natural Language Processing (NLP) Solutions",
        "Voice AI & Speech Recognition Systems"
      ]
    },
    {
      title: "Social Media Automation & Management",
      description: "AI-powered tools handling your entire social media presence, end-to-end.",
      icon: <Share2 className="w-5 h-5" />,
      items: [
        "AI-Generated Captions & Hashtags",
        "Best Time-to-Post Analysis",
        "Competitor Insights & Benchmarking",
        "AI-Generated Instagram Reels, TikTok Videos",
        "AI-Designed Posts, Carousels & Stories",
        "Automated Scheduling & Publishing",
        "Engagement & Growth Analytics",
        "Automated A/B Testing of Content"
      ]
    },
    {
      title: "Digital Marketing & Growth",
      description: "Maximize your brand's reach with strategic marketing services.",
      icon: <BarChart3 className="w-5 h-5" />,
      items: [
        "Search Engine Optimization (SEO)",
        "Search Engine Marketing (SEM)",
        "Social Media Marketing (SMM)",
        "Email Marketing Automation",
        "Influencer Marketing Campaigns",
        "PPC Campaign Management",
        "Analytics & Conversion Rate Optimization (CRO)"
      ]
    },
    {
      title: "Cloud & Infrastructure Services",
      description: "Robust, scalable, and secure cloud solutions for modern businesses.",
      icon: <Cloud className="w-5 h-5" />,
      items: [
        "Cloud Deployment (AWS, Azure, GCP)",
        "Cloud Migration & Optimization",
        "Serverless Architecture Setup",
        "CDN & Load Balancing Solutions",
        "Data Backup & Disaster Recovery"
      ]
    },
    {
      title: "Internet of Things (IoT) Solutions",
      description: "Connecting devices, sensors, and systems for smarter operations.",
      icon: <Settings className="w-5 h-5" />,
      items: [
        "IoT Application Development",
        "Hardware-Software Integration",
        "Smart Home & Industrial IoT Solutions",
        "Real-Time Monitoring Dashboards"
      ]
    },
    {
      title: "Support & Maintenance",
      description: "Ongoing support ensuring your systems remain flawless.",
      icon: <HeadphonesIcon className="w-5 h-5" />,
      items: [
        "24/7 Technical Support",
        "Incident Management & Root Cause Analysis",
        "Preventive Maintenance Schedules",
        "Regular Feature Enhancements"
      ]
    }
  ];

  const handleBackClick = () => {
    console.log('Back button clicked in CapabilityCatalog');
    if (onBackClick) {
      onBackClick();
    } else {
      console.warn('onBackClick function not provided');
    }
  };

  return (
    <section className="py-8 sm:py-16 bg-white relative overflow-hidden" ref={sectionRef}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-pulse-50/30 to-transparent pointer-events-none"></div>
      
      {/* Header with Back Button */}
      <div className="bg-white border-b border-gray-100 mb-6 sm:mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button 
                onClick={handleBackClick}
                className="flex items-center text-gray-600 hover:text-pulse-500 transition-colors duration-200 text-xs sm:text-sm"
              >
                <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="hidden xs:inline">Back to Home</span>
                <span className="xs:hidden">Back</span>
              </button>
              <div className="h-3 sm:h-4 w-px bg-gray-300"></div>
              <h1 className="text-base sm:text-lg font-semibold text-gray-900">Capabilities</h1>
            </div>
            <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-600 border border-amber-100">
              <span className="hidden sm:inline">Complete Solutions</span>
              <span className="sm:hidden">Solutions</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 sm:px-6 lg:px-8">
        {/* Header - Mobile Optimized */}
        <div className="text-center mb-8 sm:mb-12 fade-in-element opacity-0">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pulse-50 text-pulse-600 border border-pulse-100 mb-4">
            <span className="hidden sm:inline">Complete Digital Solutions & Innovation Suite</span>
            <span className="sm:hidden">Digital Solutions Suite</span>
          </div>
          <h1 className="text-xl sm:text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-3">
            <span className="text-pulse-500">MOCKELLO</span> Capability Catalog
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
            "Your vision, engineered into reality." End-to-end digital, software, and AI-powered solutions designed to empower businesses, startups, and individuals.
          </p>
        </div>

        {/* Why Choose Us Section - Mobile Optimized */}
        <div className="mb-12 sm:mb-16 fade-in-element opacity-0">
          <h2 className="text-lg sm:text-xl sm:text-2xl font-bold text-center text-gray-900 mb-6 sm:mb-8">Why Choose Mockello?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {whyChooseUsFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-3 sm:p-4 hover:bg-gray-100 transition-colors duration-200">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-pulse-100 flex items-center justify-center text-pulse-600 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{feature.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid - Mobile Optimized */}
        <div className="space-y-4 sm:space-y-6 lg:space-y-8 fade-in-element opacity-0">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 hover:shadow-md transition-all duration-300">
              <div className="flex items-start space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 rounded-lg bg-pulse-500 flex items-center justify-center text-white flex-shrink-0">
                  {service.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg sm:text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed">{service.description}</p>
                </div>
              </div>
              
              {/* Service Items - Mobile Optimized Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-2">
                {service.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center space-x-2 py-1">
                    <CheckCircle className="w-3 h-3 text-pulse-500 flex-shrink-0" />
                    <span className="text-xs text-gray-700 leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* All Services Include - Mobile Optimized */}
        <div className="mt-12 sm:mt-16 fade-in-element opacity-0">
          <div className="bg-gradient-to-r from-pulse-500 to-pulse-600 rounded-2xl p-4 sm:p-6 sm:p-8 text-white text-center">
            <h3 className="text-lg sm:text-xl sm:text-2xl font-bold mb-3 sm:mb-4">All Services Include</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                <span>Free Updates & Patches</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                <span>Scalable Solutions</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                <span>Custom Pricing</span>
              </div>
            </div>
            <div className="mt-4 sm:mt-6">
              <button className="bg-white text-pulse-500 hover:bg-gray-50 font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm w-full sm:w-auto">
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Stats - Mobile Optimized */}
        <div className="mt-8 sm:mt-12 text-center fade-in-element opacity-0">
          <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-md mx-auto">
            <div>
              <div className="text-xl sm:text-2xl font-bold text-pulse-500">3+</div>
              <div className="text-xs text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-pulse-500">24/7</div>
              <div className="text-xs text-gray-600">Support Available</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-pulse-500">100%</div>
              <div className="text-xs text-gray-600">Client Focused</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilityCatalog; 