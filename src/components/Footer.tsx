import { useState } from 'react';
import { Bot, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12 md:mb-16">
          <div className="text-center sm:text-left">
            <div className="flex items-center mb-4 sm:mb-6 justify-center sm:justify-start">
              <Bot className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
              <span className="ml-2 text-lg sm:text-xl font-bold text-white">AIAutomation</span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
              Transforming businesses through intelligent automation solutions.
            </p>
            <div className="flex space-x-3 sm:space-x-4 justify-center sm:justify-start">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a key={index} href="#" className="chrome-effect p-1.5 sm:p-2 rounded-full hover:bg-gray-800/50 transition-colors">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">Quick Links</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-x-2 gap-y-3 sm:space-y-3 md:space-y-4 text-sm sm:text-base">
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

          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">Contact Us</h3>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <li className="flex flex-col sm:flex-row sm:items-center text-gray-400">
                <span className="flex items-center justify-center sm:justify-start mb-1 sm:mb-0">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-white" />
                  <span className="sm:hidden">Email:</span>
                </span>
                <span>work@mashautomation.in</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-start text-gray-400">
                <span className="flex items-center justify-center sm:justify-start mb-1 sm:mb-0">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-white sm:mt-0.5" />
                  <span className="sm:hidden">Phone:</span>
                </span>
                <div className="text-center sm:text-left">
                  <div>+918178490194</div>
                  <div>+21625919997</div>
                </div>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center text-gray-400">
                <span className="flex items-center justify-center sm:justify-start mb-1 sm:mb-0">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-white" />
                  <span className="sm:hidden">Address:</span>
                </span>
                <span>Ghazela, Ariana, Tunisia</span>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">Newsletter</h3>
            <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">
              Stay updated with our latest news and updates.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-white"
                  disabled={status === 'loading'}
                />
                {message && (
                  <p className={`mt-2 text-xs sm:text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                    {message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-white hover:bg-gray-100 text-black px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-full transition-colors flex items-center justify-center"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="animate-spin h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    <span>Subscribing...</span>
                  </>
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-5 sm:pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs sm:text-sm mb-4 md:mb-0 text-center md:text-left">
              © 2024 AIAutomation. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:space-x-6">
              <Link to="/contact" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
                Contact
              </Link>
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-use" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cancellation-policy" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
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