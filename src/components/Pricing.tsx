// Component imports
import { Check, MessageSquare } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Pricing = () => {
  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-20 bg-black relative overflow-hidden">
      {/* Floating Spheres */}
      <div className="absolute top-1/4 right-1/4 w-20 sm:w-28 md:w-32 h-20 sm:h-28 md:h-32 bg-gray-700 rounded-full blur-xl opacity-20 floating" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-gray-700 rounded-full blur-xl opacity-20 floating" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-3 sm:mb-4">
              Custom Solutions, Tailored Pricing
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-2">
              We believe in providing personalized solutions that perfectly match your business needs. Our pricing is customized to ensure you get exactly what you need - no more, no less.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <ScrollReveal>
            <div className="chrome-effect rounded-xl p-5 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-xl md:text-2xl font-bold gradient-text mb-4 sm:mb-5 md:mb-6 text-center lg:text-left">Why Custom Pricing?</h3>
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {[
                  'Every business is unique with different needs and scales',
                  'Flexible solutions that grow with your business',
                  'Pay only for the features you need',
                  'Transparent pricing with no hidden costs',
                  'Scalable options for businesses of all sizes'
                ].map((point, index) => (
                  <ScrollReveal key={index} delay={index * 100}>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 sm:h-6 sm:w-6 text-white mr-2 sm:mr-3 flex-shrink-0 mt-0.5 sm:mt-1" />
                      <p className="text-gray-400 text-sm sm:text-base">{point}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="chrome-effect rounded-xl p-5 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-xl md:text-2xl font-bold gradient-text mb-4 sm:mb-5 md:mb-6 text-center lg:text-left">Get Your Custom Quote</h3>
              <p className="text-gray-400 text-sm sm:text-base mb-5 sm:mb-6 md:mb-8">
                Schedule a 30-minute consultation with our team to discuss your specific needs and get a tailored solution that fits your budget.
              </p>
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <div className="flex items-center space-x-3 sm:space-x-4 text-gray-400">
                  <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  <span className="text-sm sm:text-base">Detailed project assessment</span>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4 text-gray-400">
                  <Check className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  <span className="text-sm sm:text-base">Transparent cost breakdown</span>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4 text-gray-400">
                  <Check className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  <span className="text-sm sm:text-base">Flexible payment options</span>
                </div>
              </div>
              <div className="mt-6 sm:mt-7 md:mt-8">
                <a
                  href="https://cal.com/mash-automation/ai-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors text-center text-sm sm:text-base"
                >
                  Schedule AI Consultation
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-8 sm:mt-12 md:mt-16 text-center">
            <p className="text-gray-400 text-sm sm:text-base px-2">
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