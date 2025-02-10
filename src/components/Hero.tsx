import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex items-center pt-32">
      {/* Floating Bubbles */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#1A1A1A] rounded-full blur-xl opacity-30 floating-bubble" />
      <div
        className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-[#1A1A1A] rounded-full blur-xl opacity-20 floating-bubble"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="absolute top-1/3 right-1/3 w-24 h-24 bg-[#1A1A1A] rounded-full blur-xl opacity-25 floating-bubble"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-28 h-28 bg-[#1A1A1A] rounded-full blur-xl opacity-30 floating-bubble"
        style={{ animationDelay: '1.5s' }}
      />

      {/* Orange Accent */}
      <div className="absolute top-32 left-32 w-6 h-6 bg-[#FF4D00] rounded-full glow-orange" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-flex items-center bg-[#1A1A1A]/50 rounded-full px-4 py-2 mb-8 chrome-card">
              <span className="text-sm text-gray-300 font-medium">
                SAAS AI WEB3 FRAMER TEMPLATE
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                AI-Driven Solutions for Modern Businesses
              </span>
            </h1>

            <p className="text-gray-400 text-lg mb-12 max-w-xl">
              "Innovate. Automate. Thrive." Our AI-driven solutions empower
              modern businesses to streamline processes, personalize
              experiences, and stay ahead in the digital age.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 mb-16">
              <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-100 text-black rounded-full font-medium transition-all flex items-center justify-center group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="text-4xl font-bold mb-1">
                  380<span className="text-gray-400">+</span>
                </h3>
                <p className="text-gray-400">User Active</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-1">
                  230<span className="text-gray-400">+</span>
                </h3>
                <p className="text-gray-400">Trusted by Company</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-1">
                  $230M<span className="text-gray-400">+</span>
                </h3>
                <p className="text-gray-400">Transaction</p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative z-10">
              <img
                src="https://framerusercontent.com/images/1VKj0FymwqdSRVdREWpFPHFm7wc.png?scale-down-to=1024"
                alt="3D Abstract Shape"
                className="w-full h-auto"
              />
            </div>
            {/* Bubble decorations around the image */}
            <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-[#FF4D00] rounded-full glow-orange" />
            <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-gray-400 rounded-full" />
            <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-gray-600 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;