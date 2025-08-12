import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Search, ArrowRight, Zap, Brain, Shield, Users, TrendingUp, Mail, Code, BarChart3, Smartphone, Globe, ArrowLeft } from "lucide-react";

interface Product {
  name: string;
  description: string;
  href: string;
  color: string;
  badge?: string;
}

interface ProductCategory {
  name: string;
  icon: React.ReactNode;
  count: number;
  products: Product[];
}

interface ProductsPageProps {
  onBackClick?: () => void;
  initialCategory?: string;
}

const productCategories: ProductCategory[] = [
  {
    name: "Recent Launches",
    icon: <Zap className="w-5 h-5" />,
    count: 6,
    products: [
      { 
        name: "AI Domains", 
        description: "Easy domain registration, transfer, and secured DNS management with AI-powered suggestions.", 
        href: "#domains",
        badge: "NEW",
        color: "bg-green-100 text-green-700"
      },
      { 
        name: "Smart Payments", 
        description: "Unified payment solution built for all businesses with AI fraud detection.", 
        href: "#payments",
        badge: "NEW",
        color: "bg-blue-100 text-blue-700"
      },
      { 
        name: "Research Studio", 
        description: "Cloud-based qualitative data analysis tool powered by AI insights.", 
        href: "#research",
        badge: "NEW",
        color: "bg-purple-100 text-purple-700"
      },
      { 
        name: "Community Spaces", 
        description: "Online community platform for individuals and businesses to grow their network.", 
        href: "#community",
        badge: "NEW",
        color: "bg-orange-100 text-orange-700"
      },
      { 
        name: "Projects Plus", 
        description: "Unified project management platform for intelligent, data-driven work.", 
        href: "#projectsplus",
        badge: "SUITE",
        color: "bg-red-100 text-red-700"
      },
      { 
        name: "Service Plus", 
        description: "Unified platform for customer service and support teams.", 
        href: "#serviceplus",
        badge: "SUITE",
        color: "bg-green-100 text-green-700"
      },
    ]
  },
  {
    name: "Sales",
    icon: <TrendingUp className="w-5 h-5" />,
    count: 7,
    products: [
      { name: "AI CRM", description: "Intelligent customer relationship management with predictive analytics", href: "#crm", color: "bg-pulse-100 text-pulse-700" },
      { name: "Lead Capture", description: "Automated lead generation and intelligent scoring system", href: "#leads", color: "bg-pulse-100 text-pulse-700" },
      { name: "Sales Force", description: "Complete sales automation platform with AI insights", href: "#sales", color: "bg-pulse-100 text-pulse-700" },
      { name: "Quote Builder", description: "Smart proposal and quote generation with AI recommendations", href: "#quotes", color: "bg-pulse-100 text-pulse-700" },
      { name: "Sales Analytics", description: "Advanced sales performance insights and forecasting", href: "#analytics", color: "bg-pulse-100 text-pulse-700" },
      { name: "Pipeline Manager", description: "Visual sales pipeline tracking with AI predictions", href: "#pipeline", color: "bg-pulse-100 text-pulse-700" },
      { name: "Deal Tracker", description: "AI-powered deal intelligence and opportunity management", href: "#deals", color: "bg-pulse-100 text-pulse-700" },
    ]
  },
  {
    name: "Marketing",
    icon: <Brain className="w-5 h-5" />,
    count: 7,
    products: [
      { name: "Marketing Hub", description: "All-in-one marketing automation with AI-driven campaigns", href: "#marketing", color: "bg-indigo-100 text-indigo-700" },
      { name: "Email Campaigns", description: "AI-powered email marketing with personalization", href: "#email", color: "bg-indigo-100 text-indigo-700" },
      { name: "Social Media", description: "Multi-platform social management with AI content suggestions", href: "#social", color: "bg-indigo-100 text-indigo-700" },
      { name: "Content Studio", description: "AI-assisted content creation and planning platform", href: "#content", color: "bg-indigo-100 text-indigo-700" },
      { name: "SEO Tools", description: "AI-powered search optimization and ranking platform", href: "#seo", color: "bg-indigo-100 text-indigo-700" },
      { name: "Campaign Analytics", description: "Marketing performance tracking with predictive insights", href: "#campaigns", color: "bg-indigo-100 text-indigo-700" },
      { name: "Landing Pages", description: "High-converting page builder with AI optimization", href: "#landing", color: "bg-indigo-100 text-indigo-700" },
    ]
  },
  {
    name: "Commerce and POS",
    icon: <Smartphone className="w-5 h-5" />,
    count: 6,
    products: [
      { name: "E-commerce Suite", description: "Complete online store solution with AI recommendations", href: "#ecommerce", color: "bg-emerald-100 text-emerald-700" },
      { name: "POS System", description: "Smart point-of-sale platform with inventory intelligence", href: "#pos", color: "bg-emerald-100 text-emerald-700" },
      { name: "Inventory Manager", description: "AI-driven inventory optimization and demand forecasting", href: "#inventory", color: "bg-emerald-100 text-emerald-700" },
      { name: "Order Management", description: "Streamlined order processing with AI routing", href: "#orders", color: "bg-emerald-100 text-emerald-700" },
      { name: "Payment Gateway", description: "Secure payment processing with fraud detection", href: "#payments", color: "bg-emerald-100 text-emerald-700" },
      { name: "Multi-Channel", description: "Unified selling across platforms with AI sync", href: "#multichannel", color: "bg-emerald-100 text-emerald-700" },
    ]
  },
  {
    name: "Service",
    icon: <Users className="w-5 h-5" />,
    count: 6,
    products: [
      { name: "Help Desk", description: "AI-powered customer support with intelligent routing", href: "#helpdesk", color: "bg-cyan-100 text-cyan-700" },
      { name: "Live Chat", description: "Real-time customer engagement with AI assistance", href: "#chat", color: "bg-cyan-100 text-cyan-700" },
      { name: "Knowledge Base", description: "Smart self-service portal with AI-powered search", href: "#kb", color: "bg-cyan-100 text-cyan-700" },
      { name: "Ticket Management", description: "Automated ticket routing and prioritization", href: "#tickets", color: "bg-cyan-100 text-cyan-700" },
      { name: "SLA Management", description: "Service level automation with predictive monitoring", href: "#sla", color: "bg-cyan-100 text-cyan-700" },
      { name: "Customer Portal", description: "Self-service customer hub with AI recommendations", href: "#portal", color: "bg-cyan-100 text-cyan-700" },
    ]
  },
  {
    name: "Finance",
    icon: <BarChart3 className="w-5 h-5" />,
    count: 7,
    products: [
      { name: "Intelligent Books", description: "AI-powered accounting platform with smart categorization", href: "#books", color: "bg-yellow-100 text-yellow-700" },
      { name: "Invoice Pro", description: "Smart invoicing and billing with payment predictions", href: "#invoice", color: "bg-yellow-100 text-yellow-700" },
      { name: "Expense Tracker", description: "Automated expense management with AI categorization", href: "#expense", color: "bg-yellow-100 text-yellow-700" },
      { name: "Tax Compliance", description: "Automated tax calculations and regulatory compliance", href: "#tax", color: "bg-yellow-100 text-yellow-700" },
      { name: "Financial Reports", description: "Real-time financial insights with predictive analytics", href: "#reports", color: "bg-yellow-100 text-yellow-700" },
      { name: "Cash Flow", description: "Predictive cash flow analysis and optimization", href: "#cashflow", color: "bg-yellow-100 text-yellow-700" },
      { name: "Asset Manager", description: "Fixed asset tracking with depreciation AI", href: "#assets", color: "bg-yellow-100 text-yellow-700" },
    ]
  },
  {
    name: "Email, Storage, and Collaboration",
    icon: <Mail className="w-5 h-5" />,
    count: 6,
    products: [
      { name: "Smart Mail", description: "AI-enhanced business email with intelligent filtering", href: "#mail", color: "bg-blue-100 text-blue-700" },
      { name: "Team Chat", description: "Instant team communication with AI-powered insights", href: "#teamchat", color: "bg-blue-100 text-blue-700" },
      { name: "Video Meetings", description: "HD video conferencing with AI transcription", href: "#meetings", color: "bg-blue-100 text-blue-700" },
      { name: "Cloud Storage", description: "Secure file sharing platform with AI organization", href: "#storage", color: "bg-blue-100 text-blue-700" },
      { name: "Document Editor", description: "Collaborative document creation with AI assistance", href: "#docs", color: "bg-blue-100 text-blue-700" },
      { name: "Project Wiki", description: "Team knowledge management with AI search", href: "#wiki", color: "bg-blue-100 text-blue-700" },
    ]
  },
  {
    name: "Human Resources",
    icon: <Users className="w-5 h-5" />,
    count: 7,
    products: [
      { name: "HR Plus", description: "Complete HR management suite with AI insights", href: "#hr", color: "bg-pink-100 text-pink-700" },
      { name: "Recruitment", description: "AI-powered hiring platform with candidate matching", href: "#recruit", color: "bg-pink-100 text-pink-700" },
      { name: "Auto Payroll", description: "Automated payroll processing with compliance AI", href: "#payroll", color: "bg-pink-100 text-pink-700" },
      { name: "Performance", description: "Employee performance tracking with AI analytics", href: "#performance", color: "bg-pink-100 text-pink-700" },
      { name: "Time Tracking", description: "Smart attendance management with AI patterns", href: "#timetrack", color: "bg-pink-100 text-pink-700" },
      { name: "Employee Portal", description: "Self-service HR platform with AI assistance", href: "#empportal", color: "bg-pink-100 text-pink-700" },
      { name: "Benefits Manager", description: "Employee benefits administration with AI optimization", href: "#benefits", color: "bg-pink-100 text-pink-700" },
    ]
  },
  {
    name: "Legal",
    icon: <Shield className="w-5 h-5" />,
    count: 5,
    products: [
      { name: "Contract Manager", description: "AI contract analysis and management platform", href: "#contracts", color: "bg-gray-100 text-gray-700" },
      { name: "Legal Research", description: "AI-powered legal research and case analysis tool", href: "#research", color: "bg-gray-100 text-gray-700" },
      { name: "Compliance Tracker", description: "Regulatory compliance monitoring with AI alerts", href: "#compliance", color: "bg-gray-100 text-gray-700" },
      { name: "Document Review", description: "Automated document analysis with AI insights", href: "#docreview", color: "bg-gray-100 text-gray-700" },
      { name: "Case Management", description: "Legal case tracking system with AI predictions", href: "#cases", color: "bg-gray-100 text-gray-700" },
    ]
  },
  {
    name: "Security and IT Management",
    icon: <Shield className="w-5 h-5" />,
    count: 6,
    products: [
      { name: "Security Center", description: "Enterprise security management with AI threat detection", href: "#security", color: "bg-red-100 text-red-700" },
      { name: "Identity Manager", description: "User access control system with AI behavior analysis", href: "#identity", color: "bg-red-100 text-red-700" },
      { name: "IT Asset Tracker", description: "IT infrastructure management with AI optimization", href: "#itassets", color: "bg-red-100 text-red-700" },
      { name: "Network Monitor", description: "Network performance monitoring with AI predictions", href: "#network", color: "bg-red-100 text-red-700" },
      { name: "Backup Pro", description: "Automated data backup solution with AI scheduling", href: "#backup", color: "bg-red-100 text-red-700" },
      { name: "Vulnerability Scanner", description: "Security threat detection with AI risk assessment", href: "#vuln", color: "bg-red-100 text-red-700" },
    ]
  },
  {
    name: "BI and Analytics",
    icon: <BarChart3 className="w-5 h-5" />,
    count: 6,
    products: [
      { name: "Business Intelligence", description: "Advanced data analytics platform with AI insights", href: "#bi", color: "bg-violet-100 text-violet-700" },
      { name: "Data Warehouse", description: "Centralized data storage solution with AI optimization", href: "#warehouse", color: "bg-violet-100 text-violet-700" },
      { name: "Report Builder", description: "Custom report generation tool with AI suggestions", href: "#reportbuilder", color: "bg-violet-100 text-violet-700" },
      { name: "Dashboard Creator", description: "Interactive dashboard builder with AI layouts", href: "#dashboard", color: "bg-violet-100 text-violet-700" },
      { name: "Predictive Analytics", description: "AI-powered forecasting and trend analysis", href: "#predictive", color: "bg-violet-100 text-violet-700" },
      { name: "Data Visualization", description: "Advanced charting and graphs with AI recommendations", href: "#dataviz", color: "bg-violet-100 text-violet-700" },
    ]
  },
  {
    name: "Project Management",
    icon: <Users className="w-5 h-5" />,
    count: 6,
    products: [
      { name: "Project AI", description: "AI-enhanced project management with smart scheduling", href: "#projects", color: "bg-teal-100 text-teal-700" },
      { name: "Task Manager", description: "Smart task automation with AI prioritization", href: "#tasks", color: "bg-teal-100 text-teal-700" },
      { name: "Team Planner", description: "Resource planning and allocation with AI optimization", href: "#planner", color: "bg-teal-100 text-teal-700" },
      { name: "Gantt Charts", description: "Visual project timeline tool with AI predictions", href: "#gantt", color: "bg-teal-100 text-teal-700" },
      { name: "Budget Tracker", description: "Project budget management with AI forecasting", href: "#budget", color: "bg-teal-100 text-teal-700" },
      { name: "Time Sheets", description: "Project time tracking with AI productivity insights", href: "#timesheets", color: "bg-teal-100 text-teal-700" },
    ]
  },
  {
    name: "Developer Platforms",
    icon: <Code className="w-5 h-5" />,
    count: 6,
    products: [
      { name: "Custom Dev", description: "AI-assisted custom software development platform", href: "#customdev", color: "bg-slate-100 text-slate-700" },
      { name: "API Gateway", description: "API management platform with AI monitoring", href: "#api", color: "bg-slate-100 text-slate-700" },
      { name: "Workflow Builder", description: "No-code automation platform with AI suggestions", href: "#workflow", color: "bg-slate-100 text-slate-700" },
      { name: "Database Manager", description: "Cloud database solutions with AI optimization", href: "#database", color: "bg-slate-100 text-slate-700" },
      { name: "Integration Hub", description: "Third-party app integrations with AI mapping", href: "#integrations", color: "bg-slate-100 text-slate-700" },
      { name: "Mobile Builder", description: "No-code mobile app creator with AI templates", href: "#mobile", color: "bg-slate-100 text-slate-700" },
    ]
  },
  {
    name: "IoT",
    icon: <Globe className="w-5 h-5" />,
    count: 5,
    products: [
      { name: "IoT Platform", description: "Internet of Things management with AI analytics", href: "#iot", color: "bg-amber-100 text-amber-700" },
      { name: "Device Manager", description: "IoT device monitoring with AI predictions", href: "#devices", color: "bg-amber-100 text-amber-700" },
      { name: "Sensor Analytics", description: "IoT data analysis platform with AI insights", href: "#sensors", color: "bg-amber-100 text-amber-700" },
      { name: "Remote Control", description: "IoT device remote management with AI automation", href: "#remote", color: "bg-amber-100 text-amber-700" },
      { name: "Edge Computing", description: "Edge device processing with AI optimization", href: "#edge", color: "bg-amber-100 text-amber-700" },
    ]
  }
];

const ProductsPage = ({ onBackClick, initialCategory }: ProductsPageProps) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || "Recent Launches");
  const [searchTerm, setSearchTerm] = useState("");

  // Update selected category when initialCategory changes
  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const selectedCategoryData = productCategories.find(cat => cat.name === selectedCategory);
  const filteredProducts = selectedCategoryData?.products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const handleBackClick = () => {
    console.log('Back button clicked in ProductsPage');
    if (onBackClick) {
      onBackClick();
    } else {
      console.warn('onBackClick function not provided');
    }
  };

  return (
    <div className="min-h-screen bg-white pt-9">
      {/* Header - Compact */}
      <div className="bg-white border-b border-gray-100">
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
              <h1 className="text-base sm:text-lg font-semibold text-gray-900">Products</h1>
            </div>
            <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-600 border border-amber-100">
              <span className="hidden sm:inline">Under Development</span>
              <span className="sm:hidden">Dev</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* Search Bar - Mobile Optimized */}
        <div className="max-w-md mx-auto mb-6 sm:mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 sm:py-2 text-sm bg-white border border-gray-200 rounded-full focus:ring-2 focus:ring-pulse-500 focus:border-pulse-500 transition-all duration-300"
              style={{ fontSize: '16px' }} // Prevents iOS zoom
            />
          </div>
        </div>

        {/* Category Navigation - Mobile Optimized */}
        <div className="mb-6 sm:mb-8">
          {/* Mobile: Horizontal scroll */}
          <div className="block sm:hidden">
            <div className="flex space-x-2 overflow-x-auto pb-3 scrollbar-hide">
              {productCategories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={cn(
                    "flex-shrink-0 p-3 rounded-xl transition-all duration-300 text-left",
                    selectedCategory === category.name
                      ? "bg-pulse-500 text-white shadow-md"
                      : "bg-gray-50 text-gray-700 border border-gray-200"
                  )}
                  style={{ minWidth: '120px' }}
                >
                  <div className="flex items-center space-x-2 mb-1">
                    <div className={cn(
                      "w-5 h-5 rounded-lg flex items-center justify-center",
                      selectedCategory === category.name
                        ? "bg-white/20 text-white"
                        : "bg-pulse-100 text-pulse-600"
                    )}>
                      {category.icon}
                    </div>
                  </div>
                  <div className="text-xs font-medium truncate">{category.name}</div>
                  <div className="text-xs opacity-75">{category.count}</div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Desktop: Grid layout */}
          <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {productCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={cn(
                  "p-3 rounded-xl transition-all duration-300 text-left hover:scale-105",
                  selectedCategory === category.name
                    ? "bg-pulse-500 text-white shadow-md"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200"
                )}
              >
                <div className="flex items-center space-x-2 mb-1">
                  <div className={cn(
                    "w-6 h-6 rounded-lg flex items-center justify-center",
                    selectedCategory === category.name
                      ? "bg-white/20 text-white"
                      : "bg-pulse-100 text-pulse-600"
                  )}>
                    {category.icon}
                  </div>
                  <span className="text-xs font-medium truncate">{category.name}</span>
                </div>
                <div className="text-xs opacity-75">{category.count} products</div>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Category Header - Mobile Optimized */}
        {selectedCategoryData && (
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{selectedCategory}</h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto px-2">
              {selectedCategory === "Recent Launches" 
                ? "Latest AI-powered applications and platform updates"
                : `AI-enhanced ${selectedCategory.toLowerCase()} applications for modern businesses`
              }
            </p>
          </div>
        )}

        {/* Products Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 overflow-hidden group p-3 sm:p-4"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2 flex-1 min-w-0">
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center text-xs font-semibold flex-shrink-0",
                    product.color
                  )}>
                    {product.name.charAt(0)}
                  </div>
                  <div className="flex flex-col min-w-0 flex-1">
                    <h3 className="text-sm font-semibold text-gray-900 group-hover:text-pulse-500 transition-colors duration-200 truncate">
                      {product.name}
                    </h3>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {product.badge && (
                        <span className={cn(
                          "inline-block px-1.5 py-0.5 text-xs font-medium rounded-full",
                          product.badge === "NEW" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                        )}>
                          {product.badge}
                        </span>
                      )}
                      <span className="inline-block px-1.5 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-700">
                        <span className="hidden sm:inline">Under Development</span>
                        <span className="sm:hidden">Dev</span>
                      </span>
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-pulse-500 transition-colors duration-200 flex-shrink-0 ml-2" />
              </div>
              
              <p className="text-gray-600 mb-3 leading-relaxed text-xs line-clamp-3">
                {product.description}
              </p>
              
              <button className="text-pulse-500 hover:text-pulse-600 font-medium flex items-center space-x-1 transition-colors duration-200 text-xs">
                <span>Coming Soon</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <Search className="w-6 h-6 text-gray-400" />
            </div>
            <p className="text-gray-500 text-sm">
              No products found matching "{searchTerm}"
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="mt-3 text-pulse-500 hover:text-pulse-600 font-medium transition-colors duration-300 text-sm"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Bottom CTA - Compact */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-pulse-500 to-pulse-600 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-bold mb-3">Coming Soon</h3>
            <p className="text-sm opacity-90 mb-4 max-w-xl mx-auto">
              All products are currently under development. Get notified when they're ready!
            </p>
            <button className="bg-white text-pulse-500 hover:bg-gray-50 font-semibold py-2 px-6 rounded-full transition-all duration-300 text-sm">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage; 