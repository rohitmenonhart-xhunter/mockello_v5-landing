
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, ArrowRight, Home, Package, Settings, Layers, Code, BookOpen, Users, Info, DollarSign, LogIn } from "lucide-react";

interface NavbarProps {
  onPageChange?: (page: 'home' | 'products' | 'capabilities' | 'services', category?: string) => void;
}

const Navbar = ({ onPageChange }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
    if (!isMenuOpen) {
      setExpandedSection(null);
    }
  };

  const scrollToTop = () => {
    onPageChange?.('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  const handleMenuItemClick = (action: () => void) => {
    action();
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 py-2 sm:py-3 md:py-4 transition-all duration-300",
        // Mobile: Solid white background
        "bg-white border-b border-gray-200 shadow-sm",
        // Desktop: Blurred background with better visibility
        "md:bg-white/95 md:backdrop-blur-2xl md:border-b md:border-white/20 md:shadow-lg",
        isScrolled 
          ? "md:bg-white/98 md:backdrop-blur-3xl" 
          : "md:bg-white/95 md:backdrop-blur-2xl"
      )}
    >
      <div className="container flex items-center justify-between px-3 sm:px-4 sm:px-6 lg:px-8">
        <a 
          href="#" 
          className="flex items-center space-x-2 pt-2 md:pt-0"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          aria-label="MOCKELLO"
        >
          <img 
            src="/mockello-mainlogo.png" 
            alt="MOCKELLO" 
            className="h-10 w-10 sm:h-12 sm:w-12 object-cover rounded-full scale-125 sm:scale-150"
            style={{ 
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'contrast(1.1)'
            }}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          <a href="#home" className="nav-link" onClick={(e) => { e.preventDefault(); onPageChange?.('home'); }}>Home</a>
          
          {/* Products Navigation */}
          <button 
            onClick={() => onPageChange?.('products')}
            className="nav-link"
          >
            <span>Products</span>
          </button>
          
          {/* Services Navigation */}
          <button 
            onClick={() => onPageChange?.('services')}
            className="nav-link"
          >
            <span>Services</span>
          </button>

          {/* Capabilities Click Menu */}
          <div className="relative">
            <button 
              onClick={() => onPageChange?.('capabilities')}
              className="nav-link"
            >
              <span>Capabilities</span>
            </button>
          </div>

          {/* Custom Software Development */}
          <a 
            href="#custom-development" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('custom-development');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            Custom Development
          </a>

          {/* Resources Dropdown */}
          <div className="relative group">
            <button className="nav-link flex items-center space-x-1">
              <span>Resources</span>
              <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-2xl border border-white/20 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-6">
                <div className="space-y-3">
                  <a href="#blogs" className="block text-gray-600 hover:text-pulse-500 transition-colors">
                    <div className="font-medium text-gray-900">Blogs</div>
                    <div className="text-xs text-gray-500">Latest insights and tips</div>
                  </a>
                  <a href="#articles" className="block text-gray-600 hover:text-pulse-500 transition-colors">
                    <div className="font-medium text-gray-900">Articles</div>
                    <div className="text-xs text-gray-500">In-depth guides</div>
                  </a>
                  <a href="#documentation" className="block text-gray-600 hover:text-pulse-500 transition-colors">
                    <div className="font-medium text-gray-900">Documentation</div>
                    <div className="text-xs text-gray-500">Technical guides</div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Partnerships Dropdown */}
          <div className="relative group">
            <button className="nav-link flex items-center space-x-1">
              <span>Partnerships</span>
              <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-2xl border border-white/20 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-6">
                <div className="space-y-4">
                  <a href="#become-partner" className="block text-gray-600 hover:text-pulse-500 transition-colors">
                    <div className="font-medium text-gray-900">Want to be our partner?</div>
                    <div className="text-xs text-gray-500">Join our partner network</div>
                  </a>
                  <div className="border-t border-gray-100 pt-4">
                    <a href="#our-partners" className="block text-gray-600 hover:text-pulse-500 transition-colors">
                      <div className="font-medium text-gray-900">Our Partners</div>
                      <div className="text-xs text-gray-500">Trusted partner ecosystem</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a href="#about" className="nav-link">About</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#login" className="nav-link">Login</a>
        </nav>

        {/* Tablet Navigation */}
        <nav className="hidden md:flex lg:hidden space-x-4">
          <a href="#home" className="nav-link text-sm" onClick={(e) => { e.preventDefault(); onPageChange?.('home'); }}>Home</a>
          
          <button 
            onClick={() => onPageChange?.('products')}
            className="nav-link text-sm"
          >
            <span>Products</span>
          </button>

          <button 
            onClick={() => onPageChange?.('services')}
            className="nav-link text-sm"
          >
            <span>Services</span>
          </button>

          <div className="relative">
            <button 
              onClick={() => onPageChange?.('capabilities')}
              className="nav-link text-sm"
            >
              <span>Capabilities</span>
            </button>
          </div>

          <a 
            href="#custom-development" 
            className="nav-link text-sm"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('custom-development');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            Custom Dev
          </a>

          <div className="relative group">
            <button className="nav-link flex items-center space-x-1 text-sm">
              <span>More</span>
              <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-2xl border border-white/20 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-4">
                <div className="space-y-2">
                  <a href="#about" className="block text-sm text-gray-600 hover:text-pulse-500 py-1">About</a>
                  <a href="#pricing" className="block text-sm text-gray-600 hover:text-pulse-500 py-1">Pricing</a>
                  <a href="#blogs" className="block text-sm text-gray-600 hover:text-pulse-500 py-1">Resources</a>
                  <a href="#become-partner" className="block text-sm text-gray-600 hover:text-pulse-500 py-1">Partnerships</a>
                  <a href="#login" className="block text-sm text-gray-600 hover:text-pulse-500 py-1">Login</a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile menu button - Enhanced */}
        <button 
          className={cn(
            "md:hidden relative w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 focus:outline-none",
            isMenuOpen 
              ? "bg-pulse-500 text-white shadow-lg" 
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          )}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative w-5 h-5">
            <span className={cn(
              "absolute top-0 left-0 w-5 h-0.5 bg-current transition-all duration-300 transform origin-center",
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            )}></span>
            <span className={cn(
              "absolute top-2 left-0 w-5 h-0.5 bg-current transition-all duration-300",
              isMenuOpen ? "opacity-0" : ""
            )}></span>
            <span className={cn(
              "absolute top-4 left-0 w-5 h-0.5 bg-current transition-all duration-300 transform origin-center",
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            )}></span>
          </div>
        </button>
      </div>

      {/* Enhanced Mobile Navigation - Full Screen */}
      <div className={cn(
        "fixed inset-0 z-50 md:hidden transition-all duration-500 ease-out",
        isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      )}>
        {/* Full Screen Menu Panel */}
        <div className={cn(
          "absolute inset-0 bg-white transition-all duration-500 ease-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 bg-white">
            <div className="flex items-center space-x-3">
              <img 
                src="/mockello-mainlogo.png" 
                alt="MOCKELLO" 
                className="h-8 w-8 object-cover rounded-full"
                style={{ 
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
              <span className="font-bold text-gray-900 text-lg">MOCKELLO</span>
            </div>
            <button 
              onClick={toggleMenu}
              className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation - Full Height */}
          <nav className="flex flex-col h-[calc(100vh-80px)] overflow-y-auto">
            <div className="px-4 sm:px-6 py-6 space-y-1 flex-1">
              
              {/* Main Pages */}
              <button 
                className="w-full flex items-center space-x-4 px-4 py-4 rounded-xl text-left hover:bg-gray-50 transition-colors group"
                onClick={() => handleMenuItemClick(() => onPageChange?.('home'))}
              >
                <Home className="w-6 h-6 text-gray-400 group-hover:text-pulse-500" />
                <span className="font-medium text-gray-900 text-lg">Home</span>
              </button>

              <button 
                className="w-full flex items-center justify-between px-4 py-4 rounded-xl text-left hover:bg-gray-50 transition-colors group"
                onClick={() => handleMenuItemClick(() => onPageChange?.('products'))}
              >
                <div className="flex items-center space-x-4">
                  <Package className="w-6 h-6 text-gray-400 group-hover:text-pulse-500" />
                  <span className="font-medium text-gray-900 text-lg">Products</span>
                </div>
                <div className="px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full font-medium">25+</div>
              </button>

              <button 
                className="w-full flex items-center space-x-4 px-4 py-4 rounded-xl text-left hover:bg-gray-50 transition-colors group"
                onClick={() => handleMenuItemClick(() => onPageChange?.('services'))}
              >
                <Settings className="w-6 h-6 text-gray-400 group-hover:text-pulse-500" />
                <span className="font-medium text-gray-900 text-lg">Services</span>
              </button>

              <button 
                className="w-full flex items-center space-x-4 px-4 py-4 rounded-xl text-left hover:bg-gray-50 transition-colors group"
                onClick={() => handleMenuItemClick(() => onPageChange?.('capabilities'))}
              >
                <Layers className="w-6 h-6 text-gray-400 group-hover:text-pulse-500" />
                <span className="font-medium text-gray-900 text-lg">Capabilities</span>
              </button>

              <button 
                className="w-full flex items-center space-x-4 px-4 py-4 rounded-xl text-left hover:bg-gray-50 transition-colors group"
                onClick={() => handleMenuItemClick(() => {
                  const element = document.getElementById('custom-development');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                })}
              >
                <Code className="w-6 h-6 text-gray-400 group-hover:text-pulse-500" />
                <span className="font-medium text-gray-900 text-lg">Custom Development</span>
              </button>

              {/* Divider */}
              <div className="my-6 border-t border-gray-200"></div>

              {/* Expandable Sections */}
              <div>
                <button 
                  className="w-full flex items-center justify-between px-4 py-4 rounded-xl text-left hover:bg-gray-50 transition-colors group"
                  onClick={() => toggleSection('resources')}
                >
                  <div className="flex items-center space-x-4">
                    <BookOpen className="w-6 h-6 text-gray-400 group-hover:text-pulse-500" />
                    <span className="font-medium text-gray-900 text-lg">Resources</span>
                  </div>
                  <ChevronDown className={cn(
                    "w-5 h-5 text-gray-400 transition-transform duration-200",
                    expandedSection === 'resources' ? "rotate-180" : ""
                  )} />
                </button>
                
                {expandedSection === 'resources' && (
                  <div className="ml-10 mt-2 space-y-1">
                    <a href="#blogs" className="block px-4 py-3 text-base text-gray-600 hover:text-pulse-500 hover:bg-gray-50 rounded-lg transition-colors">
                      Blogs & Insights
                    </a>
                    <a href="#articles" className="block px-4 py-3 text-base text-gray-600 hover:text-pulse-500 hover:bg-gray-50 rounded-lg transition-colors">
                      Technical Articles
                    </a>
                    <a href="#documentation" className="block px-4 py-3 text-base text-gray-600 hover:text-pulse-500 hover:bg-gray-50 rounded-lg transition-colors">
                      Documentation
                    </a>
                  </div>
                )}
              </div>

              <div>
                <button 
                  className="w-full flex items-center justify-between px-4 py-4 rounded-xl text-left hover:bg-gray-50 transition-colors group"
                  onClick={() => toggleSection('partnerships')}
                >
                  <div className="flex items-center space-x-4">
                    <Users className="w-6 h-6 text-gray-400 group-hover:text-pulse-500" />
                    <span className="font-medium text-gray-900 text-lg">Partnerships</span>
                  </div>
                  <ChevronDown className={cn(
                    "w-5 h-5 text-gray-400 transition-transform duration-200",
                    expandedSection === 'partnerships' ? "rotate-180" : ""
                  )} />
                </button>
                
                {expandedSection === 'partnerships' && (
                  <div className="ml-10 mt-2 space-y-1">
                    <a href="#become-partner" className="block px-4 py-3 text-base text-gray-600 hover:text-pulse-500 hover:bg-gray-50 rounded-lg transition-colors">
                      Become a Partner
                    </a>
                    <a href="#our-partners" className="block px-4 py-3 text-base text-gray-600 hover:text-pulse-500 hover:bg-gray-50 rounded-lg transition-colors">
                      Our Partners
                    </a>
                  </div>
                )}
              </div>

              {/* Divider */}
              <div className="my-6 border-t border-gray-200"></div>

              {/* Other Links */}
              <a href="#about" className="w-full flex items-center space-x-4 px-4 py-4 rounded-xl text-left hover:bg-gray-50 transition-colors group">
                <Info className="w-6 h-6 text-gray-400 group-hover:text-pulse-500" />
                <span className="font-medium text-gray-900 text-lg">About</span>
              </a>

              <a href="#pricing" className="w-full flex items-center space-x-4 px-4 py-4 rounded-xl text-left hover:bg-gray-50 transition-colors group">
                <DollarSign className="w-6 h-6 text-gray-400 group-hover:text-pulse-500" />
                <span className="font-medium text-gray-900 text-lg">Pricing</span>
              </a>

              <a href="#login" className="w-full flex items-center space-x-4 px-4 py-4 rounded-xl text-left hover:bg-gray-50 transition-colors group">
                <LogIn className="w-6 h-6 text-gray-400 group-hover:text-pulse-500" />
                <span className="font-medium text-gray-900 text-lg">Login</span>
              </a>
            </div>

            {/* Bottom CTA - Fixed at bottom */}
            <div className="p-4 sm:p-6 border-t border-gray-200 bg-gray-50">
              <div className="bg-gradient-to-r from-pulse-500 to-pulse-600 rounded-2xl p-6 text-white text-center">
                <h3 className="font-semibold text-lg mb-2">Ready to get started?</h3>
                <p className="text-sm opacity-90 mb-4">Join thousands of businesses using MOCKELLO</p>
                <button className="w-full bg-white text-pulse-500 hover:bg-gray-50 font-semibold py-3 px-6 rounded-xl transition-colors text-base">
                  Get Started Free
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
