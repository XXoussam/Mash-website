import React from 'react';
import { Users, Award, Cpu, Instagram } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import oussama from '../assets/images/team/oussama.jpg';
import shiv from '../assets/images/team/shiv.png';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Floating Spheres */}
      <div
        className="absolute top-1/3 right-1/3 w-32 h-32 bg-gray-700 rounded-full blur-xl opacity-20 floating"
        style={{ animationDelay: '0.3s' }}
      />
      <div
        className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-gray-700 rounded-full blur-xl opacity-20 floating"
        style={{ animationDelay: '0.8s' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
              Our Leadership
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Meet the visionaries behind MASH who are revolutionizing the AI
              automation industry.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <ScrollReveal delay={100}>
            <div className="chrome-effect rounded-xl overflow-hidden group hover:scale-[1.02] transition-transform">
              <div className="h-[500px] relative">
                <img
                  src={shiv}
                  alt="CEO"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-8 relative">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Shiv Arora
                </h3>
                <p className="text-gray-400 mb-4">Chief Executive Officer</p>
                <a
                  href="https://www.instagram.com/shivarora258/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <Instagram className="h-5 w-5 mr-2" />
                  @shivarora258
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="chrome-effect rounded-xl overflow-hidden group hover:scale-[1.02] transition-transform">
              <div className="h-[500px] relative">
                <img
                  src={oussama}
                  alt="CTO"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-8 relative">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Saoudi Oussama
                </h3>
                <p className="text-gray-400 mb-4">Chief Technology Officer</p>
                <a
                  href="https://www.instagram.com/ossna_sd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <Instagram className="h-5 w-5 mr-2" />
                  @ossna_sd
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">
                Transforming Businesses Through AI Innovation
              </h2>
              <p className="text-gray-400 mb-8">
                At MASH, we're passionate about leveraging artificial
                intelligence to revolutionize how businesses operate. Our team
                of experts combines cutting-edge technology with deep industry
                knowledge to deliver solutions that drive real business value.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <ScrollReveal delay={100}>
                  <div className="chrome-effect rounded-xl p-6 text-center">
                    <Users className="h-8 w-8 text-white mb-2 mx-auto" />
                    <span className="text-2xl font-bold gradient-text">
                      500+
                    </span>
                    <span className="block text-gray-400">
                      Clients Worldwide
                    </span>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <div className="chrome-effect rounded-xl p-6 text-center">
                    <Award className="h-8 w-8 text-white mb-2 mx-auto" />
                    <span className="text-2xl font-bold gradient-text">
                      50+
                    </span>
                    <span className="block text-gray-400">Industry Awards</span>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={300}>
                  <div className="chrome-effect rounded-xl p-6 text-center">
                    <Cpu className="h-8 w-8 text-white mb-2 mx-auto" />
                    <span className="text-2xl font-bold gradient-text">
                      1M+
                    </span>
                    <span className="block text-gray-400">
                      AI Models Trained
                    </span>
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
        </div>
      </div>
    </section>
  );
};

export default About;
