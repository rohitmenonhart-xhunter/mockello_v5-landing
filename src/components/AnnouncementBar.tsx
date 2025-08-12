import React, { useState } from "react";
import { X, Code, Zap } from "lucide-react";

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gray-900 text-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 sm:py-3">
          <div className="flex items-center space-x-3 flex-1 justify-center">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
              </div>
              <span className="text-xs sm:text-sm font-medium">
                ✨ Live & Ready for Business
              </span>
            </div>
            
            <div className="hidden sm:block w-px h-3 bg-gray-600"></div>
            
            <div className="hidden sm:flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Code className="w-2 h-2 text-blue-400" />
              </div>
              <span className="text-xs font-medium text-gray-300">
                24/7 Support Available
              </span>
            </div>
          </div>
          
          <button
            onClick={() => setIsVisible(false)}
            className="ml-3 flex-shrink-0 w-6 h-6 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors duration-200"
            aria-label="Close announcement"
          >
            <X className="w-3 h-3 text-gray-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar; 