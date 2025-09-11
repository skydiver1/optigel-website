'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top red bar - exactly like ArthroGel */}
      <div className="bg-red-600 text-white text-center py-2 text-sm">
        <div className="container mx-auto px-4">
          <span>🚚 Free 1-2 Day Express UK Shipping on ALL Orders!</span>
        </div>
      </div>

      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - exactly like ArthroGel */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-3xl font-bold text-black">Opti-15</span>
                <span className="text-3xl font-bold text-red-600 ml-1">Gel</span>
              </Link>
            </div>

            {/* Right side items - matching ArthroGel exactly */}
            <div className="flex items-center space-x-6">
              {/* Mobile menu button */}
              <button 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col space-y-3">
                {/* Mobile menu content can be added here if needed */}
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}