import React from "react";
import { Shield, Lock, Eye, Server } from "lucide-react";

const PrivacySecurity = () => {
  return (
    <section className="py-20 bg-gray-50" id="privacy-security">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 opacity-0 animate-on-scroll">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Your Privacy is Our Foundation
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We believe that trust is paramount in business relationships. We don't own, sell, or monetize your data. Our only revenue comes from software license fees you pay us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-2xl shadow-sm opacity-0 animate-on-scroll">
              <div className="w-16 h-16 bg-pulse-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-pulse-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Zero Data Mining</h3>
              <p className="text-gray-600">
                Unlike ad-based models, we never analyze your data for advertising or third-party purposes.
              </p>
            </div>

            <div className="text-center bg-white p-6 rounded-2xl shadow-sm opacity-0 animate-on-scroll">
              <div className="w-16 h-16 bg-pulse-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-pulse-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">End-to-End Encryption</h3>
              <p className="text-gray-600">
                Military-grade encryption for all data in transit and at rest, with keys you control.
              </p>
            </div>

            <div className="text-center bg-white p-6 rounded-2xl shadow-sm opacity-0 animate-on-scroll">
              <div className="w-16 h-16 bg-pulse-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-pulse-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Indian Data Centers</h3>
              <p className="text-gray-600">
                Your data stays in India with local compliance and faster access speeds.
              </p>
            </div>

            <div className="text-center bg-white p-6 rounded-2xl shadow-sm opacity-0 animate-on-scroll">
              <div className="w-16 h-16 bg-pulse-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-pulse-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Full Transparency</h3>
              <p className="text-gray-600">
                Complete visibility into how your data is processed, stored, and protected.
              </p>
            </div>
          </div>

          <div className="text-center mt-12 opacity-0 animate-on-scroll">
            <div className="bg-white p-8 rounded-2xl shadow-sm inline-block">
              <h3 className="text-2xl font-bold mb-4">Our Privacy Commitment</h3>
              <p className="text-gray-700 max-w-2xl">
                "We run a sustainable business powered by our customers, not by data exploitation. 
                Your success is our success, and your privacy is non-negotiable."
              </p>
              <p className="text-sm text-gray-500 mt-4">- Mockello Privacy Charter</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySecurity; 