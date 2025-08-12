
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Features from "@/components/Features";
import AllInOneSuite from "@/components/AllInOneSuite";
import ImageShowcaseSection from "@/components/ImageShowcaseSection";
import WhySwitch from "@/components/WhySwitch";
import HowItWorks from "@/components/HowItWorks";
import ValueProposition from "@/components/ValueProposition";
import AIBlock from "@/components/AIBlock";
import CustomDevelopment from "@/components/CustomDevelopment";
import Testimonials from "@/components/Testimonials";
import PrivacySecurity from "@/components/PrivacySecurity";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProductsPage from "@/components/ProductsPage";
import IntroVideo from "@/components/IntroVideo";
import CapabilityCatalog from "@/components/CapabilityCatalog";
import AnnouncementBar from "@/components/AnnouncementBar";
import { ArrowLeft, Users, CheckCircle, Settings, HeadphonesIcon } from "lucide-react";

const Index = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'products' | 'capabilities' | 'services'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('Recent Launches');
  const [showIntroVideo, setShowIntroVideo] = useState(true);
  const [isWebsiteLoaded, setIsWebsiteLoaded] = useState(false);

  // Only show intro video on initial landing page load
  useEffect(() => {
    console.log('Index component mounted, intro video should show only on home page');
    // Only show intro video if we're on the home page initially
    if (currentPage === 'home') {
      setShowIntroVideo(true);
      setIsWebsiteLoaded(false);
    } else {
      setShowIntroVideo(false);
      setIsWebsiteLoaded(true);
    }
  }, []);

  // Hide intro video when navigating away from home
  useEffect(() => {
    if (currentPage !== 'home') {
      setShowIntroVideo(false);
      setIsWebsiteLoaded(true);
    }
  }, [currentPage]);

  // Debug state changes
  useEffect(() => {
    console.log('State changed - showIntroVideo:', showIntroVideo, 'isWebsiteLoaded:', isWebsiteLoaded);
  }, [showIntroVideo, isWebsiteLoaded]);

  const handleVideoEnd = () => {
    console.log('Video ended, transitioning to website');
    setShowIntroVideo(false);
    setTimeout(() => {
      setIsWebsiteLoaded(true);
      console.log('Website should now be visible');
    }, 100);
  };

  // Initialize intersection observer to detect when elements enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    // This helps ensure smooth scrolling for the anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  const handlePageChange = (page: 'home' | 'products' | 'capabilities' | 'services', category?: string) => {
    setCurrentPage(page);
    if (category) {
      setSelectedCategory(category);
    }
    
    // If going back to home, reset intro video state
    if (page === 'home') {
      setShowIntroVideo(false); // Don't show intro video when navigating back to home
      setIsWebsiteLoaded(true);
    }
    
    // Close mobile menu if open
    const body = document.body;
    body.style.overflow = '';
    
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show products page if selected
  if (currentPage === 'products') {
    return (
      <>
        <AnnouncementBar />
        <ProductsPage 
          onBackClick={() => handlePageChange('home')} 
          initialCategory={selectedCategory}
        />
      </>
    );
  }

  // Show services page if selected
  if (currentPage === 'services') {
    return (
      <>
        <AnnouncementBar />
        <div className="min-h-screen bg-white">
          <Navbar onPageChange={handlePageChange} />
          <main className="pt-20 sm:pt-24">
            {/* Header - Mobile Optimized */}
            <div className="bg-white border-b border-gray-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center space-x-2 sm:space-x-4">
                    <button 
                      onClick={() => {
                        console.log('Back button clicked in Services page');
                        handlePageChange('home');
                      }}
                      className="flex items-center text-gray-600 hover:text-pulse-500 transition-colors duration-200 text-xs sm:text-sm"
                    >
                      <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      <span className="hidden xs:inline">Back to Home</span>
                      <span className="xs:hidden">Back</span>
                    </button>
                    <div className="h-3 sm:h-4 w-px bg-gray-300"></div>
                    <h1 className="text-base sm:text-lg font-semibold text-gray-900">Professional Services</h1>
                  </div>
                  <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-600 border border-amber-100">
                    <span className="hidden sm:inline">Under Development</span>
                    <span className="sm:hidden">Dev</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-3 sm:px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
              {/* Header Section - Mobile Optimized */}
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pulse-50 text-pulse-600 border border-pulse-100 mb-4">
                  Professional Services
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Comprehensive Business Solutions
                </h2>
                <p className="text-sm text-gray-600 max-w-2xl mx-auto px-2">
                  Technical services and business solutions to accelerate your digital transformation.
                </p>
              </div>
              
              {/* Services Grid - Mobile Optimized */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-4 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white flex-shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 mb-1">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900">Business Solutions</h3>
                        <span className="inline-block px-1.5 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-700 mt-1 sm:mt-0 self-start">
                          <span className="hidden sm:inline">Under Development</span>
                          <span className="sm:hidden">Dev</span>
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">Complete business setup and optimization services.</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1 sm:gap-2">
                    {[
                      "CRM Implementation",
                      "Email Management", 
                      "Accounting Setup",
                      "HR Solutions",
                      "Sales Automation",
                      "Marketing Automation"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-2 py-1">
                        <CheckCircle className="w-3 h-3 text-pulse-500 flex-shrink-0" />
                        <span className="text-xs text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-4 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center text-white flex-shrink-0">
                      <Settings className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 mb-1">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900">Technical Services</h3>
                        <span className="inline-block px-1.5 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-700 mt-1 sm:mt-0 self-start">
                          <span className="hidden sm:inline">Under Development</span>
                          <span className="sm:hidden">Dev</span>
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">Advanced technical implementation and support.</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1 sm:gap-2">
                    {[
                      "System Integration",
                      "Data Migration",
                      "API Development", 
                      "Cloud Setup",
                      "Security Implementation",
                      "Performance Optimization"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-2 py-1">
                        <CheckCircle className="w-3 h-3 text-pulse-500 flex-shrink-0" />
                        <span className="text-xs text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-4 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 rounded-lg bg-purple-500 flex items-center justify-center text-white flex-shrink-0">
                      <HeadphonesIcon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 mb-1">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900">Support Services</h3>
                        <span className="inline-block px-1.5 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-700 mt-1 sm:mt-0 self-start">
                          <span className="hidden sm:inline">Under Development</span>
                          <span className="sm:hidden">Dev</span>
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">Ongoing support and maintenance for your systems.</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1 sm:gap-2">
                    {[
                      "24/7 Technical Support", 
                      "Training & Onboarding",
                      "Business Consulting",
                      "Maintenance & Updates",
                      "Custom Development"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-2 py-1">
                        <CheckCircle className="w-3 h-3 text-pulse-500 flex-shrink-0" />
                        <span className="text-xs text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA - Mobile Optimized */}
              <div className="mt-12 sm:mt-16 text-center">
                <div className="bg-gradient-to-r from-pulse-500 to-pulse-600 rounded-2xl p-4 sm:p-6 text-white">
                  <h3 className="text-lg sm:text-xl font-bold mb-3">Coming Soon</h3>
                  <p className="text-sm opacity-90 mb-4 max-w-xl mx-auto px-2">
                    All professional services are currently under development. Get notified when they're available!
                  </p>
                  <button className="bg-white text-pulse-500 hover:bg-gray-50 font-semibold py-2 px-6 rounded-full transition-all duration-300 text-sm w-full sm:w-auto">
                    Notify Me
                  </button>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  // Show capabilities page if selected
  if (currentPage === 'capabilities') {
    return (
      <>
        <AnnouncementBar />
        <div className="min-h-screen bg-white">
          <Navbar onPageChange={handlePageChange} />
          <main>
            <CapabilityCatalog onBackClick={() => handlePageChange('home')} />
          </main>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <AnnouncementBar />
      {/* Intro Video Overlay */}
      {showIntroVideo && (
        <div>
          <IntroVideo onVideoEnd={handleVideoEnd} />
        </div>
      )}
      
      {/* Main Website */}
      <div 
        className={`min-h-screen bg-white transition-all duration-1000 ${
          showIntroVideo ? 'opacity-0 blur-lg pointer-events-none' : 'opacity-100 blur-none pointer-events-auto'
        }`}
      >
        <Navbar onPageChange={handlePageChange} />
        <main className="space-y-4 sm:space-y-8">
          <Hero />
          <SocialProof />
          <Features />
          <AllInOneSuite />
          <ImageShowcaseSection />
          <WhySwitch />
          <HowItWorks />
          <ValueProposition />
          <AIBlock />
          <CustomDevelopment />
          <Testimonials />
          <PrivacySecurity />
          <Newsletter />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
