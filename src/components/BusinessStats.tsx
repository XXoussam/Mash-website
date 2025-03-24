import React from 'react';
import CounterAnimation from './CounterAnimation';
import ScrollReveal from './ScrollReveal';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const BusinessStats = () => {
  const stats: StatItem[] = [
    {
      value: 125,
      suffix: '+',
      label: 'User Active'
    },
    {
      value: 80,
      suffix: '+',
      label: 'Trusted by Company'
    },
    {
      value: 50,
      suffix: 'M+',
      label: 'Transaction'
    }
  ];

  return (
    <section className="py-8 bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="chrome-effect rounded-xl p-4 md:p-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 100}>
                <div className="w-full sm:w-auto text-center px-3 py-2">
                  <div className="mb-1">
                    <CounterAnimation 
                      targetValue={stat.value} 
                      suffix={stat.suffix}
                      prefix={stat.suffix === 'M+' ? '$' : ''}
                      className="text-3xl md:text-4xl font-bold gradient-text"
                      duration={2500}
                    />
                  </div>
                  <p className="text-gray-400 text-sm">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessStats; 