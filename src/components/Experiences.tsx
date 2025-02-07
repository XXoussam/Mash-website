import React from 'react';
import { MessageSquare, Mic, Bot, Workflow } from 'lucide-react';

const experiences = [
  {
    icon: Mic,
    title: 'AI Voice Agent',
    description: 'Advanced voice agents powered by natural language processing, capable of handling complex customer interactions with human-like conversations.',
    metrics: {
      accuracy: '98%',
      languages: '20+',
      interactions: '1M+'
    }
  },
  {
    icon: MessageSquare,
    title: 'GHL Integration',
    description: 'Seamless Go High Level integration enabling automated marketing, communication, and customer relationship management.',
    metrics: {
      automation: '90%',
      efficiency: '75%',
      clients: '10K+'
    }
  },
  {
    icon: Bot,
    title: 'Chatbots',
    description: 'Intelligent chatbots that learn and adapt to provide 24/7 customer support and engagement across multiple platforms.',
    metrics: {
      response: '< 1s',
      resolution: '85%',
      satisfaction: '95%'
    }
  },
  {
    icon: Workflow,
    title: 'Custom Automations',
    description: 'Tailor-made automation solutions designed to streamline your specific business processes and workflows.',
    metrics: {
      savings: '60%',
      processes: '100+',
      uptime: '99.9%'
    }
  }
];

const Experiences = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Floating Spheres */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gray-700 rounded-full blur-xl opacity-20 floating" style={{ animationDelay: '0.3s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gray-700 rounded-full blur-xl opacity-20 floating" style={{ animationDelay: '0.8s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            Our Experiences
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our proven track record in delivering cutting-edge AI solutions across various domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp) => {
            const Icon = exp.icon;
            return (
              <div
                key={exp.title}
                className="chrome-effect rounded-xl p-8 hover:bg-gray-800/10 transition-all group"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 p-4 rounded-full bg-gray-800/50 group-hover:bg-gray-800 transition-colors">
                    <Icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">{exp.title}</h3>
                    <p className="text-gray-400 mb-6">{exp.description}</p>
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(exp.metrics).map(([key, value]) => (
                        <div key={key} className="text-center p-2 chrome-effect rounded-lg">
                          <p className="text-lg font-bold gradient-text">{value}</p>
                          <p className="text-sm text-gray-400 capitalize">{key}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experiences;