import React, { useState } from 'react';
import { Bot, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Email validation with regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    // We don't need to check isSupabaseConfigured() anymore since we're using hardcoded values
    setStatus('loading');
    
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);

      if (error) {
        console.error('Supabase error:', error);
        if (error.code === '23505') { // Unique violation
          setStatus('error');
          setMessage('You are already subscribed to our newsletter');
        } else {
          throw error;
        }
      } else {
        setStatus('success');
        setMessage('Thank you for subscribing!');
        setEmail('');
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      setStatus('error');
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <footer className="bg-black pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <Bot className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold text-white">AIAutomation</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transforming businesses through intelligent automation solutions.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a key={index} href="#" className="chrome-effect p-2 rounded-full hover:bg-gray-800/50 transition-colors">
                  <Icon className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'About Us', path: '/#about' },
                { name: 'Services', path: '/#services' },
                { name: 'Case Studies', path: '/#experiences' },
                { name: 'Pricing', path: '/#pricing' },
                { name: 'Blog', path: '/#blog' },
                { name: 'Contact', path: '/contact' },
                { name: 'Privacy Policy', path: '/privacy-policy' },
                { name: 'Terms of Use', path: '/terms-of-use' },
                { name: 'Cancellation Policy', path: '/cancellation-policy' }
              ].map((item) => (
                <li key={item.name}>
                  {item.path.startsWith('/#') ? (
                    <a 
                      href={item.path} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link 
                      to={item.path} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2 text-white" />
                work@mashautomation.in
              </li>
              <li className="flex items-start text-gray-400">
                <Phone className="h-5 w-5 mr-2 text-white mt-0.5" />
                <div>
                  <div>+918178490194</div>
                  <div>+21625919997</div>
                </div>
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2 text-white" />
                Ghazela, Ariana, Tunisia
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest news and updates.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-white"
                  disabled={status === 'loading'}
                />
                {message && (
                  <p className={`mt-2 text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                    {message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-white hover:bg-gray-100 text-black px-4 py-2 rounded-full transition-colors flex items-center justify-center"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="animate-spin h-4 w-4 mr-2" />
                    Subscribing...
                  </>
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 AIAutomation. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                Contact
              </Link>
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-use" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cancellation-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cancellation Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;