import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Our Expertise', href: '#', hasDropdown: true },
    { name: 'Integrations', href: '#integrations' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-black/40 backdrop-blur-xl rounded-full border border-white/[0.08] px-6">
          <div className="flex justify-between items-center h-[52px]">
            <div className="flex items-center space-x-3">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 text-white"
                aria-label="MASH Logo"
              >
                <path d="M3 3h3v12l6-6 6 6V3h3v18h-3l-6-6-6 6H3V3z" />
              </svg>
              <span className="text-[15px] font-medium text-white">MASH</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative text-[15px] text-gray-400 hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <svg
                      className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center">
              <a
                href="#"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-black/40 hover:bg-black/60 border border-white/[0.08] text-white transition-colors text-[15px]"
              >
                <span>Get Appointement</span>
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
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-400 hover:text-white transition-colors text-[15px]"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#"
              className="block mt-4 text-center px-5 py-2.5 rounded-full bg-black/40 hover:bg-black/60 border border-white/[0.08] text-white transition-colors text-[15px]"
            >
              Get This Template
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;