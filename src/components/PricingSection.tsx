'use client';

import { useState } from 'react';

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
    name: 'Try Opti-15',
    tubes: 1,
    originalPrice: 19.95,
    salePrice: 19.95,
    savings: '',
    priceId: 'price_placeholder_single'
  },
  {
    id: 'triple',
    name: 'Most Popular',
    tubes: 3,
    originalPrice: 59.85,
    salePrice: 37.45,
    savings: 'Save £22.40',
    popular: true,
    priceId: 'price_placeholder_triple'
  },
  {
    id: 'six-pack',
    name: 'Best Value',
    tubes: 6,
    originalPrice: 119.70,
    salePrice: 59.70,
    savings: 'Save £60.00',
    priceId: 'price_placeholder_six_pack'
  }
];

export default function PricingSection() {
  const [selectedTier, setSelectedTier] = useState('triple');

  const handlePurchase = async (productKey: string) => {
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productKey }),
      });

      const { sessionId } = await response.json();

      if (!sessionId) {
        throw new Error('Failed to create checkout session');
      }

      // Redirect to Stripe Checkout
      const stripe = (await import('@/lib/stripe')).stripePromise;
      const stripeInstance = await stripe;
      
      if (stripeInstance) {
        const { error } = await stripeInstance.redirectToCheckout({ sessionId });
        if (error) {
          console.error('Stripe redirect error:', error);
          alert('Something went wrong. Please try again.');
        }
      }
    } catch (error) {
      console.error('Purchase error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="pricing" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Choose Your <span className="text-red-600">Pain Relief</span> Package
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the package that works best for you. All orders include our 90-day money-back guarantee 
            and free express shipping across the UK.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier) => (
            <div 
              key={tier.id}
              className={`relative bg-white rounded-2xl p-8 shadow-lg transition-all hover:shadow-xl ${
                tier.popular ? 'ring-4 ring-red-600 scale-105' : ''
              } ${selectedTier === tier.id ? 'ring-2 ring-red-300' : ''}`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{tier.name}</h3>
                
                <div className="mb-6">
                  <div className="text-6xl font-bold text-red-600 mb-2">
                    £{tier.salePrice}
                  </div>
                  {tier.originalPrice !== tier.salePrice && (
                    <div className="text-gray-500">
                      <span className="line-through text-xl">£{tier.originalPrice}</span>
                      <div className="text-green-600 font-bold text-lg">{tier.savings}</div>
                    </div>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-3xl font-bold text-gray-800">{tier.tubes}</span>
                    <span className="text-gray-600">tube{tier.tubes > 1 ? 's' : ''}</span>
                  </div>
                  
                  {tier.tubes === 3 && (
                    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg">
                      <strong>Buy 2, Get 1 FREE!</strong>
                    </div>
                  )}
                  
                  {tier.tubes === 6 && (
                    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg">
                      <strong>Buy 3, Get 3 FREE!</strong>
                    </div>
                  )}

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>90-Day Money-Back Guarantee</span>
                    </div>
                    
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Free Express Shipping</span>
                    </div>
                    
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Natural Ingredients</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handlePurchase(tier.id)}
                  className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all ${
                    tier.popular 
                      ? 'btn-primary' 
                      : 'bg-gray-200 text-gray-800 hover:bg-red-600 hover:text-white'
                  }`}
                >
                  Order Now
                </button>
                
                <p className="text-xs text-gray-500 mt-4">
                  Per tube: £{(tier.salePrice / tier.tubes).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Payment methods */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Secure payment powered by</p>
          <div className="flex justify-center items-center space-x-6">
            <div className="bg-white px-6 py-3 rounded-lg shadow">
              <span className="text-blue-600 font-bold text-xl">Stripe</span>
            </div>
            <div className="text-gray-400 text-2xl">•</div>
            <div className="bg-white px-6 py-3 rounded-lg shadow">
              <span className="text-gray-600 font-semibold">SSL Secured</span>
            </div>
          </div>
          
          {/* Payment icons */}
          <div className="flex justify-center items-center space-x-4 mt-6">
            <div className="text-gray-400 text-sm">We accept:</div>
            <div className="flex space-x-2">
              <div className="w-10 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">VISA</div>
              <div className="w-10 h-6 bg-red-500 rounded text-white text-xs flex items-center justify-center font-bold">MC</div>
              <div className="w-10 h-6 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">AMEX</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}