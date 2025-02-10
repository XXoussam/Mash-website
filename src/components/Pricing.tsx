import React from 'react';
import { Check } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const plans = [
  {
    name: 'Starter',
    price: '499',
    description: 'Perfect for small businesses starting with AI automation',
    features: [
      'Up to 10,000 API calls/month',
      'Basic AI models',
      'Email support',
      'Basic analytics',
      '99.9% uptime SLA',
    ],
  },
  {
    name: 'Professional',
    price: '999',
    description: 'Ideal for growing companies with advanced needs',
    features: [
      'Up to 50,000 API calls/month',
      'Advanced AI models',
      'Priority support',
      'Advanced analytics',
      'Custom model training',
      '99.99% uptime SLA',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations requiring full customization',
    features: [
      'Unlimited API calls',
      'Custom AI models',
      '24/7 dedicated support',
      'Enterprise analytics',
      'Custom model training',
      'Custom SLA',
      'Dedicated account manager',
    ],
  },
];

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
              Transparent Pricing
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core AI features with different levels of customization and support.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.name} delay={index * 100}>
              <div
                className={`relative chrome-effect rounded-xl p-8 ${
                  plan.popular ? 'ring-2 ring-white' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold gradient-text">${plan.price}</span>
                    {plan.price !== 'Custom' && <span className="text-gray-400">/month</span>}
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <ScrollReveal key={feature} delay={(index * 100) + (featureIndex * 50)}>
                      <li className="flex items-center text-gray-400">
                        <Check className="h-5 w-5 text-white mr-2" />
                        {feature}
                      </li>
                    </ScrollReveal>
                  ))}
                </ul>
                <button
                  className={`w-full py-2 px-4 rounded-full transition-colors ${
                    plan.popular
                      ? 'bg-white text-black hover:bg-gray-100'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-16 text-center">
            <p className="text-gray-400">
              Need a custom solution?{' '}
              <a href="#contact" className="text-white hover:text-gray-300">
                Contact us
              </a>{' '}
              for enterprise pricing and features.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Pricing;