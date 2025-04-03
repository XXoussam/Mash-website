// Component imports
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex items-center pt-20 sm:pt-24 md:pt-32">
      {/* Floating Bubbles - Adjusted for better mobile appearance */}
      <div className="absolute top-1/4 right-1/4 w-20 sm:w-32 h-20 sm:h-32 bg-[#1A1A1A] rounded-full blur-xl opacity-30 floating-bubble" />
      <div
        className="absolute bottom-1/3 left-1/3 w-24 sm:w-40 h-24 sm:h-40 bg-[#1A1A1A] rounded-full blur-xl opacity-20 floating-bubble"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="absolute top-1/3 right-1/3 w-16 sm:w-24 h-16 sm:h-24 bg-[#1A1A1A] rounded-full blur-xl opacity-25 floating-bubble"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-20 sm:w-28 h-20 sm:h-28 bg-[#1A1A1A] rounded-full blur-xl opacity-30 floating-bubble"
        style={{ animationDelay: '1.5s' }}
      />

      {/* Orange Accent - Adjusted for mobile */}
      <div className="absolute top-16 sm:top-24 md:top-32 left-8 sm:left-16 md:left-32 w-4 sm:w-6 h-4 sm:h-6 bg-[#FF4D00] rounded-full glow-orange" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                AI-Driven Solutions for Modern Businesses
              </span>
            </h1>

            <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-10 md:mb-12 max-w-xl mx-auto lg:mx-0">
              "Innovate. Automate. Thrive." Our AI-driven solutions empower
              modern businesses to streamline processes, personalize
              experiences, and stay ahead in the digital age.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-12 sm:mb-16">
              <a
                href="https://cal.com/mash-automation/ai-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white hover:bg-gray-100 text-black rounded-full font-medium transition-all flex items-center justify-center group"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Mobile image display */}
          <div className="relative block lg:hidden mx-auto max-w-xs sm:max-w-sm md:max-w-md">
            <div className="relative z-10">
              <img
                src="https://framerusercontent.com/images/1VKj0FymwqdSRVdREWpFPHFm7wc.png?scale-down-to=1024"
                alt="3D Abstract Shape"
                className="w-full h-auto"
              />
            </div>
            {/* Bubble decorations around the image */}
            <div className="absolute top-1/4 right-1/4 w-2 sm:w-3 h-2 sm:h-3 bg-[#FF4D00] rounded-full glow-orange" />
            <div className="absolute bottom-1/3 left-1/4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-400 rounded-full" />
            <div className="absolute top-1/2 right-1/3 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-600 rounded-full" />
          </div>

          {/* Desktop image - unchanged */}
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

export default Hero