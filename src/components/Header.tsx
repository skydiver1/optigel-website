'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky-header">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-black">
              Opti-15 <span className="text-red-600">Gel</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-700 hover:text-red-600 transition-colors">
              About
            </Link>
            <Link href="#ingredients" className="text-gray-700 hover:text-red-600 transition-colors">
              Ingredients
            </Link>
            <Link href="#reviews" className="text-gray-700 hover:text-red-600 transition-colors">
              Reviews
            </Link>
            <Link href="#faq" className="text-gray-700 hover:text-red-600 transition-colors">
              FAQ
            </Link>
          </nav>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Country selector */}
            <div className="hidden md:flex items-center space-x-2">
              <span className="text-sm text-gray-600">🇬🇧 UK</span>
            </div>
            
            {/* Cart */}
            <button className="flex items-center space-x-1 text-gray-700 hover:text-red-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6H19" />
              </svg>
              <span className="text-sm">Cart (0)</span>
            </button>

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
              <Link href="#about" className="text-gray-700 hover:text-red-600 transition-colors">
                About
              </Link>
              <Link href="#ingredients" className="text-gray-700 hover:text-red-600 transition-colors">
                Ingredients
              </Link>
              <Link href="#reviews" className="text-gray-700 hover:text-red-600 transition-colors">
                Reviews
              </Link>
              <Link href="#faq" className="text-gray-700 hover:text-red-600 transition-colors">
                FAQ
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}