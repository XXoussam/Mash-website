import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Benefits from '../components/Benefits';
import Integration from '../components/Integration';
import Experiences from '../components/Experiences';
import Pricing from '../components/Pricing';
import Reviews from '../components/Reviews';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import BusinessStats from '../components/BusinessStats';

function Home() {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createStar = () => {
      if (!starsRef.current) return;

      const star = document.createElement('div');
      star.className = 'star';

      // Random size between 1-3px
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;

      // Random animation duration between 3-7s
      const duration = Math.random() * 4 + 3;
      star.style.setProperty('--duration', `${duration}s`);

      starsRef.current.appendChild(star);

      // Remove star after animation
      setTimeout(() => {
        if (star && star.parentNode) {
          star.remove();
        }
      }, duration * 1000);
    };

    // Create initial stars
    for (let i = 0; i < 100; i++) {
      setTimeout(createStar, Math.random() * 3000);
    }

    // Continue creating stars
    const interval = setInterval(createStar, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black relative">
      <div ref={starsRef} className="stars" />
      <Header />
      <Hero />
      <BusinessStats />
      <Services />
      <About />
      <Benefits />
      <Integration />
      <Experiences />
      <Pricing />
      <Reviews />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default Home; 