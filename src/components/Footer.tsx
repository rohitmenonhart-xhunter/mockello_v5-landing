
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-8">
      <div className="section-container">
        <div className="text-center space-y-4">
          
          
          <div className="border-t border-gray-200 pt-4">
            <p className="text-gray-500 text-sm font-medium">
              Proudly built in Avadi, Tamil Nadu, India 🇮🇳
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <a href="#about" className="hover:text-pulse-500">About</a>
            <a href="#forum" className="hover:text-pulse-500">Forum</a>
            <a href="#careers" className="hover:text-pulse-500">Careers</a>
            <a href="#privacy" className="hover:text-pulse-500">Privacy</a>
            <a href="#contact" className="hover:text-pulse-500">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
