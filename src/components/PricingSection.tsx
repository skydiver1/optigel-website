'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PricingTier {
  id: string;
  name: string;
  tubes: number;
  originalPrice: number;
  salePrice: number;
  savings: string;
  popular?: boolean;
  priceId: string;
}

const pricingTiers: PricingTier[] = [
  {
    id: 'single',
    name: '1 - Opti-15 Gel - Single Trial',
    tubes: 1,
    originalPrice: 24.95,
    salePrice: 19.95,
    savings: 'Save £5.00',
    priceId: 'price_placeholder_single'
  },
  {
    id: 'triple',
    name: '2 - Buy 2 Get 1 FREE',
    tubes: 3,
    originalPrice: 74.85,
    salePrice: 37.45,
    savings: 'Save £37.40',
    popular: true,
    priceId: 'price_placeholder_triple'
  },
  {
    id: 'six-pack',
    name: '3 - Buy 3 Get 3 FREE',
    tubes: 6,
    originalPrice: 149.70,
    salePrice: 59.70,
    savings: 'Save £90.00',
    priceId: 'price_placeholder_six_pack'
  }
];

export default function PricingSection() {
  const [selectedTier, setSelectedTier] = useState('triple');

  const handlePurchase = (productKey: string) => {
    // Store the selected product and show the upsell section
    sessionStorage.setItem('selectedProduct', productKey);
    
    // Dispatch custom event to trigger upsell visibility
    window.dispatchEvent(new CustomEvent('productSelected', { 
      detail: { productKey } 
    }));
    
    // Small delay to allow the upsell section to render before scrolling
    setTimeout(() => {
      const upsellSection = document.getElementById('upsell');
      if (upsellSection) {
        upsellSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section id="pricing" className="bg-gradient-to-br from-red-50 to-orange-50 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-bold text-black mb-3">
            Get Opti-15 Gel Today!
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Free 1-2 Day Express UK Shipping on ALL Orders!
          </p>
          
          {/* Introductory Offer Banner - More attractive */}
          <div className="bg-gradient-to-r from-red-600 to-red-500 text-white text-center py-3 mb-12 rounded-xl shadow-lg animate-pulse">
            <span className="font-bold text-sm">🔥 INTRODUCTORY OFFER - £19.95 EACH! 🔥</span>
          </div>
        </div>

        {/* Pricing Cards - Much more attractive */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div 
              key={tier.id}
              className={`bg-white border-2 rounded-2xl p-6 text-center relative transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl ${
                tier.popular 
                  ? 'border-green-500 bg-gradient-to-b from-green-50 to-white ring-4 ring-green-200 scale-105' 
                  : 'border-gray-200 hover:border-red-300'
              }`}
            >
              {/* Popular badge - Enhanced */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                    ⭐ MOST POPULAR ⭐
                  </div>
                </div>
              )}

              {/* Savings Badge */}
              {tier.savings && (
                <div className="absolute -top-2 -right-2">
                  <div className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-bounce">
                    {tier.savings}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">{tier.name}</h3>
                
                {/* Product visualization - Enhanced */}
                <div className="relative mb-6">
                  {tier.tubes === 1 ? (
                    <div className="mx-auto mb-3 flex items-center justify-center" style={{ height: '200px' }}>
                      <Image
                        src="/01_3014.jpg"
                        alt="Opti-15 Gel Tube"
                        width={120}
                        height={200}
                        className="object-contain"
                      />
                    </div>
                  ) : tier.tubes === 3 ? (
                    <div className="mx-auto mb-3 flex items-center justify-center" style={{ height: '200px' }}>
                      <Image
                        src="/3pack.png"
                        alt="Opti-15 Gel 3-Pack"
                        width={160}
                        height={200}
                        className="object-contain"
                      />
                    </div>
                  ) : tier.tubes === 6 ? (
                    <div className="mx-auto mb-3 flex items-center justify-center" style={{ height: '200px' }}>
                      <Image
                        src="/6pack.png"
                        alt="Opti-15 Gel 6-Pack"
                        width={180}
                        height={200}
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-24 h-28 bg-gradient-to-b from-red-100 to-red-200 rounded-xl mx-auto mb-3 flex items-center justify-center shadow-md">
                      <div className="text-center">
                        <div className="text-red-600 font-bold text-xl mb-1">{tier.tubes}</div>
                        <div className="text-xs text-red-600 font-semibold">Tube{tier.tubes > 1 ? 's' : ''}</div>
                      </div>
                    </div>
                  )}
                  
                  {/* Bonus indicators */}
                  {tier.tubes === 3 && (
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold mx-auto w-fit">
                      BUY 2 GET 1 FREE!
                    </div>
                  )}
                  
                  {tier.tubes === 6 && (
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold mx-auto w-fit">
                      BUY 3 GET 3 FREE!
                    </div>
                  )}
                </div>

                {/* Pricing - Enhanced */}
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-red-600 mb-1">
                    £{tier.salePrice}
                  </div>
                  {tier.originalPrice !== tier.salePrice && (
                    <div className="space-y-1">
                      <div className="text-gray-500 line-through text-sm">
                        Was £{tier.originalPrice}
                      </div>
                      <div className="text-green-600 font-bold text-sm bg-green-100 px-2 py-1 rounded-full inline-block">
                        {tier.savings}
                      </div>
                    </div>
                  )}
                  <div className="text-xs text-gray-500 mt-2">
                    Per tube: £{(tier.salePrice / tier.tubes).toFixed(2)}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 text-xs text-gray-600 mb-6">
                  <div className="flex items-center justify-center space-x-1">
                    <span className="text-green-500">✓</span>
                    <span>90-Day Money-Back Guarantee</span>
                  </div>
                  <div className="flex items-center justify-center space-x-1">
                    <span className="text-green-500">✓</span>
                    <span>Free Express UK Shipping</span>
                  </div>
                  <div className="flex items-center justify-center space-x-1">
                    <span className="text-green-500">✓</span>
                    <span>Natural Pain Relief Formula</span>
                  </div>
                </div>
              </div>

              {/* Enhanced Order Button */}
              <button
                onClick={() => handlePurchase(tier.id)}
                className={`w-full py-4 px-4 rounded-xl font-bold text-sm transition-all transform hover:scale-105 shadow-lg ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white shadow-green-200' 
                    : 'bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white shadow-red-200'
                }`}
              >
                🛒 ORDER NOW - FAST DELIVERY
              </button>
            </div>
          ))}
        </div>

        {/* Enhanced Trust badges */}
        <div className="bg-white rounded-2xl p-6 mt-10 shadow-lg max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl">🛡️</div>
              <div className="font-bold text-sm text-gray-800">Satisfaction Guaranteed</div>
              <div className="text-xs text-gray-600">Our customers are satisfied</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">⭐</div>
              <div className="font-bold text-sm text-gray-800">Highly Rated</div>
              <div className="text-xs text-gray-600">4.4 out of 5 based on 44 reviews</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">🏆</div>
              <div className="font-bold text-sm text-gray-800">Trustpilot Verified</div>
              <div className="text-xs text-gray-600">Verified customer reviews</div>
            </div>
          </div>
        </div>

        {/* Payment Security */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-500 mb-3">🔒 Secure SSL encrypted checkout powered by Stripe</p>
          <div className="flex justify-center space-x-3">
            {/* Visa */}
            <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center shadow-sm">
              <svg width="40" height="13" viewBox="0 0 40 13" fill="none">
                <path d="M18.5 0.5L16.8 12.5H14.2L15.9 0.5H18.5Z" fill="#1A1F71"/>
                <path d="M29.2 0.8C28.7 0.6 27.8 0.4 26.6 0.4C23.9 0.4 22 2 22 4.3C22 6 23.4 6.9 24.4 7.5C25.5 8.1 25.9 8.5 25.9 9C25.9 9.8 24.9 10.2 24 10.2C22.8 10.2 22.2 10 21.3 9.6L20.9 9.4L20.5 11.9C21.1 12.2 22.2 12.4 23.4 12.4C26.3 12.4 28.1 10.8 28.1 8.4C28.1 7.1 27.3 6.1 25.5 5.4C24.6 4.9 24.1 4.5 24.1 3.9C24.1 3.4 24.7 2.9 25.9 2.9C26.8 2.9 27.5 3.1 28 3.3L28.3 3.4L28.7 1L29.2 0.8Z" fill="#1A1F71"/>
                <path d="M35.3 0.5H33.2C32.4 0.5 31.8 0.7 31.4 1.4L26.5 12.5H29.4L30 11H33.4L33.7 12.5H36.2L35.3 0.5ZM30.8 8.7L32.3 5.2L32.9 8.7H30.8Z" fill="#1A1F71"/>
                <path d="M12.1 0.5L9.6 8.9L9.3 7.4C8.8 5.8 7.3 4.1 5.6 3.2L7.8 12.5H10.8L15.1 0.5H12.1Z" fill="#1A1F71"/>
                <path d="M7.1 0.5H2.1L2 0.8C5.4 1.7 7.5 4 8.2 6.7L6.9 1.3C6.7 0.7 6.2 0.5 5.6 0.5H7.1Z" fill="#FFBC00"/>
              </svg>
            </div>
            
            {/* Mastercard */}
            <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center shadow-sm">
              <svg width="36" height="22" viewBox="0 0 36 22" fill="none">
                <circle cx="14" cy="11" r="10" fill="#EB001B"/>
                <circle cx="22" cy="11" r="10" fill="#FF5F00"/>
                <path d="M18 4.464C19.602 5.806 20.6 7.787 20.6 10C20.6 12.213 19.602 14.194 18 15.536C16.398 14.194 15.4 12.213 15.4 10C15.4 7.787 16.398 5.806 18 4.464Z" fill="#FF5F00"/>
              </svg>
            </div>
            
            {/* American Express */}
            <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center shadow-sm">
              <svg width="36" height="14" viewBox="0 0 36 14" fill="none">
                <rect width="36" height="14" fill="#006FCF" rx="2"/>
                <path d="M6.5 3.5H8.5L9 4.5L9.5 3.5H14V4.2L14.5 3.5H16.5L17 4.2V3.5H22V10.5H20V9.8L19.5 10.5H17.5L17 9.8V10.5H11.5L11.2 9.8H10.3L10 10.5H8L9.5 7L8 3.5H10L10.5 6.2L11 3.5H6.5V10.5H4.5V3.5Z" fill="white"/>
                <path d="M7.5 4.5V9.5H9L10.2 6.5V9.5H11.5V7.5H12.5V9.5H13V4.5H11L10 7L9 4.5H7.5Z" fill="#006FCF"/>
              </svg>
            </div>
            
            {/* PayPal */}
            <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center shadow-sm">
              <svg width="32" height="12" viewBox="0 0 32 12" fill="none">
                <path d="M3 2H6.5C7.9 2 9 3.1 9 4.5C9 6.2 7.6 7.5 5.9 7.5H4.8L4.5 9.5H3L3 2ZM4.8 6.2H5.8C6.8 6.2 7.5 5.5 7.5 4.5C7.5 3.5 6.8 2.8 5.8 2.8H4.8L4.8 6.2Z" fill="#003087"/>
                <path d="M10.5 2H14C15.4 2 16.5 3.1 16.5 4.5C16.5 6.2 15.1 7.5 13.4 7.5H12.3L12 9.5H10.5L10.5 2ZM12.3 6.2H13.3C14.3 6.2 15 5.5 15 4.5C15 3.5 14.3 2.8 13.3 2.8H12.3L12.3 6.2Z" fill="#0070BA"/>
                <path d="M18 2.2C18.5 2.1 19.2 2 20 2C21.2 2 22 2.3 22.5 2.8C23 3.3 23.2 4 23.2 4.8C23.2 6.8 21.8 8 19.8 8C19.4 8 19.1 8 18.9 7.9L18.6 9.5H17.1L18 2.2ZM18.5 6.8C18.7 6.9 19 6.9 19.3 6.9C20.5 6.9 21.3 6.2 21.3 5.1C21.3 4.4 20.8 3.9 19.9 3.9C19.6 3.9 19.3 3.9 19.1 4L18.5 6.8Z" fill="#0070BA"/>
                <path d="M24 2.2C24.5 2.1 25.2 2 26 2C27.2 2 28 2.3 28.5 2.8C29 3.3 29.2 4 29.2 4.8C29.2 6.8 27.8 8 25.8 8C25.4 8 25.1 8 24.9 7.9L24.6 9.5H23.1L24 2.2ZM24.5 6.8C24.7 6.9 25 6.9 25.3 6.9C26.5 6.9 27.3 6.2 27.3 5.1C27.3 4.4 26.8 3.9 25.9 3.9C25.6 3.9 25.3 3.9 25.1 4L24.5 6.8Z" fill="#0070BA"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}