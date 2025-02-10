import React from 'react';
import { Zap, Clock, Shield, TrendingUp } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const benefits = [
  {
    icon: Zap,
    title: 'Enhanced Efficiency',
    description: 'Automate repetitive tasks and streamline workflows to boost productivity by up to 80%.',
  },
  {
    icon: Clock,
    title: 'Time Savings',
    description: 'Reduce manual processing time by implementing intelligent automation solutions.',
  },
  {
    icon: Shield,
    title: 'Reduced Errors',
    description: 'Minimize human error and ensure consistent quality in all operations.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Growth',
    description: 'Easily scale your operations without proportionally increasing overhead costs.',
  },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Floating Spheres */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gray-700 rounded-full blur-xl opacity-20 floating" style={{ animationDelay: '0.2s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gray-700 rounded-full blur-xl opacity-20 floating" style={{ animationDelay: '0.7s' }} />
      <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-gray-700 rounded-full blur-xl opacity-20 floating" style={{ animationDelay: '1.2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="mb-4 inline-flex items-center bg-gray-800/30 rounded-full px-4 py-1 chrome-effect">
              <span className="text-sm text-gray-300">WHY CHOOSE US</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
              Why Choose AIAutomation?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience the transformative power of AI automation with our comprehensive solutions designed to drive your business forward.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <ScrollReveal key={benefit.title} delay={index * 100}>
                <div className="chrome-effect rounded-xl p-8 hover:bg-gray-800/10 transition-colors group">
                  <div className="flex items-center space-x-6">
                    <div className="flex-shrink-0 p-4 rounded-full bg-gray-800/50 group-hover:bg-gray-800 transition-colors">
                      <Icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                      <p className="text-gray-400">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={400}>
          <div className="chrome-effect rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: 'Efficiency Increase', value: '80%' },
                { label: 'Cost Reduction', value: '60%' },
                { label: 'Error Reduction', value: '95%' },
                { label: 'ROI Improvement', value: '150%' },
              ].map((stat, index) => (
                <ScrollReveal key={stat.label} delay={500 + index * 100}>
                  <div className="text-center group">
                    <p className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">
                      {stat.value}
                    </p>
                    <p className="text-gray-400">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Benefits;