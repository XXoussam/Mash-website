import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navItems = [
    { name: 'Our Services', href: isHomePage ? '#services' : '/#services' },
    { name: 'About', href: isHomePage ? '#about' : '/#about' },
    { name: 'Experiences', href: isHomePage ? '#experiences' : '/#experiences' },
    { name: 'Pricing', href: isHomePage ? '#pricing' : '/#pricing' },
    { name: 'Contact', href: '/contact', isPage: true }
  ];

  return (
    <header className="fixed w-full z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-black/40 backdrop-blur-xl rounded-full border border-white/[0.08] px-6">
          <div className="flex justify-between items-center h-[52px]">
            <div className="flex items-center space-x-3">
              <Link to="/">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6 text-white"
                  aria-label="MASH Logo"
                >
                  <path d="M3 3h3v12l6-6 6 6V3h3v18h-3l-6-6-6 6H3V3z" />
                </svg>
              </Link>
              <Link to="/" className="text-[15px] font-medium text-white">MASH</Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                item.isPage ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="group relative text-[15px] text-gray-400 hover:text-white transition-colors flex items-center space-x-1"
                  >
                    <span>{item.name}</span>
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group relative text-[15px] text-gray-400 hover:text-white transition-colors flex items-center space-x-1"
                  >
                    <span>{item.name}</span>
                  </a>
                )
              ))}
            </nav>

            <div className="hidden md:flex items-center">
              <a
                href="https://cal.com/mash-automation/ai-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-black/40 hover:bg-black/60 border border-white/[0.08] text-white transition-colors text-[15px]"
              >
                <span>Get Appointment</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 p-4 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/[0.08]">
            {navItems.map((item) => (
              item.isPage ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block py-2 text-gray-400 hover:text-white transition-colors text-[15px]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-gray-400 hover:text-white transition-colors text-[15px]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              )
            ))}
            <div className="border-t border-gray-800 my-2 pt-2">
              <Link 
                to="/privacy-policy"
                className="block py-2 text-gray-400 hover:text-white transition-colors text-[15px]"
                onClick={() => setIsMenuOpen(false)}
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-use"
                className="block py-2 text-gray-400 hover:text-white transition-colors text-[15px]"
                onClick={() => setIsMenuOpen(false)}
              >
                Terms of Use
              </Link>
              <Link 
                to="/cancellation-policy"
                className="block py-2 text-gray-400 hover:text-white transition-colors text-[15px]"
                onClick={() => setIsMenuOpen(false)}
              >
                Cancellation Policy
              </Link>
            </div>
            <a
              href="https://cal.com/mash-automation/ai-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-center px-5 py-2.5 rounded-full bg-black/40 hover:bg-black/60 border border-white/[0.08] text-white transition-colors text-[15px]"
            >
              Get Appointment
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;