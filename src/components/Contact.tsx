import React from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white" id="contact">
      <div className="section-container">
        <div className="text-center max-w-4xl mx-auto">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4">
            <span>Support</span>
          </div>
          <h2 className="section-title mb-6 sm:mb-8">
            24/7 Support & Fast Response
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Get help when you need it with our dedicated support team and comprehensive resources.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-pulse-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-pulse-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-600">Instant support for urgent questions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pulse-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-pulse-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Support</h3>
              <p className="text-gray-600">support@mockello.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pulse-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-pulse-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone Support</h3>
              <p className="text-gray-600">1800-MOCKELLO</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#contact-sales" 
              className="button-primary inline-flex items-center"
            >
              Contact Sales
            </a>
            <a 
              href="#support-center" 
              className="border-2 border-pulse-500 text-pulse-500 hover:bg-pulse-50 font-medium py-3 px-8 rounded-full transition-all duration-300"
            >
              Support Center
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;