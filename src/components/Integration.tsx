import React from 'react';
import { Database, Cloud, Link, Shield } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Integration = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Floating Spheres */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gray-700 rounded-full blur-xl opacity-20 floating" style={{ animationDelay: '0.4s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gray-700 rounded-full blur-xl opacity-20 floating" style={{ animationDelay: '0.9s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
              Seamless Integration Capabilities
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our API-first approach ensures smooth integration with your existing systems while maintaining security and performance.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {[
              { icon: Database, title: 'Database Integration', description: 'Connect with any SQL or NoSQL database seamlessly. Support for MySQL, PostgreSQL, MongoDB, and more.' },
              { icon: Cloud, title: 'Cloud Platform Support', description: 'Native integration with major cloud providers including AWS, Google Cloud, and Azure.' },
              { icon: Link, title: 'API Connectivity', description: 'RESTful and GraphQL API support with comprehensive documentation and SDKs.' },
              { icon: Shield, title: 'Security Standards', description: 'Enterprise-grade security with OAuth 2.0, JWT, and end-to-end encryption.' }
            ].map(({ icon: Icon, title, description }, index) => (
              <ScrollReveal key={title} delay={index * 100}>
                <div className="chrome-effect rounded-xl p-6 flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                    <p className="text-gray-400">{description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="relative">
              <div className="chrome-effect rounded-xl p-8">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                  <code>{`// Example API Integration
const AIAutomation = require('ai-automation-sdk');

const client = new AIAutomation({
  apiKey: 'your-api-key',
  environment: 'production'
});

// Process data with AI
async function processData(data) {
  try {
    const result = await client.analyze({
      type: 'sentiment',
      data: data
    });
    
    return result;
  } catch (error) {
    console.error('Error:', error);
  }
}`}</code>
                </pre>
              </div>
              <div className="absolute -bottom-6 -right-6 chrome-effect p-4 rounded-xl">
                <p className="text-white font-semibold">Ready to integrate?</p>
                <p className="text-sm text-gray-400">Get started in minutes</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Integration;