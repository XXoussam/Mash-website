import React from 'react';
import { Users, Award, Cpu } from 'lucide-react';
<<<<<<< HEAD
=======
import ScrollReveal from './ScrollReveal';
>>>>>>> master

const About = () => {
  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Floating Spheres */}
      <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-gray-700 rounded-full blur-xl opacity-20 floating" style={{ animationDelay: '0.3s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-gray-700 rounded-full blur-xl opacity-20 floating" style={{ animationDelay: '0.8s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<<<<<<< HEAD
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">
              Transforming Businesses Through AI Innovation
            </h2>
            <p className="text-gray-400 mb-8">
              At AIAutomation, we're passionate about leveraging artificial intelligence to revolutionize how businesses operate. Our team of experts combines cutting-edge technology with deep industry knowledge to deliver solutions that drive real business value.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="chrome-effect rounded-xl p-6 text-center">
                <Users className="h-8 w-8 text-white mb-2 mx-auto" />
                <span className="text-2xl font-bold gradient-text">500+</span>
                <span className="block text-gray-400">Clients Worldwide</span>
              </div>
              <div className="chrome-effect rounded-xl p-6 text-center">
                <Award className="h-8 w-8 text-white mb-2 mx-auto" />
                <span className="text-2xl font-bold gradient-text">50+</span>
                <span className="block text-gray-400">Industry Awards</span>
              </div>
              <div className="chrome-effect rounded-xl p-6 text-center">
                <Cpu className="h-8 w-8 text-white mb-2 mx-auto" />
                <span className="text-2xl font-bold gradient-text">1M+</span>
                <span className="block text-gray-400">AI Models Trained</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
              alt="Team collaboration"
              className="rounded-xl shadow-2xl chrome-effect"
            />
            <div className="absolute -bottom-6 -right-6 chrome-effect p-8 rounded-xl">
              <p className="text-2xl font-bold gradient-text">10+ Years</p>
              <p className="text-gray-400">Industry Experience</p>
            </div>
          </div>
=======
          <ScrollReveal>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">
                Transforming Businesses Through AI Innovation
              </h2>
              <p className="text-gray-400 mb-8">
                At AIAutomation, we're passionate about leveraging artificial intelligence to revolutionize how businesses operate. Our team of experts combines cutting-edge technology with deep industry knowledge to deliver solutions that drive real business value.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <ScrollReveal delay={100}>
                  <div className="chrome-effect rounded-xl p-6 text-center">
                    <Users className="h-8 w-8 text-white mb-2 mx-auto" />
                    <span className="text-2xl font-bold gradient-text">500+</span>
                    <span className="block text-gray-400">Clients Worldwide</span>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <div className="chrome-effect rounded-xl p-6 text-center">
                    <Award className="h-8 w-8 text-white mb-2 mx-auto" />
                    <span className="text-2xl font-bold gradient-text">50+</span>
                    <span className="block text-gray-400">Industry Awards</span>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={300}>
                  <div className="chrome-effect rounded-xl p-6 text-center">
                    <Cpu className="h-8 w-8 text-white mb-2 mx-auto" />
                    <span className="text-2xl font-bold gradient-text">1M+</span>
                    <span className="block text-gray-400">AI Models Trained</span>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
                alt="Team collaboration"
                className="rounded-xl shadow-2xl chrome-effect"
              />
              <div className="absolute -bottom-6 -right-6 chrome-effect p-8 rounded-xl">
                <p className="text-2xl font-bold gradient-text">10+ Years</p>
                <p className="text-gray-400">Industry Experience</p>
              </div>
            </div>
          </ScrollReveal>
>>>>>>> master
        </div>
      </div>
    </section>
  );
};

export default About;