'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
            <div className="flex flex-col items-center flex-grow">
              <Link href="/" className="flex items-center" onClick={closeMenu}>
                <span className="text-3xl font-bold text-black">Opti-15</span>
                <span className="text-3xl font-bold text-red-600 ml-1">Gel</span>
              </Link>
              <span className="text-sm text-gray-600 mt-1">for tissue and joint massage</span>
            </div>

            {/* Hamburger Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`block w-5 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                  <span className={`block w-5 h-0.5 bg-current mt-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block w-5 h-0.5 bg-current mt-1 transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </div>
              </button>
            </div>

            {/* Desktop Navigation - Hidden for now, can be added later */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </Link>
              <Link href="/guarantee" className="text-gray-600 hover:text-gray-900 transition-colors">
                Guarantee
              </Link>
              <Link href="/shipping" className="text-gray-600 hover:text-gray-900 transition-colors">
                Shipping
              </Link>
            </nav>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <nav className="pt-4 pb-2 border-t border-gray-200 mt-4">
              <div className="flex flex-col space-y-3">
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900 transition-colors py-2 px-4 hover:bg-gray-50 rounded"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
                <Link
                  href="/guarantee"
                  className="text-gray-600 hover:text-gray-900 transition-colors py-2 px-4 hover:bg-gray-50 rounded"
                  onClick={closeMenu}
                >
                  Guarantee
                </Link>
                <Link
                  href="/shipping"
                  className="text-gray-600 hover:text-gray-900 transition-colors py-2 px-4 hover:bg-gray-50 rounded"
                  onClick={closeMenu}
                >
                  Shipping
                </Link>
                <Link
                  href="/returns"
                  className="text-gray-600 hover:text-gray-900 transition-colors py-2 px-4 hover:bg-gray-50 rounded"
                  onClick={closeMenu}
                >
                  Returns
                </Link>
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-gray-900 transition-colors py-2 px-4 hover:bg-gray-50 rounded"
                  onClick={closeMenu}
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-gray-900 transition-colors py-2 px-4 hover:bg-gray-50 rounded"
                  onClick={closeMenu}
                >
                  Terms
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}