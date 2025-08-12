import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.name) {
      toast({
        title: "Please fill in required fields",
        description: "Name and email are required",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Welcome to Mockello!",
        description: "Your account is being created. You'll receive login details soon."
      });
      setFormData({ name: "", email: "", company: "", interest: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="signup" className="bg-white py-0">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">05</span>
              <span>Signup Form</span>
            </div>
          </div>
          
          <h2 className="text-5xl font-display font-bold mb-4 text-left">Ready to do your best work?</h2>
          <p className="text-xl text-gray-700 mb-10 text-left">
            Join 2M+ users who've already made the switch to AI-powered business software. Early adopters get lifetime benefits and priority support.
          </p>
          
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
            <div className="space-y-4">
              <div>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name} 
                  onChange={handleInputChange} 
                  placeholder="Full Name *" 
                  className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pulse-500 text-gray-700" 
                  required 
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email} 
                  onChange={handleInputChange} 
                  placeholder="Email Address *" 
                  className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pulse-500 text-gray-700" 
                  required 
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <input 
                  type="text" 
                  name="company"
                  value={formData.company} 
                  onChange={handleInputChange} 
                  placeholder="Company Name" 
                  className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pulse-500 text-gray-700" 
                />
              </div>
              <div>
                <select 
                  name="interest"
                  value={formData.interest} 
                  onChange={handleInputChange} 
                  className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pulse-500 text-gray-700 bg-white"
                >
                  <option value="">Select Interest</option>
                  <option value="automation">Automation Tools</option>
                  <option value="ai">AI Features</option>
                  <option value="hiring">Hiring Solutions</option>
                  <option value="platform">Full Platform</option>
                </select>
              </div>
            </div>
            <div className="md:col-span-2 mt-4">
              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="bg-pulse-500 hover:bg-pulse-600 text-white font-medium py-4 px-10 rounded-full transition-all duration-300"
              >
                {isSubmitting ? "Creating Account..." : "Create Account"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;