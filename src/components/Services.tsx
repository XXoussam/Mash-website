// Component imports
import { Brain, Database, BarChart, Cog, Cloud, Lock } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    icon: Brain,
    title: 'AI Processing',
    description: 'Advanced machine learning algorithms for intelligent data processing and decision making.',
  },
  {
    icon: Database,
    title: 'Data Integration',
    description: 'Seamless integration of multiple data sources into a unified, intelligent system.',
  },
  {
    icon: BarChart,
    title: 'Analytics',
    description: 'Real-time analytics and insights to drive better business decisions.',
  },
  {
    icon: Cog,
    title: 'Process Automation',
    description: 'End-to-end automation of complex business processes and workflows.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure for reliable and efficient operations.',
  },
  {
    icon: Lock,
    title: 'Security',
    description: 'Enterprise-grade security measures to protect your valuable data.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-black relative overflow-hidden">
      {/* Floating Spheres - Adjusted for mobile */}
      <div className="absolute top-1/4 right-1/4 w-20 sm:w-28 md:w-32 h-20 sm:w-28 md:h-32 bg-gray-700 rounded-full blur-xl opacity-20 floating" style={{ animationDelay: '0.2s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-gray-700 rounded-full blur-xl opacity-20 floating" style={{ animationDelay: '0.7s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-3 sm:mb-4">
              Our Services
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-2">
              Comprehensive AI solutions designed to transform your business operations
              and drive growth through intelligent automation.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.title} delay={index * 100}>
                <div className="chrome-effect rounded-xl p-4 sm:p-6 md:p-8 hover:bg-gray-800/10 transition-colors group">
                  <Icon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 md:mb-4">{service.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">{service.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;