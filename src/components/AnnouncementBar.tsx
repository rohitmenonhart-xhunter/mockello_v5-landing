import React, { useState } from "react";
import { X, Code, Zap } from "lucide-react";

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-pulse-500 to-pulse-600 text-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center space-x-3 flex-1 justify-center">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <Code className="w-3 h-3 text-white" />
              </div>
              <span className="text-xs font-medium">
                🚀 Website under continuous development
              </span>
            </div>
            
            <div className="hidden sm:block w-px h-3 bg-white/30"></div>
            
            <div className="hidden sm:flex items-center space-x-2">
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <Zap className="w-3 h-3 text-white" />
              </div>
              <span className="text-xs font-medium">
                Version 4.0 - Final Development Phase
              </span>
            </div>
          </div>
          
          <button
            onClick={() => setIsVisible(false)}
            className="ml-3 flex-shrink-0 w-5 h-5 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors duration-200"
            aria-label="Close announcement"
          >
            <X className="w-3 h-3 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar; 