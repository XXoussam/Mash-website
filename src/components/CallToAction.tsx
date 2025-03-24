import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Floating Spheres */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gray-700 rounded-full blur-xl opacity-20 floating" style={{ animationDelay: '0.7s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gray-700 rounded-full blur-xl opacity-20 floating" style={{ animationDelay: '1.2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="chrome-effect rounded-xl p-8 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-gray-400 mb-8">
                Join hundreds of businesses that have already revolutionized their operations with our AI automation solutions. Get started today and see the difference tomorrow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://cal.com/mash-automation/ai-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white hover:bg-gray-100 text-black rounded-full font-medium transition-all flex items-center justify-center group"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Schedule a Consultation
                </a>
                <a
                  href="https://cal.com/mash-automation/ai-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm chrome-effect rounded-full font-medium transition-all flex items-center justify-center"
                >
                  Contact Sales
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
                alt="Team collaboration"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 chrome-effect p-8 rounded-xl">
                <p className="text-2xl font-bold gradient-text">14-Day</p>
                <p className="text-gray-400">Free Trial</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;