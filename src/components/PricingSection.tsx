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
    id: 'small',
    name: 'Small Gel - Trial Size - 50ml',
    tubes: 0.5, // Half size tube
    originalPrice: 14.95,
    salePrice: 9.95,
    savings: 'Save £5.00',
    priceId: 'price_1RRBBFJIj1H8x0NCozdnTgeV'
  },
  {
    id: 'single',
    name: 'Opti-15 Gel - Single Tube - 200ml',
    tubes: 1,
    originalPrice: 24.95,
    salePrice: 19.95,
    savings: 'Save £5.00',
    priceId: 'price_1S68ZEJIj1H8x0NCn7eWEeIs'
  },
  {
    id: 'triple',
    name: 'Buy 2 Get 1 FREE',
    tubes: 3,
    originalPrice: 74.85,
    salePrice: 37.45,
    savings: 'Save £37.40',
    popular: true,
    priceId: 'price_1S68XWJIj1H8x0NCUPGAR5Yg'
  },
  {
    id: 'six-pack',
    name: 'Buy 3 Get 3 FREE',
    tubes: 6,
    originalPrice: 149.70,
    salePrice: 59.70,
    savings: 'Save £90.00',
    priceId: 'price_1S68YiJIj1H8x0NC92OKKebk'
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div 
              key={tier.id}
              className={`bg-white border-2 rounded-2xl p-6 text-center relative transform hover:scale-102 transition-all duration-300 shadow-lg hover:shadow-xl ${
                tier.popular 
                  ? 'border-green-500 bg-gradient-to-b from-green-50 to-white ring-4 ring-green-200' 
                  : 'border-gray-200 hover:border-red-300'
              }`}
            >
              {/* Popular badge - Enhanced */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-2 rounded-full text-xs font-bold shadow-lg">
                    ⭐MOST POPULAR⭐
                  </div>
                </div>
              )}

              {/* Savings Badge */}
              {tier.savings && (
                <div className="absolute -top-2 -right-4">
                  <div className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-bounce">
                    {tier.savings}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">{tier.name}</h3>
                
                {/* Product visualization - Enhanced */}
                <div className="relative mb-6">
                  {tier.tubes === 0.5 ? (
                    <div className="mx-auto mb-3 flex items-center justify-center w-40 h-40">
                      <div className="w-40 h-40 rounded-full bg-white shadow-md border-2 border-gray-300 overflow-hidden flex items-center justify-center">
                        <Image
                          src="/brand.png"
                          alt="Opti-15 Small Gel"
                          width={100}
                          height={120}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ) : tier.tubes === 1 ? (
                    <div className="mx-auto mb-3 flex items-center justify-center w-40 h-40">
                      <div className="w-40 h-40 rounded-full bg-white shadow-md border-2 border-gray-300 overflow-hidden flex items-center justify-center">
                        <Image
                          src="/01_3014.jpg"
                          alt="Opti-15 Gel Tube"
                          width={120}
                          height={150}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ) : tier.tubes === 3 ? (
                    <div className="mx-auto mb-3 flex items-center justify-center w-40 h-40">
                      <div className="w-40 h-40 rounded-full bg-white shadow-md border-2 border-gray-300 overflow-hidden flex items-center justify-center">
                        <Image
                          src="/3pack.png"
                          alt="Opti-15 Gel 3-Pack"
                          width={120}
                          height={150}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ) : tier.tubes === 6 ? (
                    <div className="mx-auto mb-3 flex items-center justify-center w-40 h-40">
                      <div className="w-40 h-40 rounded-full bg-white shadow-md border-2 border-gray-300 overflow-hidden flex items-center justify-center">
                        <Image
                          src="/6pack.png"
                          alt="Opti-15 Gel 6-Pack"
                          width={130}
                          height={150}
                          className="object-contain"
                        />
                      </div>
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
                    £{tier.salePrice.toFixed(2)}
                  </div>
                  {tier.originalPrice !== tier.salePrice && (
                    <div className="space-y-1">
                      <div className="text-gray-500 line-through text-sm">
                        Was £{tier.originalPrice.toFixed(2)}
                      </div>
                      <div className="text-green-600 font-bold text-sm bg-green-100 px-2 py-1 rounded-full inline-block">
                        {tier.savings}
                      </div>
                    </div>
                  )}
                  <div className="text-xs text-gray-500 mt-2">
                    {tier.tubes === 0.5 ? 'Trial sized' : `Per tube: £${(tier.salePrice / tier.tubes).toFixed(2)}`}
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
            <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
              <Image
                src="/visa.png"
                alt="Visa"
                width={40}
                height={25}
                className="object-contain"
              />
            </div>
            
            {/* Mastercard */}
            <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
              <Image
                src="/master.png"
                alt="Mastercard"
                width={40}
                height={25}
                className="object-contain"
              />
            </div>
            
            {/* PayPal */}
            <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
              <Image
                src="/paypal.png"
                alt="PayPal"
                width={40}
                height={25}
                className="object-contain"
              />
            </div>
            
            {/* Apple Pay */}
            <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
              <Image
                src="/applepay.png"
                alt="Apple Pay"
                width={40}
                height={25}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}