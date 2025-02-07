import React from 'react';

const Logo = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-label="MASH Logo"
  >
    <path d="M3 3h3v12l6-6 6 6V3h3v18h-3l-6-6-6 6H3V3z" />
  </svg>
);

export default Logo;