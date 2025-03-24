import React from 'react';
import { Check, MessageSquare } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-black relative overflow-hidden">
      {/* Floating Spheres */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gray-700 rounded-full blur-xl opacity-20 floating" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gray-700 rounded-full blur-xl opacity-20 floating" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
              Custom Solutions, Tailored Pricing
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We believe in providing personalized solutions that perfectly match your business needs. Our pricing is customized to ensure you get exactly what you need - no more, no less.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="chrome-effect rounded-xl p-8">
              <h3 className="text-2xl font-bold gradient-text mb-6">Why Custom Pricing?</h3>
              <div className="space-y-6">
                {[
                  'Every business is unique with different needs and scales',
                  'Flexible solutions that grow with your business',
                  'Pay only for the features you need',
                  'Transparent pricing with no hidden costs',
                  'Scalable options for businesses of all sizes'
                ].map((point, index) => (
                  <ScrollReveal key={index} delay={index * 100}>
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-white mr-3 flex-shrink-0 mt-1" />
                      <p className="text-gray-400">{point}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="chrome-effect rounded-xl p-8">
              <h3 className="text-2xl font-bold gradient-text mb-6">Get Your Custom Quote</h3>
              <p className="text-gray-400 mb-8">
                Schedule a 30-minute consultation with our team to discuss your specific needs and get a tailored solution that fits your budget.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-gray-400">
                  <MessageSquare className="h-6 w-6 text-white" />
                  <span>Detailed project assessment</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-400">
                  <Check className="h-6 w-6 text-white" />
                  <span>Transparent cost breakdown</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-400">
                  <Check className="h-6 w-6 text-white" />
                  <span>Flexible payment options</span>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="https://cal.com/mash-automation/ai-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors text-center"
                >
                  Schedule AI Consultation
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-16 text-center">
            <p className="text-gray-400">
              Need more information?{' '}
              <a href="#contact" className="text-white hover:text-gray-300 underline">
                Contact our team
              </a>{' '}
              to discuss your project requirements.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Pricing;